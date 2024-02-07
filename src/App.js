import logo from './logo.svg';
import './App.css';
import Mmih from './Mmih'
import Olaolu from './Woll';
import Alldat from './Alldat';
import {info} from './Data';
import {useState, useEffect} from 'react'
import Aworan from './Component/Aworan';
import Navbar from './Component/Navbar';
import Pics from './Pics';
import Apop from './Component/Apop';
import axios from 'axios'

function App() {
  const [num, setNum]= useState (0)
  const[appear, setAppear] =useState(true)
  const [butTop,setButTop] = useState(false);
  
    
  return (
    <div className="">
    <Navbar/>
    <Pics/>
    <Apop/>
    
      <div className='Apop'>
      <h3>fill up the registration form</h3>
     <div className='main'>
     <br/> <br/>
      <button onClick={()=> setButTop('true')}>click</button>
      <Aworan trigger={butTop} setTrigger={setButTop}>
  
      </Aworan>
      </div>
      </div>

      <br/><br/>
    <Alldat/>
      
<br/><br/>


    </div>
  );


}

export default App;
