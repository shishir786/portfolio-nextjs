export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  demoLink?: string;
  githubLink?: string;
  tags: string[];
  category: string;
  status: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'ems-frontend',
    title: 'Employee Management System Frontend',
    description:
      'A comprehensive online employee management system frontend built with Next.js and REST API integration. Features modern UI/UX with responsive design and real-time data management.',
    image: '/images/EMS-frontend.png',
    demoLink: 'https://ems-next-js.vercel.app/',
    githubLink: 'https://github.com/shishir786/EMS-frontend-Next-Js.git',
    tags: ['Next.js', 'Tailwind CSS', 'REST API', 'TypeScript'],
    category: 'Full Stack',
    status: 'completed',
  },
  {
    id: 'ems-backend-nest',
    title: 'Employee Management System Backend (NestJS)',
    description:
      'Robust backend API built with NestJS framework and PostgreSQL database. Implements authentication, authorization, and comprehensive employee data management with TypeORM.',
    image: '/images/EMS-Nest.jpg',
    githubLink: 'https://github.com/shishir786/employee-management-system-Nest-Js.git',
    tags: ['NestJS', 'PostgreSQL', 'TypeORM','JWT Auth'],
    category: 'Backend',
    status: 'completed',
  },
  {
    id: 'ems-backend-spring',
    title: 'Employee Management System Backend (Spring Boot)',
    description:
      'Enterprise-grade backend solution using Java Spring Boot framework with PostgreSQL. Features RESTful APIs, security implementation, and scalable architecture.',
    image: '/images/EMS-springboot.png',
    githubLink: 'https://github.com/shishir786/employee-management-system-spring-boot.git',
    tags: ['Spring Boot', 'Java', 'PostgreSQL', 'JDBC', 'JWT Auth'],
    category: 'Backend',
    status: 'completed',
  },
  {
    id: 'tech-shop-web',
    title: 'Tech Shop E-commerce',
    description:
      'Full-stack e-commerce website for technology products using traditional web technologies. Features product catalog, shopping cart, and admin panel with MySQL database.',
    image: '/images/techshop.jpg',
    githubLink: 'https://github.com/shishir786/Online-Tech-Shop.git',
    tags: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
    category: 'Web Development',
    status: 'completed',
  },
  {
    id: 'restaurant-management',
    title: 'Restaurant Management System',
    description:
      'Desktop application for restaurant operations management built with C# Windows Forms and .NET Framework. Handles orders, inventory, and customer management efficiently.',
    image: '/images/resturent.jpg',
    githubLink: 'https://github.com/shishir786/Resturent-Manegement-System.git',
    tags: ['C#', '.NET Framework', 'WinForms', 'SQL Server'],
    category: 'Desktop App',
    status: 'completed',
  },
  {
    id: 'tech-shop-java',
    title: 'Tech Shop Java Application',
    description:
      'Object-oriented shopping and inventory management system built with Java Swing. Demonstrates core OOP principles with intuitive desktop interface for product management.',
    image: '/images/techjava.jpg',
    githubLink: 'https://github.com/shishir786/Shop-java-project.git',
    tags: ['Java', 'Swing', 'OOP', 'Desktop App'],
    category: 'Desktop App',
    status: 'completed',
  },
  {
    id: 'train-journey-3d',
    title: '3D Train Journey Simulation',
    description:
      'Immersive 3D train journey simulation using OpenGL graphics programming. Creates realistic environments with dynamic lighting and smooth animations for engaging visual experience.',
    image: '/images/train.png',
    githubLink: 'https://github.com/shishir786/Train-journy-view-using-open_gl-.git',
    tags: ['OpenGL', '3D Graphics', 'C++', 'Computer Graphics'],
    category: 'Graphics',
    status: 'completed',
  },
  {
    id: 'tour-data-collector',
    title: 'Tour Data Management System',
    description:
      'Efficient travel data collection and processing system using PHP and MySQL. Streamlines tour booking, customer information management, and travel itinerary planning.',
    image: '/images/tour.jpg',
    githubLink: 'https://github.com/shishir786/Tour-Data-Collect.git',
    tags: ['PHP', 'MySQL', 'jQuery', 'Web Development'],
    category: 'Web Development',
    status: 'completed',
  },
];
