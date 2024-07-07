import { Body } from "./Body"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { Skills } from "./Skill";
import { AboutMe } from "./AboutMe"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

export function Portfolio() {
    return <>
        <Router basename="/portfolio-react">
            <Header />
            <div className="middle-body">
                <Routes>
                    <Route path="/" element={<Body />} />
                    <Route path="/about-me" element={< AboutMe />} />
                    <Route path="/skills" element={< Skills />} />
                    {/* <Route path="/docs" element={< Docs />} /> */}-
                    {/* <Route path="/login" element={< Login/>} /> */}
                </Routes>
            </div>
            <Footer />
        </Router>
    </>
}

