import React from 'react';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Modal from 'components/Modal/Modal';
import Button from 'components/Button/Button';
import Loader from '../Loader/Loader';
import fetchRequest from '../../service/fetchRequest';
import s from './ImageGallery.module.css';

export default class ImageGallery extends React.Component {
  state = {
    searchRequest: null,
    error: null,
    status: 'idle',
    showModal: false,
    largeImg: null,
    alt: null,
    page: 1,
  };

  async componentDidUpdate(pervProps, pervState) {
    const prevName = pervProps.imageName;
    const nextName = this.props.imageName;
    const prevPage = pervState.page;
    const nextPage = this.state.page;

    if (nextName !== prevName || nextPage !== prevPage) {
      this.setState({ status: 'pending' });

      try {
        const searchRequest = await fetchRequest(nextName, nextPage);
        if (searchRequest) {
          this.setState(prevState => {
            let newArray = searchRequest;
            if (prevState.searchRequest) {
              newArray = [...prevState.searchRequest, ...searchRequest];
            }
            return {
              searchRequest: newArray,
              status: 'resolved',
            };
          });
        }
      } catch {
        this.setState({ status: 'rejected' });
      }
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  openModal = e => {
    this.toggleModal();
    this.setState(({ largeImg, alt }) => ({
      largeImg: e.target.dataset.img,
      alt: e.target.alt,
    }));
  };

  onBtnLoadClick = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }));
  };

  render() {
    const {
      searchRequest,
      status,
      error,
      showModal,
      largeImg,
      alt,
    } = this.state;

    return (
      <div>
        {status === 'idle' && <div>Введите запрос в поле ввода</div>}
        {status === 'pending' && <Loader />}
        {status === 'rejected' && <h1>{error.message}</h1>}
        {status === 'resolved' && (
          <div className={s.content}>
            <ul className={s.gallery} onClick={this.openModal}>
              <ImageGalleryItem searchRequest={searchRequest} />
              {showModal && (
                <Modal
                  onClose={this.toggleModal}
                  largeImg={largeImg}
                  alt={alt}
                />
              )}
            </ul>
            <Button onBtnLoadClick={this.onBtnLoadClick} />
          </div>
        )}
      </div>
    );
  }
}
