import React, { Component } from 'react';
import axios from 'axios';
import SearchForm from '../SearchForm/SearchForm';
import Gallery from '../Gallery/Gallery';
import Modal from '../Modal/Modal';
import { apiKey, parseArr } from './helpers';

class ImageFinder extends Component {
  state = {
    search: '',
    images: [],
    isModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevImages = prevState.images;
    const { images } = this.state;
    if (prevImages.length !== images.length && prevImages.length !== 0) {
      const { scrollPoint } = this.state;
      window.scrollTo({
        top: scrollPoint,
        behavior: 'smooth',
      });
    }
  }

  handleFetch = e => {
    e.preventDefault();
    const { search } = this.state;
    const page = 1;
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${search}&page=${page}&per_page=12&key=${apiKey}`;

    axios.get(url).then(res => {
      const arr = res.data.hits;
      const parsedArr = parseArr(arr);
      this.setState({
        images: parsedArr,
        page: 2,
        scrollPoint: 0,
      });
    });
  };

  handleFetchMore = ({ target }) => {
    const { search, page } = this.state;
    const nextPage = page + 1;
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${search}&page=${nextPage}&per_page=12&key=${apiKey}`;
    axios.get(url).then(res => {
      const arr = res.data.hits;
      const parsedArr = parseArr(arr);
      const scrollPoint = target.offsetTop - 10;
      this.setState(prev => ({
        images: [...prev.images].concat(parsedArr),
        page: nextPage,
        scrollPoint,
      }));
    });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleModal = url => {
    this.setState({
      isModal: true,
      pickedImg: url,
    });
    window.addEventListener('keyup', ({ key }) => {
      if (key === 'Escape') {
        this.setState({
          isModal: false,
        });
      }
    });
  };

  handleCloseModal = ({ target }) => {
    if (target.localName !== 'img') {
      this.setState({
        isModal: false,
      });
    }
  };

  render() {
    const { search, images, isModal, pickedImg } = this.state;
    return (
      <>
        <SearchForm
          search={search}
          onChange={this.handleChange}
          onSubmit={this.handleFetch}
        />
        {images.length > 0 ? (
          <Gallery
            images={images}
            onFetchMore={this.handleFetchMore}
            openModal={this.handleModal}
          />
        ) : null}
        {isModal && (
          <Modal pickedImg={pickedImg} onCloseModal={this.handleCloseModal} />
        )}
      </>
    );
  }
}

export default ImageFinder;
