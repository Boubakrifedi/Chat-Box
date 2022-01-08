
import "./index.css";

const CustomInput = ({value,onChange,placeholder}) => {
  
    return (
           <input value = {value} onChange={onChange} placeholder={placeholder}/>
        )
}

export default CustomInput;