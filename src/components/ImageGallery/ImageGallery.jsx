import React from 'react';
import ImageGalleryItem from './ImageGalleryItem'
import Modal from 'components/Modal/Modal';
import Button from 'components/Button/Button';
import Loader from '../Loader/Loader'
import fetchRequest from '../../service/fetchRequest'
import s from './ImageGallery.module.css';


export default class ImageGallery extends React.Component{

    state = {
        searchRequest: null,
        error: null,
        status: 'idle',
        showModal: false,
        largeImg: null,
        alt: null,
        page: 1,
    }

    componentDidUpdate(pervProps, pervState){
        const prevName = pervProps.imageName;
        const nextName = this.props.imageName;
        const prevPage = pervState.page;
        const nextPage = this.state.page;

        if(nextName !== prevName || nextPage !== prevPage){
            this.setState({status: 'pending'})
            
        fetchRequest(nextName, nextPage) 
            .then(searchRequest => {
                if(searchRequest){
                    this.setState(prevState => {
                        let newArray = searchRequest.hits;
                        if(prevState.searchRequest){ 
                            newArray =  [...prevState.searchRequest, ...searchRequest.hits];
                        }
                        return{
                            searchRequest: newArray,
                            status: 'resolved'   
                        };
                    });}
                    
                })
            .catch(error => this.state({error, status: 'rejected'}));
        }
      }  

      toggleModal = () =>{
          this.setState(({showModal}) => ({
              showModal: !showModal
          }))
      }

      openModal = (e) =>{
        this.toggleModal();
        this.setState(({largeImg, alt}) => ({
            largeImg: e.target.dataset.img,
            alt: e.target.alt
        }))
      }

      onBtnLoadClick = () =>{
          this.setState(({page})=>({
            page: page + 1       
          }))
      }



    render(){
        const {searchRequest, status, error, showModal, largeImg, alt} = this.state;

        if(status === 'idle'){
            return <div>Введите запрос в поле ввода</div>
        }

        if(status === 'pending'){
            return <Loader/>
        }

        if(status === 'rejected'){
        return <h1>{error.message}</h1>
        }

        if(status === 'resolved'){
            return (
                <div className={s.content}>
                    <ul className={s.gallery} onClick={this.openModal}>
                    <ImageGalleryItem searchRequest={searchRequest}/>
                    {showModal && <Modal onClose={this.toggleModal} largeImg={largeImg} alt={alt}/>}  
                </ul>
                <Button onBtnLoadClick={this.onBtnLoadClick}/>
                
                </div>
            )
        }
} 
}