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
  //   Header Paragraph
  headerParagraph:
    `Highly effective at developing, designing and standardizing designs according to company brand and objectives. Ready to bring ${yearsOfExperience} of related experience to a growth-oriented team.`,

  //Contact Email
  contactEmail: "sujoyduttajad@gmail.com",

  // End Header Details -----------------------

  // Project Section ------------------------
  projects: [
    {
      title: "React Landing page", //Project Title - Add Your Project Title Here
      para:
        "This gorgeous responsive website is a static landing page built with React, styled-components, react-router, and react hooks. All the components are reusable and can be used for any dynamic content. It's fully responsive for all the platforms and hosted in netlify.",
      //Project Image
      imageSrc: landingPage,
      //Project URL
      url: "https://github.com/sujoyduttajad/Landing-Page-React",
    },
    {
      title: "BeatsUp Music App", //Project Title - Add Your Project Title Here
      para:
        "A Design to Development music app for chill lofi-beats genre from scratch, built with React and state managed by Redux. It fetches a list of mp3 files organized in a grid based layout and styled custom SASS & Material-UI components, animation by lotti-interactivity and navigation by react-router.",
      //Project Image
      imageSrc: BeatsUp,
      //Project URL
      url: "https://cryptic-obscure96-fb3bb1.netlify.app/",
    },
    {
      title: "Join Chat App", //Project Title - Add Your Project Title Here
      para:
        "My goal was to build a real-time Chat app that allows users to create their own spaces called room to interact with a group of people and send emojis. This app is build using web sockets that Socket.io uses internally.",
      //Project Image
      imageSrc: chatApp,
      //Project URL
      url: "https://github.com/sujoyduttajad/Socket.io-Chat-Application",
    },
    {
      title: "Redux Memory Game", //Project Title - Add Your Project Title Here
      para:
        "A memory game build with React-Redux core functionalities, this app tests the true skills of an ideatic memory",
      //Project Image
      imageSrc: reduxGame,
      //Project URL
      url: "https://github.com/sujoyduttajad/Redux-Card-game",
    },
    {
      title: "Project Management Tool", //Project Title - Add Your Project Title Here
      para:
        "This app is a Project Management tool with authentication and cloud functionalities where users can create Projects, edit them, delete them, and keep a track of them all in one SPA. To build this I used React, Redux, React-Redux, Thunk, and Firebase. This app will have authentication(sign-up & sign-in) and features like Cloud security, Route Guarding, Cloud functions.",
      //Project Image
      imageSrc: projectMgm,
      //Project URL
      url: "https://github.com/sujoyduttajad/Project-management-tool",
    },
    {
      title: "Gatsby Portfolio", //Project Title - Add Your Project Title Here
      para:
        "A smooth scroll minimalistic dev portfolio built with Gatsby.js used Yarn to manage the packages  that includes react-helmet for managing SEO, for animation I used react-reveal and react-scroll, SASS for stylling, a bunch of Gatsby plugins.",
      //Project Image
      imageSrc: GatsbyPortfolio,
      //Project URL
      url: "https://github.com/sujoyduttajad/Gatsby-portfolio",
    },
  ],

  // End Projects Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "I'm a geeky programmer and an enthusiastic learner. A Goal-oriented Web Developer who brings a strong commitment to collaboration and solutions-oriented problem-solving in Frontend Development and UI/UX design. I am always looking forward to building something thought-provoking.",
  aboutParaTwo:
    `Bringing a total of ${yearsOfExperience} of experience in Frontend development that comprises an impresive tech-stack of Next.js, React, Redux, Node, SASS, MongoDB, JavaScript, HTML, CSS, Bootstrap, Styled-components, Tailwind-css`,
  aboutParaThree:
    "Love to do photographeraphy(Landscapes and Cityscapes) also enjoy playing guitar in my free time. As a fun fact I'm learning cooking these days.",
  aboutImage: profilePic,

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      id: 1,
      header: "HTML",
      img: htmlIcon,
      primaryColor: "#cf4822",
      secondColor: "#ebebeb",
      para:
        `I have ${yearsOfExperience} of experience in creating websites and apps with HTML, I learned the concepts early but as I develop HTML5 came and continued to explore the standard markup language for Web pages.`,
    },
    {
      id: 2,
      header: "CSS",
      img: cssIcon,
      primaryColor: "#1572b6",
      secondColor: "#ebebeb",
      para:
        "CSS is my favourite piece of the web to work styling is always my priority, from working with basic CSS and modules to SASS, Bootstrap, Material-UI, and Tailwind-CSS all need continued learning progression on this vast field.",
    },
    {
      id: 3,
      header: "JavaScript",
      img: jsIcon,
      primaryColor: "#f5de19",
      secondColor: "#000000",
      para:
        "JavaScript language is the backbone of the web, that's constantly changing and improving its ECMA scripts. Built a lot of projects, games, and web pages with the amalgamation of JavaScript, HTML, and CSS.",
    },
    {
      id: 4,
      header: "React",
      img: reactIcon,
      primaryColor: "#00d8ff",
      secondColor: "#fff",
      para:
        "React is a frontend library based on JavaScript. For the past few years I had build multiple React projects from small games to medium-scale projects which includes a complete react ecosystem.",
    },
    {
      id: 5,
      header: "Next.js",
      img: next,
      primaryColor: "#262626",
      secondColor: "#f1f1f1",
      para:
        "Another powerful tool is the React based framework called Next.js, I am a big fan of the Next.js features as a product thus build various applications and even planned, designed & architected a full-scale enterprise web app.",
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
        "SASS stands for Syntactically Awesome Style Sheets, which is used as a pre-processor for stylling sheets allowing the CSS to be more robust. Highly experienced with SASS in building both medium and large scale applications.",
    },
    {
      id: 9,
      header: "Node.js",
      img: node,
      primaryColor: "#83cd29",
      secondColor: "#333",
      para:
        "Node.js an open-source cross-platform runtime environment for executing JavaScript code other than the browser is the most powerful tool I have used to build numerous API's and full MERN stack applications.",
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
      header: "CMS",
      img: sanity,
      primaryColor: "#f04939",
      secondColor: "#f1f1f1",
      para:
        "Worked with a lot of CMS but Sanity CMS is my personnel favourite as it provides a structured approach to content authoring, providing a concise number of features to manage content",
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
        " Currently working as full-time Front End Developer and UI designer on an AI enabled Performance management application based on the Client requirements.",
        " Developed designs and applications to meet specific requirements, such as AI-enabled products with unique Drag-n-Drop layouts and enhanced Serverless solutions to handle user traffic.",
        " Employed user-oriented visuals and features using front-end frameworks like Next.js and React.js to provide increased dynamic web-based performance.",
        " Built user interfaces, sitemaps, wireframes, mockups, prototypes using Figma , data visualizations using D3.js , built Drag-n-Drop and resizable scheduler system using react-DnD , react-Rnd , redux , thunk, Context API, Express, Node, and designed overall user experience, resulting in a 36% increase in sales.",
        " Achieved the individual contribution award or Pineapple award by completing100% target on delivering a fantastic result on a complex project that I have been working for the last one year with accuracy and efficiency.",
        "Managed full-cycle design tasks, handling phases from conception to completion while maintaining guidelines throughout.",
      ],
      media: {
        type: "IMAGE",
        source: {
          url: MakseGroup,
        },
      },
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
      media: {
        type: "IMAGE",
        source: {
          url: metricstream,
        },
      },
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
      media: {
        type: "IMAGE",
        source: {
          url: Wipro,
        },
      },
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
