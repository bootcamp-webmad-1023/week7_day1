import './Button.css'

const Button = ({ link, text }) => {

    return (
        <a href={link} className="Button">{text}</a>
    )
}

export default Button 