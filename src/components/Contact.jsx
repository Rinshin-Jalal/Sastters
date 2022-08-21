import React from "react";
import useWeb3forms from "use-web3forms";

// are you thger????????????????yes bro

const Contact = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const { submit } = useWeb3forms({
    apikey: "c9e123ad-d057-4432-941b-fe8bb6dfdb58",
    onSuccess: (successMessage, data) => {
      console.log(successMessage, data);
    },
    onError: (errorMessage, data) => {
      console.log(errorMessage, data);
    },
  });
  return (
    <section className="contact" id="contact">
      <div className="left">
        <h1>Contact Us</h1>
        <form>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="enter your name..."
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="enter your email..."
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={8}
            placeholder="enter message..."
          ></textarea>
          <button
            onClick={(e) => {
              submit({
                name,
                email,
                message,
              });
            }}
          >
            Submit form
          </button>
        </form>
      </div>
      <div className="right">
        <img src="/imgs/img-4.png" alt="" />
      </div>
    </section>
  );
};

export default Contact;
