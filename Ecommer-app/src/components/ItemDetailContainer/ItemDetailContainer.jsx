import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


export const ItemDetailContainer = () => {
  const [prodId, setProdId] = useState(null);

  const { detalleId } = useParams()

  useEffect(() => {
    getProducts()
      .then((response) => {
        const respFilter = response.find(resp => resp.id == detalleId)
        setProdId(respFilter)
      })
  }, [detalleId] );

  return (
    <div>
      <ItemDetail {...prodId} />
    </div>
  );
};
