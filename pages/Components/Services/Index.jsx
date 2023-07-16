import style from "../../../styles/index.module.scss";
import Image from "next/image";
import { serviceData } from "../../../src/data/services/service_data";
import { useState, useEffect } from "react";

export default function Services() {
  const [activeCard, setActiveCard] = useState("Website Development");

  const handleCardClick = (name) => {
    setActiveCard(name);
  };

  const activeService = serviceData.find(
    (service) => service.name === activeCard
  );



  const [scrollTop, setScrollTop] = useState();

 

  const handleResize = () => {
    if (window.innerWidth < 1200) {
      setScrollTop(window.scrollY >= 10);

      console.log('first')
    } else {
    setScrollTop(window.scrollY >= 500);

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
    <div id="our services" className={`${scrollTop ? style.after_scroll : style.before_scroll}`}>
      <main  className={`${style.services_mobile} ${style.services_container} ${scrollTop ? style.after_scroll : style.before_scroll}`}>
        <h1 className={style.primary_headings}>OUR SERVICES</h1>
        <br />
        <div className="grid grid-cols-1 gap-4">
          {serviceData.map((service) => (
            <div
              key={service.nameMobile}
              className={`${style.card_container} `}
              style={{
                backgroundImage: activeCard === service.name ? `linear-gradient( to right, rgb(10 19 29), rgba(10, 19, 29, 0) 95%)` : "",
                transform: activeCard === service.name ? "scale(1.05)" : "",
              }}
              onClick={() => handleCardClick(service.name)}
            >
              <Image id="targetDiv"
                className={style.services_cards_logos}
                src={service.imageSrc}
                alt={service.nameMobile}
                width={50}
                height={50}
              ></Image>

              <h2 className={`${style.card_header}`}>{service.nameMobile}</h2>

              <p
                style={{
                  whiteSpace: "break-spaces",
                  margin: "0 auto",
                  textAlign: "center",
                  color: "#eee",
                }}
              >
                {service.description.textMobile}
              </p>
            </div>
          ))}
        </div>
      </main>

      <main className={`${style.services_desktop} ${style.services_container}`}>
        <h1 className={style.primary_headings}>OUR SERVICES</h1>

        <div className="grid grid-cols-2 grid-rows-1">
          <div className="grid grid-cols-1 grid-rows-4 ">
            {serviceData.map((service) => (
              <div
                key={service.name}
                className={`${style.card_container} `}
                style={{
                  backgroundImage: activeCard === service.name ? `linear-gradient( to right, rgb(10 19 29), rgba(10, 19, 29, 0) 95%)` : "",
                  transform: activeCard === service.name ? "scale(1.05)" : "",
                }}
                onClick={() => handleCardClick(service.name)}
              >
                <Image
                  className={style.services_cards_logos}
                  src={service.imageSrc}
                  alt={service.name}
                  width={50}
                  height={50}
                ></Image>

                <h2 className={`${style.card_header}`}>{service.name}</h2>
              </div>
            ))}
          </div>

          <div className={`${style.description}`}>
            {/* <h1 className={`${style.title}`}>
              {activeService.description.title}
            </h1> */}
            <p className={`${style.subtitle}`}>
              {activeService.description.text}
            </p>
            <br />
            <ul className={`${style.features_list}`}>
              {activeService.description.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
