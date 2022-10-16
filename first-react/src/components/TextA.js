
import './TextA.css'
const  TextA = ({textdata}) =>{

    console.log (textdata)
    return (
        
        <textarea  className ='texta-item'   defaultValue = {textdata}></textarea>
        
    )
}

export default TextA;