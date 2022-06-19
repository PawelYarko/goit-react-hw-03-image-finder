import React from 'react';
import ImageGalleryItem from './ImageGalleryItem'
import s from './ImageGallery.module.css';

export default class App extends React.Component{

    state = {
        searchRequest: null,
        error: null,
        status: 'idle'
    }

    componentDidUpdate(pervProps, pervState){
        const prevName = pervProps.imageName;
        const nextName = this.props.imageName;
        if(nextName !== prevName){
            this.setState({status: 'pending'})
          fetch(`https://pixabay.com/api/?key=26762966-8ed2dcb76b4efb10f9cc7c58f&q=${this.props.imageName}&image_type=photo&per_page=12`)
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
                this.setState({searchRequest, status:'resolved'});
              }
          })
          .catch(error => this.state({error, status: 'rejected'}));
        }
      }  


    render(){
        const {searchRequest, status, error} = this.state;
        if(status === 'idle'){
            return <div>Введите запрос в поле ввода</div>
        }

        if(status === 'pending'){
            return <div>Загрузка...</div>
        }

        if(status === 'rejected'){
        return <h1>{error.message}</h1>
        }

        if(status === 'resolved'){
            return (
                <ul className={s.gallery}>
                    <ImageGalleryItem searchRequest={searchRequest}/>   
                </ul>
            )
        }
} 
}