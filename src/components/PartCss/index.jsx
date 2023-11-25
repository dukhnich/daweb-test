import './style.css'

const PartCss = () => (
  <>
    <h2>CSS</h2>
    <section>
      <h3>1. Barvy</h3>
      <p>B. žlutou</p>
    </section>
    <section>
      <h3>2. Box s kontaktem</h3>
      <div className="box">
        <h2>Kontakt</h2>
        <a href="mailto:info@czechitas.cz">info@czechitas.cz</a>
        <br />
        <a href="https://www.czechitas.cz/cs/kontakt">www.czechitas.cz</a>
        <button className="close">×</button>
      </div>
    </section>
  </>
);
export default PartCss;
