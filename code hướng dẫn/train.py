import pandas as pd # thư viện xử lý file
import numpy as np # thư viện tính toán numpy
import os #thư viện xử lý phía hệ điều hành
# các thư viện con hỗ trợ trong thư viện sklearn
from sklearn.model_selection import train_test_split
from sklearn import svm # gọi thuật toán Support Vector Machine
from sklearn import neighbors # thuật toán K-nearest neighbors
from sklearn import datasets, linear_model # dataset để xử lý file, linear là thuật toán Linear Regression
from sklearn import preprocessing# thư viện tiền xử lý, gọi cho đủ để nó xử lý core
#thư viện matplotlib để vẽ hình
import matplotlib.pyplot as plt
import pickle
from sklearn.metrics import mean_squared_error, r2_score # cái này là hàm lost function sigma((y_test-y_tran)^2)/n

xlsFile = pd.read_excel('data.xlsx')
xlsMat =  xlsFile.values

# load data from xlsx file
tmp1 = xlsMat[:, 9:64]
tmp1 = tmp1.astype(np.float32)
label = xlsMat[:, 64:65]
label = label.astype(np.float32)
# -----------------------


feature = tmp1
# chia bộ data trong file excel ra làm 2 bộ train và test
X_train, X_test, y_train, y_test = train_test_split(feature, label, test_size=0.2)
# gọi hàm tính toán
regr = linear_model.LinearRegression()

# regr ở đây chính là model, mình gọi '.fit' để
# sử dụng phương thưc tính toán ra tham số của model
regr.fit(X_train, y_train)

#làm việc với file
filename = 'finalized_model.sav'
# sử dụng pickle để ghi cái model đã train được ra filename
pickle.dump(regr, open(filename, 'wb'))

# đoạn này về sau chỉ là đoạn in ra các kết quả cơ bản đê xem model đã train đúng chưa
y_pred = regr.predict(X_test)

print(y_pred - y_test)
print('Coefficients: \n', regr.coef_)
print("Mean squared error: %.2f"
      % mean_squared_error(y_test, y_pred))

