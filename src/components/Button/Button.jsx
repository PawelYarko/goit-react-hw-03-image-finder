import s from './Button.module.css'


const Button = ({onBtnLoadClick}) =>{
    return (
        <button type='button' className={s.button} onClick={onBtnLoadClick}>Load More</button>
    )
}

export default Button;