import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>

        <form>
          <div>
            <label>Name</label>
            <input type="text" required placeholder="abc"></input>
          </div>
          <div>
            <label>Email Id</label>
            <input type="email" required placeholder="abc@xyz.com"></input>
          </div>
          <div>
            <label>Message</label>
            <input type="text" required placeholder="Enter Your Message"></input>
          </div>

          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
