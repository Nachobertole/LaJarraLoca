
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer  from './components/ItemListContainer';

export function App() {
  return (
    <> 

    <NavBar/>
    <ItemListContainer text={'Bienvenido a la tienda'}/>
    </>
  );
}

export default App;
