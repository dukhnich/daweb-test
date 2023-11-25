import { useEffect } from "react";
import FridgeItem from "../FridgeItem";

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
      <section>
        <h3>7. Chyba s textContent</h3>
        <p>Vídím několik spůsob:</p>
        <ol>
          <li>
            Pokud nepotřebuju ten prvek dal pojuživat:
            <pre>
              document.querySelector('#title')?.textContent = 'My awesome
              webpage';
            </pre>
          </li>
          <li>
            Pokud potřebuju ten prvek dal pojuživat a dělám to v tělě js
            souboru:
            <pre>
              {`const titleElm = document.querySelector('#title'); 
              if (titleElm) {
                titleElm?.textContent = 'My awesome webpage';
              }`}
            </pre>
          </li>
          <li>
            Pokud dělám to uvnitř funkce:
            <pre>
              {`const titleElm = document.querySelector('#title'); 
              if (!titleElm) {
                return;
              }`}
            </pre>
          </li>
        </ol>
      </section>
      <section>
        <h3>8. Komponenta FridgeItem</h3>
        <FridgeItem name="Smetana" type="Mléčný výrobek" expiration={12} />
      </section>
    </>
  );
};
export default PartJs;
