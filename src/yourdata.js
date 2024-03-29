// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css3.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/JavaScript.svg"
import designIcon from "./images/Figma.svg"
import redux from "./images/Redux.svg"
import sass from "./images/Sass.svg"
import node from "./images/Node.svg"
import next from "./images/NextJS.svg"
import gatsby from "./images/Gatsby.svg"
import sanity from "./images/logos_sanity.svg"
import d3 from "./images/logos_d3.svg"
import mongodb from "./images/mongodb-icon.svg"
// import ts from "./images/typescript.svg"
// import postgres from "./images/logos_postgresql.svg"
// import go from "./images/vscode-icons_file-type-go.svg"

// projects Icon
import reduxGame from "./images/reduxCardGame.png"
import chatApp from "./images/chatApp.png"
import projectMgm from "./images/projectManager.png"
import landingPage from "./images/landingPage.png"
import BeatsUp from "./images/BeatsUp.png"
import GatsbyPortfolio from "./images/gatsbyPortfolio.png"
// Social Icon
import githubIcon from "./images/github.svg"
import profilePic from "./images/profilePic.png"
import linkedin from "./images/Linkedin.svg"
import twitter from "./images/twitter.svg"
// Company Icon
import Wipro from "./images/wipro.png"
import metricstream from "./images/metricstream.png"
import MakseGroup from "./images/MakseGroup.png"
import { formatDistanceToNow } from "date-fns"

const yearsOfExperience = formatDistanceToNow(new Date(2018, 6, 2), {
  addSuffix: false,
})

export default {
  //   Header Details ---------------------
  name: "Sujoy",
  headerTagline: [
    //Line 1 For Header
    "Building Stunning Apps",
    //Line 2 For Header
    "UI/UX Designer",
    //Line 3 For Header
    "Frontend Developer",
  ],
  headerParagraph: `Highly effective at developing, designing and standardizing designs according to company brand and objectives. Ready to bring ${yearsOfExperience} of related experience to a growth-oriented team.`,
  contactEmail: "sujoyduttajad@gmail.com",

  // End Header Details -----------------------

  // Project Section ------------------------
  projects: [
    {
      title: "React Landing page",
      para:
        "This gorgeous responsive website is a static landing page built with React, styled-components, react-router, and react hooks. All the components are reusable and can be used for any dynamic content. It's fully responsive for all the platforms and hosted in netlify.",
      imageSrc: landingPage,
      url: "https://github.com/sujoyduttajad/Landing-Page-React",
    },
    {
      title: "BeatsUp Music App",
      para:
        "A Design to Development music app for chill lofi-beats genre from scratch, built with React and state managed by Redux. It fetches a list of mp3 files organized in a grid based layout and styled custom SASS & Material-UI components, animation by lotti-interactivity and navigation by react-router.",
      imageSrc: BeatsUp,
      url: "https://cryptic-obscure96-fb3bb1.netlify.app/",
    },
    {
      title: "Join Chat App",
      para:
        "My goal was to build a real-time Chat app that allows users to create their own spaces called room to interact with a group of people and send emojis. This app is build using web sockets that Socket.io uses internally.",
      imageSrc: chatApp,
      url: "https://github.com/sujoyduttajad/Socket.io-Chat-Application",
    },
    {
      title: "Redux Memory Game",
      para:
        "A memory game build with React-Redux core functionalities, this app tests the true skills of an ideatic memory",
      imageSrc: reduxGame,
      url: "https://github.com/sujoyduttajad/Redux-Card-game",
    },
    {
      title: "Project Management Tool",
      para:
        "This app is a Project Management tool with authentication and cloud functionalities where users can create Projects, edit them, delete them, and keep a track of them all in one SPA. To build this I used React, Redux, React-Redux, Thunk, and Firebase. This app will have authentication(sign-up & sign-in) and features like Cloud security, Route Guarding, Cloud functions.",
      imageSrc: projectMgm,
      url: "https://github.com/sujoyduttajad/Project-management-tool",
    },
    {
      title: "Gatsby Portfolio",
      para:
        "A smooth scroll minimalistic dev portfolio built with Gatsby.js used Yarn to manage the packages that includes react-helmet for managing SEO, for animation I used react-reveal and react-scroll, SASS for stylling, a bunch of Gatsby plugins.",
      imageSrc: GatsbyPortfolio,
      url: "https://github.com/sujoyduttajad/Gatsby-portfolio",
    },
  ],

  // End Projects Section -----------------------

  // About Secton --------------
  aboutParaOne: `I'm a skilled Frontend Developer with a passion for transforming business requirements 
    into meaningful tech applications. With a deep understanding of both technology and business, 
    I create user-friendly and visually appealing websites and web applications.
    You can find me on Twitter and GitHub, where I share my latest projects and insights.`,
  aboutParaTwo: `Bringing a total of ${yearsOfExperience} of experience in Frontend development that comprises an impresive tech-stack of Next.js, React, Redux, Node, SASS, MongoDB, JavaScript, HTML, CSS, Bootstrap, Styled-components, Tailwind-css`,
  aboutParaThree:
    "Love to do photography(Landscapes and Cityscapes) also enjoy playing guitar in my free time. As a fun fact I'm learning cooking these days.",
  aboutImage: profilePic,

  //   End About Section ---------------------

  //   Skills Section ---------------
  skills: [
    {
      id: 1,
      header: "HTML",
      img: htmlIcon,
      primaryColor: "#cf4822",
      secondColor: "#ebebeb",
      para: `I have ${yearsOfExperience} of experience in creating websites and apps with HTML, I learned the concepts early but as I develop HTML5 came and continued to explore the standard markup language for the Web.`,
    },
    {
      id: 2,
      header: "CSS",
      img: cssIcon,
      primaryColor: "#1572b6",
      secondColor: "#ebebeb",
      para:
        "CSS is my favourite part of the web, as proper knowledge of CSS can completely change a users perspective. For me styling is always my priority, my experience include from working with basic CSS, modules, SASS, Bootstrap, Material-UI, and Tailwind-CSS.",
    },
    {
      id: 3,
      header: "JavaScript",
      img: jsIcon,
      primaryColor: "#f5de19",
      secondColor: "#000000",
      para: `For ${yearsOfExperience} I have been learning and building a lot of projects, games, and web pages with the amalgamation of JavaScript, HTML, and CSS.`,
    },
    {
      id: 4,
      header: "React",
      img: reactIcon,
      primaryColor: "#00d8ff",
      secondColor: "#fff",
      para: `React is a frontend library based on JavaScript. I like about the way React allows users to focus on creativity and not too much on the base implementation. For the past ${yearsOfExperience} I had build multiple React projects from small games to medium-scale projects which includes a complete react ecosystem.`,
    },
    {
      id: 5,
      header: "Next.js",
      img: next,
      primaryColor: "#262626",
      secondColor: "#f1f1f1",
      para:
        "Another powerful tool is the React based framework called Next.js, I am a big fan of the Next.js features as a product and what it enable devlopers to achieve. Build various applications and even planned, designed & architected a full-scale enterprise web app.",
    },
    {
      id: 6,
      header: "Figma",
      img: designIcon,
      primaryColor:
        "linear-gradient(90deg, rgba(242,78,30,1) 20%, rgba(255,114,98,1) 35%, rgba(162,89,255,1) 62%, rgba(25,188,254,1) 81%, rgba(9,207,131,1) 100%)",
      secondColor: "#fff",
      para:
        "I always has the urge to make things stunning whether it's a website or a photograph. Thus started to learn UI/UX design principles and ultimately designed interfaces resulting in seamless User experience. I have experience in industry specific large-scale to landing pages, mockups and prototypes using Figma and Sketch.",
    },
    {
      id: 7,
      header: "Redux",
      img: redux,
      primaryColor: "#764abc",
      secondColor: "#fff",
      para:
        "When it comes to scalability, I often needed a tool to manage states and get rid off prop-drilling. Redux and Redux-Thunk have helped me a lot with building complex applications. Used Redux in multiple react apps along with an industry-specific customer oriented web app.",
    },
    {
      id: 8,
      header: "Sass",
      img: sass,
      primaryColor: "#cd6799",
      secondColor: "#fff",
      para:
        "SASS or Syntactically Awesome Style Sheets is a preprocessor for CSS, which offers developers to create programmatically stylesheets. I have a fair amount of experience with using SASS features like mixins, modules, partials and extends in building applications.",
    },
    {
      id: 9,
      header: "Node.js",
      img: node,
      primaryColor: "#83cd29",
      secondColor: "#333",
      para:
        "Node.js, an open-source cross-platform runtime environment for executing JavaScript code in the browser. I have used to build numerous API's and full MERN stack applications with Express.js and addressed various backend operations.",
    },
    {
      id: 10,
      header: "Gatsby",
      img: gatsby,
      primaryColor: "#663399",
      secondColor: "#ffffff",
      para:
        "As I explored the React ecosystem I stumbled upon a static site generator based on React called Gatsby JS. I'm still new to it and my learning process continues as I build more projects with Gatsby JS ",
    },
    {
      id: 11,
      header: "MongoDB",
      img: mongodb,
      primaryColor: "#599636",
      secondColor: "#C2BFBF",
      para:
        "Worked on numerous projects integrating MongoDB Node.js driver with Express and also using the mongosh tool to test data sets",
    },
    {
      id: 12,
      header: "Data Viz",
      img: d3,
      primaryColor:
        "linear-gradient(123.31deg, #B84E51 11.09%, #F68E48 101.19%)",
      secondColor: "#f1f1f1",
      para:
        "D3.js is an open-source JavaScript library that I have used for building lot of charts and graphs which gave me a lot of knowledge on data-handling and data visualisation",
    },

    // {
    //   id: 14,
    //   header: "PostgreSQL",
    //   img: postgres,
    //   primaryColor: "#336791",
    //   secondColor: "#fff",
    //   para: "",
    // },
    // {
    //   id: 15,
    //   header: "TypeScript",
    //   img: ts,
    //   primaryColor: "#3178C6",
    //   secondColor: "#f1f1f1",
    //   para: "",
    // },
  ],

  // ----- End Skills Section --------------------------

  //   Work History Section --------------------------

  promotionHeading: "Work History",
  workHistory: [
    {
      title: "Dec 2020 - Present",
      cardTitle: "Makse Services Pvt. Ltd.",
      cardSubtitle: "Frontend Developer, (Location - Bangalore, Karnataka)",
      cardDetailedText: [
        " Currently working as a Front End Developer and UI designer on an AI enabled Performance management application based on the client requirements.",
        " Employed user-oriented visuals and features using front-end frameworks like Next.js(a React based Framework) to provide increased dynamic web-based performance.",
        " Built user interfaces, sitemaps, wireframes, mockups, prototypes using Figma , data visualizations using D3.js",
        " Enabled CRUD operations with Next.js SSR and PostgreSQL database and designed schema for the databse for all the dynamic entities",
        " Tech Stack I worked on are - Next.js, React hook form, Material-UI, React-DnD, Redux, Redux-Thunk, PostgreSQL, Node, and designed overall user experience, resulting in a 36% increase in sales.",
        " Achieved the individual contribution award or Pineapple award by completing 100% target on delivering a fantastic result on a complex project.",
        " Managed full-cycle design tasks, handling phases from conception to completion while maintaining guidelines throughout.",
      ],
      url: MakseGroup,
    },
    {
      title: "June 2019 - July 2020",
      cardTitle: "MetricStream",
      cardSubtitle: "Frontend Developer, (Location - Bangalore, Karnataka)",
      cardDetailedText: [
        "Collaborated with stakeholders during development processes to confirm creative proposals and design best practices.",
        "Adhered to internal risk control and liability mitigation guidelines.",
        "Boosted web traffic by improving accessibility, User Interface and User Experience.",
        "Developed user-oriented visuals and features using front-end technologies like JavaScript, HTML5, CSS3, Bootstrap, Node.js, Express, React-Redux, RESTful services to define business logic that generates robust user experience, thus improving configurability of Governance, Risk, and Compliance Applications by 70% and increases customer satisfaction by 25%.",
        "Consulted with customers to gather requirements and discuss design choices.",
        "Worked in Agile-driven environment comprising of Atlassian products like Confluence and Jira and DevOps tools like Docker and Jenkins to effectively maintain project timelines and utilize available resources.",
      ],
      url: metricstream,
    },
    {
      title: "July 2018 - May 2019",
      cardTitle: "Wipro Technologies",
      cardSubtitle: "Project Engineer, (Location - Bangalore, Karnataka) ",
      cardDetailedText: [
        "Worked on Enterprise Content Management (ECM) and delivered dynamic content 16% faster. Built HTML templates using Pug(JADE) for client-based application.",
        "Contributed to Document generation of insurance clients with Papyrus tool and construction of input responses in SOMS by increasing customer satisfaction. Tech stack consists of JavaScript, SOAP UI, HTML, CSS, Bootstrap, JADE(PUG), Node, and Express.",
        "Prepared variety of different written communications, reports and documents to ensure smooth operations.",
      ],
      url: Wipro,
    },
  ],
  //    End Work History Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    {
      img: githubIcon,
      url: "https://github.com/sujoyduttajad",
    },
    {
      img: linkedin,
      url: "https://www.linkedin.com/in/sujoy-dutta-b41746a9/",
    },
    {
      img: twitter,
      url: "https://twitter.com/SujoyDutta4290",
    },
  ],

  // End Contact Section ---------------
}
