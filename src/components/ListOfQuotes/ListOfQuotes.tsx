import React, { useCallback, useEffect, useState } from 'react';
import QuoteCard from '../QuoteCard/QuoteCard.tsx';
import { IQuote, IQuoteAPI } from '../../types';
import axiosApi from '../../axiosApi.ts';
import Loader from '../UI/Loader/Loader.tsx';
import { useParams } from 'react-router-dom';
import { AxiosResponse } from 'axios';

const ListOfQuotes = () => {
  const [quotationsList, setQuotationsList] = useState<IQuote[]>([]);
  const [loading, setLoading] = useState(false);
  const {category} = useParams();

  const retrievingAllQuotes = useCallback( async () => {
    try {
      setLoading(true);

      let response: AxiosResponse<IQuoteAPI>;
      if (!category) {
        response = await axiosApi<IQuoteAPI>("quotes.json");

      } else {
        response = await axiosApi<IQuoteAPI>(`quotes.json?orderBy="category"&equalTo="${category}"`);
      }
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
  }, [category]);

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
      content = (
        <>
          <h1></h1>
          {quotationsList.map((quote) => (
            <QuoteCard key={quote.id} quote={quote} quoteDeletion={quoteDeletion}/>))}
        </>
      );
    } else {
      content = <h1>The list of citations is empty</h1>;
    }
  }

  return (
    <>
      {content}
    </>
  );
};

export default ListOfQuotes;