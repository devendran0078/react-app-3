import React, { useState }  from "react";

function ReactForm()
{
    const[t , setVal] =useState("")
    const handleSubmit= (event) => {
       event.preventDefault();
        alert(`${t}`);
    }
return(
    <>
    <form onSubmit={handleSubmit}>
        <h1>Form</h1>
        <label >
            Enter some text
            <input type="text" value={t} onChange={(e)=>setVal(e.target.value)}></input>
            
        </label>
        <button type="submit" >Submit Text</button>
    </form>
    </>
)
}

function MyForm() {
    const [name, setName] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`${name}`)
      //alert(`The name you entered was: ${name}`)
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>Enter your name:
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
    )
  }

  function Fn1()
  {
    const c =[1,2,3];
    const d =[8,7,9]
    const b=c;
    return(
    <>
    <p>{
       [...c,...d]
    }</p>
    </>);
  }

  function MultiInputForm() {
    // Single state object for all form fields
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
    });
  
    // Handle input change
    const handleChange = (event) => {
      const { name, value } = event.target; // Destructure name and value from input
      setFormData((prevFormData) => ({
        ...prevFormData, // Preserve previous form data
        [name]: value, // Update only the field that changed
      }));
    };
  
    // Handle form submission
    const handleSubmit = (event) => {
      event.preventDefault(); // Prevent page reload
      console.log("Form Submitted:", formData);
      alert(`Form Submitted: ${JSON.stringify(formData)}`);
    };
  
    return (
      <div>
        <h2>Multi-Input Form</h2>
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
        <h3>Current Data:</h3>
        <p>First Name: {formData.firstName}</p>
        <p>Last Name: {formData.lastName}</p>
        <p>Email: {formData.email}</p>
      </div>
    );
  }

  function DynamicInputs() {
    const [fields, setFields] = useState([{ value: "" }]); // Array of inputs
  
    const handleAddField = () => {
      setFields([...fields, { value: "" }]); // Add new field
    };
  
    const handleRemoveField = (index) => {
      setFields(fields.filter((_, i) => i !== index)); // Remove field by index
    };
  
    const handleChange = (index, event) => {
      const newFields = [...fields];
      newFields[index].value = event.target.value; // Update specific field
      setFields(newFields);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`Form Data: ${JSON.stringify(fields)}`);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <h2>Dynamic Input Fields</h2>
        {fields.map((field, index) => (
          <div key={index}>
            <input
              type="text"
              value={field.value}
              onChange={(e) => handleChange(index, e)}
              placeholder={`Field ${index + 1}`}
            />
            <button type="button" onClick={() => handleRemoveField(index)}>
              Remove
            </button>
          </div>
        ))}
        <br />
        <button type="button" onClick={handleAddField}>
          Add Field
        </button>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
  
  export  {DynamicInputs};


    export {ReactForm, MyForm,Fn1,MultiInputForm}