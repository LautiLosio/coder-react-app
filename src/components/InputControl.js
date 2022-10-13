import { Input } from "react-daisyui"

const InputControl = () => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

  const handler = (event) => { 
    // console.log('boton: ' + event.key)
    if (vowels.includes(event.key)) {
      event.preventDefault()
      console.log(event.key)
    }
  }

  

  return (
    <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <Input onKeyDown={ handler } className="shadow border-slate-600"/>
    </div>
  )
}
export default InputControl