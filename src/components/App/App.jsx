import React from 'react';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';


export default class App extends React.Component{
  state ={
    imageName: ''
  }

  handleFormSubmit = imageName =>{
    this.setState({imageName})   
  }

  render(){
    

    return (
      <div>
      <Searchbar onSubmit={this.handleFormSubmit}/>
        <ImageGallery imageName={this.state.imageName}/>
        {/*  <ImageGalleryItem/>
           <Loader/>
             <Button/>
             <Modal/> */}
      </div>
    );
  }
}

