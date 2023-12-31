import LightSwitch from "../LightSwitch";

const PartReact = () => (
  <>
    <h2>React</h2>
    <section>
      <h3>12. Komunikace rodič → dítě</h3>
      <p>{"B. Skrze props dítěte"}</p>
    </section>
    <section>
      <h3>13. useEffect hook</h3>
      <p>
        {`C.
        useEffect(() => {
          console.log("Hello!")
        }, [])`}
      </p>
    </section>
    <section>
      <h3>14. Vypínač světla</h3>
      <LightSwitch />
    </section>
  </>
);
export default PartReact;
