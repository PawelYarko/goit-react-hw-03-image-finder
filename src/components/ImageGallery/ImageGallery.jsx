import React from 'react';
import ImageGalleryItem from './ImageGalleryItem'
import s from './ImageGallery.module.css';

export default class App extends React.Component{

    state = {
        searchRequest: null,
        error:
    }

    componentDidUpdate(pervProps, pervState){
        const prevName = pervProps.imageName;
        const nextName = this.props.imageName;
        if(nextName !== prevName){
          fetch(`https://pixabay.com/api/?key=26762966-8ed2dcb76b4efb10f9cc7c58f&q=${this.props.imageName}&image_type=photo`)
          .then(response =>{
              if(response.ok){
                return response.json();
              }
              return Promise.reject(
                  new Error(`Не правильный запрос ${nextName}`)
              )
          })
          .then(searchRequest => {
              if(searchRequest){
                this.setState({searchRequest});
              }
          })
          .catch(error => this.state({error}));
        }
      }  


    render(){
        const {searchRequest} = this.state;
      return (
        <ul className={s.gallery}>
         <ImageGalleryItem searchRequest={searchRequest}/>   
        </ul>
    )} 
}