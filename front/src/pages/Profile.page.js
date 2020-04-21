//React
import React, { useContext, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

//Route Protected
import { withProtected } from "../lib/protectRoute.hoc";

//Styles & AOS animation
import {
  SectionBox,
  ProfileHeader,
  Paragraphs,
  FormBox,
  BoxImg,
  Button,
  H1,
  H2,
  SectionFormBoxProfile,
  SectionServicesProvidedProfile,
} from "../styles/Index.styles";

//Form
import { useForm, FormContext } from "react-hook-form";

//Images
import imgProfile from "../../public/images/default-profile.png";
import icon1 from "../../public/images/icon-1.svg";
import icon2 from "../../public/images/icon-2.svg";
import icon3 from "../../public/images/icon-3.svg";
import icon4 from "../../public/images/icon-4.svg";
import icon5 from "../../public/images/icon-5.svg";

//Contexto
import { PrincipalContext } from "../context/PrincipalContext";

//Functional & Services
import { doEdit, doUnsubscribe, uploadPhoto } from "../services/authServices";
import { scrollInit } from "../lib/commonFunctional";

//Compoments
import InputBox from "../components/Input";
import SelectBox from "../components/Select";
import ItemServicies from "../components/ItemServices";

export const Profile = withRouter(({ history }) => {
  const { user, setUser, setMessageError, aidsRequestId } = useContext(
    PrincipalContext
  );

  //Reset Scroll & Include Active Body
  useEffect(() => {
    scrollInit();
  }, []);

  //Function AidsRequestId Type Lenght
  const lenghtAidsRequestType = (typeAidRequest) => {
    const result = aidsRequestId.filter((item) => item.type == typeAidRequest)
      .length;
    return result;
  };

  //BUTTON EDIT // VIEW PROFILE
  const [buttonProfileView, setbuttonProfileView] = useState(true);

  //UNSUBSCRIBE
  const [buttonUnsubscribeSegure, setButtonUnsubscribeSegure] = useState(false);

  const onClickUnsubscribe = async (e) => {
    e.preventDefault();
    const responseUnsubscribe = await doUnsubscribe(user);
    setMessageError(responseUnsubscribe.message);
    setTimeout(() => {
      setMessageError(null);
    }, 5000);
    await setUser(null);
    history.push("/");
  };

  //BIRTHDAY SHORT
  const birthYearEdit = user?.birthYear.slice(0, 10);

  //Change tab DNI Passport
  const [dniPassportTabs, setDniPassportTabs] = useState(true);
  const onChangePassport = (e, value) => {
    e.preventDefault();
    setDniPassportTabs(value);
  };

  //IMAGE USER
  const [image, setImage] = useState({
    imageUrl: user?.image || imgProfile,
  });
  const [imagePreview, setImagePreview] = useState(image.imageUrl);
  const [changeOneFile, setChangeOneFile] = useState(false);
  const handleChangeFile = (e) => {
    setImage({ imageUrl: e.target.files[0] });
    setImagePreview(URL.createObjectURL(e.target.files[0]));
    setChangeOneFile(true);
  };

  //FORM
  const methods = useForm({
    mode: "onBlur",
    defaultValues: {
      name: user?.name,
      lastname: user?.lastname,
      dniPassport: user?.dniPassport,
      birthYear: birthYearEdit,
      street: user?.street,
      number: user?.number,
      portal: user?.portal,
      stairs: user?.stairs,
      floor: user?.floor,
      letter: user?.letter,
      postalCode: user?.postalCode,
      city: user?.city || "Madrid",
    },
  });

  useEffect(() => {
    methods.reset({
      name: user?.name,
      lastname: user?.lastname,
      dniPassport: user?.dniPassport,
      birthYear: birthYearEdit,
      street: user?.street,
      number: user?.number,
      portal: user?.portal,
      stairs: user?.stairs,
      floor: user?.floor,
      letter: user?.letter,
      postalCode: user?.postalCode,
      city: user?.city,
    });
  }, [user]);

  const { register, handleSubmit, errors } = methods;

  //EDIT USER DATA
  const messageRedirect = (message) => {
    setMessageError(message);
    setTimeout(() => {
      setMessageError(null);
    }, 5000);
  };

  const onEdit = async (data) => {
    const responseServer = await doEdit(data);

    if (changeOneFile === true) {
      const uploadData = new FormData();
      uploadData.append("imageUrl", image.imageUrl);
      const imageURL = await uploadPhoto(uploadData);

      messageRedirect(responseServer.message);
      setUser({ ...data, image: imageURL.secure_url });
    } else {
      messageRedirect(responseServer.message);
      setUser(data);
    }

    setbuttonProfileView(!buttonProfileView);
  };

  return (
    <>
      <SectionBox bgColor="blueLight" justify="start">
        <ProfileHeader className="contain" data-aos="fade-up">
          <BoxImg className={buttonProfileView ? "" : "active"}>
            {buttonProfileView ? (
              <img src={imagePreview} alt={user?.name} title={user?.name} />
            ) : (
              <div className="box-image-profile">
                <img src={imagePreview} alt="imagen" />
                <input type="file" onChange={handleChangeFile} />
              </div>
            )}
          </BoxImg>
          <div className="box-text">
            <H1>
              <span>
                {user?.name} {user?.lastname}
              </span>
            </H1>
            <H2>
              <span className="item-light">{user?.rol}</span>
            </H2>
            <div className="button-box">
              <Button
                type="transparent"
                onClick={(e) => setbuttonProfileView(!buttonProfileView)}
              >
                {buttonProfileView ? "Editar Perfil" : "Cancelar"}
              </Button>
              <div className="box-unsubscribe">
                <button
                  onClick={(e) =>
                    setButtonUnsubscribeSegure(!buttonUnsubscribeSegure)
                  }
                >
                  Darse Baja
                </button>
                {buttonUnsubscribeSegure && (
                  <div className="box-segure" data-aos="fade-bottom">
                    <Button
                      type="transparent-blue"
                      onClick={(e) => onClickUnsubscribe(e)}
                    >
                      Si
                    </Button>
                    <Button
                      onClick={(e) =>
                        setButtonUnsubscribeSegure(!buttonUnsubscribeSegure)
                      }
                    >
                      No
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </ProfileHeader>
      </SectionBox>
      <SectionBox column justify="start">
        <SectionFormBoxProfile
          className={buttonProfileView ? "contain no-edit" : "contain"}
        >
          {buttonProfileView ? (
            <>
              <div className="data-profile" data-aos="fade-up">
                <H2 color="black">
                  <span>Datos personales</span>
                </H2>
                <Paragraphs blue>
                  <span>Nombre</span> <span>{user?.name}</span>
                </Paragraphs>
                <Paragraphs blue>
                  <span>Apellidos</span> <span>{user?.lastname}</span>
                </Paragraphs>
                <Paragraphs blue>
                  <span>DNI/Pasaporte</span> <span>{user?.dniPassport}</span>
                </Paragraphs>
                <Paragraphs blue>
                  <span>Año de Nacimiento</span> <span>{birthYearEdit}</span>
                </Paragraphs>
                <Paragraphs blue>
                  <span>Dirección</span>{" "}
                  <span>
                    {user?.street} {user?.number && `Nº${user?.number}`}{" "}
                    {user.portal} {user.stairs}{" "}
                    {user?.floor && `${user?.floor}º`} {user.letter}
                  </span>
                </Paragraphs>
                <Paragraphs blue>
                  <span>Ciudad</span> <span>{user?.city}</span>
                </Paragraphs>
                <Paragraphs blue>
                  <span>País</span> <span>{user?.country}</span>
                </Paragraphs>
              </div>
            </>
          ) : (
            <FormContext {...methods}>
              <FormBox onSubmit={handleSubmit(onEdit)}>
                <div className="box-personal" data-aos="fade-up">
                  <H2 color="black">
                    <span>Datos personales</span>
                  </H2>
                  <InputBox
                    label="Nombre"
                    name="name"
                    ref={register({
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                    })}
                  />
                  <InputBox
                    label="Apellidos"
                    name="lastname"
                    ref={register({
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                    })}
                  />
                  <InputBox
                    label="Fecha de nacimiento"
                    name="birthYear"
                    type="date"
                    ref={register({
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                    })}
                  />
                  {(dniPassportTabs && (
                    <>
                      <div className="passport-dni">
                        <button
                          className="active"
                          onClick={(e) => onChangePassport(e, true)}
                        >
                          DNI
                        </button>{" "}
                        |{" "}
                        <button onClick={(e) => onChangePassport(e, false)}>
                          Pasaporte
                        </button>
                      </div>
                      <InputBox
                        label="DNI"
                        name="dniPassport"
                        ref={register({
                          required: {
                            value: true,
                            message: "El campo es requerido",
                          },
                          pattern: {
                            value: /[0-9]{8}[A-Za-z]{1}/,
                            message: "El DNI incluido no es válido",
                          },
                        })}
                      />
                    </>
                  )) || (
                    <>
                      <div className="passport-dni">
                        <button onClick={(e) => onChangePassport(e, true)}>
                          DNI
                        </button>{" "}
                        |{" "}
                        <button
                          className="active"
                          onClick={(e) => onChangePassport(e, false)}
                        >
                          Pasaporte
                        </button>
                      </div>
                      <InputBox
                        label="Pasaporte"
                        name="dniPassport"
                        ref={register({
                          required: {
                            value: true,
                            message: "El campo es requerido",
                          },
                          pattern: {
                            value: /[a-zA-Z]{2}[0-9]{7}/,
                            message: "El Pasaporte incluido no es válido",
                          },
                        })}
                      />
                    </>
                  )}
                </div>
                <div className="box-direction" data-aos="fade-up">
                  <H2 color="black">
                    <span>Domicilio</span>
                  </H2>
                  <InputBox
                    label="Dirección"
                    name="street"
                    ref={register({
                      required: {
                        value: true,
                        message: "El campo es requerido",
                      },
                    })}
                  />

                  <InputBox
                    label="Número"
                    name="number"
                    type="number"
                    ref={register({
                      required: {
                        value: true,
                        message: "El campo es requerido",
                      },
                    })}
                  />
                  <InputBox label="Portal" name="portal" ref={register()} />
                  <InputBox label="Escalera" name="stairs" ref={register()} />
                  <InputBox
                    label="Piso"
                    name="floor"
                    type="number"
                    ref={register()}
                  />
                  <InputBox label="Letra" name="letter" ref={register()} />
                  <InputBox
                    label="Código Postal"
                    name="postalCode"
                    type="number"
                    ref={register({
                      required: {
                        value: true,
                        message: "El campo es requerido",
                      },
                      pattern: {
                        value: /((0[1-9]|5[0-2])|[1-4][0-9])[0-9]{3}/,
                        message: "El código postal incluido es incorrecto",
                      },
                    })}
                  />
                  <SelectBox
                    label="Ciudad"
                    name="city"
                    value={[
                      "Alava",
                      "Albacete",
                      "Alicante",
                      "Almería",
                      "Asturias",
                      "Avila",
                      "Badajoz",
                      "Barcelona",
                      "Burgos",
                      "Cáceres",
                      "Cádiz",
                      "Cantabria",
                      "Castellón",
                      "Ciudad Real",
                      "Córdoba",
                      "La Coruña",
                      "Cuenca",
                      "Gerona",
                      "Granada",
                      "Guadalajara",
                      "Guipúzcoa",
                      "Huelva",
                      "Huesca",
                      "Islas Baleares",
                      "Jaén",
                      "León",
                      "Lérida",
                      "Lugo",
                      "Madrid",
                      "Málaga",
                      "Murcia",
                      "Navarra",
                      "Orense",
                      "Palencia",
                      "Las Palmas",
                      "Pontevedra",
                      "La Rioja",
                      "Salamanca",
                      "Segovia",
                      "Sevilla",
                      "Soria",
                      "Tarragona",
                      "Santa Cruz de Tenerife",
                      "Teruel",
                      "Toledo",
                      "Valencia",
                      "Valladolid",
                      "Vizcaya",
                      "Zamora",
                      "Zaragoza",
                    ]}
                    ref={register({
                      required: {
                        value: true,
                        message: "El campo es requerido",
                      },
                    })}
                  />
                </div>
                <div className="button-box">
                  <Button
                    type="transparent-blue"
                    big
                    onClick={(e) => setbuttonProfileView(!buttonProfileView)}
                  >
                    Cancelar
                  </Button>
                  <button type="submit" className="button big">
                    Guardar Cambios
                  </button>
                </div>
              </FormBox>
            </FormContext>
          )}
        </SectionFormBoxProfile>
      </SectionBox>

      <SectionBox justify="center" column>
        <SectionServicesProvidedProfile className="contain" data-aos="fade-up">
          <H2 color="black">Servicios que presto</H2>
          <Paragraphs blue>
            {" "}
            <span>Total de servicios prestados </span>{" "}
            <span>{aidsRequestId.length}</span>
          </Paragraphs>

          <div className="col5">
            <ItemServicies
              ImgSrc={icon1}
              ItemText="Lavandería"
              NumberServicesProvided={lenghtAidsRequestType("Lavandería")}
            />
            <ItemServicies
              ImgSrc={icon2}
              ItemText="Supermercado"
              NumberServicesProvided={lenghtAidsRequestType("Supermercado")}
            />
            <ItemServicies
              ImgSrc={icon3}
              ItemText="Parafarmacia"
              NumberServicesProvided={lenghtAidsRequestType("Parafarmacia")}
            />
            <ItemServicies
              ImgSrc={icon4}
              ItemText="Tareas domésticas"
              NumberServicesProvided={lenghtAidsRequestType(
                "Tareas domésticas"
              )}
            />
            <ItemServicies
              ImgSrc={icon5}
              ItemText="Animales domésticos"
              NumberServicesProvided={lenghtAidsRequestType(
                "Animales domésticos"
              )}
            />
          </div>
        </SectionServicesProvidedProfile>
      </SectionBox>
    </>
  );
});

export const ProfilePage = withProtected(Profile, {
  redirect: false,
});
