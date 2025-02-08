import { Button, Form } from 'react-bootstrap';
import * as React from 'react';
import {  IQuoteForm } from '../../types';
import axiosApi from '../../axiosApi.ts';
import { useCallback, useEffect } from 'react';

interface Props {
  isEdit?: boolean;
  id?: string;
  onSubmitFunction: (quote: IQuoteForm) => void;
}

const quotationsCategory = [
  {title: 'Star Wars', id: 'star-wars'},
  {title: 'Motivational', id: 'motivational'},
  {title: "Famous people", id: 'famous-people'},
  {title: "Humour", id: 'humour'},
  {title: "Meaning of life", id: 'meaning-of-life'},
];

const QuoteForm: React.FC<Props> = ({isEdit = false, onSubmitFunction, id}) => {
  const [form, setForm] = React.useState({
    author: "",
    quote: "",
    category: "",
  });

  const IDRequest = useCallback( async () => {
    if(!isEdit) return;
    const response = await axiosApi<IQuoteForm>(`quotes/${id}.json`);
    setForm(response.data);
  }, [isEdit, id]);

  useEffect(() => {
    void IDRequest();
  }, [IDRequest]);

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitFunction(form);
    setForm({
      ...form,
      author: "",
      quote: "",
      category: "",
    });
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value});
  };

  return (
    <>
      <h1 className="text-center">{isEdit ? "Edit a quote": "Submit new quote"}</h1>
      <Form onSubmit={onSubmitForm}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
          <Form.Label>Category</Form.Label>
          <Form.Select name="category" required value={form.category} onChange={onChange}>
             <option disabled defaultValue></option>
            {quotationsCategory.map((item) => (
              <option key={item.id} value={item.id}>{item.title}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            onChange={onChange}
            value={form.author}
            required
            name="author"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Quote text</Form.Label>
          <Form.Control
            as="textarea"
            onChange={onChange}
            value={form.quote}
            required
            name="quote"
            rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit">Save</Button>
      </Form>
    </>

  );
};

export default QuoteForm;