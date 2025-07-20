import requests
import time

app_url="http://localhost:8000"
def get_status(url):
    response=requests.get(url)
    status_code=response.status_code
    return status_code

def test_app_loading():
    time.sleep(30)
    status_code=get_status(app_url)
    assert status_code == 200, "Unable to load streamlit app"
    print("Streamlit app run succesfully")
    