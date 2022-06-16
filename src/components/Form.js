import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "Sylvia",
    lastName: "Henry",
    admin: false,
  });
  
  /*function handleFirstNameChange(event) {
    setFormData({
      ...formData,
      firstName: event.target.value,
    });
  }

  function handleLastNameChange(event) {
    setFormData({
      //formData is an object, so we need to copy all the key/value pairs
      ...formData,
      //we want to overwrite the lastName key with a new value
      firstName: event.target.value,
    });
  }*/

  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;
   // use `checked property of checkboxes instead of `value`
    if(event.target.type === "checkbox") {
      value = event.target.checked;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefualt();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
      type="text" 
      name="firstName"
      onChange={handleFirstNameChange} 
      value={formData.firstName} 
      />
      <input 
      type="text" 
      name="lastName"
      onChange={handleLastNameChange} 
      value={formData.lastName} 
      />
      <input
      type="checkbox"
      name="admin"
      onChange={handleChange}
      checked={formData.admin}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
