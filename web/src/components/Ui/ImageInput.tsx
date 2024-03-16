import { ChangeEvent } from 'react';
import PropTypes from 'prop-types';
import styles from "../Styles/ImageInput.module.css";

interface ImageInputProps {
  imageFile: File | null;
  handleImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ImageInput: React.FC<ImageInputProps> = ({ imageFile, handleImageChange }) => {
  return (
    <input
    id={styles.input}
    className='form-control form-control-sm'
    type="file" accept="image/*" onChange={handleImageChange} placeholder="Select an image (optional)" />
  );
};

ImageInput.propTypes = {
  imageFile: PropTypes.instanceOf(File),
  handleImageChange: PropTypes.func.isRequired,
};

export default ImageInput;
