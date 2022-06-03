import React , {useState,useEffect} from 'react'


const Container = ({search}) => {
    useEffect(() => {
      console.log("Hi mom");
    }, [])
    
    const [text,setText] = useState('Hi');
    const handleButton = () =>{
        setText("Bye");
    }
  return (
    <div className='container-fluid'>
        <div className="row">
            {search}   
            <button onClick={handleButton}>Change</button>
        </div>
    </div>
  )
}

export default Container