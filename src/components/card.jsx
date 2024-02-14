import React from "react";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";

const Card = ({ image, first, last, cell, gender, title }) => {
  const iconColor = gender === "male" ? "text-blue-400" : "text-pink-500";
  const GenderIcon =
    gender === "male" ? (
      <MaleIcon className={iconColor} />
    ) : (
      <FemaleIcon className={iconColor} />
    );
  const genderText = gender === "male" ? "Male" : "Female";

  return (
    <div className="flex rounded-lg shadow-lg bg-white max-w-xl overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out">
      <img
        className="w-48 h-auto rounded-l-lg object-cover transform hover:scale-105 transition-all duration-300 ease-in-out"
        src={image}
        alt={`${first} ${last}`}
      />
      <div className="flex flex-col justify-center px-6 py-4">
        <div className="font-bold text-xl mb-2">{`${title}. ${first} ${last}`}</div>
        <div className="flex items-center mb-2">
          {GenderIcon}
          <p className={`text-gray-700 text-lg ml-2 `}>{genderText}</p>
        </div>
        <p className="text-gray-700 text-lg">{cell}</p>
      </div>
    </div>
  );
};

export default Card;
