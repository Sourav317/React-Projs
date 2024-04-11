import { useCallback, useState, useEffect, useRef } from "react"

function PassGenerator() {

  let [length,setLength] = useState(8);
  let [numAllowed,setNumAllowed] = useState(false); 
  let [chAllowed,setChAllowed] = useState(false);
  let [password,setPass] = useState("");

  const passwordRef = useRef(null)




  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>

</div>
    
    </>
  )
}

export default PassGenerator