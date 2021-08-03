import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.description}>
        <h2>Project Description</h2>
        <p>
          The Field of cryptocurrencies has expanded dramatically since the
          first cryptocurrency was launched over a decade ago, and the next
          great digital currency may be released tomorrow, so you never know. A
          CrptoTracker is a digital platform, that enables you as an investor to
          keep track of your different coins for every change so you can manage
          your coins accordiingly.
        </p>
      </div>

      <div className={classes.technology}>
        <h2> Technology Used:</h2>
        <div className={classes["tech-list"]}>
          <p>Core React Features</p>
          <p>React Hooks</p>
          <p>Redux, React-redux</p>
          <p>
            Axios -
            <a
              href="https://www.coingecko.com/en/api#explore-api"
              target="_blank"
            >
              {" "}
              Coin geeko Apis
            </a>
          </p>
          <p>CSS Modules</p>
          <p>
            <a href="https://www.chartjs.org/" target="_blank">
              Chart js
            </a>
          </p>
        </div>
      </div>

      <div className={classes.connect}>
        <h2>Connect with me</h2>
        <h3>Shreyash Shrivastava</h3>

        <p>
          <a
            href="https://www.linkedin.com/in/shreyash-shrivastava-018431190/"
            target="_blank"
          >
            <i className="fab fa-linkedin-in"></i> <span>Linkedin</span>
          </a>
        </p>
        <p>
          <a href="https://github.com/Shreyash0409" target="_blank">
            <i class="fab fa-github"></i>
            <span>Github</span>
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
