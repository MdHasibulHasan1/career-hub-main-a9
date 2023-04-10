import React from "react";

const Blog = () => {
  return (
    <div className="text-left">
      <div>
        <h3 className="font-semibold text-2xl">
          1. When should you use context API?
        </h3>
        <p>
          The Context API is a way to pass data down the component tree without
          having to manually pass props through each level of the tree. It can
          be used in a variety of situations, but it's particularly useful when
          you have data that needs to be accessed by multiple components at
          different levels in the tree.
        </p>
      </div>
      <div>
        <h3 className="font-semibold text-2xl">2. What is a custom hook?</h3>
        <p>
          In React, a custom hook is a JavaScript function that starts with the
          prefix "use" and is designed to reuse stateful logic across multiple
          components. It is a way to extract component logic into reusable
          functions that can be shared between different components.
        </p>
      </div>
      <div>
        <h3 className="font-semibold text-2xl">3. What is useRef?</h3>
        <p>
          useRef is a hook in React that returns a mutable ref object. It can be
          used to access DOM nodes or to hold any mutable value that you want to
          persist between renders of a functional component.
        </p>
      </div>
      <div>
        <h3 className="font-semibold text-2xl">4. What is useMemo?</h3>
        <p>
          useMemo is a hook in React that is used for performance optimization.
          It memoizes the result of a function so that it is only recalculated
          when its dependencies change. This can help to avoid unnecessary
          calculations and improve the performance of your application.
        </p>
      </div>
    </div>
  );
};

export default Blog;
