export interface IQuoteForm {
  author: string;
  quote: string;
  category: string;
}

export interface IQuote {
  id: string;
  author: string;
  category: string;
  quote: string;
}

export interface IQuoteAPI {
  [id: string]: IQuoteForm;
}