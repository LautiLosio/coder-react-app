import { useEffect, useState } from "react";

const Clicker = ({ children }) => {

    const [count, setCount] = useState(0);

    // cuando se pasa un array vacio, el efecto se ejecuta solo una vez al montarse el componente
    useEffect( ()=>{
        console.log("component mounted");
    }, [])

    // cuando no se pasa el array, el efecto se ejecuta cada vez que se renderiza el componente
    useEffect( ()=>{
        console.log("component rendered");
    })

    // cuando se pasa un array con dependencias, el efecto se ejecuta cada vez que se renderiza el componente
    useEffect( ()=>{
        console.log("Se actualizo el contador", count);
    },[count])

    const handleClick = () => {
        console.log("clicked");
        setCount(count + 1);
    }

  return (
    <>
    <div className="m-5">{ count }</div>
    <button className="btn m-5" onClick={handleClick}>{ children }</button>
    </>
  )
}
export default Clicker