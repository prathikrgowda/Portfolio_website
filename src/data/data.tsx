import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Prathik Ranganatha Gowda',
  description: "Prathik Ranganatha Gowda - Portfolio Website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  //Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Prathik Ranganatha Gowda.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Master's student at George Washington University, <strong className="text-stone-100">Aspiring Software Engineer</strong>, Passionate about 
         <strong className="text-stone-100"> cloud computing, machine learning, and web development</strong> Experience at Staples and Bosch Limited
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1Me2qHh3obIKIunKASv2LzVeVutLte6B9/view?usp=sharing',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
      target: '_blank',
      rel: 'noopener noreferrer',
    },      
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `An avid technologist with a good foundation in Computer Science, 
  specializing in cloud services, and machine learning. My diverse knowledge gained through academic and real-world projects 
  have honed my ability to adapt to new concepts and apply them effectively. I am passionate about leveraging technology to create 
  solutions that address real-world challenges.`,
  aboutItems: [
    {label: 'Location', text: 'Arlington, VA', Icon: MapIcon},
    {label: 'Age', text: '23', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Traveling, Table Tennis', Icon: SparklesIcon},
    {label: 'Study', text: 'The George Washington Univesity ', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Ex - Staples Inc, Bosch Ltd', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Kannada',
        level: 10,
      },
      {
        name: 'Hindi',
        level: 6,
      },
    ],
  },
  {
    name: 'Database Systems',
    skills: [
      {
        name: 'MySQL',
        level: 7,
      },
      {
        name: 'MongoDB',
        level: 8,
      },
      {
        name: 'PostgreSQL',
        level: 7,
      },
    ],
  },
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'SQL',
        level: 7,
      },
      {
        name: 'Java',
        level: 7,
      },
      {
        name: 'JavaScript',
        level: 7,
      },
      {
        name: 'Go',
        level: 5,
      },
      {
        name: 'R',
        level: 5,
      },
      {
        name: 'HTML',
        level: 7,
      },
      {
        name: 'CSS',
        level: 7,
      },
      {
        name: 'TypeScript',
        level: 7,
      },
    ],
  },
  {
    name: 'Tools',
    skills: [
      { name: 'Git & GitHub', level: 8 },
      { name: 'Visual Studio Code', level: 9 },
      { name: 'Jira', level: 9 },
      { name: 'Bitbucket', level: 8 },
      { name: 'Terraform', level: 6 },
      { name: 'Jenkins', level: 6 },
      { name: 'Docker', level: 6 },
      { name: 'Kubernetes', level: 5 },
      { name: 'Splunk', level: 8 },
      { name: 'New Relic', level: 8 },
      { name: 'Postman APIs', level: 9 },
    ],
  },
  {
    name: 'Frontend Development',
    skills: [
      { name: 'React.js', level: 7 },
      { name: 'Next.js', level: 6 },
      { name: 'Tailwind CSS', level: 7 },
    ],
  },
  {
    name: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 8 },
      { name: 'Express.js', level: 8 },
      { name: 'Java Spring Boot', level: 6 },
    ],
  },
  {
    name: 'Machine Learning Frameworks',
    skills: [
      { name: 'Pandas', level: 7 },
      { name: 'NumPy', level: 7 },
      { name: 'Matplotlib', level: 7 },
      { name: 'Keras', level: 7 },
      { name: 'Seaborn', level: 6 },
    ],
  },
  {
    name: 'Cloud Platforms',
    skills: [
      { name: 'Microsoft Azure (API Management, Redis Cache, Entra ID, Log Analytics, Automation Accounts, Application Insights)', level: 8 },
      { name: 'AWS (Cloud9 IDE, IAM, S3, EC2, Lambda, Cloud Watch, RDS, VPC, Cognito)', level: 7 },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Kanban Task Board - Project Management Application',
    description: 'Developed a full-stack Kanban board with Next.js (frontend) and Node.js/Express (backend), using PostgreSQL and Prisma ORM. Implemented lazy loading for inactive columns and tasks with RTK Query and conditional rendering. Deployed to AWS (S3 frontend, EC2 backend, RDS) for scalable, production-grade hosting.',
    //url: 'https://your-kanban-demo-url.com',
    image: porfolioImage1,
  },
  {
    title: 'WeCureIt Clinic Management Sysytem',
    description: 'Built a clinic management system with admin, doctor, and patient logins using a client-server architecture. Designed UIs in Figma, implemented with React, Node, MongoDB, and developed a scheduling algorithm.',
    //url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'MiniURL - URL Shortening Service',
    description: 'Built a URL shortening service with a Spring Boot (Java) backend and Next.js (TypeScript) frontend, backed by MySQL. Added custom alias generation, URL validation, and click analytics. Containerized with Docker, orchestrated on a basic AWS Kubernetes cluster, and provisioned EC2, RDS, and S3 via Terraform for fully automated deployment.',
    //url: 'https://your-miniurl-demo-url.com',
    image: porfolioImage3,
  },
  {
    title: 'Hand Gesture Recognition and Voice Conversion',
    description: 'Created a model using MediaPipe for hand gesture recognition and voice conversion, bridging communication for the deaf and aphonic community. Published research in Gradiva Review Journal.',
    //url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Online Retail Data Analysis',
    description: 'Built a Python‐based ETL pipeline for online retail transactions, cleaning and transforming data. Eliminated missing/duplicate records, canceled orders, and negative entries. Engineered a TotalPrice feature to enhance revenue insights and standardized data types for advanced analytics: RFM segmentation, recommendations, forecasting, and churn prediction.',
    //url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Taxi Fare Prediction Model',
    description: 'Developed a machine learning model to predict NYC taxi fares, achieving high accuracy with XGBoost. Focused on data preprocessing, feature engineering, and model tuning.',
    //url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Kanban Task Board - Project Management Application',
    description: 'Built a project management application with Next.js (frontend) and Node.js/Express (backend), featuring role-based access for board owners and members. Deployed on AWS (EC2, Lambda, S3, and RDS), leveraging AWS Cognito for authentication. Incorporated Tailwind CSS, Material UI Data Grid, and Recharts for a responsive UI, and optimized state management with Redux Toolkit and RTK Query.',
    //url: 'https://reactresume.com',
    image: porfolioImage7,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'May 2025',
    location: 'The George Washington University',
    title: 'Masters in Computer Science',
    content: <p>Relevant Courses - Design & Analysis of Algorithms, Advanced Software Paradigms, Machine Learning, Data Mining,
    Component Based Enterprise Software, Cloud Computing, Object Oriented Design, Big Data & Analytics.</p>,
  },
  {
    date: 'June 2023',
    location: 'Visvesvaraya Technological University',
    title: 'Bachelor of Engineering in Electronics and Communication Engineering',
    content: <p>Relevant Courses - Data Structures & Algorithms, Introduction to AI, Calculus & Linear Algebra, Computer Architecture,
    Computer Networks, ML with Python, Python Application Programming.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'May 2024 - August 2024',
    location: 'Staples Inc',
    title: 'API Management Intern',
    content: (
      <p>
        Worked with Microsoft Azure Cloud Services to design, deploy, and secure APIs, ensuring high performance and compliance. 
        Led cost optimizations for Azure Redis, reducing expenses by 30% while enhancing system reliability. Migrated and upgraded over 150 APIs, 
        implementing automated deployments via Terraform and Jenkins, streamlining workflows and strengthening API security.
      </p>
    ),
  },
  {
    date: 'February 2023 - May 2023',
    location: 'Bosch Limited',
    title: 'Software Engineer Intern',
    content: (
      <p>
         Built React.js admin interface for ParkZeus, Bosch’s IoT-based smart parking solution.
         Developed Node.js REST APIs to support ParkZeus’s Android app and web dashboard, enabling secure CRUD operations for managing parking slots and IoT devices.
         Designed PostgreSQL schemas to store IoT and parking slot data, indexing key fields to improve dashboard performance.
      </p>
    ),
  },
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in Touch',
  description: 'Feel free to reach out anytime!',
  items: [
    {
      type: ContactType.Email,
      text: 'prathik.ranganathagowda@gwmail.gwu.edu',
      href: 'mailto:prathik.ranganathagowda@gwmail.gwu.edu',
     
    },
    {
      type: ContactType.Location,
      text: 'Arlington VA, USA',
      href: 'https://www.google.com/maps/place/1711+26th+St+S,+Arlington,+VA+22206/@38.8489409,-77.0782233,17z',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      type: ContactType.Github,
      text: 'prathikrgowda',
      href: 'https://github.com/prathikrgowda',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Prathik Ranganatha Gowda',
      href: 'https://www.linkedin.com/in/prathik-ranganatha-gowda-871b75257',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/prathikrgowda',target: '_blank', rel: 'noopener noreferrer' },
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/prathik-ranganatha-gowda-871b75257',target: '_blank', rel: 'noopener noreferrer'},
];
