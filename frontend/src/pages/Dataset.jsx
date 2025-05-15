import React from "react";

const Dataset = () => {
  return (
    <div className="min-h-screen py-4 px-6 md:px-16">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">📁 Dataset Overview</h1>
        <p className="text-gray-700 mb-4">
          This dataset was collected from hospitals in Bangladesh to aid in the diagnosis of various lung diseases including COVID-19, Pneumonia, and Lung Opacity.
          It contains a total of <span className="font-semibold">4,350 X-ray images</span> categorized into four classes. The dataset played a crucial role in training our deep learning models.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-100 p-4 rounded-lg">
            <h2 className="font-semibold text-lg">🫁 Normal</h2>
            <p className="text-gray-600">1200 images of healthy lungs used as reference.</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg">
            <h2 className="font-semibold text-lg">🌫️ Lung Opacity</h2>
            <p className="text-gray-600">1100 images showing opacities for deeper diagnosis.</p>
          </div>
          <div className="bg-red-100 p-4 rounded-lg">
            <h2 className="font-semibold text-lg">🦠 COVID</h2>
            <p className="text-gray-600">1050 images from confirmed COVID-19 cases.</p>
          </div>
          <div className="bg-purple-100 p-4 rounded-lg">
            <h2 className="font-semibold text-lg">💉 Viral Pneumonia</h2>
            <p className="text-gray-600">1000 X-rays related to viral pneumonia cases.</p>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://drive.google.com/drive/folders/1BWtWOWgXu3VjAcvDvMt5h2xeoKeq2THK?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-full shadow"
          >
            ⬇️ Download Dataset
          </a>
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 mt-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">📁 Dataset Overview</h1>
        <p className="text-gray-700 mb-4">
          This Kaggle-hosted dataset was compiled through collaboration among institutions from Qatar, Bangladesh, Pakistan, and Malaysia.
          It contains a total of <span className="font-semibold">21,165 chest X-ray images</span> across four classes.
          We are providing it here for users to explore and use for testing or experimentation.
          <span className="font-semibold text-red-500"> Note: This is not the dataset used to train our model.</span> Our deep learning model was trained on the Mendeley Chest X-ray dataset.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-100 p-4 rounded-lg">
            <h2 className="font-semibold text-lg">🫁 Normal</h2>
            <p className="text-gray-600">10,192 images of healthy lungs used as reference.</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg">
            <h2 className="font-semibold text-lg">🌫️ Lung Opacity</h2>
            <p className="text-gray-600">6,012 images showing opacities for deeper diagnosis.</p>
          </div>
          <div className="bg-red-100 p-4 rounded-lg">
            <h2 className="font-semibold text-lg">🦠 COVID-19</h2>
            <p className="text-gray-600">3,616 X-ray images from confirmed COVID-19 cases.</p>
          </div>
          <div className="bg-purple-100 p-4 rounded-lg">
            <h2 className="font-semibold text-lg">💉 Viral Pneumonia</h2>
            <p className="text-gray-600">1,345 chest X-rays related to viral pneumonia.</p>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://drive.google.com/drive/folders/1lWQaSxX_rmgOwANFgY6YfHDoCKYYhmkp?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-full shadow"
          >
            ⬇️ Download Dataset
          </a>
        </div>
      </div>

    </div>


  );
};

export default Dataset;
