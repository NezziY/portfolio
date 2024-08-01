import Projects from "./components/Projects.jsx";
import ContactForm from "./components/ContactFrom";
import Skills from "./components/Skills";
import Header from "./components/Header.jsx";

function App() {
  return (
    <div className="bg-black text-gray-100 max-w-[1233px] mx-auto">
      <Header />
      <Skills />
      <Projects />
      <ContactForm />
    </div>
  );
}

export default App;
