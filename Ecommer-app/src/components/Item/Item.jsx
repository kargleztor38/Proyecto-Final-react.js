import { Link } from 'react-router-dom'
import './Item.css'

export const Item = ({ id, name, img, precio, stock }) => {
    
  return (
    <article className="card">
        <header className="headerCard">
            <h3>{name}</h3>
        </header>
        <picture className="imgCard">
            <img src={img} alt={name} className='contentImgCard'/>
        </picture>
        <section className="secCard">
            <p className='text'>Precio: {precio}</p>
            <p className='text'>Stock disponible: { stock }</p>
        </section>
        <footer>
            <Link to={`/detail/${id}`} className="buttonCard">Ver detalles</Link>
            {/* crear función para traer los id de los productos para mostrar el detalle de los mismos */}
        </footer>
    </article>
  )
}
