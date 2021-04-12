import React, { useState, useCallback, useMemo } from 'react'
import  {useFetch } from '../custom-hooks/useFetch'
import './indexelements.js';
import { history } from '../_helpers';

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
//const url = 'http://localhost:8085/getAllItems'

//every time props or state changes, component re-renders
// const calculateMostExpensive = (data) => {
//   return (
//     data.reduce((total, item) => {
//       const price = item.base_price
//       if (price >= total) {
//         total = price
//       }
//       return total
//     }, 0) / 100
//   )
// }
const ShowItems = ({url}) => {
  console.log(url);
  const { products } = useFetch(url)
  const [count, setCount] = useState(0)
  //const [cart, setCart] = useState(0)

   
  // const addToCart = useCallback(() => {
  //   setCart(cart + 1)
  // }, [cart])

  // const mostExpensive = useMemo(() => calculateMostExpensive(products), [
  //   products,
  // ])
  return (
    <>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        click me
      </button>
      {/* <h1 style={{ marginTop: '3rem' }}>cart : {cart}</h1> */}
      <h1>Most Expensive : ${}</h1>
      <BigList products={products}/>
    </>
  )
}

const BigList = React.memo(({ products}) => {
  // useEffect(() => {
  //   console.count('hello from big list');
  // });

  return (
    <section className='products'>
      {products.map((product) => {
        return (
          <SingleProduct
            key={product.item_id}
            //{...product}
            index={product.item_id}
            item_name= {product.item_name}
           base_price ={product.base_price}
           description= {product.description}
           // addToCart={addToCart}
          ></SingleProduct>
        )
      })}
    </section>
  )
})

const SingleProduct = ({ index,item_name,base_price,description}) => {
  //let { name, price } = fields
  //base_price = base_price / 100
  //const image = fields.image[0].url
 // console.log(index);

  function postitem ()
   {
     //console.log("Inside Function Call");
     //console.log(index);
     let p='/additem/?id=' + index;
     history.push(p);
   }
  // useEffect(() => {
  //   console.count('hello from product');
  // });
  return (
    <article className='product'>
      <img src="" alt={item_name} />
      <h4>{item_name}</h4>
      <p>${base_price}</p>
      <p>${description}</p>
      <button onClick={postitem}>Post Your Item</button>
    </article>
  )
}
export default ShowItems