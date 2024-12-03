import "./App.css";
import { Container, Grid } from "@mui/material";

import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Resume from "./pages/Resume/Resume";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Container className="top-60">
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs>
          <Router>
            <Header />
            <div className="main-content container-shadow">
              <Routes>
                <Route path="/" element={<Resume />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
