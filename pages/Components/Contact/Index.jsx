import style from "../../../styles/index.module.scss";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const placeholders = ["NAME...", "EMAIL...", "PHNOE NUMBER"];
  const transformString = (str) =>
    str
      .toLowerCase()
      .replace(/\s/g, "_")
      .replace(/\.{3}$/g, "");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ac25utl",
      "template_35f4jt8",
      form.current,
      "De_B595zmkhJF9wPM"
    );

    e.target.reset();
  };

  const [scrollTop, setScrollTop] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 1000) {
      setScrollTop(window.scrollY >= 1900);
    } else {
      setScrollTop(window.scrollY >= 2300);
    }
  };

  useEffect(() => {
    handleResize(); // Initial setup
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.addEventListener("scroll", handleResize);
    };
  }, []);
  return (
    <main
      className={scrollTop ? style.after_scroll : style.before_scroll}
      id="contact us"
    >
      <div className={`flex w-full ${style.center}`}>
        <div className={`${style.flex_coulmn}  ${style.center}`}>
          <h1 className={style.primary_headings}>CONTACT US</h1>
          <h2 className={style.secondary_headings}>
            get your company online <b>now</b>{" "}
          </h2>
          <br />

          <form ref={form} onSubmit={sendEmail}>
            {placeholders.map((key) => (
              <div key={key} className={`${style.contact_input_container}`}>
                <input
                  className={`w-full ${style.contact_input}`}
                  placeholder={key}
                  name={transformString(key)}
                />
              </div>
            ))}
            <div
              className={`${style.contact_input_container} ${style.message_container}`}
            >
              <input
                className={`w-full ${style.contact_input} ${style.message}`}
                placeholder="MESSAGE..."
                name="message"
              />
            </div>

            <input className={style.send} type="submit" value="SEND" />
          </form>
        </div>
      </div>
    </main>
  );
}