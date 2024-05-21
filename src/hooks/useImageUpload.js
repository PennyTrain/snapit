import React, { useState, useRef } from 'react';

const useImageUpload = () => {
  const [image, setImage] = useState(null);
  const imageInputRef = useRef(null);

  const handleChangeImage = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleOpenFileDialog = () => {
    imageInputRef.current.click();
  };

  const resetImage = () => {
    setImage(null);
  };

  return {
    image,
    setImage, // Add setImage here
    imageInputRef,
    handleChangeImage,
    handleOpenFileDialog,
    resetImage,
  };
};

export default useImageUpload;
