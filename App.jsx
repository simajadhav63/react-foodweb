// // App.jsx
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing BrowserRouter as Router and Routes from react-router-dom
// import './App.css';
// import Navbar from './Components/Navbar/Navbar';
// import Hero from './Components/hero/Hero';
// import Second from './Components/second/Second';
// import Cards from './Components/cards/Cards';
// import Footer from './Components/footer/Footer';
// import Home from './Pages/Home'; // Importing Home component
// import Quote from './Pages/Quote'; // Importing About component


// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <Routes> {/* Using Routes instead of Switch */}
//           <Route path="/" element={<Home />} /> {/* Using Route components within Routes */}
//           <Route path="/quote" element={<Quote />} />
//         </Routes>
//         <Hero />
//         <Second />
//         <Cards />
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;
// App.jsx
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
// import './App.css';
// import Navbar from './Components/Navbar/Navbar';
// import Hero from './Components/hero/Hero';
// import Second from './Components/second/Second';
// import Cards from './Components/cards/Cards';
// import Footer from './Components/footer/Footer';
// import Home from './Pages/Home';
// import Quote from './Pages/Quote';

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/quote" element={<Quote />} />
//         </Routes>
//         <Hero />
//         <Second />
//         <Cards />
//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';
// import Navbar from './Components/Navbar/Navbar';
// import Hero from './Components/hero/Hero';
// import Second from './Components/second/Second';
// import Cards from './Components/cards/Cards';
// import Footer from './Components/footer/Footer';
// import Home from './Pages/Home';
// import Quote from './Pages/Quote';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/quote" element={<Quote />} />
//         </Routes>
//         <Hero />
//         <Second />
//         <Cards />
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';
// import Navbar from './Components/Navbar/Navbar';
// import Hero from './Components/hero/Hero';
// import Second from './Components/second/Second';
// import Cards from './Components/cards/Cards';
// import Footer from './Components/footer/Footer';
// import Home from './Pages/Home';
// import Quote from './Pages/Quote';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/quote" element={<Quote />} />
//         </Routes>
//         <Hero />
//         <Second />
//         <Cards />
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/hero/Hero';
import Second from './Components/second/Second';
import Cards from './Components/cards/Cards';
import Footer from './Components/footer/Footer';
import Home from './Pages/Home';
import Quote from './Pages/Quote';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Second />
                <Cards />
                <Footer />
              </>
            }
          />
          <Route path="/*" element={<AllComponents />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </div>
    </Router>
  );
}

function AllComponents() {
  return (
    <>
      <Hero />
      <Second />
      <Cards />
      <Footer />
    </>
  );
}

export default App;




