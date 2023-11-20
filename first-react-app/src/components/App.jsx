import './App.css'
import Button from './Button/Button'
import ChildrenExample from './ChildrenExample/ChildrenExample'
import Navigation from './Navigation/Navigation'
import Separator from './Separator/Separator'
import StudentCard from './StudentCard/StudentCard'
import Title from './Title/Title'


const App = () => {

  return (

    <div className="App">

      <Navigation />

      <Title text={'Web de alumnos/as'} />

      <Separator />

      <Button link={'/whatever'} text={'Ver alumnos/as destacados/as'} />
      <Button link={'/campuses'} text={'Ver campuses'} />

      <Separator />

      <Title text={'Listado de alumnos/as'} />

      <StudentCard
        name={'Sara Whatever'}
        avatar={'https://multiapi-app.fly.dev/img/people/image-lorem-face-1600.jpg'}
        details={{
          campus: 'Madrid',
          year: 2023,
          experience: 'abogado',
          bootcamp: 'Web Dev',
          age: 33
        }}
      />

      <StudentCard
        name={'Luis Whatever'}
        avatar={'https://multiapi-app.fly.dev/img/people/image-lorem-face-1708.jpg'}
        details={{
          campus: 'BCN',
          year: 2024,
          experience: 'camarera',
          bootcamp: 'Data',
          age: 38
        }}
      />

      <StudentCard
        name={'Raúl Whatever'}
        avatar={'https://multiapi-app.fly.dev/img/people/image-lorem-face-1712.jpg'}
        highlighted={true}
        details={{
          campus: 'MEX',
          year: 2022,
          experience: 'camarera',
          bootcamp: 'Data',
          age: 38,
        }}
      />

      <StudentCard
        name={'Sonia Whatever'}
        avatar={'https://multiapi-app.fly.dev/img/people/image-lorem-face-1723.jpg'}
        details={{
          campus: 'PAR',
          year: 2021,
          experience: 'diseñadora',
          bootcamp: 'UX',
          age: 31
        }}
      />

      <Title text={'Componente con children'} />

      <ChildrenExample>
        <p>Soy un descendiente del componete y estoy en su prop <code>children</code></p>
        <p>Soy un descendiente del componete y estoy en su prop <code>children</code></p>
        <p>Soy un descendiente del componete y estoy en su prop <code>children</code></p>
        <p>Soy un descendiente del componete y estoy en su prop <code>children</code></p>
      </ChildrenExample>


    </div>
  )
}

export default App
