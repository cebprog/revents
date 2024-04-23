import './styles.css'
import EventDashboard from '../../feature/events/dashboard/EventDashboard'
import NavBar from './nav/NavBar'
import { Container } from 'semantic-ui-react'
import { useState } from 'react'
function App() {
  const [formOpen, setFormOpen ] = useState(false);
  return (
      <>
        <NavBar setFormOpen={setFormOpen}/>
        <Container className='main'>
          <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen}/>
          </Container>
      </>
  )
}

export default App
