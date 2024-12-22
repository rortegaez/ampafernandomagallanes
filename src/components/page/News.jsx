import { useEffect, useState } from "react";

import ARTICULOS from "../article/articulos.js";

import "./css/news.css";

export const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const recoveryNews = () => {
      const recoveryArticles = ARTICULOS.filter(
        (element) => element.description === "news"
      );
      setNews(recoveryArticles);
    };
    recoveryNews();
  }, []);
  return (
    <>
      <h1>News</h1>
      <div className="newsContainer">
        {news.map((items) => (
          <div key={items.ident} className="news">
            <h2>{items.title}</h2>
            {items.body.map((item) => (
              <p key={item}>{item}</p>
            ))}
            <div>
              {items.image?.map((imgs) => (
                <img src={imgs} alt="photo" key={imgs} className="imgNews" />
              ))}
            </div>
            <h5>{items.date}</h5>
          </div>
        ))}
      </div>
    </>
  );
};
