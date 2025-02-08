import QuoteForm from '../../components/ QuoteForm/ QuoteForm.tsx';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import axiosApi from '../../axiosApi.ts';
import { IQuoteForm } from '../../types';
import Loader from '../../components/UI/Loader/Loader.tsx';


const SubmitNewQuote = () => {
  const [loading, setLoading] = useState(false);

  const addNewQuote = async (quote: IQuoteForm) => {
    try {
      setLoading(true);
      await axiosApi.post("quotes.json", quote);
    } catch (e) {
      alert(`Error: ${e}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <div className="w-75 mx-auto mt-5">
        {loading ? <Loader/>
          :<QuoteForm onSubmitFunction={addNewQuote}></QuoteForm>
        }
      </div>

    </Container>
  );
};

export default SubmitNewQuote;