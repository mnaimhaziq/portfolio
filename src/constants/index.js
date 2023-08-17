import recytrack from "../assets/projects/recytrack.png";
import portfolio from "../assets/projects/portfolio.png";
import calculator from "../assets/projects/calculator.png";
import randomquotegenerator from "../assets/projects/randomquotegenerator.png";
import ToDoApp from "../assets/projects/ToDoApp.png"
import weather from "../assets/projects/weather.png";
import react from "../assets/skills/react.png";
import javascript from "../assets/skills/javascript.png";
import css from "../assets/skills/css.png";
import bootstrap from "../assets/skills/bootstrap.png";
import java from "../assets/skills/java.png";
import python from "../assets/skills/python.png";
import spring from "../assets/skills/spring.png";
import angular from "../assets/skills/angular.png";
import git from "../assets/skills/git.png";
import mysql from "../assets/skills/mysql.png";
import mongodb from "../assets/skills/mongodb.png";
import tailwind from "../assets/skills/tailwind.png";
import nodejs from "../assets/skills/nodejs.png";
import aws from "../assets/skills/aws.png";
import flutter from "../assets/skills/flutter.png";

const biography = {
  name: "Muhammad Naim Haziq bin Zulkefle",
  email: "mnaimhaziq@gmail.com",
  title: "Software Engineer",
  description:
    "I am a software engineer with a passion for developing software solutions. I have a strong background in computer science and a strong interest in software engineering. I am currently looking for opportunities to contribute to open-source projects.",
};

const experiences = [
  {
    year: "2023",
    highlight: "Final-year Project",
    iconBg: "#fff",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Navigated challenges to initiate the final-year project - Recycling Tracking System.",
      "Demonstrated expertise in concurrent programming, including multi-threaded operations and diverse concurrency techniques.",
    ],
  },
  {
    year: "2022",
    highlight: "Internship",
    iconBg: "#fff",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Transformative internship at MIMOS Berhad: Contributed to three key projects, enhancing learning curve.",
      "Applied backend skills to integrate multitenancy using Java Spring and Hibernate.",
      "Contributed to database management tasks, gaining hands-on exposure to vital functionalities.",
      "Played a substantial role in frontend development using Angular, complemented by meticulous manual testing for quality assurance understanding.",
    ],
  },
];

const projects = [
  {
    title: "Recycling Tracking System",
    shortDescription:
      "RecyTrack's innovative mobile and web app redefines sustainable practices. Seamlessly track recycling progress, engage with fellow environmental enthusiasts, and play a pivotal role in creating a greener future.",
    longDescription:
      "The Recycling Tracking System is a comprehensive platform designed to streamline and monitor recycling processes. It efficiently manages the entire lifecycle of recyclable materials, from collection and processing to distribution. By providing real-time tracking and data-driven insights, it empowers stakeholders to make informed decisions that promote environmental sustainability. The system leverages technologies such as Java Spring, Hibernate, Angular, and REST APIs to deliver a seamless user experience.",
    image: recytrack,
    githubLink: "https://github.com/mnaimhaziq/RecyTack",
    websiteLink: "https://recytrack.onrender.com/",
    technologiesUsed: ["MERN", "Cloudinary", "Render", "Redux"],
    tags: [
      "Environmental Sustainability",
      "Resource Management",
      "Web Application",
    ],
    type: "big",
  },
  {
    title: "My Website Portfolio",
    shortDescription:
      "Crafting blazing-fast web applications using React-Vite. Elevate user experiences with rapid loading, smooth animations, and responsive design.",
    longDescription:
      "Experience the cutting-edge world of high-performance web applications with the Naim Portfolio's React-Vite project. We're dedicated to pushing the boundaries of user experiences by harnessing the power of React-Vite's lightning-fast development environment. Our approach revolves around crafting web applications that prioritize rapid loading times, smooth animations, and responsive design across devices. By seamlessly integrating React's components and Vite's advanced build system, we deliver web apps that stand out in today's digital landscape. From optimizing rendering to leveraging server-side rendering (SSR) for SEO benefits, we ensure your app not only looks great but performs brilliantly. Join us in redefining web app performance with React-Vite.",
    image: portfolio,
    githubLink: "https://github.com/mnaimhaziq/portfolio",
    websiteLink: "https://mnaimhaziq.onrender.com",
    technologiesUsed: ["React", "Vite", "JavaScript"],
    tags: [
      "Web Application",
      "React",
      "Vite",
      "Performance",
      "Frontend Development",
    ],
    type: "small",
  },
  {
    title: "ToDo Flutter App",
    shortDescription: "Experience a new level of organization and productivity in your daily life with TaskMaster, the top-notch Flutter-based ToDo app designed to simplify task management and supercharge your efficiency.",
    longDescription: "Elevate your productivity and effectively manage your tasks with TaskMaster, a cutting-edge Flutter-based ToDo app. Seamlessly create, track, and prioritize tasks through an intuitive user interface. Powered by Flutter framework, TaskMaster offers a sleek design and smooth user experience, making task management a breeze.",
   image: ToDoApp,
    githubLink: "https://github.com/mnaimhaziq/todo_app",
    technologiesUsed: ["Flutter"],
    tags: ["Flutter"],
    type: "small",
  },
  {
    title: "Weather App",
    shortDescription: "Stay informed and be weather-ready with the Weather App. Get real-time updates, accurate forecasts, and all the weather information you need at your fingertips.",
    longDescription: "Experience weather tracking like never before with the Weather App. Seamlessly check current conditions, forecasts, and detailed weather data through an intuitive interface. Whether you're planning outdoor activities or just curious about the forecast, the Weather App has you covered with reliable information and a user-friendly experience.",
    image: weather,
    githubLink: "https://github.com/yourusername/weather-app",
    technologiesUsed: ["React", "TypeScript", "WeatherAPI"],
    tags: ["Weather", "Forecasting", "React", "TypeScript"],
    type: "small",
    },
  {
    title: "Simple Calculator",
    shortDescription:
      "Perform calculations swiftly with this interactive web calculator. A user-friendly interface for basic arithmetic.",
    longDescription:
      "Experience quick and easy arithmetic operations with this interactive web calculator. The user-friendly interface allows you to perform addition, subtraction, multiplication, and division effortlessly. Built with HTML, CSS, and vanilla JavaScript, it's a handy tool for your everyday calculations.",
    image: calculator,
    websiteLink: "https://codepen.io/Naim-Haziq/pen/oNQKpLK",
    technologiesUsed: ["HTML", "CSS", "JavaScript"],
    tags: ["HTML", "CSS", "JavaScript", "Frontend Development"],
    type: "small",
  },
  {
    title: "Random Quote Generator",
    shortDescription:
      "Get inspired with this interactive web quote generator. Instantly fetch and display random quotes at the click of a button.",
    longDescription:
      "Discover inspiration through random quotes with this interactive web quote generator. Click a button to instantly fetch and display insightful quotes. Crafted using HTML, CSS, and vanilla JavaScript, it's a perfect tool for sparking creativity and contemplation.",
    image: randomquotegenerator,
    websiteLink: "https://codepen.io/Naim-Haziq/pen/RwqbRxL",
    technologiesUsed: ["HTML", "CSS", "JavaScript"],
    tags: ["HTML", "CSS", "JavaScript", "Frontend Development"],
    type: "small",
  },
  
];

const skills = [
  {
    name: "React.js",
    description:
      "Master the art of building dynamic user interfaces with React.js. Develop reusable components, manage state effectively, and create lightning-fast applications.",
    image: react,
    rating: 5,
    type: "Frontend",
  },
  {
    name: "React Native",
    description:
      "Dive into the world of mobile app development with React Native. Build cross-platform apps that share code and deliver native-like experiences.",
    image: react,
    rating: 4,
    type: "Frontend",
  },
  {
    name: "Node.js",
    description:
      "Harness the power of JavaScript on the server side with Node.js. Build scalable and efficient network applications.",
    image: nodejs,
    rating: 4,
    type: "Backend",
  },
  {
    name: "Tailwind CSS",
    description:
      "Craft stylish, responsive, and efficient UIs with Tailwind CSS. Rapidly build modern designs using utility-first classes.",
    image: tailwind,
    rating: 4,
    type: "Frontend",
  },
  {
    name: "MongoDB",
    description:
      "Learn the NoSQL database technology MongoDB to store, manage, and retrieve data for your applications.",
    image: mongodb,
    rating: 4,
    type: "Database",
  },
  {
    name: "MySQL",
    description:
      "Become proficient in MySQL, a popular relational database, for managing structured data.",
    image: mysql,
    rating: 4,
    type: "Database",
  },
  {
    name: "Java",
    description:
      "Master Java programming to build robust backend systems, desktop applications, and Android apps.",
    image: java,
    rating: 4,
    type: "Language",
  },
  {
    name: "Python",
    description:
      "Dive into the versatile world of Python and build everything from web applications to data analysis scripts.",
    image: python,
    rating: 3,
    type: "Language",
  },
  {
    name: "JavaScript",
    description:
      "Explore the core programming language of the web. Build interactive and dynamic websites with JavaScript.",
    image: javascript,
    rating: 4,
    type: "Language",
  },
  {
    name: "AWS",
    description:
      "Become skilled in Amazon Web Services (AWS) to deploy, manage, and scale applications on the cloud.",
    image: aws,
    rating: 1,
    type: "DevOps",
  },
  {
    name: "Flutter",
    description:
      "Create beautiful and fast cross-platform apps using Google's UI toolkit, Flutter.",
    image: flutter,
    rating: 3,
    type: "Frontend",
  },
];

export { biography, experiences, projects, skills };
