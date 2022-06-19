import React from 'react';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';


export default class App extends React.Component{

  state ={
  }


  
  render(){

    return (
      <div>
      <Searchbar/>
        <ImageGallery/>
        {/*  <ImageGalleryItem/>
           <Loader/>
             <Button/>
             <Modal/> */}
      </div>
    );
  }
}

