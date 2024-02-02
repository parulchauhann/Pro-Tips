import React, { useState } from 'react';
import '../App.css'


function Reg() {

  const [field, setField] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    PhoneNumber: ""
  });

  // Two conditions should be satisifed, that the user filled all the fields or not and submitted or not
  const [validation, setValidation] = useState(false)
  const [submit, setSubmit] = useState(false)

  return (
    <>
      <div id='form_section'>
        <form id='registeration_form' onSubmit={(e) => {
          e.preventDefault();
          if (field.FirstName && field.LastName && field.PhoneNumber && field.Email) {
            setValidation(true);
          }
          setSubmit(true);
        }}>

          {submit && validation ? <div id='success'>Registration Successful</div> : null}

          <div className='input_Section'>
            <input
              type="text"
              name="firstName"
              className='input_box'
              placeholder='First Name'
              onChange={(e) => { setField({ ...field, FirstName: e.target.value }) }}
              value={field.FirstName}
            />

            {submit && !field.FirstName ? <span>Please enter your first name</span> : null}

            <input
              type="text"
              name="lastName"
              className='input_box'
              placeholder='Last Name'
              onChange={(e) => { setField({ ...field, LastName: e.target.value }) }}
              value={field.LastName}
            />

            {submit && !field.LastName ? <span>Please enter your last name</span> : null}

            <input
              type="email"
              name="email"
              className='input_box'
              placeholder='Email'
              onChange={(e) => { setField({ ...field, Email: e.target.value }) }}
              value={field.Email}
            />

            {submit && !field.Email ? <span>Please enter your email</span> : null}

            <input
              type="tel"
              name="contacts"
              className='input_box'
              placeholder='Phone number'
              onChange={(e) => { setField({ ...field, PhoneNumber: e.target.value }) }}
              value={field.PhoneNumber}
            />

            {submit && !field.PhoneNumber ? <span>Please enter your phone number</span> : null}

            <button type="submit" className='register_button'>Register</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Reg