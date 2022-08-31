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
    <button
    className='p-2 text-textColor cursor-pointer bg-black'
    type="submit" disabled={state.submitting}>
    Subscribe
    </button>
  </form>

  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;
