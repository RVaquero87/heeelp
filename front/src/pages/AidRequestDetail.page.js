//React
import React, { useContext, useEffect, useState } from "react";
import { useParams, withRouter } from "react-router-dom";

//Print Pdf
import Printer, { print } from "react-pdf-print";

//Route Protected
import { withProtected } from "../lib/protectRoute.hoc";

//Form
import { useForm, FormContext } from "react-hook-form";

//Styles & AOS animation
import {
  SectionBox,
  ContentText,
  BoxImg,
  H1,
  H2,
  SectionDetailsContent,
  SectionCreateAidsRequest,
  SectionDetailsProfile,
  Button,
  ParagraphTop,
  Paragraphs,
  SectionHeaderSingleTitle,
  FormBox,
} from "../styles/Index.styles";

//Images
import icon1 from "../../public/images/icon-1.svg";
import icon2 from "../../public/images/icon-2.svg";
import icon3 from "../../public/images/icon-3.svg";
import icon4 from "../../public/images/icon-4.svg";
import icon5 from "../../public/images/icon-5.svg";
import imgProfile from "../../public/images/default-profile.png";

//Contexto
import { PrincipalContext } from "../context/PrincipalContext";

//Functional & Services
import { scrollInit, getYearsOld } from "../lib/commonFunctional";
import {
  getOneAidRequest,
  editDataAidRequest,
  getPublicAidRequest,
  getCancelAidRequest,
  takeOverAidRequest,
  stopTakeOverAidRequest,
} from "../services/aidRequestServices";

//Compoments
import { InputBox } from "../components/Input/index";
import { TextAreaBox } from "../components/TextArea/index";
import { SelectBox } from "../components/Select/index";
import { Loading } from "../components/Loading/index";
import { ItemListBox } from "../components/ItemList/index";
import { BoxItemCreateForm } from "../components/CreatelistItem/index";

export const MyRequestDetailsRolPage = withRouter(({ history }) => {
  const {
    user,
    changeAidsRequest,
    setChangeAidsRequest,
    aidRequestOneChange,
    setAidRequestOneChange,
    setMessageError,
    listItemViewForm,
    setListItemViewForm,
  } = useContext(PrincipalContext);

  const { id } = useParams();

  //Reset Scroll
  useEffect(() => {
    scrollInit();
  }, []);

  //Get One ID AID REQUEST
  const [aidRequestOne, setAidRequestOne] = useState();

  useEffect(() => {
    getOneAidRequest(id)
      .then((aidRequest) => {
        setAidRequestOne(aidRequest[0]);
      })
      .catch((e) => {});
  }, [aidRequestOneChange]);

  //Tab Form EDIT Aid Request
  const [getEditForm, setGetEditForm] = useState(false);

  //Date SHORT
  const dateAidRequest = aidRequestOne?.time.slice(0, 10);

  //Date Create Short and Reverse
  const dateCreateAt = aidRequestOne?.createdAt
    .slice(0, 10)
    .split("-")
    .reverse()
    .join(" ");

  //Get IF TIME MODIFY STATUS HELPED IS MORE O LESS 1 HOUR
  const today = new Date().getTime();
  const modifyAidTime = new Date(aidRequestOne?.modifyCard).getTime();
  const subtractionDate = today - modifyAidTime;

  //Form EDIT AID REQUEST
  const methods = useForm({
    mode: "onBlur",
    defaultValues: {
      title: aidRequestOne?.title,
      content: aidRequestOne?.content,
      price: aidRequestOne?.price,
      time: dateAidRequest,
    },
  });

  useEffect(() => {
    methods.reset({
      title: aidRequestOne?.title,
      content: aidRequestOne?.content,
      price: aidRequestOne?.price,
      time: dateAidRequest,
    });
  }, [aidRequestOne]);

  const { register, handleSubmit, errors } = methods;

  const editAidRequest = async (data) => {
    const objectdata = { _id: aidRequestOne.id, ...data };
    const responseServer = await editDataAidRequest(objectdata);
    setGetEditForm(!getEditForm);
    setAidRequestOneChange(!aidRequestOneChange);
    setChangeAidsRequest(!changeAidsRequest);
    setMessageError(responseServer.message);
    setTimeout(() => {
      setMessageError(null);
    }, 5000);
  };

  //Public Aids Request
  const publicAidRequest = async (e) => {
    e.preventDefault();
    const responseServer = await getPublicAidRequest(id);
    setAidRequestOneChange(!aidRequestOneChange);
    setChangeAidsRequest(!changeAidsRequest);
    setMessageError(responseServer.message);
    setTimeout(() => {
      setMessageError(null);
    }, 5000);
  };

  //Cancel Aids Request
  const cancelAidRequest = async (e) => {
    e.preventDefault();
    const responseServer = await getCancelAidRequest(id);
    setChangeAidsRequest(!changeAidsRequest);
    setMessageError(responseServer.message);
    setTimeout(() => {
      setMessageError(null);
    }, 5000);
    history.goBack();
  };

  //Add Helper Aids Request
  const addAidRequest = async (e) => {
    e.preventDefault();
    const responseServer = await takeOverAidRequest(id);
    setAidRequestOneChange(!aidRequestOneChange);
    setMessageError(responseServer.message);
    setTimeout(() => {
      setMessageError(null);
    }, 5000);
  };

  //Remove Helper Aids Request
  const removeAidRequest = async (e) => {
    e.preventDefault();
    const responseServer = await stopTakeOverAidRequest(id);
    setAidRequestOneChange(!aidRequestOneChange);
    setMessageError(responseServer.message);
    setTimeout(() => {
      setMessageError(null);
    }, 5000);
  };

  const ids = ["1"];

  return (
    <>
      {!aidRequestOne ? (
        <Loading />
      ) : (
        <>
          <SectionBox bgColor="blueLight">
            <SectionHeaderSingleTitle className="contain" data-aos="fade-up">
              <ContentText>
                <H1>Detalle de petición</H1>
                <button
                  className="button-back"
                  onClick={(e) => history.goBack()}
                >
                  Volver
                </button>
              </ContentText>
            </SectionHeaderSingleTitle>
          </SectionBox>
          {user?.rol == "Helped" && aidRequestOne?.status == "En creación" && (
            <>
              <SectionBox bgColor="grey" column>
                <SectionCreateAidsRequest
                  className="contain"
                  data-aos="fade-up"
                >
                  <div
                    className={
                      getEditForm ? "content-text active" : "content-text"
                    }
                  >
                    <ParagraphTop blue>
                      <span>
                        Maecenas vel rutrum sem. Cras id suscipit lacus, eu
                        egestas orci. In elit mauris, sollicitudin dignissim mi
                        id, dignissim suscipit justo.
                      </span>
                    </ParagraphTop>
                    <Button
                      type="transparent-blue"
                      big
                      onClick={(e) => setGetEditForm(!getEditForm)}
                    >
                      {getEditForm ? " Cerrar Formulario" : "Editar petición"}
                    </Button>
                  </div>
                  {getEditForm && (
                    <FormContext {...methods}>
                      <FormBox
                        onSubmit={handleSubmit(editAidRequest)}
                        data-aos="fade-down"
                      >
                        <H2 color="blue">Edita tu petición</H2>
                        <InputBox
                          label="Pon un título a tu petición (70 max)"
                          name="title"
                          ref={register({
                            required: {
                              value: true,
                              message: "El campo es requerido",
                            },
                            maxLength: {
                              value: 70,
                              message:
                                "Este campo solo admite un máximo de 70 caracteres",
                            },
                          })}
                        />
                        <TextAreaBox
                          label="Haz una descripción"
                          name="content"
                          ref={register({
                            required: {
                              value: true,
                              message: "El campo es requerido",
                            },
                          })}
                        />
                        <InputBox
                          label="¿Cuándo o antes de que día debe realizarse?"
                          name="time"
                          type="date"
                          ref={register({
                            required: {
                              value: true,
                              message: "El campo es requerido",
                            },
                          })}
                        />
                        <SelectBox
                          label="¿Cuanto estás dispuesto a pagar?"
                          name="price"
                          options={[
                            "No puedo permitirme pagar nada",
                            "Puedo permitirme pagar 5€/hora",
                            "Puedo permitirme pagar 6€/hora",
                            "Puedo permitirme pagar 7€/hora",
                            "Puedo permitirme pagar 8€/hora",
                            "Puedo permitirme pagar 9€/hora",
                            "Puedo permitirme pagar 10€/hora",
                          ]}
                          value={[
                            "Free",
                            "5€/hora",
                            "6€/hora",
                            "7€/hora",
                            "8€/hora",
                            "9€/hora",
                            "10€/hora",
                          ]}
                          ref={register({
                            required: {
                              value: true,
                              message: "El campo es requerido",
                            },
                          })}
                        />

                        <button type="submit" className="button">
                          Editar Petición
                        </button>
                      </FormBox>
                    </FormContext>
                  )}
                </SectionCreateAidsRequest>
              </SectionBox>
            </>
          )}

          <SectionBox justify="between">
            <SectionDetailsContent className="contain" data-aos="fade-up">
              <div className="aids-content">
                <div className="content">
                  <H2 color="black">{aidRequestOne.title}</H2>
                  <ParagraphTop blue>{aidRequestOne.content}</ParagraphTop>
                </div>
                <div className="button-box">
                  {(user?.rol == "Helped" && (
                    <>
                      <div className="buttons-options">
                        {(() => {
                          switch (aidRequestOne.status) {
                            case "Publicada":
                              return (
                                <>
                                  <Button
                                    type="transparent-blue"
                                    big
                                    onClick={(e) => cancelAidRequest(e)}
                                  >
                                    Cancelar
                                  </Button>
                                </>
                              );
                            case "En creación":
                              return (
                                <>
                                  <Button
                                    type="transparent-blue"
                                    big
                                    onClick={(e) => publicAidRequest(e)}
                                  >
                                    Publicar
                                  </Button>
                                  <Button
                                    type="transparent-blue"
                                    big
                                    onClick={(e) => cancelAidRequest(e)}
                                  >
                                    Cancelar
                                  </Button>
                                </>
                              );
                            default:
                              return (
                                <Button
                                  type="transparent-blue"
                                  big
                                  onClick={(e) => duplicateAidRequest(e)}
                                >
                                  Duplicar
                                </Button>
                              );
                          }
                        })()}
                      </div>
                    </>
                  )) ||
                    (user?.rol == "Helpers" && (
                      <>
                        {aidRequestOne.status == "En curso" &&
                          subtractionDate <= 3600000 && (
                            <button
                              className="btn-require remove"
                              onClick={(e) => removeAidRequest(e)}
                            >
                              PEDIDA
                            </button>
                          )}
                        {aidRequestOne.status == "Publicada" && (
                          <button
                            className="btn-require add"
                            onClick={(e) => addAidRequest(e)}
                          >
                            ME LO PIDO
                          </button>
                        )}
                      </>
                    ))}
                </div>
              </div>
              <div className="aids-details">
                <p>
                  Fecha de creación <span>{dateCreateAt}</span>
                </p>
                <p>
                  Precio/tarifa <span>{aidRequestOne.price}</span>
                </p>
                <div className="type">
                  <BoxImg>
                    <img
                      src={(() => {
                        switch (aidRequestOne.type) {
                          case "Supermercado":
                            return icon2;
                          case "Parafarmacia":
                            return icon3;
                          case "Tareas domésticas":
                            return icon4;
                          case "Animales domésticos":
                            return icon5;
                          default:
                            return icon1;
                        }
                      })()}
                      title={aidRequestOne.type}
                      alt={aidRequestOne.type}
                    />
                  </BoxImg>
                  <Paragraphs blue>
                    <span>{aidRequestOne.type}</span>
                  </Paragraphs>
                </div>
              </div>
            </SectionDetailsContent>
          </SectionBox>

          {(user?.rol ||
            (user?.rol == "Helped" && aidRequestOne?.helperId)) && (
            <SectionBox justify="between">
              <SectionDetailsProfile className="contain" data-aos="fade-up">
                <div className="content">
                  <H2 color="black">
                    {user?.rol == "Helped"
                      ? "¿Quién me ofrece la ayuda?"
                      : "¿Quién necesita la ayuda?"}
                  </H2>
                  <div className="user">
                    <BoxImg>
                      {user?.rol == "Helped" ? (
                        <img
                          src={aidRequestOne.helperId.image || imgProfile}
                          title={aidRequestOne.helperId.name || "foto perfil"}
                          alt={aidRequestOne.helperId.name || "foto perfil"}
                        />
                      ) : (
                        <img
                          src={aidRequestOne.creatorUserid?.image || imgProfile}
                          title={aidRequestOne.creatorUserid.name}
                          alt={aidRequestOne.creatorUserid.name}
                        />
                      )}
                    </BoxImg>
                    <div className="data-user">
                      {user?.rol == "Helped" ? (
                        <>
                          <ParagraphTop blue>
                            <span>
                              {aidRequestOne.helperId.name}{" "}
                              {aidRequestOne.helperId?.lastname}
                            </span>
                          </ParagraphTop>
                          <ParagraphTop className="special">
                            {getYearsOld(aidRequestOne.helperId.birthYear)} años
                          </ParagraphTop>
                        </>
                      ) : (
                        <>
                          <ParagraphTop blue>
                            <span>
                              {aidRequestOne.creatorUserid.name}{" "}
                              {aidRequestOne.creatorUserid.lastname}
                            </span>
                          </ParagraphTop>
                          <ParagraphTop className="special">
                            {getYearsOld(aidRequestOne.creatorUserid.birthYear)}{" "}
                            años
                          </ParagraphTop>
                          <ParagraphTop className="special">
                            {aidRequestOne.creatorUserid.street}{" "}
                            {aidRequestOne.creatorUserid.number &&
                              `Nº${aidRequestOne.creatorUserid.number}`}{" "}
                            {user.portal} {user.stairs}{" "}
                            {aidRequestOne.creatorUserid.floor &&
                              `${aidRequestOne.creatorUserid.floor}º`}{" "}
                            {aidRequestOne.creatorUserid.letter}{" "}
                            {aidRequestOne.creatorUserid.city}
                          </ParagraphTop>
                        </>
                      )}
                    </div>
                  </div>
                  {(aidRequestOne.status == "En curso" ||
                    aidRequestOne.status == "Realizada") && (
                    <div className="actions">
                      <Button type="transparent-blue" big>
                        Enviar Mensaje
                      </Button>
                    </div>
                  )}
                </div>
              </SectionDetailsProfile>
            </SectionBox>
          )}

          {aidRequestOne?.shoppinglist && (
            <SectionBox justify="between">
              <SectionDetailsProfile className="contain" data-aos="fade-up">
                <H2 color="black">
                  {user?.rol == "Helped" ? "¿Qué necesito?" : "¿Qué necesita?"}
                </H2>
                <div className="box-list">
                  {aidRequestOne?.shoppinglist.length == 0 ? (
                    <Paragraphs blue>
                      <span>
                        Aún no tienes{" "}
                        {(() => {
                          switch (aidRequestOne.type) {
                            case "Supermercado":
                              return "ningún producto en la lista";
                            case "Parafarmacia":
                              return "ningún producto en la lista";
                            case "Lavandería":
                              return "ninguna lavadora en la lista";
                            default:
                              return "ninguna tarea en la lista";
                          }
                        })()}
                      </span>
                    </Paragraphs>
                  ) : (
                    <>
                      <Printer>
                        <div
                          id={ids[0]}
                          style={{ width: "210mm", height: "297mm" }}
                        >
                          {aidRequestOne?.shoppinglist.map((item, i) => {
                            const aid = aidRequestOne;
                            return (
                              <ItemListBox
                                aidId={aid}
                                item={item}
                                key={i}
                                index={i}
                              />
                            );
                          })}
                        </div>
                      </Printer>
                      {/* <div>
                        {aidRequestOne?.shoppinglist.map((item, i) => {
                          const aid = aidRequestOne;
                          return (
                            <ItemListBox
                              aidId={aid}
                              item={item}
                              key={i}
                              index={i}
                            />
                          );
                        })}
                      </div> */}
                    </>
                  )}
                </div>
                <div className="buttons-box">
                  {user?.rol == "Helped" ? (
                    <>
                      <Button
                        onClick={(e) => setListItemViewForm(!listItemViewForm)}
                        type="transparent-blue"
                        big
                      >
                        Añadir{" "}
                        {(() => {
                          switch (aidRequestOne.type) {
                            case "Supermercado":
                              return "producto";
                            case "Parafarmacia":
                              return "producto";
                            case "Lavandería":
                              return "lavadora";
                            default:
                              return "tarea";
                          }
                        })()}
                      </Button>
                      {listItemViewForm && (
                        <div className="box-create-form">
                          <BoxItemCreateForm
                            aidRequestsId={aidRequestOne._id}
                            aidRequestType={aidRequestOne.type}
                          />
                        </div>
                      )}
                    </>
                  ) : (
                    <Button
                      type="transparent-blue"
                      big
                      onClick={() => print(ids)}
                    >
                      Descargar PDF
                    </Button>
                  )}
                </div>
              </SectionDetailsProfile>
            </SectionBox>
          )}
        </>
      )}
    </>
  );
});

export const MyRequestDetailsRolPagePrivate = withProtected(
  MyRequestDetailsRolPage,
  {
    redirect: false,
  }
);
