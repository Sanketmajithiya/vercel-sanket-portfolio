/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/loadingAnimation"; // Rename to your file name for custom animation

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
  username: "sanket majithiya",
  title: "Hi all, I'm Sanket",
  subTitle:
    "A Full Stack Software Engineer 🚀 skilled in building scalable web apps using Python, Django, and FastAPI. Experienced with DevOps tools like Docker and CI/CD. Also exploring AI/ML using TensorFlow, PyTorch, and Scikit-learn.",
  resumeLinks: [
    {
      name: "India",
      link: "https://drive.google.com/file/d/1RFxq3Q_OcaQofladtuahZwOeaoKDXD1g/view?usp=sharing"
    },
    {
      name: "USA",
      link: "https://drive.google.com/file/d/1RFxq3Q_OcaQofladtuahZwOeaoKDXD1g/view?usp=sharing"
    }

  ],

  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Sanketmajithiya",
  linkedin: "http://linkedin.com/in/sanket-majithiya-python-developer",
  gmail: "sanketmajithiya@gmail.com",
  facebook: "https://www.facebook.com/sanketmajithiya",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    "⚡ Develop dynamic and secure web applications using Django and FastAPI",
    "⚡ Experience with databases such as PostgreSQL, MySQL, MongoDB, and Redis",
    "⚡ Integration of third party services such as Firebase/ AWS / Azure",
    "⚡ API development using highly scalable Python frameworks such as Django REST Framework and FastAPI"
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
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql/mongo-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "maharaja sayajirao university of baroda",
      logo: require("./assets/images/BTI-logo.webp"),
      subHeader: "Bachelor of Engineering(BE)",
      duration: "2019 - 2023"
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "vidhyasabha School Amreli",
      logo: require("./assets/images/school_logo.png"),
      subHeader: "12th(Science)",
      duration: "2012 - 2014"
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "100%"
    },
    {
      Stack: "Programming",
      progressPercentage: "95%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Sr. Software Engineer",
      company: "KOLI INFOTECH Pvt Ltd.",
      companylogo: require("./assets/images/KOLI_INFOTECH.png"),
      date: "Nov 2024 – Present",
      desc: "I have been working in this company as a Senior Software Developer and also as a Technical Mentor, where I guided the team and contributed to project delivery:",
      descBullets: [
        "Python developer",
        "Web development",
        "Django,Flask,Fast-API,DRF,LLM,AWS",
        "Database management",

      ]
    },
    {
      role: "Backend-End Developer",
      company: "OctaNet Services Pvt Ltd",
      companylogo: require("./assets/images/OCTA.NET.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
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
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/ShoppingX.png"),
      projectName: "ShoppingX",
      projectDesc: `🛍️ ShoppingX is a smart eCommerce platform designed to streamline online sales and enhance user experience.  It includes secure Razorpay payment integration, OTP-based password recovery via email, AI-powered chatbot, and Google login for seamless access. It boosts sales and simplifies operations with a modern, responsive UI.`,
      footerLink: [
        {
          name: "View Live Now",
          url: "https://shoppingx.pythonanywhere.com/"
        }
      ]
    },

    {
      image: require("./assets/images/zara_logo.png"),
      projectName: "zara",
      projectDesc: `🛒 ZARA is a modern eCommerce web app built with Python-Django. It provides smooth product browsing, cart management, and secure authentication. With role-based access and clean architecture, it’s built for real-world usage and long-term maintainability.`,
      footerLink: [
        {
          name: "View Live Now",
          url: "http://zara.pythonanywhere.com/"
        }
      ]
    },
    {
      image: require("./assets/images/bird_bidding_app_logo5.png"),
      projectName: "Bird Bidding App",
      projectDesc: "A dynamic auction platform for bird enthusiasts built with Django. Features include real-time bidding, user authentication, and a responsive dashboard for managing listings.",
      role: "Full Stack Developer",
      footerLink: [
        {
          name: "View Live Now",
          url: "https://birdbiddingapp.pythonanywhere.com/"
        }
      ]
    },
    {
      image: require("./assets/images/Medical-chat-bot.png"), // TODO: Replace with new logo
      projectName: "Medical Chatbot",
      projectDesc: "An AI-powered medical assistant deployed on Hugging Face Spaces. It uses advanced NLP to provide preliminary medical information and health assistance.",
      role: "AI Engineer",
      footerLink: [
        {
          name: "View Live Now",
          url: "https://huggingface.co/spaces/sanket-ai-builder/medical-chatbot"
        }
      ]
    },
    {
      image: require("./assets/images/hamro_blood_bank_logo.png"),
      projectName: "Hamro Blood bank",
      projectDesc: `Hamro Blood Bank aimed to efficiently connect blood donors and recipients by addressing challenges in traditional systems.`,
      role: "Team Lead | Backend Developer",
      footerLink: [
        {
          name: "View Live Now",
          url: "https://www.hamrobloodbank.com"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/digitalmenu_logo.png"),
      projectName: "Digital Menu",
      projectDesc: `Digital menu will convert every restaurant's paper menu with digital menu, which will be available on internet. People can use their own smartphone to see restaurant menu and order items.`,
      footerLink: [
        {
          name: "Under development",
          url: ""
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
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-0000000000",
  email_address: "sanketmajithiya@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

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
  twitterDetails
};
