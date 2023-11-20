import './Navigation.css'
import logo from './../../assets/logo.png'
import Button from '../Button/Button'

const Navigation = () => {

    return (
        <header className='Navigation'>
            <img src={logo} alt="Logotipo" />
            <Button text={"Ver cursos"} link={'/cursos'} />
            <nav>
                <ul>
                    <li><a href="/whatever">Inicio</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/contacto">Contacto</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation