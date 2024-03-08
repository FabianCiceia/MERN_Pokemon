
import './App.css'
import Search from './components/Search'

function App() {

  const {pokemones, setFiltro} = Search();
  const filtro = (e) =>{
    setFiltro(e.target.value.toLowerCase())
  }
  return (
    <>
      <input type="search" name="search" id="search" placeholder='Que pokemon buscas?' onChange={filtro}/>
      <div>
        {pokemones?
          (pokemones.map((poke,i) => (
            <div key={i}>{poke}</div>
          )))
        :
          null
        }
      </div>
    </>
  )
}

export default App
