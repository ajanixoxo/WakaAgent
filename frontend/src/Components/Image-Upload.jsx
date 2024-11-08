import React, { useState } from 'react';

function ImageUpload({ onImageChange }) {
    const [preview, setPreview] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPreview(URL.createObjectURL(file)); // Preview image
            onImageChange(file); // Pass the file up to the parent component
        }
    };

    return (
        <div className="flex flex-col items-center space-y-4">
            <div className="w-32 h-32 rounded-full bg-gray-100 overflow-hidden flex items-center justify-center border-2 border-gray-300">
                {preview ? (
                    <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                    <span className="text-gray-400">Image Preview</span>
                )}
            </div>
            <label className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600">
                <span>Upload Image</span>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                />
            </label>
        </div>
    );
}

export default ImageUpload;
