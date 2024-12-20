import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Aspiring Game Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "AI Developer",
      company_name: "Radical AI",
      icon: starbucks,
      iconBg: "#E6DEDD",
      date: "July 2024 - October 2024",
      points: [
        "Ensure that AI models and applications prioritize ethical considerations, particularly fairness, transparency, and accountability.",
        "Collaborating with cross-functional teams including designers and other developers to audit data pipelines to confirm the data sources are reliable.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },    
    {
      title: "Material, Parts and logistics Associate",
      company_name: "Ford Motor Co.",
      icon: shopify,
      iconBg: "#E6DEDD",
      date: "April 2013 - June 2023",
      points: [
        "Ensure all materials and parts are accurately tracked and recorded in the system to avoid delays in production. Use advanced logistics tools to streamline inventory management and minimize errors.",
        "Optimize the flow of parts from suppliers to the production line, ensuring that everything arrives on time and in the correct quantities to keep assembly processes running smoothly.",
        "Maintain strict adherence to Ford's safety protocols while handling materials, operating equipment, and navigating the plant floor, fostering a safe work environment for all.",
        "Work closely with suppliers, transport teams, and production staff to anticipate challenges and develop solutions, ensuring seamless integration of logistics with the truck assembly process.",
      ],
    },    
    {
      title: "BioMedical Technician",
      company_name: "DaVita",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "January 2018 - November 2018",
      points: [
        "Responsible for maintaining, calibrating, and troubleshooting medical equipment such as dialysis machines, ensuring they are in optimal working condition to provide safe and effective patient care",
        "Ensured that all biomedical equipment met regulatory and safety standards, adhering to local, state, and federal guidelines, and performing regular inspections and preventative maintenance to mitigate equipment failure.",
        "Worked closely with healthcare professionals, including nurses and doctors, to ensure the seamless integration of biomedical equipment in patient care, providing technical support and training as needed.",
        "Responded promptly to equipment malfunctions or failures during patient treatments, minimizing downtime and maintaining a high level of patient safety and care by resolving issues swiftly and effectively.",
      ],
    },
    {
      title: "11B Infantry",
      company_name: "United States Army",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "July 2005 - January 2013",
      points: [
        "Ensure personal and team preparedness through rigorous training, attention to detail, and maintaining equipment readiness to execute missions effectively in high-pressure environments.",
        "Demonstrate the ability to adapt quickly to ever-changing situations on the ground, including unforeseen challenges in hostile environments, while maintaining focus on the mission.",
        "Foster strong bonds of trust and communication within your unit to ensure seamless coordination and mutual support during operations in demanding and dangerous conditions.",
        "Exhibit mental and physical resilience to endure the hardships of combat deployments, balancing the demands of operational effectiveness with personal and team well-being.",
      ],
    },
];


  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "OpenGL",
      description:
        "Graphics programming environment that allows developers to create 2D and 3D visual content by utilizing hardware-accelerated rendering, offering a flexible and efficient solution for rendering complex graphics in real-time applications.",
      tags: [
        {
          name: "GLSL",
          color: "blue-text-gradient",
        },
        {
          name: "GLFW",
          color: "green-text-gradient",
        },
        {
          name: "GLEW",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Vanilla JS",
      description:
        "This is a visually appealing animation of a blooming flower, created using only HTML, CSS, and JS. The flower consists of layers of petals, leaves, and glowing lights, giving it a dynamic and lively appearance. The flower gradually grows, interactive animations simulating the opening of petals and leaves.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Validation Form",
      description:
        "This is a simple React form validation component that ensures users input data correctly before submitting. The form includes fields for user details, such as name, email, and password, with validation rules applied to each field.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Form Validation",
          color: "green-text-gradient",
        },
        {
          name: "React Hook For",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };