import './StudentCard.css'

const StudentCard = ({ name, avatar, details, highlighted }) => {

    const { campus, year, experience, bootcamp, age } = details

    const classText = `StudentCard ${highlighted ? 'special' : 'ordinary'}`

    return (

        <article className={classText} >
            <h2>{name}</h2>
            <img src={avatar} alt={name} />
            <p>Estudia {bootcamp} en el campus de {campus} ({year})</p>
            <p>{age} años, experiencia como {experience}</p>
        </article>

    )
}

export default StudentCard