import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const Modal = ({ pickedImg, onCloseModal }) => (
  <div className={styles.overlay} onClick={onCloseModal} role="presentation">
    <div className={styles.modal}>
      <img src={pickedImg} alt="some from pixabay" />
    </div>
  </div>
);

Modal.propTypes = {
  pickedImg: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default Modal;
