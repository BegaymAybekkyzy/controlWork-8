import { Route, Routes } from 'react-router-dom';
import Home from './Containers/Home/Home.tsx';
import SubmitNewQuote from './Containers/SubmitNewQuote/SubmitNewQuote.tsx';
import NavBar from './components/NavBar/NavBar.tsx';



const App = () => {

  return (
    <>
      <header>
        <NavBar/>
      </header>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-quote" element={<SubmitNewQuote />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
