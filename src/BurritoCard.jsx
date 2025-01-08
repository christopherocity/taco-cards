import PropTypes from "prop-types";

import AddToOrderButton from "./AddToOrderButton";

const BurritoCard = ({ namePrefix, image }) => {
  return (
    <div className="flex flex-col w-56 bg-white p-4 mx-2">
      <a href="/" className="mb-3 text-lg text-black underline">
        {namePrefix} Taco
      </a>

      <img src={image} className="h-full object-contain" alt="delicious taco" />

      <AddToOrderButton />
    </div>
  );
};

BurritoCard.propTypes = {
  namePrefix: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default BurritoCard;
