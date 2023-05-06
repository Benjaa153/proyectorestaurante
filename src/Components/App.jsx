import 'bootstrap/dist/css/bootstrap.min.css';
import Saludar from './Saludar';
import ContenidoPrincipal from './ContenidoPrincipal'
import ImgLogo from '../Img/logo192.png'
function App() {

  const datosAlumno = {
    nombre: 'Maximiliano',
    apellido: 'Otta',
    msjpara: "Hola",
    edad: 30,
    img: ImgLogo,
    confirmado: true
  }
  return (
    <div>

      <Saludar
          datosAlumno={datosAlumno}
      />
    </div>
  );
}

export default App;
