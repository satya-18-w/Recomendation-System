import os
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import pathlib
import seaborn as sns
import joblib
from sklearn.preprocessing import StandardScaler,MinMaxScaler,OneHotEncoder
from category_encoders.count import CountEncoder
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.compose import ColumnTransformer
from sklearn.metrics.pairwise import cosine_similarity
from scipy.sparse import save_npz
from src.data.cleaning import data_for_content_filtering
import sys




# cols to transform
frequency_enode_cols = ['year']
ohe_cols = ['artist',"time_signature","key"]
tfidf_col = 'tags'
standard_scale_cols = ["duration_ms","loudness","tempo"]
min_max_scale_cols = ["danceability","energy","speechiness","acousticness","instrumentalness","liveness","valence"]



def train_transformer(data,home_dir):
    """
    Trains a ColumnTransformer on the provided data and saves the transformer to a file.
    The ColumnTransformer applies the following transformations:
    - Frequency Encoding using CountEncoder on specified columns.
    - One-Hot Encoding using OneHotEncoder on specified columns.
    - TF-IDF Vectorization using TfidfVectorizer on a specified column.
    - Standard Scaling using StandardScaler on specified columns.
    - Min-Max Scaling using MinMaxScaler on specified columns.
    Parameters:
    data (pd.DataFrame): The input data to be transformed.
    Returns:
    None
    Saves:
    transformer.joblib: The trained ColumnTransformer object.
    """
    # transformer 
    transformer = ColumnTransformer(transformers=[
        ("frequency_encode", CountEncoder(normalize=True,return_df=True), frequency_enode_cols),
        ("ohe", OneHotEncoder(handle_unknown="ignore"), ohe_cols),
        ("tfidf", TfidfVectorizer(max_features=85), tfidf_col),
        ("standard_scale", StandardScaler(), standard_scale_cols),
        ("min_max_scale", MinMaxScaler(), min_max_scale_cols)
    ],remainder='passthrough',n_jobs=-1,force_int_remainder_cols=False)

    # fit the transformer
    transformer.fit(data)

    # save the transformer
    joblib.dump(transformer, home_dir.as_posix()+"/models/transformer.joblib")
    
    
    
def transform_data(data,home_dir):
    """
    Transforms the input data using a pre-trained transformer.
    Args:
        data (array-like): The data to be transformed.
    Returns:
        array-like: The transformed data.
    """
    # load the transformer
    transformer = joblib.load(home_dir.as_posix()+"/models/transformer.joblib")
    
    # transform the data
    transformed_data = transformer.transform(data)
    
    return transformed_data


def save_the_transformered_data(transformed_data,save_path):
    save_npz(save_path,transformed_data)
    
    
    
def content_recomendation(song_name,artist_name,song_data,transformed_data,k):
    song_name=song_name.lower()
    artist_name=artist_name.lower()
    input_index=song_data[(song_data["name"] == song_name) & (song_data["artist"] == artist_name)].index[0]
    input_vector=transformed_data[input_index].reshape(1,-1)
    
    similarity=cosine_similarity(input_vector,transform_data)
   



    
    # get the top  recomended index
    top_k_index=np.argsort(similarity.ravel())[::-1][:k]
    recomended_song=song_data.iloc[top_k_index]
    return recomended_song[["name","artist","spotify_preview_url"]].reset_index(drop=True)




def main():
    curr_dir=pathlib.Path(__file__)
    home_dir=curr_dir.parent.parent.parent
    file_path=sys.argv[1]
    data_path=home_dir.as_posix()+file_path
    song_df=pd.read_csv(data_path)
    song_data=data_for_content_filtering(song_df)
    train_transformer(song_data,home_dir)
    npz_path=home_dir.as_posix()+"/data/processed/transformed.npz"
    transformed_data=transform_data(song_data,home_dir)
    save_the_transformered_data(transformed_data,npz_path)
    
    
    
    
if __name__ == "__main__":
    main()
    
    
