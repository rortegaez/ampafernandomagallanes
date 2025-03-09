import { Link, useLocation } from "react-router-dom";
import { useRecovery } from "../hooks/useRecovery.js";

import "./css/newsActivities.css";

export const News = () => {
  const { pathname } = useLocation();
  const { news } = useRecovery({ pathname });

  return (
    <>
      <h1>Noticias</h1>
      <div className="textContainer">
        {news.map((items) => (
          <Link to={`/news/${items.ident}`} key={items.ident}>
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
