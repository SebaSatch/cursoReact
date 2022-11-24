
import NavBar from './components/NavBar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Title from './components/Title/Title'
import logo from '../src/assets/chemevoy-logo.svg'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
        return (
                <div>
                        {/* llamamos al componente NavBar */}
                        <NavBar/>
                        {/* Metemos un loguito */}
                        <img src={logo} alt="" />
                        {/* usamos el componente title */}
                        <Title encabezado='soy un titulo'/>
                        {/* usamos el title de nuevo */}
                        <Title encabezado='soy otro titulo'/>  
                        {/* llammamos al ListContainer y le enchufamo el saludo */}
                        <ItemListContainer greeting={'hola'}/>
                </div>
        )
}

export default App
