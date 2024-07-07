export function Skills(){
    const skills = [
        {
            name: 'Node.js',
            description: 'Node.js is a runtime environment that allows you to execute JavaScript code outside of a web browser. It is built on the V8 JavaScript engine, which is used in Google Chrome. Node.js is commonly used for building backend services and APIs, real-time applications, and more. Key features include non-blocking, event-driven architecture, and a vast ecosystem of libraries via npm (Node Package Manager).',
            imageUrl: 'https://miro.medium.com/v2/resize:fit:800/1*bc9pmTiyKR0WNPka2w3e0Q.png'
        },
        {
            name: 'React.js',
            description: 'React.js is a popular JavaScript library for building user interfaces, particularly single-page applications where data changes over time. Developed by Facebook, React allows developers to create large web applications that can update and render efficiently in response to data changes. React components manage their own state and can be composed to build complex UIs.',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSoW3g9hjXIasgon-kpzz-lD9z4SsalyPbZA&s'
        },
        {
            name: 'MongoDb',
            description: 'MongoDB is a NoSQL, document-oriented database that stores data in JSON-like format. It is designed for scalability and flexibility, making it ideal for handling large volumes of unstructured or semi-structured data. MongoDB uses collections and documents instead of tables and rows, which allows for a more dynamic and hierarchical data structure.',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ZYtHv2OLXmthRPbkmENZRXuqBVDwlsrZ1A&s'
        },
        {
            name: 'Javascript',
            description: 'JavaScript is a high-level, interpreted programming language that is primarily used for adding interactivity to web pages. It is a core technology of the World Wide Web, alongside HTML and CSS. JavaScript is versatile and can be used for both client-side and server-side development (with Node.js). It supports event-driven, functional, and imperative programming styles.',
            imageUrl: 'https://www.w3schools.com/whatis/img_js.png'
        },
        {
            name: 'Typescript',
            description: 'TypeScript is a superset of JavaScript that adds static type definitions. Developed by Microsoft, TypeScript enables developers to catch errors at compile time rather than at runtime, making code more predictable and easier to debug. TypeScript code compiles to plain JavaScript, ensuring compatibility with existing JavaScript codebases and frameworks.',
            imageUrl: 'https://avatars.githubusercontent.com/u/46634674?s=280&v=4'
        },
        {
            name: 'Microservices',
            description: 'Microservices is an architectural style that structures an application as a collection of loosely coupled, independently deployable services. Each service is responsible for a specific business capability and communicates with other services over a network. Microservices allow for greater scalability, flexibility, and resilience in application development and deployment.',
            imageUrl: 'https://www.krasamo.com/wp-content/uploads/Microservices-Architecture.png'
        },
        {
            name: 'Docker',
            description: 'Docker is a platform that enables developers to automate the deployment, scaling, and management of applications inside lightweight, portable containers. Containers encapsulate an application and its dependencies, ensuring consistency across different environments (development, testing, production). Docker facilitates continuous integration and continuous deployment (CI/CD) practices and helps in managing microservices-based architectures.',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPJBFiQlJyU2vvl0CiwLIM8jpjAivlpdtllw&s'
        },
        {
            name: 'Nginx',
            description: 'Nginx (pronounced "engine-x") is a high-performance web server and reverse proxy server. It is widely used for serving web content, load balancing, caching, and more.',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWOoWb2-XM9PsxK940NqKjKKFlmN3Q8zDR0A&s'
        }
    ]
    return <div className="skills-container">
        {skills.map(skill => {
            return < Skill name={skill.name} description={skill.description} imageUrl={skill.imageUrl} />
        })}
    </div>
}

function Skill(props){
    const { name, description, imageUrl } = props;
    return <>
    <div className="skill-name">{name}</div>
    <SkillDescription description={description} imageUrl={imageUrl}/>
    </>
}

function SkillDescription(props){
    const { description, imageUrl } = props;
    return <div className="skill-description-container">
        <div className="skill-description">{description}</div>
        <div className="skill-imageUrl"><img src={imageUrl} className="skill-image" alt=""/></div>
    </div>
}