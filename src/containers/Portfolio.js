import { Footer } from "./Footer"
import { Header } from "./Header"
import { Body } from "./Body"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AboutMe } from "./AboutMe"

export function Portfolio() {
    return <>
        <Router>
            <Header />
            <div className="middle-body">
                <Routes>
                    <Route path="/" element={<Body />} />
                    <Route path="/about-me" element={<AboutMe />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    </>
}

