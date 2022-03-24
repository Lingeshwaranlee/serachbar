import {useEffect, useState } from "react";
import IconButton from '@mui/material/IconButton';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
export function Food() {
  const [recipelist,setrecipelist]=useState([]);
  useEffect(()=>{
    fetch("https://620c529fb5736325938b91f9.mockapi.io/users")
    .then((data)=>data.json())
    .then((mvs)=>setrecipelist(mvs));
  },[])
  return (
    <div className="App">
      <h1 className="chennai">WELCOME TO CHENNAI FOOD-COURT</h1>
      <div className='recipe-list-container'>

        {recipelist.map((user) => <Recipe food={user.food} profile={user.profile} price={user.price} />)}

      </div>
    </div>
  );
}
function Recipe({ profile, food, price }) {
  const[show,setShow]=useState(false);
   return (
    <div className='list-container'>
      <img className='recipe-picture' src={profile} alt="profile"></img>
      <h2 className='recipe-food'>{food}
      <IconButton 
      color="primary" 
      aria-label="add to shopping cart"
      onClick={()=>setShow(!show)}
      >
  <ExpandCircleDownIcon />
</IconButton></h2>

     {show ? <h2 className='recipe-price'>Price:{price}</h2>:""} 
    </div>
  );
}
