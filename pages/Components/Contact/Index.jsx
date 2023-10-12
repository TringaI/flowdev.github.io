import style from "../../../styles/index.module.scss";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const placeholders = ["Name...", "Email...", "Phone number"];
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

  const indexRef = useRef(null);
  const [isComponentVisible, setIsComponentVisible] = useState(false);

  const [oneTime, setIsOneTime] = useState(false);

  // Intersection Observer callback function
  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsComponentVisible((prevState) => {
          // Set isComponentVisible to true if it's not true already
          if (!prevState) {
            setIsOneTime(true); // Set oneTime to true
            return true;
          }
          return prevState;
        });
      } else {
        setIsComponentVisible(false);
      }
    });
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (indexRef.current) {
      observer.observe(indexRef.current);
    }

    return () => {
      if (indexRef.current) {
        observer.unobserve(indexRef.current);
      }
    };
  }, []);

  return (
    <main
      className={`mt-40  md:mt-60 `}
      id="contact us"
      ref={indexRef}
    >
      <div className={`w-full flex flex-col justify-center items-center transition linear delay-0 duration-[1.5s]  ${(isComponentVisible || oneTime) ? 'opacity-100':'opacity-0' } ${style.lines} ${style.services_main_containers} `} ref={indexRef}>
        <div className="w-[80%] md:w-[45%]">
          <div className={`flex flex-col justify-center items-center w-full }`}>
            <div className="flex justify-center items-center relative w-full">
              <h1 className={`${style.primary_headings} absolute bg-black p-[10px] left-0`}>get in touch</h1>
              <hr className="bg-white opacity-20 h-[1px] w-[100%]" />
            </div>
            <div className="flex justify-end w-full">
              <h2 className={style.secondary_headings}>
                get your company online <b>now</b>{" "}
              </h2>
            </div>
            <br />

            <form ref={form} onSubmit={sendEmail} className="w-full flex flex-col justify-center items-center">
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
                  placeholder="Message..."
                  name="message"
                />
              </div>

              <input className={style.send} type="submit" value="SEND" />
            </form>
          </div>
        </div>
      </div>

    </main>
  );
}