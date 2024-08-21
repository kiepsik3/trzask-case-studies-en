import React, { useEffect, useState } from "react";
import jsonp from "jsonp";
import monster from "../../assets/img/monsterNewsletter.svg";
import monsterDown from "../../assets/img/monsterNewsletterDown.svg";
import { ReactComponent as Arrow } from "../../assets/img/arrow.svg";
import "./newsletter.less";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("typing");
  const [termsOfConditions, setTermsOfConditions] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setWidth(window.innerWidth);
      });
    };
  }, []);

  const isMobile = width < 768;

  const onSubmit = (e) => {
    e.preventDefault();
    const url =
      "https://trzask.us12.list-manage.com/subscribe/post?u=6f64c1c2d6aee545eabb88d69&amp;id=83049566fd&amp;f_id=0047eee3f0";
    jsonp(`${url}&EMAIL=${email}`, { param: "c" }, (_, data) => {
      if (data.result === "success") {
        setStatus("success");
      } else {
        setStatus("error");
      }
    });
  };

  return (
    <div className="newsletter-wrapper">
      <div className="container newsletter">
        {status === "typing" ? (
          <>
            <div className="info">
              <h2>
                Sign in
                <br />
                to our newsletter!
              </h2>
              <p>Discover a handful of Trzask's crazy ideas.</p>
            </div>
            <img src={isMobile ? monsterDown : monster} alt="monster" />
            <form onSubmit={onSubmit}>
              <input
                type="email"
                name="EMAIL"
                placeholder="Your e-mail"
                required
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <button
                type="submit"
                disabled={!termsOfConditions || email.length === 0}
              >
                Subscribe
                <Arrow />
              </button>
              <div className="checkbox">
                <input
                  checked={termsOfConditions}
                  id="terms"
                  name="terms"
                  onChange={() => setTermsOfConditions(!termsOfConditions)}
                  type="checkbox"
                  required
                />
                <label htmlFor="terms">
                  I accept{" "}
                  <a href="/Trzask_NewsletterTerms.pdf" target="_blank">
                    Terms and Conditions
                  </a>{" "}
                  and{" "}
                  <a href="/Trzask_PolitykaBezpieczenstwa.pdf" target="_blank">
                    Privacy Policy
                  </a>
                </label>
              </div>
            </form>
          </>
        ) : status === "success" ? (
          <div className="info status mx-auto text-center">
            <h2>Thank you!</h2>
            <p>You have been successfully subscribed to our Newsletter.</p>
          </div>
        ) : (
          <div className="info status mx-auto text-center">
            <h2>Ups!</h2>
            <p>Something went wrong. Try again later.</p>
          </div>
        )}
      </div>
    </div>
  );
}
