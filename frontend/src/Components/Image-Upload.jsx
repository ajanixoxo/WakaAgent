import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
function ImageUpload({onFileSelect}) {
    const [preview, setPreview] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPreview(URL.createObjectURL(file)); // Preview image
             onFileSelect(file); // Pass the file up to the parent component
        }
    };

    return (
        <div className="flex flex-col items-center space-y-4">
            <div className="w-32 h-32 rounded-full bg-gray-100 overflow-hidden flex items-center justify-center border-2 border-gray-300">
                {preview ? (
                    <img src={preview} alt="Preview" className="w-full h-full object-cover"  accept="image/*" onChange={handleFileChange} />
                ) : (
                    <img
                    src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
                    alt="Agent"
                    className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
                  />
                )}
            </div>
            <label className="flex items-center space-x-2 bg-[#133B5D] text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700">
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
