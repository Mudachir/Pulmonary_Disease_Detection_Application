
import { useState } from 'react';

function CheckDisease() {
    const [selectedModel, setSelectedModel] = useState('');
    const [image, setImage] = useState(null);
    const [prediction, setPrediction] = useState(null);

    const handleModelChange = (e) => {
        setSelectedModel(e.target.value);
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setImage(URL.createObjectURL(file));
        setPrediction(null);
    };

  const handleCheck = async () => {
    if (selectedModel && image) {
        const fileInput = document.querySelector('input[type="file"]');
        const formData = new FormData();
        formData.append("image", fileInput.files[0]);

        try {
            const response = await fetch("http://localhost:8080/api/predict", {
                method: "POST",
                body: formData
            });

            if (!response.ok) {
                throw new Error("Prediction failed");
            }

            const result = await response.text(); 
            setPrediction(`Prediction: ${result}`);
        } catch (error) {
            console.error("Prediction error:", error);
            setPrediction("❌ Error occurred during prediction.");
        }
    } else {
        alert("Please select a model and upload an image.");
    }
};


    return (
        <div className="min-h-screen  py-10 px-4">
            <div className="max-w-6xl mx-auto bg-gray-300 p-8 rounded-xl shadow-md grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h1 className="text-2xl font-bold mb-4">🧪 Check Lung Condition</h1>

                    <div className="mb-4">
                        <label className="block font-medium text-gray-700 mb-1">Select Model</label>
                        <select
                            value={selectedModel}
                            onChange={handleModelChange}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                        >
                            <option value="">-- Choose Model (.h5) --</option>
                            <option value="model1">Model 1 - VGG19</option>
                            
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block font-medium text-gray-700 mb-1">Insert X-ray Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="w-full"
                        />
                    </div>

                    <button
                        onClick={handleCheck}
                        className="mt-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-2 rounded-lg"
                    >
                        ✅ Check Now
                    </button>
                </div>

                <div className="flex flex-col justify-center items-center text-center border-2 border-dashed rounded-lg p-6 min-h-[300px]">
                    {image ? (
                        <>
                            <img src={image} alt="Uploaded X-ray" className="max-h-48 mb-4 rounded shadow" />
                            <p className="text-lg font-semibold text-gray-800">{prediction || 'Please click Check Now to get your result'}</p>
                        </>
                    ) : (
                        <p className="text-gray-500">No input yet. Upload image and select model to get prediction.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CheckDisease;
