// Skills Icons
import htmlIcon from "./images/HTML5.svg"
import cssIcon from "./images/css3.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/JavaScript.svg"
import designIcon from "./images/Figma.svg"
import redux from "./images/Redux.svg"
import sass from "./images/Sass.svg"
import node from "./images/Node.js.svg"
import next from "./images/Next.js.svg"
import gatsby from "./images/Gatsby.svg"
import codeIcon from "./images/code.svg"
// import codeIcon from "./images/code.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import profilePic from "./images/Profile-pic.jpg"
import linkedin from "./images/Linkedin.svg"
import twitter from "./images/twitter.svg"

// Company Icon
import Wipro from "./images/wipro.png"
import metricstream from "./images/metricstream.png"
import MakseGroup from "./images/MakseGroup.png"

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
    "Highly effective at developing, designing and standardizing designs according to company brand and objectives. Ready to bring 3.5 years of related experience to a growth-oriented team.",

  //Contact Email
  contactEmail: "sujoyduttajad@gmail.com",

  // End Header Details -----------------------

  // Project Section ------------------------
  projects: [
    {
      title: "React Landing page", //Project Title - Add Your Project Title Here
      para:
        "This gorgeous responsive website is a static landing page built with React, styled-components, react-router, and react hooks. All the components are reusable and can be used for any dynamic content. It's fully responsive for all the platforms and hosted in netlify",
      //Project Image 
      imageSrc:
        "https://images.unsplash.com/photo-1487837647815-bbc1f30cd0d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njl8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL
      url: "https://github.com/sujoyduttajad/Landing-Page-React",
    },
    {
      title: "BeatsUp Music App", //Project Title - Add Your Project Title Here
      para:
        "A Design to Development music app for chill lofi-beats genre from scratch, built with React and state managed by Redux. It fetches a list of mp3 files organized in a grid based layout and styled custom SASS & Material-UI components, animation by lotti-interactivity and navigation by react-router.",
      //Project Image 
      imageSrc:
        "https://images.unsplash.com/photo-1605153864431-a2795a1b2f95?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNTY3ODl8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL
      url: "http://chetanverma.com/",
    },
    {
      title: "Join Chat App", //Project Title - Add Your Project Title Here
      para:
        "My goal was to build a real-time Chat app that allows users to create their own spaces called room to interact with a group of people and send emojis. This app is build using web sockets that Socket.io uses internally.",
      //Project Image 
      imageSrc:
        "https://images.unsplash.com/photo-1504083898675-c896ecdae86e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL
      url: "https://github.com/sujoyduttajad/Socket.io-Chat-Application",
    },
    {
      title: "Redux Memory Game", //Project Title - Add Your Project Title Here
      para:
        "A memory game build with React-Redux core functionalities, this app tests the true skills of an ideatic memory",
      //Project Image
      imageSrc:
        "https://images.unsplash.com/photo-1492171983775-a51717616c0d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjB8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL
      url: "https://github.com/sujoyduttajad/Redux-Card-game",
    },
    {
      title: "Project Management Tool", //Project Title - Add Your Project Title Here
      para:
        "This app is a Project Management tool with authentication and cloud functionalities where users can create Projects, edit them, delete them, and keep a track of them all in one SPA. To build this I used React, Redux, React-Redux, Thunk, and Firebase. This app will have authentication(sign-up & sign-in) and features like Cloud security, Route Guarding, Cloud functions.",
      //Project Image
      imageSrc:
        "https://images.unsplash.com/photo-1534239143101-1b1c627395c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL
      url: "https://github.com/sujoyduttajad/Project-management-tool",
    },
    {
      title: "Gatsby Portfolio", //Project Title - Add Your Project Title Here
      para:
        "A smooth scroll minimalistic dev portfolio built with Gatsby.js used Yarn to manage the packages  that includes react-helmet for managing SEO, for animation I used react-reveal and react-scroll, SASS for stylling, a bunch of Gatsby plugins.", 
      //Project Image
      imageSrc:
        "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL
      url: "https://github.com/sujoyduttajad/Gatsby-portfolio",
    },
  ],

  // End Projects Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "I'm a geeky programmer and an enthusiastic learner. A Goal-oriented Web Developer who brings a strong commitment to collaboration and solutions-oriented problem-solving in Frontend Development and UI/UX design. I am always looking forward to building something thought-provoking.",
  aboutParaTwo:
    "Bringing a total of 3.5 years of experience in Frontend development that comprises an impresive tech-stack of Next.js, React, Redux, Node, SASS, MongoDB, JavaScript, HTML5, CSS3, Bootstrap, Styled-components, Tailwind-css",
  aboutParaThree:
    "Love to do photographeraphy(Landscapes and Cityscapes) also enjoy playing guitar in my free time. As a fun fact I'm learning cooking these days.",
  aboutImage:
    profilePic,

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para:
        "I have more than 4 years of experience in creating websites and apps with HTML, I learned the concepts early but as I develop HTML5 came and continued to explore the standard markup language for Web pages.",
    },
    {
      img: cssIcon,
      para:
        "CSS is my favourite piece of the web to work styling is always my priority, from working with basic CSS and modules to SASS, Bootstrap, Material-UI, and Tailwind-CSS all need continued learning progression on this vast field.",
    },
    {
      img: jsIcon,
      para:
        "JavaScript language is the backbone of the web, that's constantly changing and improving its ECMA scripts. Built a lot of projects, games, and web pages with the amalgamation of JavaScript, HTML, and CSS.",
    },
    {
      img: reactIcon,
      para:
        "React is a frontend library based on JavaScript. For the past few years I had build multiple React projects from small games to medium-scale projects which includes a complete react ecosystem.",
    },
    {
      img: designIcon,
      para:
        "From the UI/UX specialization from coursera that helped me to design interfaces ultimately resulting in seamless User experience. I have designed industry specific to small-scale design mockups and prototypes using Figma nad Sketch.",
    },
    {
      img: redux,
      para:
        "When it comes to large applications Redux plays an essential role in managing state in react applications. Used Redux in multiple react apps along with an industrial customer oriented web app.",
    },
    {
      img: sass,
      para:
        "SASS stands for Syntactically Awesome Style Sheets, which is used as a pre-processor for stylling sheets allowing the CSS to be more robust. Highly experienced with SASS in building both medium and large scale applications.",
    },
    {
      img: node,
      para:
        "Node.js an open-source cross-platform runtime environment for executing JavaScript code other than the browser is the most powerful tool I have used to build numerous API's and full MERN stack applications.",
    },
    {
      img: next,
      para:
        "Another powerful tool is the React based framework called Next.js, I am a big fan of the Next.js features as a product thus build various applications and even planned, designed & architected a full-scale enterprise web app.",
    },
    {
      img: gatsby,
      para:
        "As I explored the React ecosystem I stumbled upon a static site generator based on React called Gatsby JS. I'm still new to it and my learning process continues as I build more projects with Gatsby JS ",
    },
    {
      img: codeIcon,
      para:
        "Problem solving for me became a necessity from skill as I develop apps it's a must because often developers try to figure out an enormous bug or issue which requires the involvement of Data Structures and Algorithms",
    },
  ],

  //   End Skills Section --------------------------

  //   Work History Section --------------------------

  promotionHeading: "Work History",
  workHistory: [
    {
      title: "Dec 2020 - Present",
      cardTitle: "Makse Services Pvt. Ltd.",
      cardSubtitle:"Frontend Developer, (Location - Bangalore, Karnataka)",
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
          url: MakseGroup
        }
      }
    },
    {
      title: "June 2019 - July 2020",
      cardTitle: "MetricStream",
      cardSubtitle:"Frontend Developer, (Location - Bangalore, Karnataka)",
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
            url: metricstream
          }
            }
    },
    {
      title: "July 2018 - May 2019",
      cardTitle: "Wipro Technologies",
      cardSubtitle:"Project Engineer, (Location - Bangalore, Karnataka) ",
      cardDetailedText: [
        "Worked on Enterprise Content Management (ECM) and delivered dynamic content 16% faster. Built HTML templates using Pug(JADE) for client-based application.",
        "Contributed to Document generation of insurance clients with Papyrus tool and construction of input responses in SOMS by increasing customer satisfaction. Tech stack consists of JavaScript, SOAP UI, HTML, CSS, Bootstrap, JADE(PUG), Node, and Express.",
        "Prepared variety of different written communications, reports and documents to ensure smooth operations.",
      ],
      media: {  
          type: "IMAGE",
          source: {
            url: Wipro
          }
            }
    },  
],
  //    End Work History Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    
    { 
      img: githubIcon, 
      url: "https://github.com/sujoyduttajad" 
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


