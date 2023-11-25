import { useEffect } from "react";

const PartJs = () => {
  useEffect(() => {
    const sayHello = () => {
      console.log("ahoj");
    };
    document.querySelector("#btn")?.addEventListener("click", sayHello);
  }, []);
  return (
    <>
      <h2>JS</h2>
      <section>
        <h3>6. Pozdrav</h3>
        <button id="btn">Pozdravit</button>
      </section>
    </>
  );
};
export default PartJs;
