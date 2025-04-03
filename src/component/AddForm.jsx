import React,{useState} from 'react'

function AddForm() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
    console.log(email,password);

    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type='submit'>Submit the form</button>


    </form>
  )
}

export default AddForm
