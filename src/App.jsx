import Projects from "./components/Projects.jsx";
import ContactForm from "./components/ContactFrom";
import Skills from "./components/Skills";
import Header from "./components/Header.jsx";

function App() {
  return (
    <div className="bg-zinc-950 text-gray-200 max-w-[1233px] mx-auto">
      <Header />
      <Skills />
      <Projects />
      <ContactForm />
    </div>
  );
}

export default App;
