import { Container } from 'react-bootstrap';
import { useCallback, useEffect, useState } from 'react';
import axiosApi from '../../axiosApi.ts';
import { IQuote, IQuoteAPI } from '../../types';
import * as React from 'react';
import Loader from '../../components/UI/Loader/Loader.tsx';
import QuoteCard from '../../components/QuoteCard/QuoteCard.tsx';

const Home = () => {
  const [quotationsList, setQuotationsList] = useState<IQuote[]>([]);
  const [loading, setLoading] = useState(false);

  const retrievingAllQuotes = useCallback( async () => {
    try {
      setLoading(true);

      const response = await axiosApi<IQuoteAPI>("quotes.json");
      const quotesId = Object.keys(response.data);
      const quotes = quotesId.map(quoteId => {
        return {
          id: quoteId,
          ...response.data[quoteId],
        };
      });
      setQuotationsList(quotes);
    } catch (e) {
      alert(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void retrievingAllQuotes();
  }, [retrievingAllQuotes]);

  const quoteDeletion = async (id: string) => {
    try {
      setLoading(true);
      await axiosApi.delete(`quotes/${id}.json`);
      void retrievingAllQuotes();
    } catch (e) {
      alert(e);
    } finally {
      setLoading(false);
    }
  };

  let content: React.ReactNode;

  if (loading) content = <Loader />;
  if (!loading) {
    if (quotationsList.length > 0) {
      content = (quotationsList.map((quote) => (
        <QuoteCard key={quote.id} quote={quote} quoteDeletion={quoteDeletion}/>)
      ));
    } else {
      content = <h1>The list of citations is empty</h1>;
    }
  }

  return (
    <Container>
      {content}
    </Container>
  );
};

export default Home;