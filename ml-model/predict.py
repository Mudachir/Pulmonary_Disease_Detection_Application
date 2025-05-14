import os
import sys
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import load_img, img_to_array


os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3' 

# Load model
model = load_model("E:/Pulmonary_Disease_Detection_Application/ml-model/best_model.keras")

labels = ['COVID-19', 'Lung Opacity', 'Normal', 'Viral Pneumonia']

def predict_image(img_path):
    image = load_img(img_path, target_size=(224, 224))
    image = img_to_array(image) / 255.0
    image = np.expand_dims(image, axis=0)
    prediction = model.predict(image)[0]
    class_idx = np.argmax(prediction)
    return labels[class_idx]

if __name__ == "__main__":
    img_path = sys.argv[1]
    result = predict_image(img_path)
    print(result)  
