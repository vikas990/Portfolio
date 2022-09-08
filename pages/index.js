import About from "../components/about/About";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Projects from "../components/Projects/Projects";
import Skill from "../components/skill/skill";

export default function Home({ setTheme, theme }) {
  return (
    <>
      <Header setTheme={setTheme} theme={theme} />
      <Nav />
      <About />
      <Skill />
      <Projects />
    </>
  );
}
