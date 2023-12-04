import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { getProducts } from "../../asyncMock";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
  
  const { category } = useParams()

  useEffect(() => {
    getProducts()
      .then((resp) => {

          const productosFiltrados = resp.filter(product => product.category === category)
          
          setProducts(productosFiltrados)

          {category ? productosFiltrados : setProducts(resp)}
      })
      .catch(error => console.log(error))
  }, [category]);

  return (
    <div className="container ItemListContainer">
      <h1 className="itemList-h1">{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};
