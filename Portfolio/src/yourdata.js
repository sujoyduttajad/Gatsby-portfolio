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
import facebook from "./images/facebook.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

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

  // Work Section ------------------------
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
        "My own personel project of designing and developing from scratch a phenomenal music app for chill lofi-beats genre, build with React and state managed by Redux this app currently fetches a list of music titles with awesome styling using custom SASS & Material-UI components, while animation is handled by lotti-interactivity and navigation by react-router. Still in progress to add more functionality ",
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

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Hi there!",
  aboutParaTwo:
    "I have 3.5 years of experience in Frontend development that comprises an impresive tech-stack of Next.js, React, Redux, Node, SASS, MongoDB, JavaScript, HTML5, CSS3, Bootstrap, Styled-components, Tailwind-css",
  aboutParaThree:
    "I am a photographer also enjoy playing guitar in my free time. As a fun fact I'm learning cooking these days.",
  aboutImage:
    profilePic,

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para:
        "I have more than 4 years of experience in creating websites and apps with HTML, I learned the concepts early but as I develop HTML5 came and continued to explore the standard markup language for Web pages",
    },
    {
      img: cssIcon,
      para:
        "CSS is my favourite piece of the web to work styling is always my priority, from working with basic CSS and modules to SASS, Bootstrap, Material-UI, and Tailwind-CSS all need continued learning progression on this vast field",
    },
    {
      img: jsIcon,
      para:
        "JavaScript language is the backbone of the web, that's constantly changing and improving its ECMA scripts. Built a lot of projects, games, and web pages with the amalgamation of JavaScript, HTML, and CSS",
    },
    {
      img: reactIcon,
      para:
        "React is a frontend library based on JavaScript. For the past few years I had build multiple React projects from small games to medium-scale projects which includes a complete react ecosystem",
    },
    {
      img: designIcon,
      para:
        "From the UI/UX specialization from coursera that helped me to design interfaces ultimately resulting in seamless User experience. I have designed industry specific to small-scale design mockups and prototypes using Figma nad Sketch",
    },
    {
      img: redux,
      para:
        "When it comes to large applications Redux plays an essential role in managing state in react applications. Used Redux in multiple react apps along with an industrial customer oriented web app.",
    },
    {
      img: sass,
      para:
        "SASS stands for Syntactically Awesome Style Sheets, which is used as a pre-processor for stylling sheets allowing the CSS to be more robust. Highly experienced with SASS in building both medium and large scale applications",
    },
    {
      img: node,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: next,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: gatsby,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: codeIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Work History",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/sujoyduttajad" },
    // {
    //   img: codepenIcon,
    //   url: "https://www.codepen.com/",
    // },
    {
      img: linkedin,
      url: "https://dribbble.com/chetanverma",
    },
    {
      img: facebook,
      url: "https://www.instagram.com/",
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
