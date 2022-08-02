import React from "react";

const Contact = () => {
  return (
    <section className="contact">
      <div className="left">
        <h1>Contact Us</h1>
        <form>
          <input type="text" placeholder="enter your name..." />
          <input type="email" placeholder="enter your email..." />
          <textarea rows={8} placeholder="enter message..."></textarea>
        </form>
      </div>
      <div className="right">
        <img src="/imgs/img-4.png" alt="" />
      </div>
    </section>
  );
};

export default Contact;
