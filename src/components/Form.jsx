import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';


function ContactForm() {
  const [state, handleSubmit] = useForm("xnqwewap");
  if (state.succeeded) {
      return <p className='ml-[20%] p-2 w-[50%] bg-headingColor text-center cursor-default text-primary align-center rounded-lg'>Thanks for joining!</p>;
  }
  return (
    <form
    className='w-full md:w-[80%] flex flex-col gap-2'
    onSubmit={handleSubmit}>
    <input
    className='p-2 rounded-lg'
    id="name"
    type="text" 
    name="name"
    placeholder='Your Name'
  />

    <input
      className='p-2 rounded-lg'
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
    className='p-2 rounded-lg text-textColor bg-detailsRed'
    type="submit" disabled={state.submitting}>
    Let's Go! 🚀
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

      {/*<form
      className='w-full md:w-[80%] flex flex-col gap-2'
      onSubmit={handleSubmit}>
        <input
        className='p-2 rounded-lg'
        id="full-name" type="text" name="name" placeholder='Name'/>

        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />

        <input
        className='p-2 rounded-lg'
        id="email" type="email" name="email" placeholder='Email'/>

        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />

        <motion.button
        whileTap={{ scale: 0.8 }}
        className='p-2 rounded-lg bg-detailsRed'
        type="submit" 
        disabled={state.submitting}>
          Submit
        </motion.button>
  </form>*/}