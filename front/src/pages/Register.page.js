//React
import React, { useContext, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

//Form
import { useForm, FormContext } from "react-hook-form";

//Styles & AOS animation
import {
  SectionBox,
  Col2HeaderRegister,
  ContentText,
  H1,
  H2,
  BoxImg,
  Paragraphs,
  FormBox,
  SectionFormBoxRegister,
  ParagraphTop,
  LightBoxRegisterRol,
} from "../styles/Index.styles";

//Images
import imgProfile from "../../public/images/default-profile.png";
import youngGirlIntro from "../../public/images/young-girl-2.svg";
import oldGirlIntro from "../../public/images/old-girl-2.svg";
import youngGirl from "../../public/images/young-girl.svg";
import oldGirl from "../../public/images/old-girl.svg";

//Contexto
import { PrincipalContext } from "../context/PrincipalContext";

//Functional & Services
import { doSignup, uploadPhoto } from "../services/authServices";
import { scrollInit } from "../lib/commonFunctional";

//Compoments
import { SelectBox } from "../components/Select/index";
import { InputBox } from "../components/Input/Index";

export const RegisterPage = withRouter(({ history }) => {
  const {
    Body,
    user,
    setUser,
    setMessageError,
    lightboxRegister,
    setLightboxRegister,
  } = useContext(PrincipalContext);

  //Reset Scroll & Include Active Body
  useEffect(() => {
    Body[0].classList.add("active");
    scrollInit();
  }, []);

  //Lightbox & rolUser
  const [rolRegister, setRolRegister] = useState("Helpers");

  const getRolRegisterLigthBox = (e, value) => {
    e.preventDefault();
    Body[0].classList.remove("active");
    setRolRegister(value);
    setLightboxRegister(false);
  };

  //Change tab DNI Passport
  const [dniPassportTabs, setDniPassportTabs] = useState(true);
  const onChangePassport = (e, value) => {
    e.preventDefault();
    setDniPassportTabs(value);
  };

  //Image USER
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

  //Form
  const methods = useForm({
    mode: "onBlur",
    defaultValues: {
      rol: rolRegister,
      username: "",
      password: "",
      name: "",
      lastname: "",
      dniPassport: "",
      birthYear: "",
      image: "",
      street: "",
      number: "",
      portal: "",
      stairs: "",
      floor: "",
      letter: "",
      postalCode: "",
      city: "Madrid",
      legalCheck: "",
    },
  });

  useEffect(() => {
    methods.reset({
      rol: rolRegister,
      username: "",
      password: "",
      name: "",
      lastname: "",
      dniPassport: "",
      birthYear: "",
      image: "",
      street: "",
      number: "",
      portal: "",
      stairs: "",
      floor: "",
      letter: "",
      postalCode: "",
      city: "Madrid",
      legalCheck: "",
    });
  }, [rolRegister]);

  const { register, handleSubmit, errors } = methods;

  //Regitrar los datos
  const messageRedirect = (message) => {
    setMessageError(message);
    setUser(null);
    history.push("/login");
    setTimeout(() => {
      setMessageError(null);
    }, 5000);
  };

  const onSubmit = async (data) => {
    const responseServer = await doSignup(data);

    if (changeOneFile === true) {
      const uploadData = new FormData();
      uploadData.append("imageUrl", image.imageUrl);
      const imageURL = await uploadPhoto(uploadData);

      if (responseServer.status) {
        messageRedirect(responseServer.message);
      } else {
        setUser({ ...data, image: imageURL.secure_url });
        history.push("/profile");
      }
    } else {
      if (responseServer.status) {
        messageRedirect(responseServer.message);
      } else {
        setUser(data);
        history.push("/profile");
      }
    }
  };

  return (
    <>
      <SectionBox bgColor="blueLight" justify="evenly" className="z1">
        <Col2HeaderRegister className="contain" data-aos="fade-up">
          <ContentText>
            <H1>
              Regístrate en <span className="item-light">h</span>eee
              <span className="item-light">lp!</span>
            </H1>
          </ContentText>
          <BoxImg className={rolRegister === "Helpers" ? "helper" : "helped"}>
            <img
              src={rolRegister === "Helpers" ? youngGirl : oldGirl}
              alt="heeelp!"
              title="heeelp!"
            />
          </BoxImg>
        </Col2HeaderRegister>
      </SectionBox>

      <LightBoxRegisterRol className={lightboxRegister ? "active" : ""}>
        <H2>Elige tu perfil</H2>
        <ParagraphTop>
          <span className="item-light">
            ¿necesitas ayuda o estas aquí para ofrecer tu ayuda a los demás?
          </span>
        </ParagraphTop>
        <div className="box-buttons">
          <button
            href="#"
            value="Helped"
            onClick={(e) => getRolRegisterLigthBox(e, e.target.value)}
          >
            <BoxImg>
              <img
                src={oldGirlIntro}
                alt="Necesito Ayuda"
                title="Necesito Ayuda"
              />
            </BoxImg>
            <Paragraphs>
              <span>Necesito Ayuda</span>
            </Paragraphs>
          </button>
          <button
            href="#"
            value="Helpers"
            onClick={(e) => getRolRegisterLigthBox(e, e.target.value)}
          >
            <BoxImg>
              <img
                src={youngGirlIntro}
                alt="Quiero Ayuda"
                title="Quiero Ayuda"
              />
            </BoxImg>
            <Paragraphs>
              <span>Quiero Ayudar</span>
            </Paragraphs>
          </button>
        </div>
      </LightBoxRegisterRol>

      <SectionBox column justify="start">
        <SectionFormBoxRegister className="contain">
          <FormContext {...methods}>
            <FormBox onSubmit={handleSubmit(onSubmit)}>
              <div className="box-user-password" data-aos="fade-up">
                <SelectBox
                  label="Rol:"
                  name="rol"
                  classNameDiv="rol-box"
                  value={["Helpers", "Helped"]}
                  ref={register({
                    required: {
                      value: true,
                      message: "El campo es requerido",
                    },
                  })}
                />

                <div className="box-title-image" data-aos="fade-up">
                  <H2 color="blue">Nuevo usuario</H2>
                  <div className="box-input">
                    <div className="box-image-profile">
                      <img src={imagePreview} alt="imagen" />
                      <input type="file" onChange={handleChangeFile} />
                    </div>
                  </div>
                </div>

                <InputBox
                  label="Usuario / Email"
                  name="username"
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
                  label="Contraseña"
                  type="password"
                  name="password"
                  ref={register({
                    required: {
                      value: true,
                      message: "El campo es requerido",
                    },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$/,
                      message: "El formato no es válido.",
                    },
                  })}
                />
              </div>

              <div className="box-personal" data-aos="fade-up">
                <ParagraphTop blue>
                  <span>Datos personales</span>
                </ParagraphTop>
                <InputBox
                  label="Nombre"
                  name="name"
                  ref={register({
                    required: {
                      value: true,
                      message: "El campo es requerido",
                    },
                  })}
                />
                <InputBox
                  label="Apellidos"
                  name="lastname"
                  ref={register({
                    required: {
                      value: true,
                      message: "El campo es requerido",
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
                <InputBox
                  label="Fecha de nacimiento"
                  name="birthYear"
                  type="date"
                  ref={register({
                    required: {
                      value: true,
                      message: "El campo es requerido",
                    },
                  })}
                />
              </div>

              <div className="box-direction" data-aos="fade-up">
                <ParagraphTop blue>
                  <span>Domicilio</span>
                </ParagraphTop>

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
              <InputBox
                name="legalCheck"
                type="checkbox"
                classNameDiv="box-check-box"
                textCheckbox={``}
                ref={register({
                  required: {
                    value: true,
                    message: "El campo es requerido",
                  },
                })}
              />

              <button type="submit" className="button big">
                Registrarse
              </button>
            </FormBox>
          </FormContext>
        </SectionFormBoxRegister>
      </SectionBox>
    </>
  );
});
