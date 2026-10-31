/**
 * Portfolio Data Configuration for Salah Elbakri
 * Edit this file to add or update projects, experience, skills, or links.
 */

window.PORTFOLIO_DATA = {
  profile: {
    name: "Salah Elbakri",
    title: "Data Scientist & Systems Engineer",
    tagline: "Bridging Machine Learning, LLM Agents & Mission-Critical Infrastructure",
    bio: "Master of Science in Data Science candidate at the University of Washington with a strong foundation in Electrical Engineering (UMass Amherst). Experienced in developing LLM agent workflows, fine-tuning computer vision models (YOLO), optimizing large-scale SQL pipelines, and modeling complex electrical grid systems at ISO New England.",
    status: "Available for Data Science, Machine Learning & Energy Analytics Opportunities",
    location: "Seattle, WA / Greater Boston / Remote",
    email: "salahmelbakri@gmail.com",
    academicEmail: "selbakri@uw.edu",
    linkedin: "https://www.linkedin.com/in/salah-elbakri-0a599b120/",
    github: "https://github.com/salelbakri",
    tableau: "https://public.tableau.com/app/profile/apoorva.sheera/viz/ChessExplorer/Home",
    resumeUrl: "assets/Salah_Elbakri_Resume.pdf"
  },

  stats: [
    { label: "Years of Technical Experience", value: "5+" },
    { label: "Target Domains", value: "AI, Data & Energy" },
    { label: "Graduate Program", value: "UW MSDS" },
    { label: "Grid & BI Scale", value: "ISO-NE & BPA" }
  ],

  projects: [
    {
      id: "flipkart-llm",
      title: "LLM Agentic Workflow for Inventory & Customer Intelligence",
      category: "ai-ml",
      badge: "Industry Capstone",
      organization: "Flipkart × University of Washington",
      period: "2024 - 2025",
      summary: "Engineered autonomous Large Language Model agents with multi-turn prompt engineering and domain-specific tool-calling for customer service and inventory logistics.",
      overview: "Integrated Large Language Model (LLM) agents into Flipkart's customer service and real-time inventory management workflows. Developed structured reasoning pipelines allowing LLMs to interpret ambiguous natural language queries, autonomously call backend APIs and domain-specific tools, and formulate reliable recommendations in constrained-compute environments.",
      challenges: [
        "LLMs hallucinating or generating invalid parameters when interfacing with rigid inventory database APIs.",
        "Balancing reasoning depth with low latency and tight computational resource budgets.",
        "Handling complex, multi-turn user intent requiring state retention across dialogues."
      ],
      solutions: [
        "Crafted dynamic few-shot prompt templates and strict JSON schema output validation for deterministic tool calling.",
        "Implemented lightweight agent architectures with fallback routing to minimize token consumption and response latency.",
        "Constructed evaluation benchmarks to systematically measure intent classification accuracy and tool-execution fidelity."
      ],
      impact: "Significantly enhanced query resolution precision and validated end-to-end LLM agent orchestration for high-volume e-commerce scenarios.",
      tags: ["Large Language Models", "Autonomous Agents", "Prompt Engineering", "Python", "Tool Calling / APIs", "NLP", "FastAPI"],
      accentColor: "from-blue-500 to-indigo-600",
      icon: "bot",
      links: {
        github: "https://github.com/salelbakri",
        demoText: "Case Study Available"
      }
    },
    {
      id: "brain-tumor-yolo",
      title: "Brain Tumor Detection & Clinical Classifier",
      category: "ai-ml",
      badge: "Computer Vision",
      organization: "Applied Machine Learning",
      period: "2024",
      summary: "Fine-tuned YOLOv7 and YOLOv8 deep learning models via transfer learning to detect and classify Glioma, Meningioma, and Pituitary brain tumors with Streamlit web interface.",
      overview: "An end-to-end computer vision pipeline and web application designed to detect, locate, and classify brain tumors from MRI scans. Developed with state-of-the-art transfer learning, robust automated testing, CI/CD pipelines, and an interactive assistant for clinical context.",
      challenges: [
        "High variance and noise across MRI imaging sources, requiring strict normalization and preprocessing.",
        "Small dataset sample sizes for rare tumor classes risking severe overfitting.",
        "Building a reliable, non-intimidating interface accessible to medical researchers."
      ],
      solutions: [
        "Aggregated diverse data from Kaggle and Roboflow; built automated preprocessing and augmentations using OpenCV.",
        "Fine-tuned YOLOv7 and YOLOv8 architectures utilizing transfer learning and custom anchor tuning.",
        "Designed a responsive Streamlit application allowing instant drag-and-drop MRI uploads with bounding box visualization.",
        "Integrated an interactive chatbot providing explanatory medical literature and contextual information on tumor types."
      ],
      impact: "Achieved high classification accuracy with low false-negative rates; implemented CI workflows and comprehensive test suites.",
      tags: ["Computer Vision", "YOLOv8", "YOLOv7", "PyTorch", "OpenCV", "Streamlit", "Transfer Learning", "CI/CD"],
      accentColor: "from-purple-500 to-pink-600",
      icon: "eye",
      links: {
        github: "https://github.com/salelbakri",
        demoText: "Interactive Streamlit App"
      }
    },
    {
      id: "tableau-chess",
      title: "Chess Explorer: Tactical Analytics & Strategy Dashboard",
      category: "data-eng",
      badge: "Interactive BI",
      organization: "Visual Analytics Research",
      period: "2024",
      summary: "Published interactive Tableau Public dashboard analyzing 20,000+ competitive games to uncover opening win rates, rating discrepancies, and endgame patterns.",
      overview: "Designed and deployed a comprehensive visual analytics platform on Tableau Public analyzing millions of moves and thousands of recorded chess games. Allows players and analysts to dissect tactical trends, piece sacrifices, and optimal opening lines across varying player rating tiers.",
      challenges: [
        "Transforming complex move-by-move PGN (Portable Game Notation) sequences into structured relational metrics.",
        "Designing intuitive multi-tiered drill-downs without overwhelming the user interface.",
        "Optimizing dashboard query performance for real-time filtering across multiple dimensions."
      ],
      solutions: [
        "Structured multi-table data pipelines linking opening classifications (ECO), move lengths, piece mobility, and outcomes.",
        "Built dynamic parameters and calculated fields for rating-tier segmentation and victory method breakdowns.",
        "Published directly on Tableau Public with high accessibility and intuitive visual storytelling."
      ],
      impact: "Featured on Tableau Public; enables interactive tactical exploration for players of all levels.",
      tags: ["Tableau Public", "Data Visualization", "Exploratory Data Analysis", "Interactive BI", "UX / Storytelling"],
      accentColor: "from-cyan-500 to-teal-600",
      icon: "bar-chart",
      links: {
        tableau: "https://public.tableau.com/app/profile/apoorva.sheera/viz/ChessExplorer/Home",
        liveDemo: "https://public.tableau.com/app/profile/apoorva.sheera/viz/ChessExplorer/Home"
      }
    },
    {
      id: "bpa-financial-analytics",
      title: "Energy Financial Forecasting & SQL Analytics Engine",
      category: "data-eng",
      badge: "Data Engineering",
      organization: "Bonneville Power Administration (BPA)",
      period: "2024 - Present",
      summary: "Optimized complex multi-table SQL queries, automated ETL pipelines, and built executive financial forecasting dashboards for regional energy transmission.",
      overview: "Supported financial analysis and operational planning for regional power marketing. Engineered scalable SQL data models that consolidated financial streams, capital investments, and market fluctuations into actionable executive decision dashboards.",
      challenges: [
        "Query latency on massive historical transaction tables slowing down forecasting iterations.",
        "Disparate data sources across transmission billing, power generation, and market hedging.",
        "Strict governance and regulatory audit compliance requirements."
      ],
      solutions: [
        "Refactored legacy SQL queries, added indexing strategies, and optimized join execution plans to dramatically cut load times.",
        "Automated scheduled data verification routines to guarantee balance-sheet consistency.",
        "Created self-service interactive visual reports enabling stakeholders to model rate sensitivities under dry/wet year water flows."
      ],
      impact: "Streamlined month-end financial reporting cycles, improved forecast model accuracy, and enabled rapid executive scenario testing.",
      tags: ["Advanced SQL", "Financial Modeling", "Data Pipelines", "Power Marketing", "Executive Reporting", "Data Governance"],
      accentColor: "from-emerald-500 to-green-600",
      icon: "database",
      links: {
        demoText: "Enterprise Operational System"
      }
    },
    {
      id: "iso-power-modeling",
      title: "New England Grid EMS Modeling & Interconnection Analytics",
      category: "energy",
      badge: "Mission-Critical Infrastructure",
      organization: "ISO New England",
      period: "2019 - 2022",
      summary: "Modeled bulk electric system transmission, generation, and SCADA infrastructure; integrated machine learning for interconnection forecasting and contingency analysis.",
      overview: "Managed and updated enterprise network models reflecting ongoing field upgrades across all six New England states. Collaborated directly with regional transmission owners to ensure the Energy Management System (EMS) models accurately simulated generators, substations, transformers, and bulk power flow under peak stresses.",
      challenges: [
        "High-stakes zero-error tolerance: inaccurate network topology can lead to operational miscalculations or grid instability.",
        "Coordinating complex engineering changes with dozens of independent utility stakeholders.",
        "Anticipating grid contingencies and bottlenecking as renewable distributed resources proliferate."
      ],
      solutions: [
        "Built and maintained comprehensive contingency databases to simulate single and double-element trip events.",
        "Developed network schematic interface diagrams representing dynamic topology.",
        "Leveraged predictive data-driven models to forecast interconnection demand and isolate potential vulnerability zones.",
        "Supported short-circuit, load-flow, and transient stability analysis studies using PSS/E and PSLF."
      ],
      impact: "Ensured 99.999% model accuracy for real-time New England grid control room dispatch and long-term regional transmission reliability.",
      tags: ["Power Systems", "EMS / SCADA", "PSS/E", "PSLF", "Predictive Analytics", "Network Topology", "Contingency Analysis"],
      accentColor: "from-amber-500 to-orange-600",
      icon: "zap",
      links: {
        demoText: "Grid Reliability Engineering"
      }
    },
    {
      id: "brain-prosthetic-arm",
      title: "Brain-Controlled Prosthetic Robotic Arm",
      category: "energy",
      badge: "Award-Winning Senior Design",
      organization: "UMass Amherst ECE",
      period: "2016 - 2017",
      summary: "Engineered a brain-computer interface (BCI) headset with digital signal processing to translate EEG and EMG scalp signals into smooth robotic limb rotation and flexion.",
      overview: "Led an interdisciplinary engineering team to develop an assistive robotic arm interface for individuals with mobility impairments. Captured microvolt scalp and muscle signals, filtered physiological artifacts, and translated intentional cognitive commands into real-time servo motor actuation.",
      challenges: [
        "Extreme signal-to-noise ratio: separating microvolt brain waves from 60Hz ambient powerline noise and muscle movement artifacts.",
        "Achieving near-zero latency so the user experiences smooth, instantaneous movement feedback.",
        "Building ergonomic, stable custom hardware electrode headsets."
      ],
      solutions: [
        "Designed analog active filtering stages with 100% suppression of powerline hum and high common-mode rejection.",
        "Implemented digital signal processing algorithms on embedded microcontrollers for feature extraction and pattern classification.",
        "Constructed a lightweight 3D-printable headset and articulated arm with dual-axis articulation (shoulder rotation and elbow flexion)."
      ],
      impact: "Awarded top honors at Senior Design Presentation; demonstrated real-time smooth robotic actuation to university faculty.",
      tags: ["Biomedical Engineering", "Signal Processing", "EEG / EMG", "Hardware & CAD", "Embedded C", "Robotics"],
      accentColor: "from-rose-500 to-red-600",
      icon: "cpu",
      links: {
        demoText: "Senior Design Award Winner"
      }
    }
  ],

  experience: [
    {
      role: "Student Trainee (Financial Data & Analytics)",
      company: "Bonneville Power Administration (BPA)",
      location: "Portland, OR / Remote",
      period: "2024 - Present",
      description: "Spearhead financial data workflows, optimize large-scale SQL query structures, and build automated reporting dashboards for regional power transmission operations.",
      bullets: [
        "Developed and optimized complex SQL queries and ETL pipelines across millions of transaction records, cutting query execution times.",
        "Designed and maintained self-service financial forecasting dashboards used by executive leadership for rate sensitivity modeling.",
        "Enforced rigorous data governance, data quality audits, and compliance validation standards."
      ]
    },
    {
      role: "Data Science Capstone Lead (LLM Agents)",
      company: "Flipkart (UW Capstone)",
      location: "Seattle, WA",
      period: "2024 - 2025",
      description: "Pioneered agentic LLM architectures for high-volume customer service and dynamic inventory management.",
      bullets: [
        "Constructed multi-turn prompt orchestration pipelines enabling LLMs to call external inventory APIs reliably.",
        "Designed rigorous schema validation and error-recovery mechanisms for low-latency operational environments.",
        "Created quantitative evaluation metrics benchmarked across hundreds of customer dialogue scenarios."
      ]
    },
    {
      role: "Power Systems Modeling Engineer",
      company: "ISO New England",
      location: "Holyoke, MA",
      period: "2019 - 2022",
      description: "Maintained critical EMS network models, performed power flow analysis, and built contingency databases for the New England electric grid.",
      bullets: [
        "Modeled transmission lines, generators, and transformers across the 6-state New England transmission footprint.",
        "Communicated with utility stakeholders to incorporate field additions into real-time EMS and SCADA systems.",
        "Developed predictive and analytical models to support transmission reliability, load forecasting, and interconnection studies."
      ]
    },
    {
      role: "Engineering Consultant",
      company: "Regeneron Pharmaceuticals",
      location: "Troy, NY",
      period: "2017 - 2019",
      description: "Managed process equipment engineering and control system anomaly investigations in regulated cGMP manufacturing.",
      bullets: [
        "Investigated equipment and control systems anomalies; implemented root-cause corrective and preventative actions (CAPA).",
        "Assisted in design, specification, and site acceptance testing (SAT) of cGMP process equipment and piping.",
        "Authored comprehensive engineering evaluations, test protocols, and formal change control documentation."
      ]
    }
  ],

  education: [
    {
      degree: "Master of Science in Data Science (MSDS)",
      institution: "University of Washington",
      location: "Seattle, WA",
      period: "2024 - 2026",
      details: "Focus: Machine Learning, Statistical Inference, Deep Learning, Scalable Data Systems & Large Language Models."
    },
    {
      degree: "Bachelor of Science in Electrical Engineering",
      institution: "University of Massachusetts Amherst",
      location: "Amherst, MA",
      period: "2013 - 2017",
      details: "Concentration in Signal Processing, Digital Systems, and Power Systems. Award-winning Senior Design Project Lead."
    }
  ],

  skills: {
    programming: ["Python (PyTorch, OpenCV, Scikit-Learn)", "SQL (PostgreSQL, MySQL)", "R", "C / C++", "Java", "Bash / Shell"],
    aiMl: ["Large Language Models (LLMs)", "Autonomous Agent Workflows", "YOLOv7 / YOLOv8", "Computer Vision", "Prompt Engineering", "Transfer Learning", "Transformers & HuggingFace"],
    dataCloud: ["Tableau Public", "Pandas & NumPy", "Data Pipelines / ETL", "Database Schema Design", "Git & GitHub Projects", "CI/CD Workflows", "Docker Basics", "Streamlit"],
    engineering: ["Power Systems Modeling (PSS/E, PSLF)", "EMS & SCADA Networks", "Analog & Digital Signal Processing", "Contingency Analysis", "cGMP Engineering Standards", "MATLAB & LTSpice"]
  },

  community: [
    {
      title: "Ad Astra Foundation",
      role: "Volunteer STEM Mentor",
      description: "Mentor underrepresented students in STEM, guiding them through technical project development, data science fundamentals, and career navigation."
    },
    {
      title: "National Society of Black Engineers (NSBE)",
      role: "Active Member",
      description: "Engaged participant in conferences and collegiate workshops supporting diversity, leadership, and technical excellence."
    },
    {
      title: "Competitive Soccer",
      role: "Athlete & Team Player",
      description: "Lifelong passion for competitive soccer, reinforcing adaptability, high-pressure communication, tactical discipline, and teamwork."
    }
  ]
};
