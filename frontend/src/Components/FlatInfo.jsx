import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"



export const FlatInfo =()=>{
    const { _id } = useParams();
    const [product, setDetail] = useState({});
  
    useEffect(() => {
      axios.get(`https://apartment-myapp.herokuapp.com/flats/${_id}`).then(({ data }) => {
        console.log(data)
        setDetail(data)
      })
    },[])
    return (
        <div>
            <img src={product.image} alt="" />
            <h2>{product.name}</h2>
            <h2>{product.age}</h2>
            <h2>{product.gender}</h2>
        </div>
    )
}