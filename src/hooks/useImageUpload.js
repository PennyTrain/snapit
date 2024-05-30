import { useState, useRef } from 'react';
/*

The useImageUpload custom hook manages the state and logic
for handling image uploads. It provides a state variable
image, a ref imageInputRef to access the file input element,
and functions to handle image changes, open the file dialog, 
and reset the image. This hook allows for reading an uploaded 
image file as a data URL and setting it in the state, making 
it useful for image preview and upload functionality in a React 
component.
 */

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
    setImage, 
    imageInputRef,
    handleChangeImage,
    handleOpenFileDialog,
    resetImage,
  };
};

export default useImageUpload;
