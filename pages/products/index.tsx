import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'
import React from 'react'

type ProductProps = {
  products: any[]
}
// client
const ProductsPage = ({products}: ProductProps) => {
  // console.log("product component", products);
  if (!products) return null;
  return (
   <div>
    {products.map(item =>(
      <div key={item.id}><Link href={`/products/${item.id}`}>{item.name}</Link></div>
    ))}
   </div>
  )
}
// server
export const getStaticProps: GetStaticProps<ProductProps> = async (context : GetStaticPropsContext)=>{
  // console.log("getStaticProps");
    const response = await fetch(`https://6291d3789d159855f080b433.mockapi.io/products/`)
    const data = await response.json()
  return {
    props:{
      products: data.map(item=> ({id: item.id , name : item.name}))
      //quy uoc du lieu tra ve gom nhung gi
    },
    revalidate: 20
  }
}
export default ProductsPage