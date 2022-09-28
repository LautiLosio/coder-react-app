import { useEffect } from "react"
import { useState } from "react"

const products = [
  {id: 1, name: 'Product 1', price: 100},
  {id: 2, name: 'Product 2', price: 200},
  {id: 3, name: 'Product 3', price: 300},
]

const ItemList = () => {

  const [items, setItems] = useState([])
 
 useEffect( ()=>{
  getProducts()
 }, [])

  const getProducts = () => {
    const productsPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products)
      }, 3000)
    })

    productsPromise.then( res => {
      console.log('res: ' + JSON.stringify(res));
      setItems(res)
    })

    console.log('getting products...');
  }
 
  return (
    <div>
      <h1>ItemList</h1>
      { items.map( item => <li key={item.id}>{item.name}</li>) }        
    </div>
  )
}
export default ItemList