import PropTypes from "prop-types";

import AddToOrderButton from "./AddToOrderButton";

const TacoCard = ({ namePrefix, image }) => {
  return (
    <div className="flex flex-col w-56 bg-white p-4 mx-2">
      <img src={image} className="h-full object-contain" alt="delicious taco" />
      <a href="/" className="mt-3 text-lg text-black underline">
        {namePrefix} Taco
      </a>
      <AddToOrderButton />
    </div>
  );
};

TacoCard.propTypes = {
  namePrefix: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default TacoCard;
