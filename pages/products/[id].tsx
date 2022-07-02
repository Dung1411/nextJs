import { GetServerSideProps, GetServerSidePropsContext, GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import React from 'react'
import ProductsPage from '.'

type ProductProps = {
  product: any
}

const ProductDetail = ({product}: ProductProps) => {
  console.log('product', product)
  if (!product) return null;
  
  return (
    <div>{product.name}</div>
  )
}

// export const getStaticPaths: GetStaticPaths = async ()=>{
//   const data = await (await fetch(`https://6291d3789d159855f080b433.mockapi.io/products`)).json()
//   console.log(data);
  
//   const paths = data.map(product =>(
//     {params: {id: product.id}}
//   ))
//   return{
//     paths,
//     fallback: false
//     // fallback: blockquote
//   }
// }
// // render ra cac page static(tĩnh)
// // server
// export const getStaticProps: GetStaticProps<ProductProps> = async (context : GetStaticPropsContext)=>{
//     const product = await (await fetch(`https://6291d3789d159855f080b433.mockapi.io/products/${context.params?.id}`)).json()
    
//   return {
//     props:{
//       product: {product},
//       revalidate: 20
//     }
//   }
// }
export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext)=>{
  context.res.setHeader(
    "Cache-Control",
    "s-maxage=10, stale-while-revalidate=20"
  )
  const product = await (await fetch(`https://6291d3789d159855f080b433.mockapi.io/products/${context.params?.id}`)).json()
  return {
    props: {product}
  } 
}

export default ProductDetail