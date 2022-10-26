import { useState } from "react";

const App = () => {
    const [ayam,setAyam] = useState([
        {aid:1, name:'goreng'},
        {aid:2, name:'bakar'},
        {aid:3, name:'rebus'},
        {aid:4, name:'gulai'}
    ])

    // const [sementara,setSementara] = useState([])

    var piring = {aid: 3, name: 'sate'}
    console.log(ayam)
    
    function Handler(){
        setAyam((prev) => [...prev, piring])
        console.log(ayam)
    }

    return (
        <div>
            <button onClick={() =>Handler()}>
                Satein ayamnya
            </button>
        </div>
    )
}

export default App
