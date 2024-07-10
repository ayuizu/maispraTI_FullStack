import { useState } from "react";


function MirrorText(){
    const [txt, setTxt] = useState('')

    return(
        <div>
            {/* Passar só txt não funciona -- (event)=>{setTxt(event.target.value)} */}
            <input type="text" id="input" onChange={()=>setTxt(document.getElementById('input').value)} placeholder="Digite aqui"></input>
            <br />
            <p>{txt}</p>
        </div>
    )
}

export default MirrorText

// Solução do Professor
/*
function MirrorText(){
    const[text, setText] = useState('')
    return(
        <div>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
            <p>Você digitou: {text}</p>
        </div>

    )
}
*/