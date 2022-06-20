import React from 'react';
import IconSearch from './IconSearch/IconSearch'
import s from "./Searchbar.module.css"


export default class Searchbar extends React.Component {
    state = {
        inputValue: '',
    }

    handleInputFormChange = (e) =>{
        const value = e.currentTarget.value;
        this.setState({inputValue: value.toLowerCase()})
    }

    handleFormSubmit = e =>{
        e.preventDefault();

        if(this.state.inputValue.trim() === ''){
            console.log('строка пустая')
            return;
        }

        this.props.onSubmit(this.state.inputValue);
        this.setState({inputValue: ''});
    }


    render(){
        return(
            <header className={s.searchbar}>
                <form className={s.form} onSubmit={this.handleFormSubmit}>
                    <button type="submit" className={s.button}>
                    <IconSearch/>
                    <span className={s.label}>Search</span>
                    </button>
    
                    <input
                    onChange={this.handleInputFormChange}
                    className={s.input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}
