import { useState , useEffect } from "react";
import React from "react";
import axios from "axios";

const Products = ()=>{
  const [ products , setProducts ] = useState([]);

  useEffect( ()=>{
    axios.get("https://clothes-shop-react-js.herokuapp.com/products/getProducts")
    .then( (response)=>{
      setProducts(response.data);
    })
  } , []);

  return(
    <section className="products">
      <h1>Featured Products</h1>

      <div className="product-container">
        {
          products.map( (product , key)=>{
            return(
              <div className="product" key={key}>
              <div className="img">
                <img style={ {width:"100%" , height:"100%"} } src={product.url} />
              </div>
              <button>Add to Cart</button>
            </div>
            )
          })
        }
      </div>
    </section>
  );
}

export default Products;