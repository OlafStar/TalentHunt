export interface JobDescription {
    id: string;
    title: string;
    revenue: string;
    location: string;
    positionOverview: string;
    keyResponsibilities: string[];
    qualifications: string[];
    benefits: string[];
    howToApply: string;
    equalOpportunity: string;
}

export const jobDescriptions: JobDescription[] = [
    {
        id: '6958e9e1-3ab1-4a3d-9ca8-f5ac7853a5b9',
        title: 'Senior Fullstack Developer',
        revenue: '5500$ - 7000$',
        location: 'Remote',
        positionOverview:
            'We are seeking a highly skilled and experienced Senior Fullstack Developer to join our dynamic and growing team. The ideal candidate will have a strong background in both front-end and back-end development.',
        keyResponsibilities: [
            'Develop and maintain scalable and robust applications using modern technologies.',
            'Collaborate with cross-functional teams to define, design, and ship new features.',
            'Ensure the performance, quality, and responsiveness of applications.',
            'Identify and correct bottlenecks and fix bugs.',
            'Lead code reviews and mentor junior developers.',
            'Stay up-to-date with emerging trends and technologies in web development.',
        ],
        qualifications: [
            "Bachelor’s or Master's degree in Computer Science or related field.",
            '5+ years of experience in full-stack development.',
            'Proficient in front-end technologies, including HTML5, CSS3, JavaScript, and frameworks such as React or Angular.',
            'Strong knowledge of back-end programming languages like Node.js, Ruby, Python, or Java.',
            'Experience with databases, such as MySQL, MongoDB, or PostgreSQL.',
            'Familiarity with cloud services (AWS, Azure, Google Cloud) and web servers (Apache, Nginx).',
            'Excellent problem-solving skills and attention to detail.',
            'Strong communication and collaboration skills.',
        ],
        benefits: [
            'Competitive salary and performance bonuses.',
            'Health, dental, and vision insurance.',
            '401(k) plan with company match.',
            'Generous vacation and leave policy.',
            'Opportunities for continuous learning and career growth.',
        ],
        howToApply:
            'Please submit your resume and a cover letter explaining why you are the perfect fit for the Senior Fullstack Developer role at [Your Company Name]. Include examples of past projects and your contributions to them.',
        equalOpportunity:
            'is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees.',
    },
    {
        id: '04127db2-ac38-4cd8-99d2-1dff9d04416c',
        title: 'React Developer',
        revenue: '3000$ - 4000$',
        location: 'Remote',
        positionOverview:
            'We are looking for a passionate React Developer to join our team. The ideal candidate will be responsible for designing and implementing user interface components for JavaScript-based web and mobile applications using the React open-source library ecosystem.',
        keyResponsibilities: [
            'Develop new user-facing features using React.js.',
            'Build reusable components and front-end libraries for future use.',
            'Translate designs and wireframes into high-quality code.',
            'Optimize components for maximum performance across a vast array of web-capable devices and browsers.',
            'Coordinate with various teams working on distinct layers.',
            'Maintain and improve the website.',
            'Participate in continuing education and training to remain current on best practices and new technologies.',
        ],
        qualifications: [
            "Bachelor's degree in Computer Science, Information Technology, or a similar field.",
            '2+ years of experience in React development.',
            'Proficient in CSS, HTML, and writing cross-browser compatible code.',
            'Experience with JavaScript, including DOM manipulation and the JavaScript object model.',
            'Thorough understanding of React.js and its core principles.',
            'Familiarity with newer specifications of EcmaScript.',
            'Experience with data structure libraries (e.g., Immutable.js).',
            'Knowledge of isomorphic React is a plus.',
            'Familiarity with RESTful APIs.',
            'Knowledge of modern authorization mechanisms, such as JSON Web Token.',
            'Familiarity with modern front-end build pipelines and tools.',
            'Experience with common front-end development tools such as Babel, Webpack, NPM, etc.',
            'Ability to understand business requirements and translate them into technical requirements.',
            'A knack for benchmarking and optimization.',
        ],
        benefits: [
            'Competitive salary.',
            'Health, dental, and vision insurance.',
            'Paid time off and sick leave.',
            'Work from home flexibility.',
            'Professional development assistance.',
            'Wellness programs.',
        ],
        howToApply:
            'Interested candidates should submit a resume and a brief cover letter highlighting relevant experience and why you’re a great fit for the role to [Your Application Link or Email].',
        equalOpportunity:
            'is an equal opportunity employer and we value diversity at our company. We do not discriminate on the basis of race, religion, color, national origin, gender, sexual orientation, age, marital status, veteran status, or disability status.',
    },
    {
        id: 'bddf6e90-5dc5-4d20-a506-3857c1bdd521',
        title: 'Solution Architect',
        revenue: '8000$ - 10000$',
        location: 'Remote',
        positionOverview:
            "We are seeking an experienced Solution Architect to lead our development teams and projects. This role involves designing and implementing robust solutions to meet business and IT needs, ensuring alignment with the company's technology strategy.",
        keyResponsibilities: [
            'Lead the architectural design and implementation strategy for complex systems and ensuring integration with existing platforms.',
            'Work closely with IT and business stakeholders to define and deliver effective and scalable solutions.',
            'Assess current systems architecture and work with technical staff to recommend improvements.',
            'Drive decision-making processes related to the selection of software architecture and technologies.',
            'Communicate architectural decisions, plans, goals, and strategies.',
            'Maintain in-depth knowledge of IT industry best practices, technologies, architectures, and emerging technologies.',
            'Guide and mentor development teams and review code when necessary.',
            'Address technical concerns, ideas, and suggestions and provide architectural guidance.',
        ],
        qualifications: [
            "Bachelor’s or Master's degree in Computer Science, Engineering, or related field.",
            'Proven experience as a Solution Architect or similar role in designing complex solutions.',
            'Strong understanding of architectural principles, frameworks, and best practices.',
            'Experience in software development and coding in various languages (C#, .NET, Java etc.).',
            'Excellent knowledge of software and application design and architecture.',
            'Experience with a broad range of technologies, platforms, and systems.',
            'Strong communication and interpersonal skills.',
            'Ability to lead and work collaboratively with diverse teams.',
            'Excellent problem-solving and analytical skills.',
            'Knowledge of selected coding languages (e.g. JavaScript, Java).',
            'Familiarity with various operating systems (e.g., Windows, UNIX) and databases (e.g., MySQL, MongoDB).',
            'Experience with cloud technologies and architecture.',
        ],
        benefits: [
            'Competitive salary package.',
            'Healthcare benefits, including dental and vision.',
            'Retirement plans.',
            'Generous vacation policy and flexible working arrangements.',
            'Continual learning and development opportunities.',
            'Wellness programs and work-life balance.',
        ],
        howToApply:
            'To apply for this position, please send your resume and a cover letter outlining your experience and suitability for the role to [Your Application Link or Email].',
        equalOpportunity:
            '[Your Company Name] is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees.',
    },
    {
        id: 'afd2d623-a119-433e-8cc4-87201b9083b5',
        title: 'Project Manager',
        revenue: '4000$ - 5000$',
        location: 'Remote',
        positionOverview:
            'We are seeking an experienced Project Manager to lead project teams and ensure the successful delivery of complex and impactful projects. The ideal candidate will be responsible for planning, coordinating, implementing, and finalizing projects according to the specifications and deadlines, while keeping the project within budget.',
        keyResponsibilities: [
            'Define project scope, goals, and deliverables that support business goals in collaboration with senior management and stakeholders.',
            'Develop full-scale project plans and associated communications documents.',
            'Effectively communicate project expectations to team members and stakeholders in a timely and clear fashion.',
            'Liaise with project stakeholders on an ongoing basis.',
            'Estimate the resources and participants needed to achieve project goals.',
            'Draft and submit budget proposals, and recommend subsequent budget changes where necessary.',
            'Plan and schedule project timelines and milestones using appropriate tools.',
            'Develop and deliver progress reports, proposals, requirements documentation, and presentations.',
            'Proactively manage changes in project scope, identify potential crises, and devise contingency plans.',
            'Coach, mentor, motivate, and supervise project team members and contractors.',
        ],
        qualifications: [
            'Bachelor’s degree in an appropriate field of study or equivalent work experience.',
            'Proven experience in project management in the information technology sector.',
            'Excellent project management skills, including managing large, complex projects.',
            'Understanding of project management processes and methodologies.',
            'Strong familiarity with project management software tools, methodologies, and best practices.',
            'Experience leading, motivating, and managing various project team sizes, including internal and external resources.',
            'Ability to work under intense pressure and manage multiple projects simultaneously.',
            'Strong interpersonal skills and extremely resourceful.',
            'Proven ability to solve problems creatively.',
            'Excellent analytical skills.',
            'Strong interpersonal skills and extremely resourceful.',
        ],
        benefits: [
            'Competitive salary and benefits package.',
            'Health, dental, and vision insurance.',
            'Retirement savings plan.',
            'Paid time off and company holidays.',
            'Opportunities for on-going training and professional development.',
            'Work-life balance and support for career development.',
        ],
        howToApply:
            "Please send your resume and a detailed cover letter to [Your Application Link or Email], outlining why you're a good fit for this role.",
        equalOpportunity:
            '[Your Company Name] is committed to creating a diverse environment and is proud to be an equal opportunity employer. All qualified applicants will receive consideration for employment without regard to race, color, religion, gender, gender identity or expression, sexual orientation, national origin, genetics, disability, age, or veteran status.',
    },
    {
        id: 'efcc13e4-ce15-44cd-a75e-3a55627813d2',
        title: 'Cloud Security Architect - Azure',
        revenue: '6500$ - 7500$',
        location: 'Remote',
        positionOverview:
            "We are seeking an experienced Cloud Security Architect with a strong focus on Azure to lead our efforts in designing and implementing secure cloud solutions. The ideal candidate will be responsible for ensuring that all aspects of the company's cloud infrastructure are designed and maintained with the highest security standards in mind.",
        keyResponsibilities: [
            'Develop and maintain a secure cloud architecture for our Azure environment, aligning with industry best practices.',
            'Assess and improve existing cloud security measures and strategies to protect data and infrastructure.',
            'Collaborate with IT and development teams to ensure secure deployment of applications and services.',
            'Lead security assessments and audits, and respond to incidents and investigations.',
            'Provide expertise in cloud security tools, controls, and policies.',
            'Design and implement security controls, and identity and access management systems.',
            'Stay up-to-date with emerging security threats and technologies in the cloud space.',
            'Educate and train staff on cloud security best practices and policies.',
        ],
        qualifications: [
            "Bachelor’s or Master's degree in Computer Science, Information Security, or a related field.",
            'Strong experience with cloud environments, particularly Azure, and an understanding of their related security challenges.',
            'Relevant certifications such as Microsoft Certified: Azure Security Engineer Associate, CISSP, or CISM.',
            'Experience with cloud security technologies and best practices.',
            'Knowledge of network architecture, and security infrastructure placement.',
            'Understanding of compliance requirements and frameworks relevant to cloud security.',
            'Strong analytical and problem-solving skills.',
            'Excellent communication and leadership abilities.',
        ],
        benefits: [
            'Competitive salary and performance bonuses.',
            'Comprehensive healthcare including dental and vision.',
            'Retirement plan options.',
            'Generous vacation and flexible work policies.',
            'Continual learning and development opportunities.',
            'Cutting-edge work environment.',
        ],
        howToApply:
            'To apply, please submit your resume and a cover letter detailing your experience and how it relates to this role to [Your Application Link or Email].',
        equalOpportunity:
            '[Your Company Name] is an equal opportunity employer. We welcome people from all backgrounds and recognize that in order to be successful, we need a diverse team that can bring different perspectives and skills to the table.',
    },
];
