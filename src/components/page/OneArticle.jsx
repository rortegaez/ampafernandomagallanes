import Gallery from "react-image-gallery";
import { useParams } from "react-router-dom";

import ARTICULOS from "../article/articulos";

import "react-image-gallery/styles/css/image-gallery.css";
import "./css/newsActivities.css";

export const OneArticle = () => {
  const { ident } = useParams();

  const articleOne = ARTICULOS.filter((element) => element.ident === ident);

  if (!articleOne) {
    return <div>Noticia no encontrada</div>;
  }

  return (
    <>
      {articleOne.map((items) => (
        <div key={items.ident}>
          <div>
            <h1>{items.title}</h1>
          </div>
          <div className="textBlock">
            {items.body.map((item) => (
              <p key={item}>{item}</p>
            ))}
            <div className="gallery">
              <Gallery
                items={items.image?.map((imgs) => ({
                  original: imgs,
                  thumbnail: imgs,
                }))}
              />
            </div>
            <h5>{items.date}</h5>
          </div>
        </div>
      ))}
    </>
  );
};
