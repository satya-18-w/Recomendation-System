import numpy as np
import pandas as pd
import joblib
import pathlib
from src.data.cleaning import data_for_content_filtering
from scipy.sparse import save_npz


def main():
    curr_path=pathlib.Path(__file__)
    
    home_dir=curr_path.parent.parent.parent
    filter_data_path=home_dir.as_posix()+"/data/filtered/colab_filtered_data.csv"
    filter_data=pd.read_csv(filter_data_path)
    transformer=joblib.load("transformer.joblib")
    transformed_data=transformer.transform(filter_data)
    save_npz(home_dir.as_posix()+"/data/filtered/transform_hybrid_data.npz",transformed_data)
    
    
    
    
if __name__ == "__main__":
    main()
    