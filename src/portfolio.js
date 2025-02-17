/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shameeza Akbar",
  title: "Hey there! I'm Shameeza Akbar",
  subTitle: emoji(
     "I'm a recent graduate proficient in front-end technologies, including HTML, CSS, JavaScript, and React. I'm excited to embark on my career in web development."
  ),
  resumeLink:
    "https://images.app.goo.gl/A4VYe62GLjLmYhLx6", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Shameeza-Akbar",
  linkedin: "https://www.linkedin.com/in/shameeza-akbar-2192a1237/",
  gmail: "shameezaakbar@gmail.com",
  gitlab: "https://gitlab.com/My",
  facebook: "https://www.facebook.com/My",
  medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/My",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "SKILLS",
  subTitle: "As a web developer, I'm passionate about building user-friendly and effective web applications. This section highlights my key technical skills and areas of expertise in front-end and back-end development.",
  skills: [
    emoji(
      "⚡ Programming Languages: JavaScript (ES6+), Python, HTML, CSS"
    ),
    emoji("⚡ Front-End Frameworks/Libraries: React"),
    emoji(
      "⚡ Databases: SQL"
    ),
    emoji(
      "⚡ Version Control: Git"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },       
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Lahore College for Women University",
      logo: require("./assets/images/lc.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2020 - August 2024",
      desc: "CGPA 3.81"
    },
    {
      schoolName: "Punjab Group of Colleges",
      logo: require("./assets/images/pgc.png"),
      subHeader: "Intermediate in Computer Science",
      duration: "September 2018 - April 2020",
      desc: "85% Marks in board",
      descBullets: ["968/1100","Grade A"]
    },
    {
      schoolName: "M.D High School",
      logo: require("./assets/images/md.png"),
      subHeader: "Matric in Computer Science",
      duration: "September 2017 - April 2018",
      desc: "92% Marks in board",
      descBullets: ["1012/1100","Grade A"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "20%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "ABC",
      companylogo: require("./assets/images/abc.png"),
      date: "June 2023 – Present",
      desc: "At ABC Corporation, I've expanded my skillset to encompass full-stack development.",
      descBullets: [
        "Project: API Development: Designed and implemented APIs using Next.js and Express for a new feature."
      ]
    },
    {
      role: "Front-End Developer",
      company: "XYZ",
      companylogo: require("./assets/images/xyz.png"),
      date: "May 2020 – May 2023",
      desc: "At XYZ Company, I focused on front-end development, specializing in React.",
      descBullets: [
        "Project: UI Enhancement: Developed new UI components using React, improving user navigation and site usability.",
        "Project: Performance Optimization: Optimized website performance through code refactoring, image optimization, and caching strategies."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/abc.png"),
      projectName: "Food Order App",
      projectDesc: "App to order food online",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://images.app.goo.gl/UCaE433t6pb1HuAh7"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/xyz.png"),
      projectName: "Tic-Tac-Toe",
      projectDesc: "Tic-Tac-Toe game using React.js",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://images.app.goo.gl/fWw8AgnLP9MqzFBJ6"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "React-The Complete Guide 2025 (incl. Next.js, Redux)",
      subtitle:
        "Issued Jan 2025",
      image: require("./assets/images/udemy.png"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-453f9fcc-9099-4d22-9d09-e7b4ca97db3c/"
        }
      ]
    },
    {
      title: "JavaScript Algorithms and Data Structures (Beta)",
      subtitle:
        "Issued Sep 2024",
      image: require("./assets/images/fcc.png"),
      imageAlt: "FCC Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://freecodecamp.org/certification/Shameeza-Akbar/javascript-algorithms-and-data-structures-v8"
        }
      ]
    },

    {
      title: "Project management",
      subtitle: "Issued Aug 2023",
      image: require("./assets/images/google.png"),
      imageAlt: "Google Logo",
      footerLink: [
        {name: "Certification", url: "https://coursera.org/share/a232f36b57ba1a1e78d7495060504a14"}
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "This blog is a collection of my thoughts, experiments, and insights",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://github.com/Shameeza-Akbar/React_Project4_Project-Planner",
      title: "React To-Do List: A Beginner's Guide",
      description:
        "This tutorial walks you through creating a basic to-do list application using React, covering component creation, state management, and event handling."
    },
    {
      url: "https://github.com/Shameeza-Akbar/React_project3_Investment_Calculator",
      title: "Investment Calculator",
      description:
        "Many people find it challenging to understand how their investments might grow.  To address this, I created an Investment Calculator that simplifies the process of projecting future investment value."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "CHECKOUT MY PODCASTS!",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "I'd love to hear from you! Please feel free to reach out with any questions, project inquiries, or just to connect.",
  number: "+92-0000000000",
  email_address: "shameezaakbar@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "Shameeza", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
