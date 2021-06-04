import React, { useState } from 'react'
import './contact.scss'
import { db } from "../firebase"

const Contact = (props) => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("contacts")
    .doc(formData.name)
    .set({
      name: formData.name,
      email: formData.email,
      message: formData.message,
    })
    .then(() => {
      alert("Your message was sent! 💌 ")
    })
    .catch((error)=> {
      alert(error.message)
    })

    clearForm()
  }

  const clearForm = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    })
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Get in Touch!</h1>

        <label>Name
          <input 
            placeholder="Name" 
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>Email
          <input 
            placeholder="Email" 
            id="email"
            name="email"
            type="text"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>Message
          <textarea 
            placeholder="Message" 
            id="message"
            name="message"
            type="text"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>

        <input type="submit" placeholder="Submit"/>
      </form>
    </div>
  )
}

export default Contact