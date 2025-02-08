import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axiosApi from "../../axiosApi.ts";
import { IQuoteForm } from "../../types";
import QuoteForm from "../../components/ QuoteForm/ QuoteForm.tsx";
import Loader from "../../components/UI/Loader/Loader.tsx";

const EditQuoteForm = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const quotationEditing = async (quote: IQuoteForm) => {
    if (!id) return;
    try {
      setLoading(true);
      await axiosApi.put(`quotes/${id}.json`, { ...quote });
    } catch (e) {
      alert(e);
    } finally {
      setLoading(false);
      navigate("/quotes/all");
    }
  };

  let content: React.ReactNode;

  if (loading) content = <Loader />;
  if (!loading) {
    if (id) {
      content = (
        <QuoteForm onSubmitFunction={quotationEditing} isEdit id={id} />
      );
    } else {
      content = <h1>There's been an error!</h1>;
    }
  }

  return <Container>{content}</Container>;
};

export default EditQuoteForm;
