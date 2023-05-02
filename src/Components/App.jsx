import Header from './Header';
import Footer from './Footer';
import ContenidoPrincipal from './ContenidoPrincipal';
import { useState } from 'react';


function App() {

  const [nombre, setNombre] = useState("")


  const [incrementar, setIncrementar] = useState(0)

  const handleClickIncrementar = () => {
    setIncrementar(incrementar + 1)
  }

  const handleClickDecrementar = () => {
    if (incrementar > 0)
      setIncrementar(incrementar - 1)
  }


  const handleClickReiniciar = () => {
    if (incrementar > 0)
      setIncrementar(0)
  }



  return (
    <div>
      {
        incrementar >= 5 ?
          <Header></Header>
        : <h1>todavia no esta el header</h1>
      }

      <button
        onClick={handleClickIncrementar}

      >Incrementar</button>
      <button
        onClick={handleClickDecrementar}

      >Decrementar</button>
      <button
        onClick={handleClickReiniciar}

      >Reiniciar</button>

      <h1>
        {incrementar}
      </h1>


      <ContenidoPrincipal></ContenidoPrincipal>
      <Footer></Footer>
    </div>
  );
}

export default App;
