import './App.css';
import Navegacion from './components/Navegacion';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './components/Footer';
import { Inicio } from './components/Inicio.js';
import { Experiencia } from './components/Experiencia';

function App() {

  let component;

  switch (window.location.pathname) {
    case '/Inicio.js' :
      component = <Inicio />      
      break;
    case '/Experiencia.js' :
      component = <Experiencia />
      break;
  
    default:
      component = <Inicio />
      break;
  }

  return (
    <div className="blog-app">
      <header>
        <Navegacion />
      </header>
      <main>
        {component}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
