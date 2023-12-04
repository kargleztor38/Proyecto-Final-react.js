import { ItemDetailContainer } from "./components"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { NavBar } from "./components/NavBar/NavBar"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={ <ItemListContainer greeting={'Todos los productos'}/> } />
        <Route path="/category/:category" element={ <ItemListContainer greeting={'Bienvenidos a las categorías'} /> } />
        <Route path="/detail/:detalleId" element={ <ItemDetailContainer /> }/>
      </Routes>
    </BrowserRouter>
  )
}
