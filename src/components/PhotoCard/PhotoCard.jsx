import React from 'react';
import PropTypes from 'prop-types';
import styles from './PhotoCard.module.css';

const PhotoCard = ({
  id,
  webformatURL,
  largeImageURL,
  likes,
  views,
  comments,
  downloads,
  openModal,
}) => {
  const handleModal = () => openModal(largeImageURL);
  return (
    <div className={styles.photoCard} id={id}>
      <img src={webformatURL} alt="" />

      <div className={styles.stats}>
        <p className={styles.statsItem}>
          <i className="material-icons">thumb_up</i>
          {likes}
        </p>
        <p className={styles.statsItem}>
          <i className="material-icons">visibility</i>
          {views}
        </p>
        <p className={styles.statsItem}>
          <i className="material-icons">comment</i>
          {comments}
        </p>
        <p className={styles.statsItem}>
          <i className="material-icons">cloud_download</i>
          {downloads}
        </p>
      </div>

      <button
        type="button"
        className={styles.fullscreenButton}
        onClick={handleModal}
        name="modal-button"
      >
        <i className="material-icons">zoom_out_map</i>
      </button>
    </div>
  );
};

PhotoCard.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  downloads: PropTypes.number.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default PhotoCard;
