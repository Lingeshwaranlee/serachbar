import { useHistory } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { useState } from "react";
import Button from '@mui/material/Button';

export function Addrecipe() {
  const history = useHistory();
  const[food,setfood]=useState("");
  const[poster,setposter]=useState("");
  const[price,setprice]=useState("");
  return (
    <div className="recipe-form">
     <TextField id="filled-basic" label="ENTER THE FOOD" variant="filled" onChange={(event)=>setfood(event.target.value)} />
     <TextField id="filled-basic" label="ENTER THE PRICE" variant="filled" onChange={(event)=>setposter(event.target.value)} />
     <TextField id="filled-basic" label="ENTER THE POSTER" variant="filled" onChange={(event)=>setprice(event.target.value)} />
     <Button variant="contained" 
     onClick={()=>{const newrecipe={food:food,price:price,poster:poster};
       
       fetch("https://620c529fb5736325938b91f9.mockapi.io/users",{
         method:"POST",
         body:JSON.stringify(newrecipe),
         headers: {
          "Content-Type": "application/json",
        },
      }).then(() => history.push("/recipe"));
       
       
       }}>Addrecipe</Button>    
    </div>
  );
}
