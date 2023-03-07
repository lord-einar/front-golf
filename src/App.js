import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Menu from './components/menu/Menu';
import { Container } from 'react-bootstrap';
import Gatera from './components/Gateras/Gatera';

function App() {
  return (
    <>
      <Container fluid='md'>
        <Menu />
        <Gatera />
      </Container>
    </>
  );
}

export default App;
