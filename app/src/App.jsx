import { Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import Story from "./pages/Story.jsx";
import Mission from "./pages/Mission.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/story" element={<Story />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}
