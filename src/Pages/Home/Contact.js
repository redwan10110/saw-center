import React from "react";

const Contact = () => {
  return (
    <div className="lg:px-12 px-6 bg-base-200 my-10 py-10">
      <h1 className="text-center text-4xl text-secondary mt-10 font-bold">
        Contact Us
      </h1>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left ">
            <h1 className="text-5xl font-bold">Get In Touch</h1>
            <p className="py-6">
              Fill all information details to consult with us to get sevices
              from us
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Message</span>
                </label>
                <textarea
                  className="textarea textarea-bordered"
                  placeholder="Write here"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
