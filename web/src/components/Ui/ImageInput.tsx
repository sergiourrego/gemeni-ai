import { ChangeEvent } from 'react';
import PropTypes from 'prop-types';
import styles from '../Styles/ImageInput.module.css'

interface ImageInputProps {
  imageFile: File | null;
  handleImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ImageInput: React.FC<ImageInputProps> = ({ imageFile, handleImageChange }) => {
  return (
    <input
      id={styles.imageInput}
      className="rounded p-2 focus:outline-none focus:ring focus:border-blue-300"
      type="file"
      accept="image/*"
      onChange={handleImageChange}
      placeholder="Select an image (optional)"
    />
  );
};

ImageInput.propTypes = {
  imageFile: PropTypes.instanceOf(File),
  handleImageChange: PropTypes.func.isRequired,
};

export default ImageInput;
