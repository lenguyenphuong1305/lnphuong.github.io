import pandas as pd
import numpy as np
import os
from sklearn.model_selection import train_test_split
# from sklearn import svm
# from sklearn import neighbors
# from sklearn import datasets, linear_model
# from sklearn import preprocessing
#from sklearn import datasets, linear_model
# thay đổi cách gọi thư viện
from sklearn.metrics import svm,neighbors,datasets, linear_model,preprocessing
import matplotlib.pyplot as plt# thư viện này để vẽ hình, trong code không có đoạn nào vẽ nên có thể xóa
import pickle


xlsFile = pd.read_excel('data.xlsx')
xlsMat =  xlsFile.values

# load data from xlsx file
tmp1 = xlsMat[:, 9:64]
tmp1 = tmp1.astype(np.float32)
label = xlsMat[:, 64:65]
label = label.astype(np.float32)
# -----------------------


feature = tmp1

X_train, X_test, y_train, y_test = train_test_split(feature, label, test_size=0.2)
regr = linear_model.LinearRegression()


regr.fit(X_train, y_train)

filename = 'finalized_model.sav'
pickle.dump(regr, open(filename, 'wb'))
y_pred = regr.predict(X_test)

print(y_pred - y_test)
print('Coefficients: \n', regr.coef_)
print("Mean squared error: %.2f"
      % mean_squared_error(y_test, y_pred))

