import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';


function ContactForm() {
  const [state, handleSubmit] = useForm("xnqwewap");
  if (state.succeeded) {
      return <p className='ml-[20%] p-2 w-[50%] bg-detailsRed text-center cursor-default text-white align-center'>Thanks for joining!</p>;
  }
  return (
    <form
    className='w-full md:w-[80%] flex flex-col gap-2'
    onSubmit={handleSubmit}>
    {/*
    <input
    className='p-2'
    id="name"
    type="text" 
    name="name"
    placeholder='Your Name'
  />
    <input
      className='p-2'
      id="email"
      type="email" 
      name="email"
      placeholder='Subscribe with Email'
    />
    <ValidationError 
      prefix="Email" 
      field="email"
      errors={state.errors}
    />
    <label for="role" className='text-white'>Select your category below</label>
    <select id="role" name='role' className='p-2' type="text" placeholder="Who are you?" required>
      <option value="Customer">Fashion Enthusiast (Consumer)</option>
      <option value="Designer">Designer</option>
      <option value="Model">Model</option>
      <option value="Craftsman">Craftsman (Accessory makers, tailors, e.t.c)</option>
    </select>
    <button
    className='p-2 text-textColor cursor-pointer bg-black'
    type="submit" disabled={state.submitting}>
    Subscribe
  </button>*/}
  <p className='p-2 bg-red-600 text-white'>No Longer Accepting Input</p>
  </form>

  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;
