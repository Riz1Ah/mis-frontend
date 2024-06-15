import { useEffect, useState } from "react";
import Form from "./components/Form";
import { FieldValues, useForm } from 'react-hook-form';
import ProductList from "./components/ProductList";


function App() {
  // const [category, setCategory] = useState('')
  
  return ( <>
   <Form/>
   {/* <ProductList category={category}/>
   <select className="form-select" onChange={(event)=> setCategory(event.target.value)}>
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Electronics">Electronics</option>
    </select> */}
   </>
   )
}

export default App;