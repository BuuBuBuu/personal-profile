export const profile = {
  name: "Benjamin Ng Yi Ting",
  handle: "BuuBuBuu",
  title: "Software Engineer & Cybersecurity Professional",
  location: "Singapore",
  email: "benjaminngyt@gmail.com",
  github: "https://github.com/BuuBuBuu",
  linkedin: "https://linkedin.com/in/benjamin-ng-yi-ting",
  summary:
    "Driven professional building a career at the intersection of software engineering and cybersecurity. Currently working in cybersecurity operations at Mizuho Bank — handling Splunk log monitoring, vulnerability assessments, and DevSecOps practices. Background spans full-stack development, business analytics, and financial services.",
};

export const skills = {
  "Security": ["Splunk", "Tenable", "CIS Benchmarks", "Vulnerability Assessment", "Threat Intelligence", "Log Monitoring", "DevSecOps", "Regulatory Compliance"],
  "Programming": ["Python", "Java", "Go", "JavaScript", "C#", "Kotlin", "SQL", "HTML/CSS"],
  "Frameworks": ["React", "Spring", "ASP.NET", "Android", "PyTorch", ".NET"],
  "Tools & Platforms": ["Docker", "AWS", "Jenkins", "Git", "MySQL"],
  "Concepts": ["MLOps", "Machine Learning", "Agile", "UML", "REST APIs", "ETL"],
};

export const experience = [
  {
    role: "TFIP Trainee, Cybersecurity Management",
    company: "Mizuho Bank",
    period: "Jan 2026 – Present",
    type: "security",
    bullets: [
      "Manage cybersecurity operations including Splunk log monitoring and Tenable vulnerability scanning with CIS benchmarks.",
      "Conduct baseline assessments, vulnerability assessments, and threat intelligence analysis to identify and mitigate security risks.",
      "Develop Python scripts for automation of security workflows, reducing manual effort and improving response times.",
      "Participated in Internal, External, and MAS audits ensuring compliance with regulatory standards.",
      "Monitor and analyze security logs to detect anomalies and potential threats across the organization.",
    ],
  },
  {
    role: "Intern, Software Engineering",
    company: "Land Transport Authority (LTA)",
    period: "Jan 2025 – Jun 2025",
    type: "engineering",
    bullets: [
      "Developed Python scripts and REST API integrations for large-scale data migration projects.",
      "Automated ETL processes to ensure accurate data migration.",
      "Collaborated with cross-functional teams to validate migrated data and resolve discrepancies.",
    ],
  },
  {
    role: "Account Operations Manager",
    company: "Hewlett-Packard Inc.",
    period: "Oct 2021 – Aug 2024",
    type: "ops",
    bullets: [
      "Aligned HP's operational processes with customer SOWs, securing 10+ high-value partnerships.",
      "Developed automated scheduled systems for reporting and fallout tracking, reducing manual effort by 25%.",
      "Mediated between back office, front office, and technical teams to achieve project goals.",
    ],
  },
];

export const education = [
  {
    school: "DigiPen Institute of Technology Singapore",
    degree: "Diploma in Full Stack Software Development (TFIP Programme)",
    period: "Jun 2025 – Dec 2025",
  },
  {
    school: "National University of Singapore",
    degree: "Graduate Diploma in Systems Analysis",
    period: "Aug 2024 – Jan 2025",
  },
  {
    school: "University of London",
    degree: "B.Sc. Accounting and Finance",
    period: "Jan 2011 – Dec 2014",
  },
];

export const certifications = [
  { name: "CompTIA Security+", date: "Oct 2025", color: "yellow" },
  { name: "Google Cybersecurity Certificate", date: "Mar 2024", color: "cyan" },
];

export const projects = [
  {
    title: "Memory Game Application",
    description:
      "Full-stack mobile application with Kotlin Android frontend and ASP.NET/C# backend. Implemented RESTful APIs for game state management and MySQL for leaderboard persistence.",
    tags: ["Kotlin", "ASP.NET", "C#", "MySQL", "REST API"],
    type: "engineering",
  },
  {
    title: "Shopping Cart Web Application",
    description:
      "Full-stack e-commerce application with Java Spring backend and React frontend. RESTful APIs handling cart operations, integrated MySQL for product and cart data persistence.",
    tags: ["Java", "Spring", "React", "MySQL", "REST API"],
    type: "engineering",
  },
  {
    title: "Fruits Image Classifier",
    description:
      "CNN-based image classifier built with PyTorch. Preprocessed and augmented image datasets to improve model accuracy, evaluated with accuracy metrics and confusion matrix.",
    tags: ["Python", "PyTorch", "CNN", "ML", "Computer Vision"],
    type: "ml",
  },
  {
    title: "Asteroid Game",
    description:
      "2D asteroid game in Python applying OOP principles — asteroid spawning, collision detection, shooting mechanics, and score tracking.",
    tags: ["Python", "OOP", "Game Dev"],
    type: "engineering",
  },
];
