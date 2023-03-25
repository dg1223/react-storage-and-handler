import React, { useEffect, useState } from "react";
import Cosmetic from "../Cosmetic/Cosmetic";
// import { add } from "../../utilities/calculate";
// import add from "../../utilities/calculate";

const Cosmetics = () => {
  const [cosmetics, setCosmetics] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCosmetics(data));
  }, []);
  /* const cosmetics = [
    {
      id: "641e7d3b03c06978a258f2b6",
      price: 366,
      name: "Baker Colon",
    },
    {
      id: "641e7d3b8b846faa1526a827",
      price: 22,
      name: "April Owens",
    },
    {
      id: "641e7d3b70d1f02942409af3",
      price: 289,
      name: "Jimenez Dillon",
    },
    {
      id: "641e7d3b6695bdf38cbe2f46",
      price: 420,
      name: "Guzman Powers",
    },
    {
      id: "641e7d3bf283b28c1399e0d7",
      price: 214,
      name: "Ann Taylor",
    },
    {
      id: "641e7d3b1d1d426826debfb6",
      price: 348,
      name: "Gilliam Burton",
    },
    {
      id: "641e7d3b32ea79de3e97402a",
      price: 450,
      name: "Vasquez Rice",
    },
  ]; */
  /* const first = 55;
  const second = 66;
  const total = add(first, second); */
  return (
    <div>
      <h1>Welcome to my cosmetics store</h1>
      {/* <p>Total: {total}</p> */}
      {cosmetics.map((cosmetic) => (
        <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>
      ))}
    </div>
  );
};

export default Cosmetics;
