import { Outlet } from "react-router-dom";
import { Footer } from "../mainElement/Footer";
import { Header } from "../mainElement/Header";
import { Nav } from "../mainElement/Nav";

export const Layout = () => {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
