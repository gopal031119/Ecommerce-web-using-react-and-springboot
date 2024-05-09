import { useEffect, useState } from "react"
import { Product } from "../models/products";

function App() {
  //Define a state variable products, using useState
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(()=>{
    //Function to fetch the data
    const fetchData = async () =>{
      try{
        const response = await fetch('http://localhost:8282/api/products');
        if(!response.ok){
          throw new Error('Failed to fetch the data');
        }
        const data = await response.json();
        setProducts(data.content);
      }catch(error){
        console.error('Error Fetching Data:', error);
      }
    };
    fetchData();
  }, []);

  // fetching product using promise
  /*
  useEffect(()=>{
    fetch('http://localhost:8282/api/products')
    .then(response => response.json())
    .then(data => setProducts(data.json));
  }, []) 
  */

  return (
    <div>
      <h1>Sports Center</h1>
      {products.map(product=>(
        <div key={product.id}>
          <p>Name: {product.name}</p>
          <p>Description: {product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Brand: {product.productBrand}</p>
          <p>Type: ${product.productType}</p>
        </div>
      ))}
      
    </div>
  )
}

export default App