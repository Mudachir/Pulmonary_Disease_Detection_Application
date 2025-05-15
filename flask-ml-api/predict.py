from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import load_img, img_to_array
import numpy as np
import os

app = Flask(__name__)
model_path = "best_model.keras"

if not os.path.exists(model_path):
    print("Downloading model from Google Drive...")
    os.system("pip install gdown")
    os.system("gdown --id 1K7F2H-U5yazwSLV5hwYtI5pFrL9capAQ")

model = load_model(model_path)
labels = ['COVID-19', 'Lung Opacity', 'Normal', 'Viral Pneumonia']

@app.route("/predict", methods=["POST"])
def predict():
    if "image" not in request.files:
        return jsonify({"error": "No image uploaded"}), 400

    image_file = request.files["image"]
    image_path = "temp.jpg"
    image_file.save(image_path)

    img = load_img(image_path, target_size=(224, 224))
    img = img_to_array(img) / 255.0
    img = np.expand_dims(img, axis=0)
    prediction = model.predict(img)[0]
    result = labels[np.argmax(prediction)]

    os.remove(image_path)
    return jsonify({"prediction": result})

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
