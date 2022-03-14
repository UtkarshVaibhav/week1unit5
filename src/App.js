import { useState } from 'react';
import style from './App.css';
import { Vegetables } from './components/Vegetables';
import { Wishlist } from './components/Wishlist';

function App() {
  const[wish,setWish]=useState(true);
  const changeDisp=()=>{
    setWish(!wish);
  }
  return (
    <div className="App">
      <div className={style.checkDiv}>
      <input type="checkbox" onChange={changeDisp}/>{wish?<h3>Check To Show Vegetables</h3>:<h3>Uncheck To Show Wishlist</h3>}
      </div>
      <br/>
      {
      wish?<Wishlist/>:<Vegetables/>
      }
    </div>
  );
}

export default App;
