//React
import React, { useContext, useEffect, useState } from "react";

//Form
import { useForm, FormContext } from "react-hook-form";

//Styles & AOS animation
import { FormBox, ParagraphTop } from "../../styles/Index.styles";
import { ItemList } from "./styles/ItemsList.style";

//Contexto
import { PrincipalContext } from "../../context/PrincipalContext";

//Functional & Services
import { deleteItemList, editItemList } from "../../services/listItemServices";

//Compoments
import { InputBox } from "../Input/index";

export const ItemListBox = ({ aidId, item, index }) => {
  const {
    user,
    aidRequestOneChange,
    setAidRequestOneChange,
    setMessageError,
  } = useContext(PrincipalContext);

  //Item
  const { _id, name, description, quantity } = item;

  //Index
  let indexItem = index.length > 1 ? index + 1 : `0${index + 1}`;

  //Tab button edit
  const [editButton, setEditButton] = useState(false);

  //Edit Item
  const editItem = async (data) => {
    const editData = { _id, ...data };
    const responseServer = await editItemList(editData);
    setAidRequestOneChange(!aidRequestOneChange);
    setMessageError(responseServer.message);
    setEditButton(!editButton);
    setTimeout(() => {
      setMessageError(null);
    }, 5000);
  };

  //Remove Item
  const deleteItem = async (e) => {
    e.preventDefault();
    const responseServer = await deleteItemList({
      _id,
      aidRequestsId: aidId._id,
    });
    setAidRequestOneChange(!aidRequestOneChange);
    setMessageError(responseServer.message);
    setTimeout(() => {
      setMessageError(null);
    }, 5000);
  };

  //  //FORM
  const methods = useForm({
    mode: "onBlur",
    defaultValues: {
      name: name,
      description: description,
      quantity: quantity,
    },
  });

  useEffect(() => {
    methods.reset({
      name: name,
      description: description,
      quantity: quantity,
    });
  }, [aidRequestOneChange]);

  const { register, handleSubmit, errors } = methods;

  return (
    <ItemList data-aos="fade-up">
      <ParagraphTop className="special" blue>
        {(() => {
          switch (aidId.type) {
            case "Supermercado":
              return `Producto-${indexItem}`;
            case "Parafarmacia":
              return `Producto-${indexItem}`;
            case "Lavandería":
              return `Lavadora-${indexItem}`;
            default:
              return `Tarea-${indexItem}`;
          }
        })()}
      </ParagraphTop>
      <ParagraphTop blue>
        <span>{name}</span>
      </ParagraphTop>
      <ParagraphTop blue>
        <span>Cantidad: {quantity}</span>
      </ParagraphTop>
      <p>{description}</p>

      {user.rol == "Helped" && aidId.status == "En creación" && (
        <>
          <div className="button-box">
            <button onClick={(e) => setEditButton(!editButton)}>Editar</button>
            <button onClick={(e) => deleteItem(e)}>Borrar</button>
            {editButton && (
              <FormContext {...methods}>
                <FormBox onSubmit={handleSubmit(editItem)}>
                  <InputBox
                    label={`Nombre  ${(() => {
                      switch (aidId.type) {
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
                        message:
                          "Este campo solo admite un máximo de 40 caracteres",
                      },
                    })}
                  />
                  <InputBox
                    label={`Decripcion ${(() => {
                      switch (aidId.type) {
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
                        message:
                          "Este campo solo admite un máximo de 180 caracteres",
                      },
                    })}
                  />

                  <InputBox
                    label={`Cantidad ${(() => {
                      switch (aidId.type) {
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

                  <button type="submit" className="button transparent-blue">
                    Enviar
                  </button>
                </FormBox>
              </FormContext>
            )}
          </div>
        </>
      )}
    </ItemList>
  );
};
