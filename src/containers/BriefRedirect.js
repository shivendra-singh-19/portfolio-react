import { useState } from "react"

export function BriefRedirect() {
    return <div className="briefRedirect-container">
        < BriefRedirectHeading />
        < BriefRedirectSubText />
        < WebSiteSampleImages />
    </div>
}

function BriefRedirectHeading() {
    return <div className="briefRedirectHeading">
        Discover more of our Innovations and Expertise Across our Network of Sites
    </div>
}

function BriefRedirectSubText() {
    return <div className="briefRedirectSubText">
        Explore our Full Suite of Solutions and Elevate your Experience
    </div>
}

function WebSiteSampleImages() {

    const images = [
        'https://images-wixmp-530a50041672c69d335ba4cf.wixmp.com/templates/image/519da9cb618b8ee9614ea93412cdb0f0707f25e4621b060c9edaa6696d237d911678348512437.jpg',
        'https://www.founderjar.com/wp-content/uploads/2023/07/3.-Red-Bamboo-Food-Website-Example.jpeg',
        'https://img.freepik.com/free-vector/chatbot-technology-website-template_107791-113.jpg'
    ]

    const [index, setIndex] = useState(0);
    const goForward = () => {
        if (index === images.length - 1) {
            setIndex(0)
            return;
        }
        setIndex(index + 1);
    }

    const goBack = () => {
        if (index <= 0) {
            setIndex(images.length - 1)
            return;
        }
        setIndex(index - 1);
        return;
    }

    return <div className="image-carousel-container">
        <button className="previous" onClick={goBack}>&larr;</button>
        <button className="next" onClick={goForward}>&#10148;</button>
        <img src={images[index]} alt="" className='websiteImage' />
    </div>
}