const jobs = [
  {
    id: 1,
    key: "frontend",
    title: "Frontend Developer",
    company: "Tech Solutions Inc.",
    location: "New York, NY",
    type: "Full-time",
    logo: "https://uploads.onecompiler.io/43r2sx9wb/43r8hk765/logo(1)(4).jpeg",
    applyUrl: "#",
    background: "https://uploads.onecompiler.io/43r2qr5hb/43r62d2f3/images.jpeg",
    description: "Develop responsive and accessible interfaces for web applications using modern frontend technologies.",
    responsibilities: [
      "Build scalable web interfaces with React or Vue",
      "Work closely with designers to implement UI/UX",
      "Debug and optimize frontend performance",
      "Collaborate in agile sprints and code reviews"
    ],
    requirements: [
      "3+ years of experience in frontend development",
      "Expertise in HTML5, CSS3, and JavaScript",
      "Familiarity with REST APIs and Git",
      "Strong understanding of accessibility and performance best practices"
    ]
  },
  {
    id: 2,
    key: "uiux",
    title: "UI/UX Designer",
    company: "Creative Minds",
    location: "Remote",
    type: "Contract",
    logo: "https://uploads.onecompiler.io/43r2sx9wb/43r8hk765/logo(5).jpeg",
    applyUrl: "#",
    background: "https://uploads.onecompiler.io/43r2sx9wb/43r8hk765/image(4).png",
    description: "Design intuitive and visually compelling user experiences across platforms.",
    responsibilities: [
      "Create wireframes, prototypes, and mockups",
      "Conduct user research and usability tests",
      "Collaborate with product and development teams",
      "Ensure brand consistency across all designs"
    ],
    requirements: [
      "2+ years in UI/UX design",
      "Proficiency in Figma, Sketch, or Adobe XD",
      "Strong portfolio of past work",
      "Excellent collaboration and communication skills"
    ]
  },
  {
    id: 3,
    key: "digital",
    title: "Digital Marketing Specialist",
    company: "MarketPro",
    location: "San Francisco, CA",
    type: "Part-time",
    logo: "https://uploads.onecompiler.io/43r2sx9wb/43r8hk765/logo(6).png",
    applyUrl: "#",
    background: "https://uploads.onecompiler.io/43r2sx9wb/43r8hk765/images%20(1).jpeg",
    description: "Drive digital marketing initiatives to enhance online visibility and lead generation.",
    responsibilities: [
      "Develop and implement SEO/SEM strategies",
      "Manage Google Ads and social media campaigns",
      "Track and report performance metrics",
      "Collaborate with content and design teams"
    ],
    requirements: [
      "3+ years in digital marketing",
      "Strong knowledge of Google Analytics and AdWords",
      "Excellent writing and campaign analysis skills",
      "Experience with marketing automation tools"
    ]
  },
  {
    id: 4,
    key: "backend",
    title: "Backend Developer",
    company: "CodeBase",
    location: "Austin, TX",
    type: "Full-time",
    logo: "https://uploads.onecompiler.io/43r2sx9wb/43r8hk765/logo(7).png",
    applyUrl: "#",
    background: "https://uploads.onecompiler.io/43r2sx9wb/43r8hk765/images%20(404).jpeg",



    description: "Build robust and scalable backend systems to support business logic and data flow.",
    responsibilities: [
      "Develop RESTful APIs and microservices",
      "Work with relational and NoSQL databases",
      "Integrate third-party services",
      "Collaborate with frontend and DevOps teams"
    ],
    requirements: [
      "4+ years in backend development",
      "Experience with Node.js, Python, or Java",
      "Understanding of databases and caching",
      "Familiarity with containerization (Docker, Kubernetes)"
    ]
  },
  {
    id: 5,
    key: "product",
    title: "Product Manager",
    company: "Innovatech",
    location: "Boston, MA",
    type: "Full-time",
    logo: "https://uploads.onecompiler.io/43r2sx9wb/43r8hk765/logo(2)(8).jpg",
    applyUrl: "#",
   background:"https://uploads.onecompiler.io/43r2sx9wb/43r8hk765/image(5).jpg",


    description: "Define and drive product vision to ensure alignment with business goals and user needs.",
    responsibilities: [
      "Lead product development lifecycle",
      "Gather and prioritize customer requirements",
      "Define product roadmap and KPIs",
      "Coordinate cross-functional teams"
    ],
    requirements: [
      "3+ years in product management",
      "Strong analytical and organizational skills",
      "Experience working with agile teams",
      "Excellent stakeholder communication"
    ]
  },
  {
    id: 6,
    key: "qa",
    title: "QA Engineer",
    company: "QualityCheck",
    location: "Seattle, WA",
    type: "Contract",
    logo: "https://uploads.onecompiler.io/43r2sx9wb/43r8hk765/images%20(9).jpeg",
    applyUrl: "#",
    

    background:"https://uploads.onecompiler.io/43r2sx9wb/43r8hk765/image(8).webp",
    description: "Ensure product quality through automated and manual testing strategies.",
    responsibilities: [
      "Develop and maintain test plans and cases",
      "Automate test scripts for regression testing",
      "Track and resolve defects",
      "Collaborate with developers and product teams"
    ],
    requirements: [
      "2+ years in software QA",
      "Experience with Selenium, Postman, or Cypress",
      "Knowledge of testing methodologies",
      "Attention to detail and analytical mindset"
    ]
  },
  {
    id: 7,
    key: "data-scientist",
    title: "Data Scientist",
    company: "DataWave",
    location: "Remote",
    type: "Full-time",
    logo: "https://uploads.onecompiler.io/43r2sx9wb/43r8hk765/logo(10).png",
  background :"https://uploads.onecompiler.io/43r2sx9wb/43r8hk765/image(9).jpeg" ,
    applyUrl: "#",

    description: "Extract insights from data and build predictive models to drive decision-making.",
    responsibilities: [
      "Analyze large datasets to discover trends",
      "Develop machine learning models",
      "Present insights to stakeholders",
      "Work with engineering teams to deploy models"
    ],
    requirements: [
      "3+ years in data science",
      "Strong Python and SQL skills",
      "Experience with scikit-learn, TensorFlow, or PyTorch",
      "Ability to communicate data insights"
    ]
  },
  {
    id: 8,
    key: "mobile",
    title: "Mobile App Developer",
    company: "AppWorks",
    location: "Chicago, IL",
    type: "Full-time",
    logo: "https://uploads.onecompiler.io/43r2sx9wb/43r8hk765/logo11.png",
    applyUrl: "#",
     background: "https://uploads.onecompiler.io/43r2sx9wb/43r8hk765/images%20(10).jpeg",
    description: "Design and develop mobile applications for Android and iOS platforms.",
    responsibilities: [
      "Build apps using Flutter, React Native, or Swift",
      "Ensure app performance and responsiveness",
      "Collaborate with designers and backend developers",
      "Publish apps to App Store and Google Play"
    ],
    requirements: [
      "2+ years in mobile development",
      "Familiarity with native and cross-platform tools",
      "Understanding of mobile UI/UX principles",
      "Version control experience (Git)"
    ]
  },
  {
    id: 9,
    key: "devops",
    title: "DevOps Engineer",
    company: "CloudNet",
    location: "Denver, CO",
    type: "Full-time",
    logo: "https://uploads.onecompiler.io/43r2sx9wb/43r8hk765/logo12.jpeg",
    applyUrl: "#",
    background :"https://uploads.onecompiler.io/43r2sx9wb/43r8hk765/images%20(12).jpeg" ,
    description: "Automate infrastructure and streamline CI/CD pipelines for faster delivery.",
    responsibilities: [
      "Manage cloud infrastructure (AWS, Azure, GCP)",
      "Build and maintain CI/CD pipelines",
      "Monitor and improve system reliability",
      "Support development and operations teams"
    ],
    requirements: [
      "3+ years in DevOps or SRE roles",
      "Expertise in shell scripting and automation",
      "Experience with Docker, Jenkins, Kubernetes",
      "Understanding of security and performance tuning"
    ]
  },
  {
    id: 10,
    key: "content-writer",
    title: "Content Writer",
    company: "WriteRight",
    location: "Remote",
    type: "Part-time",
    logo: "https://uploads.onecompiler.io/43r2sx9wb/43r8hk765/logo13.jpeg",
    applyUrl: "#",
    background :"https://uploads.onecompiler.io/43r2sx9wb/43r8hk765/cotent.webp" ,
    description: "Create compelling written content for blogs, websites, and social media.",
    responsibilities: [
      "Research industry-related topics",
      "Write clear and engaging content",
      "Edit and proofread copy",
      "Collaborate with marketing team"
    ],
    requirements: [
      "2+ years of writing experience",
      "Excellent grammar and writing skills",
      "Familiarity with SEO principles",
      "Portfolio of published work"
    ]
  },
  {
    id: 11,
    key: "graphic-designer",
    title: "Graphic Designer",
    company: "PixelPerfect",
    location: "Los Angeles, CA",
    type: "Contract",
    logo: "https://uploads.onecompiler.io/43r2sx9wb/43r8hk765/images%20(14).jpeg",
    applyUrl: "#",
    background :"https://uploads.onecompiler.io/43r6p55cm/43r6p6nfv/image(11).jpg" ,
    description: "Create engaging visual content for digital and print media.",
    responsibilities: [
      "Design graphics for web, ads, and social media",
      "Develop brand assets and templates",
      "Work with marketing and product teams",
      "Ensure design consistency"
    ],
    requirements: [
      "2+ years in graphic design",
      "Proficiency in Adobe Creative Suite",
      "Strong visual and communication skills",
      "Attention to detail and creativity"
    ]
  },
  {
    id: 12,
    key: "systems-analyst",
    title: "Systems Analyst",
    company: "SysTech",
    location: "Miami, FL",
    type: "Full-time",
    logo: "https://uploads.onecompiler.io/43r2sx9wb/43r8hk765/logo15.png",
    applyUrl: "#",
    background :"https://uploads.onecompiler.io/43r6p55cm/43r6p6nfv/systech.webp" ,
    description: "Analyze and improve IT systems to meet business needs and efficiency goals.",
    responsibilities: [
      "Gather system requirements and specifications",
      "Coordinate with developers and stakeholders",
      "Create documentation and training materials",
      "Ensure systems comply with standards"
    ],
    requirements: [
      "3+ years in systems analysis or IT",
      "Knowledge of SDLC and system design",
      "Strong problem-solving skills",
      "Familiarity with business process modeling"
    ]
  },
  {
    id: 13,
    key: "cybersecurity",
    title: "Cybersecurity Specialist",
    company: "SecureNet",
    location: "New York, NY",
    type: "Full-time",
    logo: "https://uploads.onecompiler.io/43r2sx9wb/43r8hk765/logo16.png",
    applyUrl: "#",
    background :"https://uploads.onecompiler.io/43r6p55cm/43r6p6nfv/image(13).webp" ,
    description: "Protect systems and data from cyber threats through proactive security practices.",
    responsibilities: [
      "Monitor networks and systems for security breaches",
      "Implement firewalls and data encryption",
      "Conduct security audits and assessments",
      "Educate staff on security protocols"
    ],
    requirements: [
      "3+ years in cybersecurity",
      "Knowledge of firewalls, IDS/IPS, and antivirus tools",
      "Certifications like CEH, CISSP preferred",
      "Strong analytical and problem-solving skills"
    ]
  },
  {
    id: 14,
    key: "ml",
    title: "Machine Learning Engineer",
    company: "AI Labs",
    location: "San Jose, CA",
    type: "Full-time",
    logo: "https://uploads.onecompiler.io/43r2sx9wb/43r8hk765/logo(3)(14).jpeg",
    applyUrl: "#",
     background: "https://uploads.onecompiler.io/43r2qr5hb/43r62d2f3/images%20(2).jpeg",
    description: "Design and deploy scalable machine learning models for real-world applications.",
    responsibilities: [
      "Collect and preprocess data for modeling",
      "Train and optimize ML algorithms",
      "Deploy models in production environments",
      "Work with cross-functional teams to integrate AI solutions"
    ],
    requirements: [
      "3+ years in ML or data engineering",
      "Strong Python and ML frameworks (TensorFlow, PyTorch)",
      "Experience with cloud ML platforms",
      "Background in math, statistics, or CS"
    ]
  },
  {
    id: 15,
    key: "tech-support",
    title: "Technical Support Specialist",
    company: "HelpDesk",
    location: "Remote",
    type: "Part-time",
    logo: "https://uploads.onecompiler.io/43r2sx9wb/43r8hk765/suport-service-icon-or-logo-illustration-style-icons-ecommerce-free-vector.jpg",
    applyUrl: "#",
    background :"https://uploads.onecompiler.io/43r6p55cm/43r6p6nfv/images%20(15).jpeg" ,
    description: "Provide technical assistance and support for incoming queries and issues.",
    responsibilities: [
      "Respond to customer queries via chat, email, and phone",
      "Diagnose and resolve technical issues",
      "Document issues and solutions",
      "Assist in training new support staff"
    ],
    requirements: [
      "1+ year in technical support or help desk",
      "Good understanding of computer systems and troubleshooting",
      "Strong communication and patience",
      "Knowledge of support ticketing systems"
    ]
  }
];

// Pick 3 featured jobs (for example)
const featuredJobs = [
  jobs[0],  // Frontend Developer
  jobs[4],  // Product Manager
  jobs[13]  // Machine Learning Engineer
];

function renderFeaturedJobs() {
  const featuredList = document.querySelector(".featured-job-list");
  featuredList.innerHTML = "";

  featuredJobs.forEach(job => {
    const card = document.createElement("article");
    card.className = "featured-job-card";
    card.setAttribute("tabindex", "0");
    card.innerHTML = `
      <img src="${job.logo}" alt="${job.company} logo" class="company-logo" />
      <div class="featured-job-info">
        <h3 class="job-title">${job.title}</h3>
        <p class="job-company">${job.company}</p>
        <p class="job-location">${job.location}</p>
        <div class="job-type">${job.type}</div>
        <button class="apply-btn" onclick="viewJob('${job.key}')">Apply Now</button>
      </div>
    `;
    featuredList.appendChild(card);
  });
}

function renderJobs() {
  const jobList = document.querySelector(".job-list");
  jobList.innerHTML = ""; // Clear existing jobs

  jobs.forEach(job => {
    const jobCard = document.createElement("article");
    jobCard.className = "job-card";
    jobCard.setAttribute("tabindex", "0");

    jobCard.innerHTML = `
      <div class="job-header">
        <img src="${job.logo}" alt="${job.company} logo" class="company-logo" />
        <div class="job-info">
          <h3 class="job-title">${job.title}</h3>
          <p class="job-company">${job.company}</p>
          <p class="job-location">${job.location}</p>
        </div>
      </div>
      <div class="job-type">${job.type}</div>
      <button class="apply-btn" onclick="viewJob('${job.key}')">Apply Now</button>
    `;

    jobList.appendChild(jobCard);
  });
}

function viewJob(jobKey) {
  localStorage.setItem("selectedJob", jobKey);
  window.location.href = "job.html";
}

// Render both sections on page load
renderFeaturedJobs();
renderJobs();
