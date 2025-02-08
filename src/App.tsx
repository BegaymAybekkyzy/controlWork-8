import { Route, Routes } from 'react-router-dom';
import Home from './Containers/Home/Home.tsx';
import SubmitNewQuote from './Containers/SubmitNewQuote/SubmitNewQuote.tsx';
import NavBar from './components/NavBar/NavBar.tsx';
import EditQuoteForm from './Containers/EditQuoteForm/EditQuoteForm.tsx';



const App = () => {

  return (
    <>
      <header>
        <NavBar/>
      </header>

      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/quotes" element={<Home/>}/>
          <Route path="/add-quote" element={<SubmitNewQuote />} />
          <Route path="/quotes/:id/edit" element={<EditQuoteForm/>}/>
          <Route path="*" element={<h1 className="text-center">Page not found</h1>} />
        </Routes>
      </div>
    </>
  );
};

export default App;
