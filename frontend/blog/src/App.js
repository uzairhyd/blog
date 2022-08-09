
// import './App.css';


// import HomeScreen from './components/HomeScreen'

// function App() {
//   return (
//     <div>
//       <HomeScreen value='This is the home page'/>
//     </div>
//   );
// }

// export default App;


import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from 'react-bootstrap';

import HomeScreen from './components/HomeScreen'
import DetailsScreen from './components/DetailsScreen';
import Header from './components/Header';

function App() {
  return (
    <div>
    <Header />
    <Container>
      
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomeScreen />} exact />
            <Route path='/:id/' element={<DetailsScreen />} /> 
        </Routes>
      </BrowserRouter>
    </Container>
    </div>
  );
}

export default App;
