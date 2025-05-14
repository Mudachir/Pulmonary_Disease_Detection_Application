
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

    const handleCheck = () => {
        if (selectedModel && image) {

            setPrediction('Prediction: COVID-19');
        } else {
            alert('Please select model and upload image');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-md grid grid-cols-1 md:grid-cols-2 gap-6">
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
                            <option value="model1">Model 1 - CNN</option>
                            <option value="model2">Model 2 - ResNet</option>
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
                            <p className="text-lg font-semibold text-gray-800">{prediction || 'Waiting for prediction...'}</p>
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
