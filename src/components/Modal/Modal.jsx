import React from 'react'
import s from './Modal.module.css'


export default class Modal extends React.Component{

    componentDidMount(){
        window.addEventListener('keydown', this.onModalClose)
    }

    componentWillUnmount(){
        window.removeEventListener('keydown', this.onModalClose);
    }

    onModalClose = (e) => {
        if(e.code === 'Escape'){
            this.props.onClose();
        }
    }

    onOverlayClick = (e) =>{
        if(e.currentTarget === e.target){
            this.props.onClose();
        }
    }

    render(){
        const {largeImg, alt} = this.props;

        return (
        <div className={s.overlay} onClick={this.onOverlayClick}>
            <div className={s.modal}>
                <img src={largeImg} alt={alt} />
            </div>
        </div>
    )
    }  
}