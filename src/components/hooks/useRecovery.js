import { useEffect, useState } from "react";

import ARTICULOS from "../article/articulos.js";

export function useRecovery({ pathname}) {
  const [news, setNews] = useState([]);
  const [activities, setActivities] = useState([]);

const recoveryNews = () => {
  const recoveryArticle = ARTICULOS.filter((element) => element.description === 'news');
  return setNews(recoveryArticle)
}

const recoveryActivities = () => {
  const recoveryArticle = ARTICULOS.filter((element) => element.description === 'activities');
  return setActivities(recoveryArticle)
}

useEffect(() => {

  if (pathname === '/news') {
    recoveryNews()
  } else if (pathname === '/activities') {
    recoveryActivities()
  }
}, [pathname])

  return { news, activities }
}