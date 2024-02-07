import React from 'react'
import {useState} from 'react'
import './Apop.css'
import axios from 'axios'


function Aworan(props) {
  const[name, setName]=useState('');
  const[mail,setMail]=useState('');
  const[date,setDate]=useState('');
  const [msg, setMsg] = useState('')
  const handleNamechange=(event)=>{
    setName(event.target.value);
  };
  const handleMailchange=(event)=>{
    setMail(event.target.value);
  };
  const handleDatechange=(event)=>{
    setDate(event.target.value)
  };
  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log(`Name: ${name}`);
    console.log(`Mail:${mail}`);
  };

 const submit= async(e)=>{
    e.preventDefault()
    try{
      await axios.post("http://localhost:8000/",{msg
    }) 
    }
    catch(e){
    console.log(e);
    }
}

  return (props.trigger) ? (
  
    <div className=''>
    
    <h2>
   fill the form to get scheduled:
   </h2>

   <form onSubmit={handleSubmit}>
    <label id='text'>
    Name:
    <input type="" value={name}
    onChange={handleNamechange} id='bag'/>
    <button onClick={handleNamechange} type="">required</button>
    </label>
    
    <br/>
  <h2>2. Security deposit:</h2>
    <label id='asake'>
  mail:
  <input type="mail" value={mail}
  onChange={handleMailchange} id='dunk'/>
  <button onClick={handleSubmit}>required</button>

    </label>
    <br/>
    <h2>3. Move in Date:</h2>
    date:
    <input type="date" value={date}
    onSubmit={handleSubmit} id=''/>
    <br/>
   </form>
   <button className='cls-btn'onClick={()=>props.setTrigger(false)}>x</button>
   {props.children}
   <br/>
<form/>
<form>
   <textarea name='bape' onChange={(e)=>{setMsg(e.target.value)}} placeholder='enter text'></textarea>
   <input type=' ' onlCick={submit} value='submit'/>
   </form>
      </div>
  ):"";
}

export default Aworan;