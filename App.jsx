import { useState, useCallback ,useEffect,useRef} from 'react'
import './App.css'

function App() {
  
    //sample chk


  const [   lenght,  setlenght]  = useState(8)
  const [ numberAllowed, setnumberAllowed]  = useState(false)
  const [ charAllowed,  setcharAllowed] = useState(false)
  const [ password  , setpassword]  = useState("")

       //useRefhook
       const passwordRef=useRef(null)


       const passwordgenerater=useCallback(()=>
      {
        let pass=" "
        let str="abcdefghijklmnopqrstuvwxyz"
        if(numberAllowed) str += "0123456789"
        if(charAllowed)  str+= "!@#$%^&{{}]"

        for(let i=1;i<=lenght;i++)
        {
            let char = Math.floor(Math.random() * str.length + 1)
          pass+=str.charAt(char)
        }
        setpassword(pass)
        console.log(pass)

      },[  length, numberAllowed, charAllowed,setpassword])


      const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])


    useEffect (()=>
    {
      passwordgenerater()

    },[lenght,numberAllowed,charAllowed,passwordgenerater])



  return (
    <>
      <div>
        <div className='pw'>
       <h1 className='pg'>pasword generater</h1>
    <h2>             </h2>

      
     <input type='text' value={password}  readOnly  ref={passwordRef}   ></input>
     <button className='btn'  onClick={copyPasswordToClipboard}>copy</button><br/>  

     <input 
     type='range'
     min={3}
     max={100}
     value={lenght}
     onChange={(e)=>{setlenght(e.target.value)}}
     /> <br/> 

       <label>Number include: {length}</label>

        <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setnumberAllowed((prev) => !prev);
          }}
      />   <br/> 

        <label htmlFor="charachter">charachter include</label>
     
  
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setcharAllowed((prev) => !prev )
              }}
          />
  </div>



      </div>
     
    </>
  )
}

export default App
