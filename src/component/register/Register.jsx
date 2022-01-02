import React from "react";
import "./register.css";

export default function Register() {
    const res= false;
  return (
    <div className="register">
        {
            (!res)?(
                <>
                <h1>Registration</h1>
                <form className="form">
                    <label className="label">Full Name</label>
                    <input type="text" placeholder="Your Name.." />

                    <label>Email</label>
                    <input type="email" placeholder="Your Email.." />
                    <label>Age</label>
                    <input type="number" placeholder="Your Age.." />
                    <label>Phone number</label>
                    <input type="text" placeholder="Your number.." />
                    <label>Present Adress</label>
                    <input type="text" placeholder="Your Adress.." />
                    <label>Blood Group</label>
                    <input type="text" placeholder="Your Blood group.." />
                    <>
                    <button className="btnSubmit">Submit</button>
                    </>
                </form>
                </>
            ):(
                <>
                <h1>SuccessFull Registration.</h1>
                </>
            )
               
            
        }
      
    </div>
  );
}
