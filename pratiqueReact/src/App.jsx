import { AboutPage } from "./app/about/aboutPage";
import { HomePage } from "./app/homePage";
import { NavBar } from "./components/layout/navBar";
import "./index.css";
import { Routes, Route } from "react-router";
import { NotFoundPage } from "./app/notFound/notFoundPage";


export default function App() {
  return (
   <>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
   </>
  );
}
