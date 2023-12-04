import { ItemCount } from "../ItemCount/ItemCount"
import './ItemDetail.css'

export const ItemDetail = ({ name, category, description, precio, stock, img }) => {

  return (
    <article className="detail container">
        <header >
            <h2 className="detail-h2">{ name }</h2>
        </header>
        <picture>
            <img className="contentImg" src={ img } alt={ name }/>
        </picture>
        <section className="detailSec">
            <p className="detail-p">Precio: ${ precio }</p>
            <p className="detail-p">Descripción: { description }</p>
            <p className="detail-p">Categoría: { category }</p>
            <p className="detail-p">Stock: { stock }</p>
        </section>
        <footer>
            <ItemCount />
        </footer>
    </article>
  )
}
