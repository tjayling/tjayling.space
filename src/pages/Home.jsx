import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  useEffect(() => {
    createSubtitles(
      document.querySelector(".card-subtitle"),
      "Tom's digital playground ."
    );
    createSubtitles(
      document.querySelector(".link-title"),
      "More this way . . ."
    );
  });

  const createWord = (text, index) => {
    const word = document.createElement("span");
    word.innerHTML = `${text} `;
    word.classList.add("card-subtitle-word");
    word.style.transitionDelay = `${index * 60}ms`;
    return word;
  };

  const createSubtitles = (element, text) => {
    text.split(" ").map((word, i) => element.appendChild(createWord(word, i)));
  };

  return (
    <div className="page-container">
      <div className="card">
        <div className="card-content">
          <h3 className="card-title">Welcome to tjayling.space</h3>
          <h4 className="card-subtitle"> </h4>
          <Link to={`/about`} className="link about-link">
            <h4 className="link-title"> </h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
