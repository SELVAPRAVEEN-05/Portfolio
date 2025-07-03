
import AboutUs from "./aboutUs/page";
import ContactUs from "./contactUs/page";
import Home from "./home/page";
import Projects from "./projects/page";
import Skills from "./skills/page";

export default function Page() {
  return (
    <div>
      <section id="home"><Home /></section>
      <section id="about"><AboutUs /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><ContactUs /></section>
    </div>
  );
}

