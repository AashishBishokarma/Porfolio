import React, { useState } from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

const Contact = () => {

    const [firstName,setfirstName] = useState('');
    const [lastName,setlastName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();

      console.log("Submitting form...");
    
      const serviceId = "service_tupgqgb";
      const templateId = "template_uzjqbpm";
      const publicKey = "0k2iOqLVfAsZYWco2";
    
      const templateParams = {
        from_name : firstName + " " + lastName,
        from_email: email,
        to_name: "Aashish Bishokarma",
        message:message,
      }
    
      emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log("Email sent successfully", response.status, response.text);
          setfirstName("");
          setlastName("");
          setEmail("");
          setMessage("");
        })
        .catch((error) => {
          console.error("Error sending email", error);
      });
    }
  return (
    <div className="border-t border-stone-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>


        <form 
          onSubmit={handleSubmit}
          className="flex text-center flex-col justify-center gap-4 mt-10 w-1/2 mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col sm:flex-row  justify-between gap-4">
            <input
              className="p-4 w-full sm:w-1/2 lg:w-full border-2 rounded-2xl border-white"
              type="text"
              placeholder="First Name"
              name="firstname"
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
              required
            />
            <input
              className="p-4 w-full sm:w-1/2 lg:w-full border-2 rounded-2xl border-white"
              name="lastname"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
              type="text"
              placeholder="Last Name"
            />
          </motion.div>

          <motion.input
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="p-4 border-2 rounded-2xl border-white"
            name="from_email"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <motion.textarea
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="p-4 border-2 rounded-2xl border-white"
            name="message"
            placeholder="Message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></motion.textarea>
          <motion.button
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-4 rounded-2xl bg-gray-50 text-stone-900 border font-bold duration-300 ease-in-out hover:bg-black hover:text-white"
            type="submit"
          >
            SUBMIT            
          </motion.button>
        </form>
    </div>
  );
};

export default Contact;
