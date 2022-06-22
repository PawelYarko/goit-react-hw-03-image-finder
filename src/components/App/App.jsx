import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import s from './App.module.css';

export default class App extends React.Component {
  state = {
    imageName: '',
  };

  handleFormSubmit = imageName => {
    this.setState({ imageName });
  };

  render() {
    return (
      <div className={s.container}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery imageName={this.state.imageName} />
      </div>
    );
  }
}
