import TacoCard from "./TacoCard";
import BurritoCard from "./BurritoCard";

import CrunchyTaco from "./assets/CrunchyTaco.jpg";
import ChalupaSupreme from "./assets/ChalupaSupreme.jpg";
import CantinaChickenCrispy from "./assets/CantinaChickenCrispy.jpg";

import BurritoSupreme from "./assets/BurritoSupreme.jpg";
import BeanBurritp from "./assets/BeanBurrito.jpg";

function App() {
  const tacos = [
    {
      id: 1,
      namePrefix: "Crunchy",
      image: CrunchyTaco,
    },
    {
      id: 2,
      namePrefix: "Calupa Supreme",
      image: ChalupaSupreme,
    },
    {
      id: 3,
      namePrefix: "Cantina Chicken",
      image: CantinaChickenCrispy,
    },
  ];

  const burritos = [
    {
      id: 1,
      name: "Burrito Supreme",
      image: BurritoSupreme,
    },
    {
      id: 2,
      name: "Bean Burrito",
      image: BurritoSupreme,
    },
  ];

  return (
    <div className="flex gap-x-4 flex-row items-center justify-center h-screen bg-taco-gray text-center">
      {tacos.map(({ namePrefix, image }, index) => {
        return <TacoCard key={index} image={image} namePrefix={namePrefix} />;
      })}
      {burritos.map(({ name, image }, index) => {
        return <BurritoCard key={index} image={image} namePrefix={name} />;
      })}
    </div>
  );
}

export default App;
