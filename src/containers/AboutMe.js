import { Footer } from './Footer';
import { Header } from './Header';

export function AboutMe() {
  return (
    <>
      <Header />
      <div className="about-me-container">
        <Details />
        <Image />
      </div>
      <Footer />
    </>
  );
}

function Details() {
  return (
    <div className="detail-partition">
      <Heading />
      <Description />
    </div>
  );
}

function Heading() {
  return (
    <>
      <div className="about-me-heading">About me</div>
      <div className="about-me-subtext">
        Everything you need to know about me
      </div>
    </>
  );
}

function Description() {
  const descriptionArray = [
    {
      heading: 'Who Am I',
      description:
        "Hello I'm Shivendra Singh, a dedicated Software engineer with over two years of professional experience in the industry, complemented by an extensive background in coding.",
    },
    {
      heading: 'Professional Background',
      description:
        'I, completed my engineering degree in year 2022, majoring in Mechanical Engineering. Alongside my academic journey, I earned certificates in React Js, Node Js, MongoDb and Technologies, equipping me with a diverse skill set to tackle various software engineering challenges.',
    },
    {
      heading: 'Passion',
      description:
        'I love writing code. Its not the just the job for me but a passion that drives me to continuously improve and innovate.',
    },
    {
      heading: 'Philosophy',
      description:
        'I believe that code is the building block of this world with enough dedication, any problem can be solved, and anything can be created or improved. This philosophy fuels my approach to every project, ensuring I deliver optimal solutions.',
    },
    {
      heading: 'Call to Action',
      description:
        "I am here to assist you with wide range of services, from enhancing your product's feature to developing new requirement from scratch. Lets collaborate and turn your vision into reality.",
    },
    {
      heading: '',
      description:
        "Explore my portfolio to see my work, and don't hesitate to reach out. Together, we can create something amazing.",
    },
  ];
  return (
    <>
      {descriptionArray.map((descriptionElement) => (
        <DescriptionCards
          heading={descriptionElement.heading}
          description={descriptionElement.description}
          key={descriptionElement.heading}
        />
      ))}
    </>
  );
}

function DescriptionCards(props) {
  const { heading, description } = props;
  return (
    <>
      <div className="description-card-heading">{heading}</div>
      <div className="description-card-subtext">{description}</div>
    </>
  );
}

function Image() {
  return (
    <div className="image-partition">
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnairatips.com%2Fwp-content%2Fuploads%2F2023%2F04%2Fimage-579.png&f=1&nofb=1&ipt=c1b042bfe5a75caa37e25f3bee525ab86f7125aabfe04f1b56fc51d14afc25d2&ipo=images"
        className="about-me-image"
        alt=""
      />
    </div>
  );
}
