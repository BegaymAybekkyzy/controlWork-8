import { Route, Routes } from 'react-router-dom';
import Quotes from './Containers/Quotes/Quotes.tsx';
import SubmitNewQuote from './Containers/SubmitNewQuote/SubmitNewQuote.tsx';
import NavBar from './components/NavBar/NavBar.tsx';
import EditQuoteForm from './Containers/EditQuoteForm/EditQuoteForm.tsx';
import ListOfQuotes from './components/ListOfQuotes/ListOfQuotes.tsx';

const App = () => {
  return (
    <>
      <header>
        <NavBar/>
      </header>

      <Routes>
        <Route path="/" element={<Quotes/>}/>
        <Route path="/quotes/" element={<Quotes/>}>
          <Route path=":category" element={<ListOfQuotes/>}/>
          <Route path="all" element={<ListOfQuotes/>}/>
        </Route>
        <Route path="/add-quote" element={<SubmitNewQuote/>}/>
        <Route path="/all/:id/edit" element={<EditQuoteForm/>}/>
        <Route path="*" element={<h1 className="text-center">Page not found</h1>}/>
      </Routes>

    </>
  );
};

export default App;
