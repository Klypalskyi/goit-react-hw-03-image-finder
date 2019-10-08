import React from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.css';
import PhotoCard from '../PhotoCard/PhotoCard';

const Gallery = ({ images, onFetchMore, openModal }) => (
  <>
    <ul className={styles.gallery}>
      {images.map(img => (
        <PhotoCard key={img.id} {...img} openModal={openModal} />
      ))}
    </ul>
    <button
      type="button"
      name="load-more"
      className={styles.button}
      onClick={onFetchMore}
    >
      Load more
    </button>
  </>
);

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      comments: PropTypes.number.isRequired,
      downloads: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  onFetchMore: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default Gallery;
