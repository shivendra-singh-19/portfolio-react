import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import { AboutMe } from './AboutMe';
import { Body } from './Body';
import { Docs } from './Doc';
import { Login } from './Login';
import { Skills } from './Skill';

export function Portfolio() {
    return <>
        <Router>
            <div className="middle-body">
                <Routes>
                    <Route path="/" element={<Body />} />
                    <Route path="/about-me" element={< AboutMe />} />
                    <Route path="/skills" element={< Skills />} />
                    <Route path="/docs" element={< Docs />} />
                    <Route path="/login" element={< Login/>} />
                </Routes>
            </div>
            
        </Router>
    </>
}

