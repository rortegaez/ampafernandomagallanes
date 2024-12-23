import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ARTICULOS from "../article/articulos.js";

import "./css/newsActivities.css";

export const Activities = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const recoveryNews = () => {
      const recoveryArticles = ARTICULOS.filter(
        (element) => element.description === "activities"
      );
      setNews(recoveryArticles);
    };
    recoveryNews();
  }, []);
  return (
    <>
      <h1>Actividades</h1>
      <div className="textContainer">
        {news.map((items) => (
          <Link to={`/activities/${items.ident}`} key={items.ident}>
            <div key={items.ident} className="textBlock">
              <h2>{items.title}</h2>
              {items.body.map((item) => (
                <p key={item}>{item}</p>
              ))}
              <div>
                {items.image?.map((imgs) => (
                  <img src={imgs} alt="photo" key={imgs} className="imgText" />
                ))}
              </div>
              <h5>{items.date}</h5>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
