import { useEffect, useState } from "react";
import FridgeItem from "../FridgeItem";
import Products from "../Products";

const PartJs = () => {
  const [count, setCount] = useState(0);
  const lednice = [
    {
      name: "Smetana",
      type: "Mléčný výrobek",
      expiration: 12,
    },
    {
      name: "Máslo",
      type: "Mléčný výrobek",
      expiration: 70,
    },
    {
      name: "Rajčata",
      type: "Zelenina",
      expiration: 20,
    },
    {
      name: "Brambory",
      type: "Zelenina",
      expiration: 65,
    },
    {
      name: "Okurky",
      type: "Zelenina",
      expiration: 23,
    },
  ];
  console.log(lednice);
  const handbags = [
    {
      brand: "Guess",
      price: 3600,
    },
    {
      brand: "Chanel",
      price: 225000,
    },
    {
      brand: "Prada",
      price: 65000,
    },
  ];
  useEffect(() => {
    const sayHello = () => {
      console.log("ahoj");
    };
    document.querySelector("#btn")?.addEventListener("click", sayHello);
    const getData = async () => {
      const response = await fetch("https://restcountries.com/v3.1/alpha/cz");
      const data = await response.json();
      setCount(data[0].population);
      console.log(data[0].population);
    };
    getData();
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
      <section>
        <h3>9. Pole objektů</h3>
        {lednice.map((item, i) => (
          <FridgeItem {...item} key={i} />
        ))}
      </section>
      <section>
        <h3>10. Kabelky</h3>
        <Products handbags={handbags} />
      </section>
      <section>
        <h3>11. Počet obyvatel</h3>
        <p>{count}</p>
      </section>
    </>
  );
};
export default PartJs;
