import React from 'react';
import {
  DefaultImage,
  ImagePreview,
  ImageboxTitle,
  ImgFileInput,
  UploadSection,
} from './image-upload-component.style';

function ImageUploadComponent({
  title,
  onImagePreviewClick,
  selectedImageForPreview,
  defaultImageUrl,
  onInputChange,
  inputRef,
}) {
  const renderImageContent = () => {
    if (selectedImageForPreview) {
      return <img src={selectedImageForPreview} alt="Uploaded" />;
    } else if (defaultImageUrl) {
      return <img src={defaultImageUrl} alt="Uploaded" />;
    } else {
      return <DefaultImage alt="Default">이미지 첨부하기</DefaultImage>;
    }
  };

  return (
    <UploadSection>
      <ImageboxTitle>{title}</ImageboxTitle>
      <ImagePreview onClick={onImagePreviewClick}>
        {renderImageContent()}
      </ImagePreview>
      <ImgFileInput
        type="file"
        accept="image/*"
        onChange={onInputChange}
        ref={inputRef}
      />
    </UploadSection>
  );
}

export default ImageUploadComponent;
