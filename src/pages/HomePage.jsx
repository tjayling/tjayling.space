import React, { useEffect, useState } from "react";

const HomePage = () => {
  useEffect(() => {
    createSubtitle("Tom's digital playground.");
  }, []);

  const createWord = (text, index) => {
    const word = document.createElement("span");
    word.innerHTML = `${text} `;
    word.classList.add("card-subtitle-word");
    word.style.transitionDelay = `${index * 60}ms`;
    return word;
  };

  const createSubtitle = (text) => {
    const subtitle = document.querySelector(".card-subtitle");
    text.split(" ").map((word, i) => {
      subtitle.appendChild(createWord(word, i));
    });
  };

  return (
    <div className="page-container">
      <div className="card">
        <div className="card-content">
          <h3 className="card-title">Welcome to tjayling.space</h3>
          <h4 className="card-subtitle"></h4>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
