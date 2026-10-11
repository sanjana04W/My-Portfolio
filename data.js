const PROJECTS_DATA = [
  {
    id: "candy-world",
    title: "Candy World",
    tagline: "Multi-Category E-Commerce Platform",
    subtitle: "A modern, full-stack e-commerce platform for a Sri Lankan retail business specializing in imported candies, chocolates, cosmetics, gourmet foods, and snacks.",
    description: "A modern, full-stack e-commerce platform for a Sri Lankan retail business specializing in imported candies, chocolates, cosmetics, gourmet foods, and snacks. The platform transforms traditional social-media-based ordering into a centralized digital shopping experience with product discovery, online ordering, inventory management, and administrative tools.",
    categories: ["Full-Stack Development", "E-Commerce"],
    image: "images/projects/Candy-world.png",
    technologies: ["Next.js", "React.js", "Firebase Firestore", "Firebase Authentication", "Firebase Storage", "Tailwind CSS", "EmailJS", "Google Maps", "Vercel"],
    liveDemo: "https://candy-world-website.vercel.app/",
    sourceCode: null,
    objectives: "Transform manual social-media based sales into an automated, centralized, role-based e-commerce platform with live stock management and instant notifications.",
    keyFeatures: [
      "Responsive multi-category storefront",
      "Dynamic product catalog and category browsing",
      "Product search and multi-attribute filtering",
      "Interactive product detail pages with gallery",
      "Real-time shopping cart and checkout",
      "Cash on Delivery (COD) support",
      "Customer registration and profile management",
      "Promotional offers and seasonal sale sections",
      "Product, category, inventory, and order management",
      "Customer management and low-stock alerts",
      "Secure authentication and role-based access control",
      "Automated email notifications via EmailJS & store location integration"
    ]
  },
  {
    id: "cake-paradise",
    title: "Cake Paradise by Sayu",
    tagline: "Custom Cake E-Commerce Platform",
    subtitle: "A responsive online cake-ordering platform developed for a custom cake business in Sri Lanka.",
    description: "A responsive online cake-ordering platform developed for a custom cake business in Sri Lanka. The system simplifies cake discovery, personalized cake requests, customer inquiries, and order management through an attractive digital storefront.",
    categories: ["Full-Stack Development", "E-Commerce"],
    image: "images/projects/Cake Paradise by Sayu.png",
    technologies: ["React.js", "Vite", "Firebase", "Firebase Firestore", "Firebase Authentication", "Tailwind CSS", "EmailJS"],
    liveDemo: "https://cake-paradise-by-sayu.web.app/",
    sourceCode: null,
    objectives: "Enable customers to browse custom artisanal cakes, submit tailored cake requests with custom text and reference images, and streamline order processing.",
    keyFeatures: [
      "Responsive customer storefront",
      "Dynamic product catalog and category browsing",
      "Product search and filtering",
      "Custom cake requests with flavors, sizes, text, reference images, and delivery dates",
      "Shopping cart and seamless checkout",
      "Cash on Delivery support",
      "Customer testimonials and reviews",
      "Order and inventory management",
      "Customer inquiry management",
      "Secure authentication and role-based administration",
      "Automated email notifications"
    ]
  },
  {
    id: "insure-ease",
    title: "InsureEase",
    tagline: "Insurance Management System",
    subtitle: "A full-stack insurance management application designed to support insurance policies, claims, customer information, and administrative workflows.",
    description: "A full-stack insurance management application designed to support insurance policies, claims, customer information, payment-related records, and administrative workflows. The system uses separate customer-facing and administrative applications connected through a centralized database and backend APIs.",
    categories: ["Full-Stack Development", "Web Development"],
    image: "images/projects/insurance management system.png",
    technologies: ["Next.js", "MongoDB", "Mongoose", "REST APIs", "JWT Authentication", "Tailwind CSS"],
    liveDemo: "https://insurance-website-sooty-eta.vercel.app/",
    sourceCode: null,
    objectives: "Centralize policy administration, claims processing, and user records with robust security and analytical reporting.",
    keyFeatures: [
      "Public insurance website for customer self-service",
      "Dynamic insurance policy management",
      "Insurance claim submission and tracking",
      "Customer and policyholder records management",
      "Payment and transaction management",
      "JWT-authenticated administrative panel",
      "Protected routes and secure administrator access",
      "Reports and dashboard analytics",
      "Database integration and structured RESTful API endpoints",
      "Responsive user interface across devices"
    ]
  },
  {
    id: "shop-ease",
    title: "ShopEase",
    tagline: "E-Commerce Management System",
    subtitle: "A full-stack e-commerce application featuring a customer-facing shopping website and a separate administrative panel.",
    description: "A full-stack e-commerce application featuring a customer-facing shopping website and a separate administrative panel. The system provides product browsing, contact management, database-backed operations, and secure administration through backend API integration.",
    categories: ["Full-Stack Development", "E-Commerce", "Web Development"],
    image: "images/projects/E-Commerce Management System.png",
    technologies: ["Next.js", "MongoDB", "Mongoose", "REST APIs", "JWT Authentication", "Tailwind CSS"],
    liveDemo: "https://ecommerce-website-cyan-eight.vercel.app/",
    sourceCode: null,
    objectives: "Provide an end-to-end full-stack retail solution with separate secure administrative workflows and efficient MongoDB data modeling.",
    keyFeatures: [
      "Responsive home, about, products, cart, and contact pages",
      "Product catalog and shopping cart",
      "Contact form with input validation",
      "Database-backed contact message storage",
      "Protected administrative routes",
      "JWT-based administrator authentication",
      "Contact message viewing and deletion",
      "MongoDB database integration",
      "Reusable components and structured API endpoints",
      "Responsive layouts for desktop, tablet, and mobile devices"
    ]
  },
  {
    id: "learn-sl",
    title: "LearnSL",
    tagline: "Learning Management System",
    subtitle: "A modern learning management platform designed for Sri Lankan students, teachers, and professionals.",
    description: "A modern learning management platform designed for Sri Lankan students, teachers, and professionals. The frontend focuses on accessible course discovery, multilingual learning experiences, and intuitive navigation. The interface supports Sinhala, Tamil, and English, with further backend development planned to enable a fully dynamic learning platform.",
    categories: ["Web Development"],
    image: "images/projects/Learning-Management-System.png",
    technologies: ["React.js", "Vite", "JavaScript", "CSS", "Tailwind CSS", "Bootstrap"],
    liveDemo: "https://learning-management-system-learn-sl-sigma.vercel.app/?_vercel_share=AhzdB2yHWYnQtBS0dp0YF6gmhgquDRyJ",
    sourceCode: null,
    objectives: "Promote inclusive, multilingual digital education in Sri Lanka through intuitive course discovery and rich syllabus presentations.",
    keyFeatures: [
      "Multilingual interface (Sinhala, Tamil, English)",
      "Course browsing and discovery",
      "Dynamic course carousel",
      "Grid and list viewing options",
      "Category-based course filtering",
      "Real-time search",
      "Interactive course syllabus sections",
      "Student reviews and rating showcases",
      "Responsive page layouts",
      "User-friendly navigation"
    ]
  },
  {
    id: "ceylon-adventures",
    title: "Ceylon Adventures",
    tagline: "Sri Lankan Tourism Website",
    subtitle: "A tourism-focused frontend website designed to showcase Sri Lanka's destinations, cultural heritage, and travel experiences.",
    description: "A tourism-focused frontend website designed to showcase Sri Lanka's destinations, cultural heritage, natural attractions, and travel experiences. The project emphasizes visual storytelling, structured tour information, intuitive navigation, and an engaging user experience for travelers exploring the island.",
    categories: ["Web Development"],
    image: "images/projects/Sri-Lankan-Tourism-app.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "Flexbox", "CSS Grid"],
    liveDemo: "https://sanjana04w.github.io/Sri-Lankan-Tourism-app/",
    sourceCode: "https://github.com/sanjana04w/Sri-Lankan-Tourism-app",
    objectives: "Deliver an immersive visual guide highlighting Sri Lankan heritage, nature excursions, and booking inquiries for global tourists.",
    keyFeatures: [
      "Hero section with prominent call-to-action buttons",
      "Responsive navigation with mobile toggle",
      "Tour showcase and destination guides",
      "Rich travel and tourism storytelling",
      "Booking-oriented inquiry interface",
      "Smooth scrolling and interactive buttons",
      "Clean typography and balanced island-inspired palette",
      "Desktop-focused and mobile-responsive layout"
    ]
  },
  {
    id: "miky-baby-sl",
    title: "Miky Baby SL",
    tagline: "Baby & Children's E-Commerce Platform",
    subtitle: "A modern, responsive e-commerce platform for a Sri Lankan baby and children's-goods retail business.",
    description: "A modern, responsive e-commerce platform for a Sri Lankan baby and children's-goods business. The platform transforms traditional Facebook, WhatsApp, and Messenger-based ordering into a centralized online shopping experience with product discovery, COD checkout, inventory management, automated notifications, and an administrative dashboard.",
    categories: ["Full-Stack Development", "E-Commerce"],
    image: "images/projects/MIKI-Baby-SL.png",
    technologies: ["Next.js", "React.js", "Tailwind CSS", "Firebase Firestore", "Firebase Authentication", "Firebase Storage", "EmailJS", "Meta Pixel"],
    liveDemo: "https://miki-baby-sl.vercel.app/",
    sourceCode: null,
    objectives: "Transition social-media retail into an organized storefront with marketing pixel tracking, inventory safety levels, and order workflows.",
    keyFeatures: [
      "Responsive e-commerce storefront",
      "Product search, filtering, and categories",
      "Detailed product pages and image galleries",
      "Shopping cart and Cash on Delivery checkout",
      "Order confirmation and email notifications",
      "Order and inventory management",
      "Customer and promotion management",
      "Role-based administrative dashboard",
      "Secure Firebase authentication",
      "SEO and performance optimization",
      "Marketing conversion tracking using Meta Pixel"
    ]
  },
  {
    id: "zeal-brand",
    title: "Zeal Brand",
    tagline: "Fashion E-Commerce Platform",
    subtitle: "A modern fashion e-commerce platform designed for a Sri Lankan streetwear clothing brand.",
    description: "A modern fashion e-commerce platform designed for a Sri Lankan streetwear clothing brand. The system replaces manual social-media ordering with a centralized shopping experience featuring product discovery, clothing variants, customer accounts, order processing, inventory management, and promotional campaigns.",
    categories: ["Full-Stack Development", "E-Commerce"],
    image: "images/projects/Zeal Brand.png",
    technologies: ["Next.js", "React.js", "Tailwind CSS", "Firebase Firestore", "Firebase Authentication", "Firebase Storage", "EmailJS"],
    liveDemo: "https://zeal-brand-nine.vercel.app/",
    sourceCode: null,
    objectives: "Deliver an urban fashion buying experience with size and color variants, instant stock check, and automated notifications.",
    keyFeatures: [
      "Responsive storefront with street-fashion aesthetic",
      "Product catalog, categories, and seasonal collections",
      "Instant search and advanced filtering",
      "Product variants for sizes and colors",
      "Shopping cart and COD checkout",
      "Customer registration and authentication",
      "Order confirmation and email notifications",
      "Product, inventory, and order management",
      "Customer and staff management",
      "Promotions and category management",
      "Low-stock monitoring and sales analytics",
      "Secure role-based administrative access",
      "SEO and performance optimization"
    ]
  },
  {
    id: "lillyum-fragrance",
    title: "Lillyum Fragrance",
    tagline: "Premium Perfume E-Commerce Website",
    subtitle: "A modern, luxury-inspired e-commerce platform for an authentic Sri Lankan perfume business.",
    description: "A modern, luxury-inspired e-commerce platform for a Sri Lankan perfume business. The website centralizes fragrance discovery, online ordering, product information, inventory control, and business operations in a responsive and SEO-friendly digital storefront.",
    categories: ["Full-Stack Development", "E-Commerce"],
    image: "images/projects/Lillyum Fragrance.png",
    technologies: ["Next.js", "React.js", "Tailwind CSS", "Firebase", "Firebase Authentication", "Firebase Firestore", "Firebase Storage", "EmailJS", "Meta Pixel", "TikTok Pixel"],
    liveDemo: "https://lillyum-fragrance-zloh-iybztsxc3-wenuri-sanjana-s-projects.vercel.app/",
    sourceCode: null,
    objectives: "Present luxury perfumes with authentic fragrance notes, volume selections, and multi-pixel marketing attribution.",
    keyFeatures: [
      "Premium storefront with promotional carousel",
      "Featured products, new arrivals, and best sellers",
      "Fragrance catalog with detailed notes and scent profiles",
      "Search, filtering, and sorting by brand and concentration",
      "Brand, fragrance family, gender, and size selection",
      "Product pages with authenticity guarantees",
      "Shopping cart and Cash on Delivery checkout",
      "Customer registration, login, and profile management",
      "Order confirmation and delivery tracking information",
      "Product, inventory, customer, and promotion management",
      "Customer inquiry management and sales analytics",
      "Meta Pixel & TikTok Pixel marketing tracking"
    ]
  },
  {
    id: "pawpulse-vetcare",
    title: "PawPulse VetCare",
    tagline: "Veterinary Booking & Hospital Management Platform",
    subtitle: "A comprehensive veterinary healthcare platform connecting pet owners, veterinarians, and hospital administrators.",
    description: "A comprehensive veterinary healthcare platform connecting pet owners, veterinarians, and hospital administrators through a unified digital ecosystem. The system supports online appointments, digital pet health records, vaccination tracking, clinical consultations, and hospital administration.",
    categories: ["Full-Stack Development", "Web Development"],
    image: "images/projects/PawPulse VetCare.png",
    technologies: ["Next.js 14", "React.js", "TypeScript", "Tailwind CSS", "Firebase"],
    liveDemo: "https://vet-care-website-one.vercel.app/",
    sourceCode: null,
    objectives: "Streamline clinical pet consultations, vaccination booster reminders, and doctor scheduling in a clinical web app.",
    keyFeatures: [
      "Public veterinary clinic website",
      "Online appointment booking and cancellation",
      "Pet profiles and digital health records",
      "Microchip, allergy, and weight tracking",
      "Appointment history and automated notifications",
      "Veterinarian search and availability management",
      "Clinical consultation and diagnosis records",
      "Electronic prescriptions and treatment plans",
      "Vaccination records and booster-date calculations",
      "Emergency care information and owner reviews",
      "Veterinarian credential verification",
      "Hospital administration dashboard and doctor reassignment"
    ]
  },
  {
    id: "crave-bite",
    title: "CraveBite",
    tagline: "Food Delivery Website",
    subtitle: "A modern food delivery web application designed to provide a convenient digital food discovery and ordering experience.",
    description: "A modern food delivery web application designed to provide a convenient digital food discovery and ordering experience. CraveBite enables users to explore menus, discover promotions, manage shopping carts, follow order progress, and access table-booking features through an engaging interface.",
    categories: ["Full-Stack Development", "Web Development"],
    image: "images/projects/CraveBite.png",
    technologies: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "PostCSS", "ESLint"],
    liveDemo: "https://cravebite-food-delivery-client-o8on4kybv.vercel.app/",
    sourceCode: null,
    objectives: "Create a modern, fast food delivery and dining reservation experience with interactive menu customization and order tracking.",
    keyFeatures: [
      "Modern interactive landing page",
      "Food discovery and categorized menu browsing",
      "Special deals and promotional discount banners",
      "Location-based food search",
      "Shopping cart management and checkout",
      "Order tracking interface concept",
      "Table-booking functionality",
      "Customer reviews and dish ratings",
      "User authentication and profile settings",
      "Food stories and culinary content section"
    ]
  },
  {
    id: "freelance-photographer",
    title: "Freelance Photographer Website",
    tagline: "Photography Portfolio & Visual Showcase",
    subtitle: "A sleek, responsive website developed for a freelance photographer to showcase photography work.",
    description: "A sleek, responsive website developed for a freelance photographer to showcase photography work through a structured portfolio and visually engaging image galleries. The project emphasizes clean layouts, attractive imagery, and interactive browsing.",
    categories: ["Web Development"],
    image: "images/projects/Freelance photography app.png",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    liveDemo: "https://sanjana4-w.github.io/photography/",
    sourceCode: "https://github.com/sanjana4-w/photography",
    objectives: "Showcase photography collections with high visual impact, responsive lightbox interactions, and clear service packages.",
    keyFeatures: [
      "Responsive website layout optimized for visual work",
      "Categorized photography portfolio (Portraits, Events, Nature)",
      "Interactive lightbox gallery elements",
      "Structured package and service pricing",
      "Clean, modern navigation",
      "Seamless adaptation across mobile, tablet, and desktop"
    ]
  },
  {
    id: "caffna",
    title: "CAFFNA – Coffee Shop",
    tagline: "“Feel the Space, Taste the Coffee.”",
    subtitle: "A visually driven coffee-shop website concept combining brand storytelling, café aesthetics, and digital presentation.",
    description: "A visually driven coffee-shop website concept that combines brand storytelling, contemporary café aesthetics, and digital presentation. Inspired by the relationship between architecture, space, and coffee culture, the project aims to create an online experience that communicates the brand's identity and encourages customer engagement.",
    categories: ["Web Development", "UI/UX and Other Projects"],
    image: "images/projects/CAFFNA coffee shop website.png",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    liveDemo: "https://sanjana4-w.github.io/backgroundchanger/",
    sourceCode: "https://github.com/sanjana4-w/backgroundchanger",
    objectives: "Express café ambiance and architectural coffee culture through rich interactive UI design and sensory visual presentation.",
    keyFeatures: [
      "Coffee-shop brand presentation and signature brews",
      "Visually engaging landing page with atmospheric styling",
      "Modern layout inspired by café architecture",
      "Brand storytelling and promotional highlights",
      "Clear content hierarchy and interactive drink menu",
      "Atmospheric digital presentation focused on customer delight"
    ]
  },
  {
    id: "taskio",
    title: "Taskio – To-Do App UI/UX",
    tagline: "Productivity & Task Management Concept",
    subtitle: "A productivity-focused mobile application concept designed in Figma to help users organize tasks and prioritize daily goals.",
    description: "A productivity-focused mobile application concept designed in Figma to help users organize tasks, prioritize daily goals, and maintain focus through a clean, intuitive, and stress-free interface.",
    categories: ["Mobile Applications", "UI/UX and Other Projects"],
    image: "images/projects/Taskio To-Do List  UIUX design Ap.png",
    technologies: ["Figma", "UI/UX Design", "Wireframing", "Prototyping"],
    liveDemo: "https://www.behance.net/gallery/247182627/TASKIO-To-Do-App",
    sourceCode: null,
    objectives: "Eliminate task-management friction through minimalist mobile ergonomics, high visual clarity, and intuitive micro-interactions.",
    keyFeatures: [
      "Simple task creation and category grouping",
      "Minimalist distraction-free home screen",
      "Task prioritization matrix (Urgent / Important)",
      "Smart reminder concepts and push scheduling",
      "Intuitive swipe-to-complete tracking flow",
      "Daily progress visualization graphs",
      "Modern accessible mobile design system"
    ]
  },
  {
    id: "flory",
    title: "Flory – Flower Delivery App",
    tagline: "Floral E-Commerce Mobile UI/UX",
    subtitle: "A flower-delivery mobile app concept designed in Figma to create a smooth and delightful ordering experience.",
    description: "A flower-delivery mobile app concept designed in Figma to create a smooth and delightful experience for customers ordering flowers. The design combines elegant visuals with an intuitive ordering process and convenient delivery-location management.",
    categories: ["Mobile Applications", "UI/UX and Other Projects"],
    image: "images/projects/Flory Flower Delivery App UIUX design.png",
    technologies: ["Figma", "UI/UX Design", "E-Commerce UX", "Design Systems"],
    liveDemo: "https://www.behance.net/gallery/246649723/Flory-Shop-Ui",
    sourceCode: null,
    objectives: "Craft a joyful floral gift shopping experience with intuitive occasion browsing and precise delivery address pinpoints.",
    keyFeatures: [
      "Welcoming onboarding experience with elegant floral aesthetics",
      "Popular and trending bouquet showcases",
      "Occasion-based product browsing (Birthdays, Anniversaries, Romance)",
      "Frictionless add-to-cart and card message customization",
      "Checkout and mobile payment interface concept",
      "Delivery-location management and real-time pin selection",
      "Clean, modern mobile interface with pastel color harmony"
    ]
  },
  {
    id: "pizza-ordering",
    title: "Modern Pizza Ordering App",
    tagline: "Pizza House Mobile Food App UI/UX",
    subtitle: "A mobile food-ordering application concept inspired by modern pizza-delivery experiences.",
    description: "A mobile food-ordering application concept inspired by modern pizza-delivery experiences. Designed in Figma, the project focuses on a visually appealing interface and a structured customer journey from onboarding to checkout.",
    categories: ["Mobile Applications", "UI/UX and Other Projects"],
    image: "images/projects/Modern Pizza Ordering App– UIUX Design.png",
    technologies: ["Figma", "UI/UX Design", "Mobile App Design", "Design Systems"],
    liveDemo: "https://www.behance.net/gallery/246605111/Pizza-House",
    sourceCode: null,
    objectives: "Design an appetite-inducing pizza builder and rapid delivery journey with warm visual accents and clear steps.",
    keyFeatures: [
      "Engaging onboarding and authentication screens",
      "Crust, topping, and size customization builder",
      "Special deals, combo offers, and side dish browsing",
      "Streamlined shopping cart and checkout interface",
      "Customer profile, order history, and live tracking screens",
      "Warm, modern color scheme optimized for food cravings"
    ]
  },
  {
    id: "foodie-dash",
    title: "Food Delivery App UI (FoodieDash)",
    tagline: "Restaurant Discovery & Delivery Concept",
    subtitle: "A modern food-delivery mobile interface concept combining clean aesthetics, warm accent colors, and intuitive interactions.",
    description: "A modern food-delivery mobile interface concept combining clean aesthetics, warm accent colors, and intuitive interactions. The design focuses on making restaurant discovery, food selection, and order tracking clear and convenient for users.",
    categories: ["Mobile Applications", "UI/UX and Other Projects"],
    image: "images/projects/Food Delivery App– UIUX Design .jpg",
    technologies: ["Figma", "UI/UX Design", "User Journey Mapping", "Prototyping"],
    liveDemo: "https://www.behance.net/gallery/245359367/FoodieDash",
    sourceCode: null,
    objectives: "Maximize food ordering convenience with clear visual hierarchy, driver tracking concepts, and restaurant discovery cards.",
    keyFeatures: [
      "Curated restaurant discovery and cuisine filters",
      "Interactive dish browsing with reviews and spice indicators",
      "Modern mobile interface with warm appetizing accents",
      "Structured 3-step checkout flow",
      "Real-time courier and order-status tracking concept",
      "Clean layouts, balanced negative space, and visual consistency"
    ]
  }
];

const CERTIFICATIONS_DATA = [
  {
    id: "cert-finops",
    title: "FinOps Certified Engineer",
    issuer: "FinOps Foundation / The Linux Foundation",
    category: "Professional Certifications",
    image: "images/certificaates/FinOps Certified Engineer – FinOps Foundation.jpg",
    credentialId: "Verified",
    description: "Mastery of Cloud Financial Management principles, collaborative unit economics, and cloud optimization practices."
  },
  {
    id: "cert-mean-stack",
    title: "Diploma in Secure MEAN Stack Developer",
    issuer: "Alison",
    category: "Web Development",
    image: "images/certificaates/Diploma in Secure MEAN Stack Developer - Alison.png",
    credentialId: "Diploma",
    description: "End-to-end full-stack web application development using MongoDB, Express, Angular, and Node.js with secure coding practices."
  },
  {
    id: "cert-react-alison",
    title: "React JavaScript: Fundamentals to Coding & New Beginnings",
    issuer: "Alison",
    category: "Web Development",
    image: "images/certificaates/React JavaScript - Fundamentals to Coding & New Beginnings - Alison.png",
    credentialId: "Certificate",
    description: "Core React fundamentals, component lifecycle, state management, hooks, and modern frontend application development."
  },
  {
    id: "cert-frontend-moratuwa",
    title: "Front-End Web Development",
    issuer: "University of Moratuwa",
    category: "Web Development",
    image: "images/certificaates/Front-End Web Development – University of Moratuwa.png",
    credentialId: "Verified Course",
    description: "Professional front-end web engineering covering modern HTML5, CSS3, JavaScript, DOM manipulation, and responsive design."
  },
  {
    id: "cert-web-design-moratuwa",
    title: "Web Design for Beginners",
    issuer: "University of Moratuwa",
    category: "Web Development",
    image: "images/certificaates/Web Design for Beginners – University of Moratuwa.jpeg",
    credentialId: "Verified Course",
    description: "Comprehensive fundamentals of web design, styling principles, page layout structures, and accessibility standards."
  },
  {
    id: "cert-react-bootcamp",
    title: "React.JS Bootcamp",
    issuer: "LetsUpgrade",
    category: "Web Development",
    image: "images/certificaates/React.JS Bootcamp – LetsUpgrade.png",
    credentialId: "Bootcamp",
    description: "Hands-on project-based intensive bootcamp covering modern React, component architecture, and API integration."
  },
  {
    id: "cert-html-css-bootcamp",
    title: "HTML & CSS Bootcamp",
    issuer: "LetsUpgrade",
    category: "Web Development",
    image: "images/certificaates/HTML & CSS Bootcamp – LetsUpgrade.png",
    credentialId: "Bootcamp",
    description: "Modern CSS Flexbox, Grid layout systems, and responsive website architecture."
  },
  {
    id: "cert-git-bootcamp",
    title: "Git & GitHub Bootcamp",
    issuer: "LetsUpgrade",
    category: "Linux and Developer Tools",
    image: "images/certificaates/Git & GitHub Bootcamp – LetsUpgrade.png",
    credentialId: "Bootcamp",
    description: "Advanced Git workflows, branching strategies, conflict resolution, Pull Requests, and GitHub collaborative tooling."
  },
  {
    id: "cert-git-kodekloud",
    title: "Git for Beginners",
    issuer: "KodeKloud",
    category: "Linux and Developer Tools",
    image: "images/certificaates/Git for Beginners – KodeKloud.jpg",
    credentialId: "Labs Course",
    description: "Practical hands-on labs covering version control, git commits, staging environments, and remote repositories."
  },
  {
    id: "cert-docker",
    title: "Docker Training Course for the Absolute Beginner",
    issuer: "KodeKloud",
    category: "DevOps and Cloud",
    image: "images/certificaates/Docker Training Course for the Absolute Beginner – KodeKloud.png",
    credentialId: "Hands-on Labs",
    description: "Containerization principles, Dockerfile creation, image building, container networking, and container management."
  },
  {
    id: "cert-devops-fundamentals",
    title: "Fundamentals of DevOps",
    issuer: "KodeKloud",
    category: "DevOps and Cloud",
    image: "images/certificaates/Fundamentals of DevOps – KodeKloud.png",
    credentialId: "Labs Course",
    description: "DevOps lifecycle, continuous integration, continuous delivery (CI/CD), infrastructure as code, and collaborative software delivery."
  },
  {
    id: "cert-devops-prereq",
    title: "DevOps Pre-Requisite Course",
    issuer: "KodeKloud",
    category: "DevOps and Cloud",
    image: "images/certificaates/DevOps Pre-Requisite Course – KodeKloud.png",
    credentialId: "Labs Course",
    description: "Foundational concepts in networking, virtualization, basic automation, and environments required for DevOps."
  },
  {
    id: "cert-12factor",
    title: "12 Factor App",
    issuer: "KodeKloud",
    category: "DevOps and Cloud",
    image: "images/certificaates/12 Factor App – KodeKloud.png",
    credentialId: "Architecture",
    description: "Methodology and best practices for building scalable, cloud-native, maintainable software-as-a-service applications."
  },
  {
    id: "cert-linux-kodekloud",
    title: "Learning Linux Basics Course & Labs",
    issuer: "KodeKloud",
    category: "Linux and Developer Tools",
    image: "images/certificaates/Learning Linux Basics Course & Labs – KodeKloud.png",
    credentialId: "Hands-on Labs",
    description: "Linux shell navigation, file system hierarchy, permissions, user management, and essential system administration."
  },
  {
    id: "cert-shell-kodekloud",
    title: "Shell Scripts for Beginners",
    issuer: "KodeKloud",
    category: "Linux and Developer Tools",
    image: "images/certificaates/Shell Scripts for Beginners – KodeKloud.png",
    credentialId: "Labs Course",
    description: "Bash scripting, automation of system tasks, conditionals, loops, and writing reproducible shell utilities."
  },
  {
    id: "cert-python-moratuwa",
    title: "Python for Beginners",
    issuer: "University of Moratuwa",
    category: "Programming",
    image: "images/certificaates/Python for Beginners – University of Moratuwa.png",
    credentialId: "Verified Course",
    description: "Python language fundamentals, data types, control flow, functions, and introductory problem solving."
  },
  {
    id: "cert-python-kodekloud",
    title: "Python Basics",
    issuer: "KodeKloud",
    category: "Programming",
    image: "images/certificaates/Python Basics – KodeKloud.png",
    credentialId: "Labs Course",
    description: "Practical Python programming exercises, data manipulation, file handling, and scripts for developers."
  },
  {
    id: "cert-python-sololearn",
    title: "Introduction to Python",
    issuer: "Sololearn",
    category: "Programming",
    image: "images/certificaates/Introduction to Python -  Sololearn.jpeg",
    credentialId: "Certified",
    description: "Foundational programming logic, Python syntax, variables, operators, and basic algorithm construction."
  },
  {
    id: "cert-python-intermediate-sololearn",
    title: "Python Intermediate",
    issuer: "Sololearn",
    category: "Programming",
    image: "images/certificaates/Python Intermediate -  Sololearn.jpeg",
    credentialId: "Certified",
    description: "Object-oriented programming in Python, lambda expressions, generators, exceptions, and collections."
  },
  {
    id: "cert-python-mslearn",
    title: "Introduction to Python",
    issuer: "Microsoft Learn",
    category: "Programming",
    image: "images/certificaates/Introduction to Python_ Microsoft Learn.jpg",
    credentialId: "Microsoft Learn",
    description: "Building applications with Python, package management, and cloud-readiness on modern platforms."
  },
  {
    id: "cert-c-sololearn",
    title: "Introduction to C",
    issuer: "Sololearn",
    category: "Programming",
    image: "images/certificaates/introduction to C - Sololearn.jpeg",
    credentialId: "Certified",
    description: "Core procedural programming, memory management principles, pointers, structs, and C programming fundamentals."
  },
  {
    id: "cert-csharp-sololearn",
    title: "Introduction to C#",
    issuer: "Sololearn",
    category: "Programming",
    image: "images/certificaates/Introduction to CSharp - Sololearn.png",
    credentialId: "Certified",
    description: "C# syntax, object-oriented concepts, and fundamentals for modern application development."
  },
  {
    id: "cert-js-sololearn",
    title: "Introduction to JavaScript",
    issuer: "Sololearn",
    category: "Programming",
    image: "images/certificaates/Introduction to Javascript -  Sololearn.jpeg",
    credentialId: "Certified",
    description: "JavaScript syntax, dynamic typing, DOM interaction, events, and modern client scripting."
  },
  {
    id: "cert-html-sololearn",
    title: "Introduction to HTML",
    issuer: "Sololearn",
    category: "Web Development",
    image: "images/certificaates/Introduction to HTML -  Sololearn.jpeg",
    credentialId: "Certified",
    description: "Semantic HTML5 markup, forms, document structuring, and web accessibility fundamentals."
  },
  {
    id: "cert-css-sololearn",
    title: "Introduction to CSS",
    issuer: "Sololearn",
    category: "Web Development",
    image: "images/certificaates/Introduction to CSS -  Sololearn.png",
    credentialId: "Certified",
    description: "CSS styling, box model, selectors, typography, and page formatting."
  },
  {
    id: "cert-sql-sololearn",
    title: "Introduction to SQL",
    issuer: "Sololearn",
    category: "Programming",
    image: "images/certificaates/Introduction to SQL -  Sololearn.jpeg",
    credentialId: "Certified",
    description: "Relational database querying, SELECT statements, filtering, JOINs, table creation, and aggregations."
  },
  {
    id: "cert-uiux-alison",
    title: "Introduction to UI/UX Design",
    issuer: "Alison",
    category: "UI/UX Design",
    image: "images/certificaates/Introduction to UIUX Design - Alison.png",
    credentialId: "Certificate",
    description: "Principles of human-computer interaction, visual design hierarchy, user-centered design, and wireframing."
  },
  {
    id: "cert-uiux-greatlearning",
    title: "Free UI / UX for Beginners",
    issuer: "Great Learning",
    category: "UI/UX Design",
    image: "images/certificaates/free UI  UX for Beginners - Great Learning.png",
    credentialId: "Course Certificate",
    description: "UX research fundamentals, design thinking workflow, wireframing, and interactive prototyping techniques."
  },
  {
    id: "cert-infographics",
    title: "The Power of Infographics in Research Dissemination",
    issuer: "OpenLearn",
    category: "UI/UX Design",
    image: "images/certificaates/The power of infographics in research dissemination - OpenLearn.jpg",
    credentialId: "OpenLearn",
    description: "Visual data storytelling, layout composition, informational clarity, and effective graphic communication."
  },
  {
    id: "cert-machine-learning",
    title: "Introduction to Machine Learning",
    issuer: "Kaggle",
    category: "Machine Learning",
    image: "images/certificaates/Wenuri Sanjana Herath - Intro to Machine Learning (1).png",
    credentialId: "Kaggle Verified",
    description: "Hands-on machine learning models, decision trees, random forests, model validation, and predictive algorithms."
  },
  {
    id: "cert-genai-pieces",
    title: "GenAI 101 with Pieces",
    issuer: "LetsUpgrade",
    category: "Machine Learning",
    image: "images/certificaates/GenAI 101 with Pieces course -LetsUpgrade.png",
    credentialId: "Course",
    description: "Generative AI concepts, LLM architectures, developer workflow enhancement, and context-aware coding tools."
  },
  {
    id: "cert-mslearn-sustainable",
    title: "The Principles of Sustainable Software Engineering",
    issuer: "Microsoft Learn",
    category: "Professional Certifications",
    image: "images/certificaates/The Principles of Sustainable Software Engineering -Microsoft Learn.jpg",
    credentialId: "Microsoft Learn",
    description: "Green software principles, carbon efficiency, energy measurement, and sustainable architectural design."
  },
  {
    id: "cert-mslearn-cloud",
    title: "Describe Cloud Service Types",
    issuer: "Microsoft Learn",
    category: "DevOps and Cloud",
    image: "images/certificaates/Describe cloud service types Microsoft Learn .jpg",
    credentialId: "Microsoft Learn",
    description: "Core cloud computing models including IaaS, PaaS, SaaS, and public/private/hybrid deployments."
  },
  {
    id: "cert-mslearn-m365",
    title: "Configure Your Microsoft 365 Experience",
    issuer: "Microsoft Learn",
    category: "DevOps and Cloud",
    image: "images/certificaates/Configure your Microsoft 365 experienc- Microsoft Learn .jpg",
    credentialId: "Microsoft Learn",
    description: "Enterprise administration, tenant setup, identity management, and security configurations."
  },
  {
    id: "cert-mslearn-facial",
    title: "Fundamentals of Facial Recognition",
    issuer: "Microsoft Learn",
    category: "Machine Learning",
    image: "images/certificaates/Fundamentals of Facial Recognition _ Microsoft Learn.png",
    credentialId: "Microsoft Learn",
    description: "Computer vision fundamentals, facial analysis, feature identification, and ethical AI deployment principles."
  },
  {
    id: "cert-mslearn-ocr",
    title: "Fundamentals of Optical Character Recognition",
    issuer: "Microsoft Learn",
    category: "Machine Learning",
    image: "images/certificaates/Fundamentals of optical character Recognition _ Microsoft Learn.png",
    credentialId: "Microsoft Learn",
    description: "Document intelligence, automated optical character recognition pipelines, and text extraction architectures."
  },
  {
    id: "cert-mslearn-educators-ai",
    title: "Empower Educators to Explore the Potential of AI",
    issuer: "Microsoft Learn",
    category: "Machine Learning",
    image: "images/certificaates/Empower educators to explore the potential of AI - Microsoft Learn.jpg",
    credentialId: "Microsoft Learn",
    description: "Transformative applications of AI in learning, content generation, and modern digital education tools."
  },
  {
    id: "cert-mslearn-copilot",
    title: "Enhance Teaching and Learning with Microsoft Copilot",
    issuer: "Microsoft Learn",
    category: "Machine Learning",
    image: "images/certificaates/Enhance teaching and learning with Microsoft Copilot - Microsoft  learn.jpg",
    credentialId: "Microsoft Learn",
    description: "Leveraging generative AI assistants, prompt engineering, and intelligent workflow optimization."
  },
  {
    id: "cert-mslearn-support-ai",
    title: "Equip and Support Learners with AI Tools from Microsoft",
    issuer: "Microsoft Learn",
    category: "Machine Learning",
    image: "images/certificaates/Equip and support learners with AI tools from microsoft  - Microsoft Learn.jpg",
    credentialId: "Microsoft Learn",
    description: "AI-powered digital accessibility, student engagement, and practical application of intelligent agents."
  },
  {
    id: "cert-cisco-it",
    title: "IT Essentials Course",
    issuer: "Cisco Networking Academy",
    category: "Linux and Developer Tools",
    image: "images/certificaates/IT Essentials course - Cisco Networking Academy.png",
    credentialId: "Cisco Verified",
    description: "Computer hardware, networking fundamentals, operating systems, security principles, and IT troubleshooting."
  },
  {
    id: "cert-postman",
    title: "API Test Automation with Postman",
    issuer: "TestAutomationU",
    category: "Linux and Developer Tools",
    image: "images/certificaates/API Test Automation with Postman - TestAutomationU  .png",
    credentialId: "TestAutomationU",
    description: "Automated REST API testing, test suites, assertions, continuous API verification, and Postman workspaces."
  },
  {
    id: "cert-selenium-ide",
    title: "Codeless Test Automation with Selenium IDE",
    issuer: "TestAutomationU",
    category: "Linux and Developer Tools",
    image: "images/certificaates/Codeless Test Automation with Selenium IDE - TestAutomationU.png",
    credentialId: "TestAutomationU",
    description: "Automated regression testing, browser test recording, assertions, and test suite management."
  },
  {
    id: "cert-selenium-ruby",
    title: "Selenium WebDriver with Ruby",
    issuer: "TestAutomationU",
    category: "Linux and Developer Tools",
    image: "images/certificaates/Selenium WebDriver with Ruby- TestAutomationU.png",
    credentialId: "TestAutomationU",
    description: "End-to-end automated UI testing using Selenium WebDriver, page object models, and test assertions in Ruby."
  },
  {
    id: "cert-msla",
    title: "Microsoft Learn Student Ambassador",
    issuer: "Microsoft Learn Student Ambassadors",
    category: "Professional Certifications",
    image: "images/certificaates/Microsoft learn student ambassador.jpg",
    credentialId: "Community Badge",
    description: "Recognized participant in student tech community leadership, technology learning sessions, and workshops."
  }
];

const VOLUNTEER_DATA = [
  {
    id: "vol-ballerina",
    title: "SESoc OUSL & WSO2 – Student Volunteer",
    role: "Student Volunteer",
    organization: "Software Engineering Society of OUSL (SESoc) in collaboration with WSO2",
    date: "July 2025",
    highlight: "Ballerina & Cloud-Native Development Workshop",
    description: "Volunteered at the Ballerina & Cloud-Native Development Workshop organized by SESoc - Software Engineering Society of OUSL in partnership with WSO2. Facilitated workshop coordination, participant support, and practical cloud-native computing sessions.",
    images: [
      "images/Volunteer images/Ballerina & Cloud-Native  volunteer/IMG_20250722_174336.jpg",
      "images/Volunteer images/Ballerina & Cloud-Native  volunteer/IMG-20250720-WA0063.jpg",
      "images/Volunteer images/Ballerina & Cloud-Native  volunteer/FB_IMG_1791701145263.jpg",
      "images/Volunteer images/Ballerina & Cloud-Native  volunteer/FB_IMG_1791701154692.jpg",
      "images/Volunteer images/Ballerina & Cloud-Native  volunteer/IMG-20250720-WA0093.jpg",
      "images/Volunteer images/Ballerina & Cloud-Native  volunteer/IMG-20250722-WA0037.jpg",
      "images/Volunteer images/Ballerina & Cloud-Native  volunteer/FB_IMG_17533646633013891.jpg",
      "images/Volunteer images/Ballerina & Cloud-Native  volunteer/FB_IMG_1791701159923.jpg"
    ]
  },
  {
    id: "vol-openday24",
    title: "SESoc OUSL – Open Day Volunteer (2024)",
    role: "Open Day Volunteer",
    organization: "Software Engineering Society of OUSL (SESoc)",
    date: "2024",
    highlight: "Connecting, inspiring, and guiding future tech undergraduates",
    description: "Open Day Volunteer at Software Engineering Society of OUSL 🎓✨ Proud to be part of an event that connects, inspires, and guides future tech enthusiasts. A day full of energy, teamwork, and meaningful interactions! 🙌",
    images: [
      "images/Volunteer images/open day 24/IMG_0823.JPG",
      "images/Volunteer images/open day 24/IMG_0824.JPG",
      "images/Volunteer images/open day 24/IMG-20250404-WA0230.jpg",
      "images/Volunteer images/open day 24/FB_IMG_17262002792726274.jpg",
      "images/Volunteer images/open day 24/IMG_0825.JPG",
      "images/Volunteer images/open day 24/IMG_0826.JPG",
      "images/Volunteer images/open day 24/1744109276565.jpg",
      "images/Volunteer images/open day 24/IMG-20250404-WA0002.jpg"
    ]
  },
  {
    id: "vol-openday25",
    title: "SESoc OUSL – Open Day Volunteer (2025)",
    role: "Open Day Volunteer",
    organization: "Software Engineering Society of OUSL (SESoc)",
    date: "2025",
    highlight: "Welcoming future tech leaders & community building",
    description: "Grateful to be part of an inspiring event where we welcomed future tech enthusiasts, shared knowledge, and created meaningful connections. A wonderful experience filled with teamwork, enthusiasm, and unforgettable memories! 💚🙌",
    images: [
      "images/Volunteer images/open day 25/IMG20250404131721.jpg",
      "images/Volunteer images/open day 25/IMG_6859.JPG",
      "images/Volunteer images/open day 25/IMG-20250404-WA0072.jpg",
      "images/Volunteer images/open day 25/IMG-20250404-WA0264.jpg",
      "images/Volunteer images/open day 25/IMG_20250417_083028.jpg",
      "images/Volunteer images/open day 25/IMG_6862.JPG",
      "images/Volunteer images/open day 25/IMG-20250404-WA0096.jpg",
      "images/Volunteer images/open day 25/IMG-20250404-WA0233.jpg"
    ]
  },
  {
    id: "vol-react-bootcamp",
    title: "SESoc OUSL – React + Mock API Workshop Volunteer",
    role: "Student Volunteer & Workshop Facilitator",
    organization: "Software Engineering Society of OUSL (SESoc)",
    date: "September 2025",
    highlight: "Full-Stack React & Mock API Bootcamp",
    description: "Volunteering at the Full-Stack Bootcamp (React + Mock API Workshop) 💻✨ It was a valuable hands-on experience to strengthen React fundamentals, build practical applications using React with Mock API, and learn real-world coding practices and workflows. A big thank you to SESoc - Software Engineering Society of OUSL and Mr. Ashan Dimantha for sharing knowledge and creating such a valuable learning experience.",
    images: [
      "images/Volunteer images/React + Mock API Volunteer/IMG_20250915_112959.jpg",
      "images/Volunteer images/React + Mock API Volunteer/FB_IMG_1791701087136.jpg",
      "images/Volunteer images/React + Mock API Volunteer/IMG-20250913-WA0039.jpg",
      "images/Volunteer images/React + Mock API Volunteer/IMG-20250913-WA0087.jpg",
      "images/Volunteer images/React + Mock API Volunteer/IMG-20250913-WA0079.jpg",
      "images/Volunteer images/React + Mock API Volunteer/IMG-20250913-WA0059.jpg",
      "images/Volunteer images/React + Mock API Volunteer/IMG-20250913-WA0035.jpg",
      "images/Volunteer images/React + Mock API Volunteer/IMG-20250913-WA0055.jpg"
    ]
  },
  {
    id: "vol-agm26",
    title: "SESoc Annual General Meeting (AGM) 2025/26",
    role: "Active Member & Participant",
    organization: "Software Engineering Society of OUSL (SESoc)",
    date: "2026",
    highlight: "Celebrating achievements & embracing leadership opportunities",
    description: "Proud to be part of the SESoc AGM 2026 at the Open University of Sri Lanka! 💚 A wonderful opportunity to connect with fellow members, share ideas, celebrate achievements, and look forward to new beginnings, leadership, and exciting opportunities in Software Engineering. 🚀🤝",
    images: [
      "images/Volunteer images/AGM 25.26/FB_IMG_1780933521221.jpg",
      "images/Volunteer images/AGM 25.26/FB_IMG_1781026245142.jpg",
      "images/Volunteer images/AGM 25.26/FB_IMG_1780933414753.jpg",
      "images/Volunteer images/AGM 25.26/FB_IMG_1780933452461.jpg",
      "images/Volunteer images/AGM 25.26/FB_IMG_1780933447705.jpg",
      "images/Volunteer images/AGM 25.26/FB_IMG_1780933428376.jpg",
      "images/Volunteer images/AGM 25.26/FB_IMG_1780933437944.jpg",
      "images/Volunteer images/AGM 25.26/FB_IMG_1780933436559.jpg"
    ]
  },
  {
    id: "vol-agm25",
    title: "SESoc Annual General Meeting (AGM) 2024/25",
    role: "Active Member & Participant",
    organization: "Software Engineering Society of OUSL (SESoc)",
    date: "2025",
    highlight: "Strengthening community bonds & software engineering growth",
    description: "Proud to be part of the SESoc AGM 2025 at the Open University of Sri Lanka! 💚 An amazing opportunity to connect with fellow Software Engineering students, celebrate achievements, exchange ideas, and be part of a growing tech community. Grateful for the experience, teamwork, and memories! 🤝🚀",
    images: [
      "images/Volunteer images/AGM 24.25/FB_IMG_1791701613881.jpg",
      "images/Volunteer images/AGM 24.25/FB_IMG_1791704381595.jpg",
      "images/Volunteer images/AGM 24.25/FB_IMG_1791701653230.jpg",
      "images/Volunteer images/AGM 24.25/FB_IMG_1791704415841.jpg",
      "images/Volunteer images/AGM 24.25/FB_IMG_1791701654968.jpg",
      "images/Volunteer images/AGM 24.25/FB_IMG_1791704405878.jpg",
      "images/Volunteer images/AGM 24.25/FB_IMG_1791701616247.jpg",
      "images/Volunteer images/AGM 24.25/FB_IMG_1791701654624.jpg"
    ]
  }
];

const BLOGS_DATA = [
  {
    id: "blog-1",
    title: "AI — Artificial Intelligent",
    tagline: "Artificial Intelligence Fundamentals & Modern Horizons",
    date: "Medium Publication",
    readTime: "4 min read",
    image: "images/Blogs/1. AI— Artificial Intelligent.jpg",
    url: "https://medium.com/@wenuris2004/ai-artificial-intelligent-1dfcdb11adc4",
    summary: "An exploration into the foundations of artificial intelligence, how machine intelligence has evolved from rule-based algorithms to deep learning neural networks, and its transformative role across real-world industries."
  },
  {
    id: "blog-2",
    title: "To Overcome Challenges, Stop Comparing Yourself to Others",
    tagline: "Personal Growth, Mindset & Developer Resilience",
    date: "Medium Publication",
    readTime: "3 min read",
    image: "images/Blogs/2. To Overcome Challenges, Stop Comparing yourself to Other.webp",
    url: "https://medium.com/@wenuris2004/to-overcome-challenges-stop-comparing-yourself-to-other-f46401ee4cf0",
    summary: "Reflections on self-growth, overcoming imposter syndrome in engineering, staying focused on your personal learning trajectory, and cultivating patience through continuous incremental progress."
  },
  {
    id: "blog-3",
    title: "AI Agents and the Future of Software Development in 2026",
    tagline: "Autonomous Agentic Workflows & Next-Gen Engineering",
    date: "Medium Publication (2026)",
    readTime: "5 min read",
    image: "images/Blogs/3. AI Agents and the Future of Software Development in 2026.jpg",
    url: "https://medium.com/@wenuris2004/ai-agents-and-the-future-of-software-development-in-2026-2cbb1394c0b8?postPublishedType=initial",
    summary: "How autonomous coding agents, multi-agent frameworks, and generative AI are reshaping full-stack workflows, transforming developers into strategic software architects in 2026."
  },
  {
    id: "blog-4",
    title: "Beyond Passwords: How AI Is Transforming Cybersecurity in 2026",
    tagline: "Zero-Trust Architecture & AI Defense Systems",
    date: "Medium Publication (2026)",
    readTime: "5 min read",
    image: "images/Blogs/4. Beyond Passwords How AI Is Transforming Cybersecurity in 2026.jpg",
    url: "https://medium.com/@wenuris2004/beyond-passwords-how-ai-is-transforming-cybersecurity-in-2026-1d6338fed7b7?postPublishedType=initial",
    summary: "A deep dive into passwordless authentication, behavioral biometrics, automated vulnerability detection, and AI-driven defense mechanisms guarding modern web systems."
  },
  {
    id: "blog-5",
    title: "Powering the Future of Open Source Technology",
    tagline: "Community Collaboration & Sustainable Digital Public Goods",
    date: "Medium Publication",
    readTime: "4 min read",
    image: "images/Blogs/5. Powering the Future of Open Source Technology.jpg",
    url: "https://medium.com/@wenuris2004/powering-the-future-of-open-source-technology-ea1e73a189e0?postPublishedType=initial",
    summary: "Why open source collaboration remains the backbone of the global tech ecosystem, the power of community-driven innovation, and how developers of all levels can contribute."
  },
  {
    id: "blog-6",
    title: "Meta and the Linux Foundation: Building the Future Through Open Source Collaboration",
    tagline: "Industry Giants & Open Ecosystem Governance",
    date: "Medium Publication",
    readTime: "5 min read",
    image: "images/Blogs/6. Meta and the Linux Foundation Building the Future Through Open Source Collaboration.jpg",
    url: "https://medium.com/@wenuris2004/meta-and-the-linux-foundation-building-the-future-through-open-source-collaboration-57b05e4f0e77?postPublishedType=initial",
    summary: "Analyzing strategic partnerships between major industry pioneers and open foundation initiatives to foster open-source standards, AI model sharing, and Linux ecosystem development."
  }
];
