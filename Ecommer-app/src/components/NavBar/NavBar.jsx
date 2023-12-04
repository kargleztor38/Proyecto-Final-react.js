import { Link, NavLink } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';
import './NavBar.css';


export const NavBar = () => {
  return (
    <nav className="navBar container">
        <Link to={'/'}>Productos Artesanales</Link>
        <div className='category'>
            <NavLink to={'/category/Camiseta'} className='navCategory'>Camisetas</NavLink >
            <NavLink to={'/category/Camisas'} className='navCategory'>Camisas</NavLink >
            <NavLink to={'/category/Cuadros'} className='navCategory'>Cuadros</NavLink >
        </div>
        <CartWidget />
    </nav>
  )
}
