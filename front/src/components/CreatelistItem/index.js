//React
import React, { useContext } from "react";

//Form
import { useForm, FormContext } from "react-hook-form";

//Styles & AOS animation
import { FormBox, Button } from "../../styles/Index.styles";

//Contexto
import { PrincipalContext } from "../../context/PrincipalContext";

//Functional & Services
import { createItemList } from "../../services/listItemServices";

//Compoments
import { InputBox } from "../Input/index";

export const BoxItemCreateForm = ({ aidRequestsId, aidRequestType }) => {
  const {
    listItemViewForm,
    setListItemViewForm,
    aidRequestOneChange,
    setAidRequestOneChange,
    setMessageError,
  } = useContext(PrincipalContext);

  //Edit Item
  const createItem = async (data) => {
    const createData = { aidRequestsId, ...data };
    const responseServer = await createItemList(createData);
    setAidRequestOneChange(!aidRequestOneChange);
    setMessageError(responseServer.message);
    setListItemViewForm(!listItemViewForm);
    setTimeout(() => {
      setMessageError(null);
    }, 5000);
  };

  //FORM
  const methods = useForm({
    mode: "onBlur",
  });

  const { register, handleSubmit, errors } = methods;

  return (
    <FormContext {...methods}>
      <FormBox onSubmit={handleSubmit(createItem)}>
        <InputBox
          label={`Nombre  ${(() => {
            switch (aidRequestType) {
              case "Supermercado":
                return `del producto`;
              case "Parafarmacia":
                return `del producto`;
              case "Lavandería":
                return `de la lavadora`;
              default:
                return `de la tarea`;
            }
          })()} (40 max)`}
          name="name"
          ref={register({
            required: {
              value: true,
              message: "El campo es requerido",
            },
            maxLength: {
              value: 40,
              message: "Este campo solo admite un máximo de 40 caracteres",
            },
          })}
        />
        <InputBox
          label={`Decripcion ${(() => {
            switch (aidRequestType) {
              case "Supermercado":
                return `del producto`;
              case "Parafarmacia":
                return `del producto`;
              case "Lavandería":
                return `de la lavadora`;
              default:
                return `de la tarea`;
            }
          })()} (180 max)`}
          name="description"
          ref={register({
            required: {
              value: true,
              message: "El campo es requerido",
            },
            maxLength: {
              value: 180,
              message: "Este campo solo admite un máximo de 180 caracteres",
            },
          })}
        />

        <InputBox
          label={`Cantidad ${(() => {
            switch (aidRequestType) {
              case "Supermercado":
                return `del producto`;
              case "Parafarmacia":
                return `del producto`;
              case "Lavandería":
                return `de la lavadora`;
              default:
                return `de la tarea`;
            }
          })()}`}
          name="quantity"
          type="number"
          ref={register({
            required: {
              value: true,
              message: "El campo es requerido",
            },
          })}
        />

        <Button type="submit" type=" transparent-blue" big>
          Crear{" "}
          {(() => {
            switch (aidRequestType) {
              case "Supermercado":
                return `producto`;
              case "Parafarmacia":
                return `producto`;
              case "Lavandería":
                return `lavadora`;
              default:
                return `tarea`;
            }
          })()}
        </Button>
      </FormBox>
    </FormContext>
  );
};
