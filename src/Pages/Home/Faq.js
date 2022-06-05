import React from "react";

const Faq = () => {
  return (
    <div>
      <h1 className="text-center text-4xl text-secondary mt-10 font-bold">
        FAQ
      </h1>
      <div className="max-w-lg mx-auto lg:px-12 px-6 my-10">
        <div
          tabIndex="0"
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-3"
        >
          <div className="collapse-title text-xl font-medium">
          How is it being developed?
          </div>
          <div className="collapse-content">
            <p>Steeler™ is an emerging programme built on five years of work to define and promote steel that has been produced and sourced responsibly. The Australian Steel Stewardship Forum initially developed the concept.</p>
          </div>
        </div>
        <div
          tabIndex="1"
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-3"
        >
          <div className="collapse-title text-xl font-medium">
          Credible international sustainability standards?
          </div>
          <div className="collapse-content">
            <p>Saw center is an emerging programme built on five years of work to define and promote steel that has been produced and sourced responsibly. The Australian Steel Stewardship Forum initially developed the concept.</p>
          </div>
        </div>
        <div
          tabIndex="2"
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-3"
        >
          <div className="collapse-title text-xl font-medium">
          How are membership fees structured?
          </div>
          <div className="collapse-content">
            <p> Saw center is an emerging programme built on five years of work to define and promote steel that has been produced and sourced responsibly. The Australian Steel Stewardship Forum initially developed the concept.</p>
          </div>
        </div>
        <div
          tabIndex="3"
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-3"
        >
          <div className="collapse-title text-xl font-medium">
          If I have questions, where can I find answers?
          </div>
          <div className="collapse-content">
            <p>Contact with us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
