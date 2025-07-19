import numpy as np
import pandas as pd
import dask.dataframe as dd
from scipy.sparse import csr_matrix,save_npz
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.preprocessing import StandardScaler,MinMaxScaler,OneHotEncoder
import dask.dataframe as dd
import pathlib



def save_sparse_matrix(matrix : csr_matrix,file_path):
    save_npz(file_path,matrix)

def filtered_song_data(song_data,unique_track_ids,home_dir):
    # Filter the song data to only include the unique track IDs
    filtered_data=song_data[song_data["track_id"].isin(unique_track_ids)]
    filtered_path=home_dir.as_posix()+"/data/filtered"
    pathlib.Path(filtered_path).mkdir(exist_ok=True)
    filtered_data.to_csv(filtered_path+"/colab_filtered_data.csv",index=False)
    
    
    
    
# def create_interaction_matrix(user_data: dd.DataFrame,track_ids,save_matrix_path ):
#     df=user_data.copy()
#     df["playcount"]=df["playcount"].astype(np.float64)
#     df=df.categorize(columns=["user_id","track_id"])
    
#     df["user_id"] = df["user_id"].cat.as_known()
#     df["track_id"] = df["track_id"].cat.as_known()
#     # Convert the user_id and track_id to numeric indices
#     user_mapping=df["user_id"].cat.codes
#     track_mapping=df["track_id"].cat.codes
    
#     track_id=df["track_id"].cat.categories.values
#     df["user_idx"]=user_mapping
#     df["track_idx"]=track_mapping
    
    
    
#     # Create the interaction matrix
#     interaction_matrix =df.groupby(["track_idx","user_idx"])["playcount"].sum().reset_index()
    
#     # compute the matrix
#     interaction_matrix = interaction_matrix.compute()
    
#     # get the indices to form sparse matrix
#     row_indices = interaction_matrix['track_idx']
#     col_indices = interaction_matrix['user_idx']
#     values = interaction_matrix['playcount']
    
#     # get the shape of sparse matrix
#     n_tracks = row_indices.nunique()
#     n_users = col_indices.nunique()

#     # create the sparse matrix
#     interaction_matrix = csr_matrix((values, (row_indices, col_indices)), shape=(n_tracks, n_users))
    
#     # save the sparse matrix
#     save_sparse_matrix(interaction_matrix, save_matrix_path)



def create_interaction_matrix(user_data,track_id_save_path, save_matrix_path):
    df = user_data.copy()
    
    # Ensure playcount is float64
    df["playcount"] = df["playcount"].astype(np.float64)
    
    # Convert to category safely without .categorize()
    df["user_id"] = df["user_id"].astype("category")
    df["track_id"] = df["track_id"].astype("category")
    df["user_id"] = df["user_id"].cat.as_known()
    df["track_id"] = df["track_id"].cat.as_known()
    # Extract codes (Dask handles this if categories are known)
    df["user_idx"] = df["user_id"].cat.codes
    df["track_idx"] = df["track_id"].cat.codes
    track_ids=df["track_id"].cat.categories.values
    np.save(track_id_save_path,track_ids,allow_pickle=True)
    # Group by and sum playcounts (lazy Dask op)
    interaction_ddf = df.groupby(["track_idx", "user_idx"])["playcount"].sum().reset_index()

    # Now compute (eager execution)
    interaction_df = interaction_ddf.compute()

    # Prepare CSR matrix inputs
    row_indices = interaction_df["track_idx"].values
    col_indices = interaction_df["user_idx"].values
    values = interaction_df["playcount"].values

    # Define shape
    n_tracks = df["track_idx"].max().compute() + 1
    n_users = df["user_idx"].max().compute() + 1

    # Create sparse matrix
    interaction_matrix = csr_matrix((values, (row_indices, col_indices)), shape=(n_tracks, n_users))

    # Save the matrix
    save_sparse_matrix(interaction_matrix, save_matrix_path)



def collaborative_recommendation(song_name,artist_name,track_ids,songs_data,interaction_matrix,k=5):
    # lowercase the song name
    song_name = song_name.lower()
    
    # lowercase the artist name
    artist_name = artist_name.lower()
    
    # fetch the row from songs data
    song_row = songs_data.loc[(songs_data["name"] == song_name) & (songs_data["artist"] == artist_name)]
   
    # track_id of input song
    input_track_id = song_row['track_id'].values.item()
  
    # index value of track_id
    ind = np.where(track_ids == input_track_id)[0].item()
    
    # fetch the input vector
    input_array = interaction_matrix[ind]
    
    # get similarity scores
    similarity_scores = cosine_similarity(input_array, interaction_matrix)
    
    # index values of recommendations
    recommendation_indices = np.argsort(similarity_scores.ravel())[-k-1:][::-1]
    
    # get top k recommendations
    recommendation_track_ids = track_ids[recommendation_indices]
    
    # get top scores
    top_scores = np.sort(similarity_scores.ravel())[-k-1:][::-1]
    
    # get the songs from data and print
    scores_df = pd.DataFrame({"track_id":recommendation_track_ids.tolist(),
                            "score":top_scores})
    
    top_k_songs = (
                    songs_data
                    .loc[songs_data["track_id"].isin(recommendation_track_ids)]
                    .merge(scores_df,on="track_id")
                    .sort_values(by="score",ascending=False)
                    .drop(columns=["track_id","score"])
                    .reset_index(drop=True)
                    )
    
    return top_k_songs









def main():
    
    curr_path=pathlib.Path(__file__)
    
    home_dir=curr_path.parent.parent.parent
    song_data_path=home_dir.as_posix() + "/data/processed/cleaned_song_data.csv"
    user_data_path=home_dir.as_posix()+"/data/raw/user_data.csv"
    user_data=dd.read_csv(user_data_path)
    
    
    # Get the unique track ids
    
    unique_track_id=user_data["track_id"].unique().compute()
    unique_track_ids=unique_track_id.tolist()
    song_data=pd.read_csv(song_data_path)
    filtered_song_data(song_data,unique_track_ids,home_dir)
    interaction_matrix_path=home_dir.as_posix()+"/data/processed/interaction_matrix.npz"
    track_id_save_path=home_dir.as_posix()+"/data/filtered/track_ids.npy"
    
    
    create_interaction_matrix(user_data,track_id_save_path,interaction_matrix_path)
    
    
    
if __name__ == "__main__":
    main()