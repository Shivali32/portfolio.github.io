// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Shivali",
  middleName: "",
  lastName: "Mate",
  message: [" Software Developer"," Computer Engineer", "Student"],
  icons: [
    // {
    //   image: "fa-github",
    //   url: "https://github.com/Shivali32",
    // },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/shivali-m/",
    },
  ],
};


const about = {
  show: true,
  heading: "About Me",
  imageLink: require('../assets/img/shivali.png'),
  imageSize: 375,
  message1:
  "As a Master’s student in Computer Science at Indiana University with a Bachelor’s degree in Computer Engineering, I am passionate about pursuing a career as a Software Engineer. My professional experience as a Software Developer at Capgemini has equipped me with expertise in designing and building scalable data platforms while leading teams to deliver high-quality projects under tight deadlines. I possess strong technical skills in Python, Django, AWS, and Machine Learning, and I thrive on developing innovative solutions that create meaningful impact.",
  message2:
  "In addition to my technical background, I bring a diverse set of interests and achievements. I hold a Visharad certification in Bharatanatyam—the sixth level of this classical Indian dance form—from ABG University. My leadership abilities extend beyond academics; I captained my college volleyball team for three years, securing gold and silver medals in inter-college and state-level tournaments. Furthermore, I have honed organizational and leadership skills as a Student Coordinator for cultural and technical events, including managing ‘Ensemble,’ a major college fest. Combining my technical expertise with my creative drive, I am eager to contribute to impactful projects that blend innovation and precision while making a difference."
    // "Master’s student in Computer Science at Indiana University with a Bachelor’s in Computer Engineering. Experienced Software Developer from Capgemini, where I built scalable data platforms and led teams to successfully deliver high-quality projects on time. Skilled in Python, Django, AWS, and Machine Learning, with a passion for innovative solutions.",
//   resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Projects",
  gitHubUsername: "Shivali32",
  reposLength: 4,
  specificRepos: [],
};



// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",        
    data: [
        { "name": "Python", "value": 90 },
        { "name": "Java", "value": 80 },
        { "name": "SQL", "value": 85 },
        { "name": "Django", "value": 90 },
        { "name": "Flask", "value": 75 },
        { "name": "C/C++", "value": 70 },
        { "name": "PHP", "value": 65 },
        { "name": "HTML/CSS", "value": 70 },    
        { "name": "OpenCV", "value": 75 },
        { "name": "MySQL", "value": 85 },
        { "name": "PostgreSQL", "value": 80 },
        { "name": "Git/GitHub", "value": 85 },
        { "name": "JavaScript", "value": 70 },
        { "name": "AWS (EC2, S3, Secrets Manager)", "value": 85 },
        // { "name": "Data Structures & Algorithms", "value": 85 },
        { "name": "Machine Learning", "value": 80 },
    ]
};

// GET IN TOUCH SECTION
const getInTouch = {
    show: true,
    heading: "Get In Touch",
    message1:
        "Seeking Software Development Intern roles! Know any openings or want to connect? Please do mail me at",
    message2:   "or DM me on",
    email: "shivali7080@gmail.com",
    linkedin: "https://www.linkedin.com/in/shivali-m/"
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
        company: "Capgemini Technology Services",
        role: 'Software Developer',
        companylogo: require('../assets/img/capgemini.png'),
        date: 'July 2022 – June 2024',
        msg: [ 
            ["Developed the Data Product Catalog Marketplace, a Django-based web application, delivering a data shopping platform pitched to five major companies to enhance data access and selection."],
            ["Integrated data governance tools, including Informatica, Collibra, AWS Glue, and Azure Purview, to ensure seamless functionality and compliance."],
            ["Designed a user-friendly data shopping feature, enabling exploration, selection, and download of 1000+ data elements in customizable formats, with managed access permissions and data masking for sensitive information."],
            ["Implemented secure credential storage using AWS Secret Manager and deployed the application on an AWS EC2 instance, ensuring 100% data security."],
            ["Led a team of six, managing tasks, providing technical guidance, and resolving queries to ensure project success."]
            ] 
    },
    {
        company: "OrganizeIn",
        role: 'Intern Developer',
        companylogo: require('../assets/img/organizein.jpg'),
        date: 'April 2021 – Sept 2021',
        msg: [
            // ["Contributed to two projects: a KPI Dashboard and a Doctor Consultation App prototype, delivering functional solutions for data visualization and healthcare access."],
            // ["Developed the KPI Dashboard from scratch, integrating APIs and performing Extract, Transform, Load (ETL) processes to process Google Analytics data."],
            // ["Created the Doctor Consultation App UI, enabling users to search for doctors, book online appointments, and upload past prescriptions, while designing doctor and admin interfaces for schedule management and administrative tasks."]
            ["Engineered a dynamic KPI Dashboard by integrating Google Analytics data via API and applying ETL processes to present key metrics such as user count, sessions, page views, and average session duration."],
            ["Enabled users to access detailed reports and apply data filters for tailored insights."],
            ["Created a comprehensive SEO analytics dashboard to monitor keyword performance, site impressions, and engagement metrics, providing actionable insights to enhance search visibility and user traffic."],
            ["Designed and developed a Doctor Consultation App prototype, featuring a user-friendly interface for doctor search, online appointment booking, and prescription uploads."],
            ["Designed doctor and admin interfaces for managing schedules and administrative tasks, ensuring a seamless user experience."],
        ]        
    },
    {
        company: "Edify Acceletarors",
        role: 'Development Intern',
        companylogo: require('../assets/img/edify.jpg'),
        date: 'May 2020 – July 2020',
        msg: [
            ["Designed and implemented the backend and frontend of a blood donation website for Bloom India, delivering a fully functional web platform."],
            ["Built multiple pages, including homepage, events, offers, about us, partner, and pledge sections, enhancing user engagement and navigation."],
            ["Developed an API to enable seamless data transfer from the database to the Bloom India Android application, ensuring efficient integration."]
        ]        
    },
  ]
}

const education = {
    show: true,
    heading: "Experiences",
    data: [
      {
        title: "Master of Science in Computer Science",
        institution: "Indiana University Bloomington",
        duration: "2024 - Present",
        gpa: "3.77/4.0",
        subjects: ["Applied Algorithms, Applied Machine Learning, Computer Networks, Software Engineering, Data Visualization, Cloud Computing",],
      },
      {
        title: "Bachelor in Computer Engineering",
        institution: "Savitribai Phule Pune University",
        duration: "2018 - 2022",
        gpa: "3.75/4.0",
        subjects: ["Object Oriented Programming, Database Management Systems, Data Structures & Algorithms, High Performance Computing"],
      },
    ],
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, getInTouch, experiences, education };
