import { useState, useEffect } from "react";
import { Product } from "../../app/models/product.ts";
import ProductList from "./ProductList.tsx";

export default function Catalog(){
const [products, setProducts] = useState<Product[]>([]);
  useEffect(()=>{
    fetch('http://localhost:8282/api/products')
    .then(response =>response.json())
    .then(data=>setProducts(data.content));
  },[]);
  return (
    <>
      <ProductList products={products}/>
    </>
  )
}