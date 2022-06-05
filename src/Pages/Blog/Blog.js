import React from "react";

const Blog = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-5 lg:px-12 px-6">
      <div className="card w-90 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            How will you improve the performance of a React Application?
          </h2>
          <ul>
            <li>Use a Production build before deployment.</li>
            <li>Immutable Data Structures</li>
            <li>
              Avoid Adding Extra Nodes to the DOM by using React. Fragment
            </li>
            <li>Avoid Anonymous Functions</li>
            <li>App’s loading time improvement by lazy loading</li>
          </ul>
        </div>
      </div>
      <div className="card w-90 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            What are the different ways to manage a state in a React
            application?
          </h2>
          <ul>
            <li>Use Data Fetching Libraries</li>
            <li>Global State Management</li>
            <li>Custom Hooks FTW</li>
            <li>Avoid Anonymous Functions</li>
            <li>Use useReducer for Complex State</li>
          </ul>
        </div>
      </div>
      <div className="card w-90 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            How will you implement a search to find products by name?
          </h2>
          <p>
            const productName = `Bike`; <br></br> const foundProduct =
            products.find(product => product.name === productName);
          </p>
        </div>
      </div>
      <div className="card w-90 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            What is a unit test? Why should write unit tests?
          </h2>
          <p>
            A unit can be almost anything you want it to be -- a line of code, a
            method, or a class. Generally though, smaller is better.
            <br />
            Smaller tests give you a much more granular view of how your code is
            performing. There is also the practical aspect that when you test
            very small units, your tests can be run fast; like a thousand tests
            in a second fast.
            <br />
            Unit testing allows the programmer to refactor code at a later date,
            and make sure the module still works correctly (i.e. Regression
            testing). The procedure is to write test cases for all functions and
            methods so that whenever a change causes a fault, it can be quickly
            identified and fixed.
          </p>
        </div>
      </div>
      <div className="card w-90 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">How does prototypical inheritance work?</h2>
          <p>
            A prototype is an internal object from which other objects inherit
            properties. Its main purpose is to allow multiple instances of an
            object to share a common property. Thus, object properties which are
            defined using the prototype object are inherited by all instances
            which reference it.
            <br />
            <br />
            How this works becomes quite clear when you see it in action. Say
            you add a method to MyObject (that’s the object, not the instance)
            called doSomething(). Would that cause new instances of MyObject to
            inherit the doSomething() method? No it would not.
            <br />
            <br />
            What that would do is create a static method that can be called
            without first instantiating the object (useful to know in itself!).
            Likewise, a function that is added to an instance would only apply
            to that particular instance. Only when the function is assigned to
            the MyObject.prototype is it inherited by all instances of that
            Object, including those we instantiated before the creation of the
            new function:
          </p>
        </div>
      </div>
      <div className="card w-90 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            Why you do not set the state directly in React
          </h2>
          <p>
            when we update the state of a component all it's children are going
            to be rendered as well. or our entire component tree rendered. but
            when i say our entire component tree is rendered that doesn’t mean
            that the entire DOM is updated.
            <br />
            <br />
             when a component is rendered we
            basically get a react element, so that is updating our virtual dom.
            React will then look at the virtual DOM, it also has a copy of the
            old virtual DOM, that is why we shouldn’t update the state directly,
            so we can have two different object references in memory, we have
            the old virtual DOM as well as the new virtual DOM. then react will
            figure out what is changed and based on that it will update the real
            DOM accordingly .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
