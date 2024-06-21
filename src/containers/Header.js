import { useNavigate } from "react-router-dom"

export function Header() {
    return (
        <>
            <div className="header-container">
                <SiteHeading />
                <AboutMe />
                <Skills />
                <Docs />
                <Login />
            </div>
        </>
    )
}

function SiteHeading() {
    const navigate = useNavigate();
    return <div className="box siteHeading"><a href="#" className="website-home-link" onClick={() => { navigate('/') }}>My Portfolio</a></div>
}

function AboutMe() {
    const navigate = useNavigate();
    return <div className="box aboutMe"><a href="#" className="header-links" onClick={() => { navigate('/about-me') }}>About me</a></div>
}

function Skills() {
    return <div className="box skills"><a href="#" className="header-links">Skills</a></div>
}

function Docs() {
    return <div className="box docs"><a href="#" className="header-links">Docs</a></div>
}

function Login() {
    return <div className="box login"><button className="login-button">Login</button></div>
}