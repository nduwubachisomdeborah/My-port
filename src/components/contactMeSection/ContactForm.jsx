import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const sendToWhatsApp = (e) => {
    e.preventDefault();

    // Fill with your WhatsApp details
    const phoneNumber = "2348060039760";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      `Hello! My name is ${name}. \nEmail: ${email} \n\nMessage: ${message}`
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div>
      <form onSubmit={sendToWhatsApp} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={name}
          onChange={handleName}
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          rows="9"
          cols="50"
          placeholder="Collaboration Message"
          required
          className=" rounded-lg bg-lightBrown p-2"
          value={message}
          onChange={handleMessage}
        />
        <button
          type="submit"
          className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500"
        >
          Send to WhatsApp
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
