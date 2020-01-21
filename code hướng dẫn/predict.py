# Importing flask module in the project is mandatory
# An object of Flask class is our WSGI application.
from flask import Flask, request
from flask_cors import CORS
import pandas as pd
import numpy as np
import os
from sklearn.model_selection import train_test_split
from sklearn import svm
from sklearn import neighbors
from sklearn import datasets, linear_model
from sklearn import preprocessing
from sklearn.metrics import mean_squared_error, r2_score
import pickle
import json
from pymongo import MongoClient

client = MongoClient('localhost', 27017)
db = client['LAOCAI']
collection_currency = db['admin']
# ở file train đã ghi model ra file finalized_model.sav,
# ở đây mình dùng biến regr để gọi ra model đấy
regr = linear_model.LinearRegression()
filename = 'finalized_model.sav'
regr = pickle.load(open(filename, 'rb'))

# Flask constructor takes the name of
# current module (__name__) as argument.

app = Flask(__name__)
CORS(app)


# The route() function of the Flask class is a decorator,
# which tells the application which URL should call
# the associated function.

@app.route('/survey', methods=['GET', 'POST'])
# ‘/’ URL is bound with hello_world() function.

def submit_survey():
    arr = []
    collection_currency.insert_one(request.json)
    print(request.json)
    # sử dụng biến tmp để gọi các ý kiến được khảo sát trên sever về
    tmp = request.json.get("ykien")
    # print(tmp)
    for id in range(1, 56):
        arr.append(int(tmp[str(id)]))
    # mảng arr để lưu các ý kiến sau khi đổi ra kiểu string
    # sau đó tiếp tục đổi ra kiểu số numpy để thư viện tính toán numpy hiểu
    arr = np.array(arr)
    # print(arr.shape)
    # thêm chiều cho i để đúng định dạng input
    y = np.expand_dims(arr, axis=0)
    # print(y.shape)
    #predict ra ret là kết quả dự đoán
    ret = regr.predict(y)
    # ret so sánh để phân loại
    if (ret <= 2.1):
        return '1'
    if (ret <= 2.8):
        return '2'
    if (ret <= 3.5):
        return '3'
    if (ret <= 4.2):
        return '4'
    return '5'


# main driver function
if __name__ == '__main__':
    # run() method of Flask class runs the application
    # on the local development server.
    app.run(host='0.0.0.0', port=5000)

