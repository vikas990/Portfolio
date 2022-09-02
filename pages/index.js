import About from "../components/about/About";
import Header from "../components/Header/Header";
import Skill from "../components/skill/skill";

export default function Home({ setTheme, theme }) {
  return (
    <>
      <Header setTheme={setTheme} theme={theme} />
      <About />
      <Skill />
    </>
  );
}
