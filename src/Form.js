import React, { useState } from 'react';
import AddIcon from './icon.png'

const Form = ({robots,  addRobot}) => {
    const [showDiv, setShowDiv] = useState(false);
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [id, setId] = useState(11);

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        // Do something with the name and email, for example, log them to the console
        // console.log("Name:", name);
        // console.log("Email:", email);
       
        setId(id + 1)
        
        const obj = { 
            id : id,
            name : name,
            email: email
        }
        addRobot(obj); // Call the addRobot function from props to pass data to parent
        setName(''); // Clear input fields after submission
        setEmail('');
        setShowDiv(false);
        // You can also send the data to an API, perform validation, etc.
    }

   


    return (
        <div>
            <img 
                src={AddIcon} 
                alt="icon"
                onClick={() => {
                    setShowDiv(!showDiv);
                }}
            />
            {showDiv && (
                 <div style={{ backgroundColor: "white", height: "200px", width: "300px" }}>
                 <h2>Add Robo Buddy</h2>
                 <form onSubmit={handleSubmit}>
                     <label>Name:</label>
                     <input type='text' value={name} onChange={handleNameChange} placeholder='Enter name' /><br />
                     <label>Email:</label>
                     <input type='text' value={email} onChange={handleEmailChange} placeholder='Enter Email' /><br />
                     <button type='submit'>Submit</button>
                 </form>
             </div>
            )}
        </div>
    );
}
export default Form;