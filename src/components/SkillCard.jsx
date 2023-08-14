import React from "react";

const pastelColors = [
  "#B39DDB",
  "#81C784",
  "#FFD54F",
  "#90A4AE",
  "#FFCC80",
  "#A5D6A7",
  "#FFAB91",
  "#FF80AB",
  "#FFD180",
  "#80CBC4",
  "#C5E1A5",
  "#FF9E80",
  "#E6EE9C",
  "#B2DFDB",
  "#FFCDD2",
  "#FFE0B2",
  "#80DEEA",
  "#FFCCBC",
  // Add more pastel colors as needed
];

const getRandomAOS = () => {
  const possibleAOS = [
    "fade-right",
    "fade-left",
    "fade-up",
    "fade-down",
    "flip-left",
    "flip-up",
    "flip-right",
    "flip-down",
  ];
  const randomIndex = Math.floor(Math.random() * possibleAOS.length);
  return possibleAOS[randomIndex];
};

const StarRating = ({ rating }) => {
  return (
    <div className="flex justify-center mt-2  mx-auto">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 fill-current ${
            star <= rating ? "text-yellow-500" : "text-gray-300"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 1l2.4 5.6 6.4.5-4.9 4.3 1.5 6.2-5.9-3.6-5.9 3.6 1.5-6.2L1.6 7.1l6.4-.5L10 1z" />
        </svg>
      ))}
    </div>
  );
};

const SkillCard = ({ skill, index }) => {
    
  return (
    <div
      data-aos={getRandomAOS()}
      data-aos-duration="1000"
      style={{ borderTopColor: pastelColors[index % pastelColors.length] }}
      className="text-start border-t-2 md:p-10 rounded shadow-none hover:shadow-2xl hover:ring-2 ring-[#fff] hover:ring-opacity-50 h-[18rem] bg-black "
    >
      <h1 className="text-2xl h-[2rem]">{skill.name}</h1>
      <p className="h-[5rem]">{skill.description}</p>
      <div className="flex items-center h-[5rem] mt-3">
        <div>

        <StarRating rating={skill.rating} />
        </div>
        <img
          src={skill.image}
          alt={`${skill.name} Image`}
          className="w-16 mt-4 mx-auto"
        />
      </div>{" "}
    </div>
  );
};

export default SkillCard;
