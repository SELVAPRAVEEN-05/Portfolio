
import AboutUs from "./aboutUs/page";
import ContactUs from "./contactUs/page";
import Home from "./home/page";
import Projects from "./projects/page";
import Skills from "./skills/page";

export default function Page() {
  return (
    <div>
      <Home />
      <AboutUs />
      <Skills />
      <Projects />
      <ContactUs />
      {/* Add more components or pages as needed */}
    </div>
  );
}
