import "./style.css";
import PartCss from "../../components/PartCss";
import PartGit from "../../components/PartGit";
import PartJs from "../../components/PartJs";
export const HomePage = () => {
  return (
    <div className="container">
      <header>
        <h1>Maryna Dukhnich - Test</h1>
      </header>
      <main>
        <PartCss />
        <PartGit />
        <PartJs />
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};
