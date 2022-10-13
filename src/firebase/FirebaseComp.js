import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const FirebaseComp = () => {

  useEffect(() => {
    getItem()
    getCollection()
  }, [])

  const [item, setItem] = useState({})


  // Esto es para obtener un documento de la base de datos, documento => es un item
  const getItem = async () => {
    const db = getFirestore();
    const docRef = doc(db, 'products', 'RcSpUhsthw5L44jBHF82');
    getDoc(docRef).then( (res) => {
      const data = {id: res.id, ...res.data()}
      setItem(data)
    })
  }

  const getCollection = async () => {
    const db = getFirestore();
    const response = await collection(db, 'products')
    getDocs(response).then( (res) => {
      console.log(res)
      const data = res.docs.map( (doc) => {
        return {id: doc.id, ...doc.data()}
      }
      )
      console.table(data)
    }
    )
    
  }

  

  return (
    <div>
      <h1>{item.name}</h1>
      <h2>{item.price}</h2>
    </div>

  )
}
export default FirebaseComp