
import './App.css';
import React, {useState} from 'react' 

function App() {
  const [data, setData] = useState({
    name : "",
    email : "",
    massage : "",
    number : "",
  });
  const {name, email, massage, number} = data;
  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }
  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      const data = await fetch("https://v1.nocodeapi.com/jaseem1999/google_sheets/UcsNdvrrSWAPkQQH?tabId=Sheet1",
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify([
          [name,email,massage,number, new Date().toLocaleString()],
        ]),
      }
      );
      // eslint-disable-next-line no-undef
      await response.json()
      setData({...data, name:"", email: "", massage: "", number: "",});
      
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="App">
      <div className="continer">
      <h1>FeedBack</h1>
      <div className="form-layout">
      <form className="" onSubmit={handleSubmit}>
        <div className="form-input">
        <span>Name</span> <br/>
        <input type="text" className="nameText"  name="name" value={name} onChange={handleChange}/><br/>
        <span>Email</span><br/>
        <input type="text" className="nameText"  name="email" value={email} onChange={handleChange}/><br/>
       <span>Massage</span><br/>
        <input type="text" className="nameText" name="massage" value={massage} onChange={handleChange}/><br/>
         <span>Mobile No</span><br/>
        <input type="text" className="nameText" name="number" value={number} onChange={handleChange}/><br/>
        <input type="submit" className="nameTextSubmit"  value="submit" />

        </div>
        
      </form>
      </div>
      </div>
     </div>
  );
}

export default App;
