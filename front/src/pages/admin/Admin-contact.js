//React
import React, { useContext, useState, useEffect } from "react";

//Form
import { useForm, FormContext } from "react-hook-form";

//Styles & AOS animation
import {
  SectionBox,
  Paragraphs,
  SectionFormBoxAdminContact,
  FormBox,
  FilterText,
  ContainDivDefault,
} from "../../../public/styles/Common.styles";

//Contexto
import { PrincipalContext } from "../../context/PrincipalContext";

//Functional & Services
import {
  getAllMessageContact,
  sendMessageEmail,
} from "../../services/contactServices";

//Compoments
import { MessageBoxItem } from "../../components/ListItemMessageContact/Index";
import { InputBox } from "../../components/Input/Index";
import { TextAreaBox } from "../../components/TextArea/Index";

export const AdminContact = () => {
  const {
    listMessageContactChange,
    setListMessageContactChange,
    formSendEmailView,
    setFormSendEmailView,
    responseMessageContact,
    setResponseMessageContact,
    setMessageError,
  } = useContext(PrincipalContext);

  const [listMessageContact, setListMessageContact] = useState();
  const [filterEmailText, setFilterEmailText] = useState();
  const [filterStartEmailText, setFilterStartEmailText] = useState("");

  useEffect(() => {
    getAllMessageContact()
      .then((message) => {
        setListMessageContact(message);
        setFilterEmailText(message);
      })
      .catch((e) => {});
  }, [listMessageContactChange]);

  //Filter Text
  const handleFilterTextContact = async (e, value) => {
    e.preventDefault();
    setFilterStartEmailText(value);
    let filter = await listMessageContact.filter((item) => {
      const re = new RegExp(value.toLowerCase());
      return re.test(item.username.toLowerCase());
    });
    setFilterEmailText(filter);
  };

  //Form
  const methods = useForm({
    mode: "onBlur",
    defaultValues: {
      from: "info@heeelp.com",
      to: "",
      subject: "",
      emailbody: "Hola,\nSaludos Cordiales,\nRubén Vaquero",
    },
  });

  useEffect(() => {
    methods.reset({
      from: "info@heeelp.com",
      to: responseMessageContact?.username,
      subject: `Respuesta a la consulta: ${responseMessageContact?.title}`,
      emailbody: "Hola,\nSaludos Cordiales,\nRubén Vaquero",
    });
  }, [responseMessageContact]);

  const { register, handleSubmit, errors } = methods;

  const sendEmailAdmin = async (dataEmail) => {
    const reponseServer = await sendMessageEmail(dataEmail);
    setMessageError(reponseServer.message);
    setFormSendEmailView(!formSendEmailView);
    setResponseMessageContact(null);
    setTimeout(() => {
      setMessageError(null);
    }, 5000);
  };

  return (
    <>
      {!filterEmailText ? (
        <SectionBox column>
          <ContainDivDefault>
            <Paragraphs blue>
              <span>Loading...</span>
            </Paragraphs>
          </ContainDivDefault>
        </SectionBox>
      ) : (
        <>
          {formSendEmailView && (
            <SectionBox data-aos="fade-up" column justify="start">
              <SectionFormBoxAdminContact className="contain">
                <FormContext {...methods}>
                  <FormBox onSubmit={handleSubmit(sendEmailAdmin)}>
                    <InputBox
                      label="Email de"
                      name="from"
                      ref={register({
                        required: {
                          value: true,
                          message: "El campo es requerido",
                        },
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,4}$/i,
                          message: "El email incluido no es válido",
                        },
                      })}
                    />
                    <InputBox
                      label="Email para"
                      name="to"
                      ref={register({
                        required: {
                          value: true,
                          message: "El campo es requerido",
                        },
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,4}$/i,
                          message: "El email incluido no es válido",
                        },
                      })}
                    />
                    <InputBox
                      label="Resumén tu consulta en pocas palabras"
                      name="subject"
                      ref={register({
                        required: {
                          value: true,
                          message: "El campo es requerido",
                        },
                      })}
                    />
                    <TextAreaBox
                      label="Explica que te sucede"
                      name="emailbody"
                      ref={register({
                        required: {
                          value: true,
                          message: "El campo es requerido",
                        },
                      })}
                    />
                    <button type="submit" className="button big">
                      Enviar
                    </button>
                  </FormBox>
                </FormContext>
              </SectionFormBoxAdminContact>
            </SectionBox>
          )}
          <div className="contain-filters">
            <Paragraphs blue>
              <span>Filtrar por username:</span>
            </Paragraphs>
            <FilterText
              value={filterStartEmailText}
              onChange={(e) => handleFilterTextContact(e, e.target.value)}
            />
          </div>
          <SectionBox column>
            {filterEmailText.length === 0 ? (
              <Paragraphs blue>No existen nínguno con ese filtro</Paragraphs>
            ) : (
              <>
                {filterEmailText &&
                  filterEmailText.map((messageContact, i) => {
                    return (
                      <MessageBoxItem messageContact={messageContact} key={i} />
                    );
                  })}
              </>
            )}
            )
          </SectionBox>
        </>
      )}
    </>
  );
};
