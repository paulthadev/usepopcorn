import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
// import App from './App';

import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating
        maxRating={5}
        color="black"
        size={25}
        defaultRating={0}
        onSetRating={setMovieRating}
      />
      <p>
        This Movie was rated <b>{movieRating}</b> stars!
      </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <StarRating
      maxRating={6}
      defaultRating={4}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing", "Excellent"]}
    />
    <StarRating color="green" size={24} className="test" defaultRating={3} /> */}

    <Test />
  </React.StrictMode>
);
