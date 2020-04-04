import React, { useContext, useState } from "react";
import { useForm, FormContext } from "react-hook-form";
import { withRouter, Link } from "react-router-dom";
import { FormBox } from "../../public/styles/Common.styles";
import { InputBox } from "../components/Input/index";
import { SelectBox } from "../components/Select/index";
import { doSignup, uploadPhoto } from "../services/authServices";
import { PrincipalContext } from "../context/PrincipalContext";
import imgProfile from "../../public/images/default-profile.png";

export const SignUpPage = withRouter(({ history }) => {
  const { user, setUser, setMessageError } = useContext(PrincipalContext);

  //Change tab DNI Passport
  const [dniPassportTabs, setDniPassportTabs] = useState(true);
  const onChangePassport = (e, value) => {
    e.preventDefault();
    setDniPassportTabs(value);
  };

  //Image USER
  const [image, setImage] = useState({
    imageUrl: user?.image || imgProfile
  });
  const [imagePreview, setImagePreview] = useState(image.imageUrl);
  const [changeOneFile, setChangeOneFile] = useState(false);
  const handleChangeFile = e => {
    setImage({ imageUrl: e.target.files[0] });
    setImagePreview(URL.createObjectURL(e.target.files[0]));
    setChangeOneFile(true);
  };

  //Form
  const methods = useForm({
    mode: "onBlur",
    defaultValues: {
      rol: "Helpers",
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
      floor: "·",
      letter: "",
      postalCode: "",
      city: "Madrid",
      legalCheck: ""
    }
  });

  const { register, handleSubmit, errors } = methods;

  //Regitrar los datos
  const messageRedirect = message => {
    setMessageError(message);
    setTimeout(() => {
      setUser(null);
      history.push("/login");
    }, 2500);
    setTimeout(() => {
      setMessageError(null);
    }, 5000);
  };

  const onSubmit = async data => {
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
    <FormContext {...methods}>
      <FormBox onSubmit={handleSubmit(onSubmit)} data-aos="fade-up">
        <div className="left">
          <h1>Registro</h1>
          <SelectBox
            label="Rol"
            name="rol"
            classNameDiv="claseSpecial"
            value={["Helpers", "Helped"]}
            ref={register({
              required: {
                value: true,
                message: "Este campo es requerido"
              }
            })}
          />
          <div className="box-input">
            <img width="100px" src={imagePreview} alt="imagen" />
            <input type="file" onChange={handleChangeFile} />
          </div>
          <InputBox
            label="Usuario / Email"
            name="username"
            ref={register({
              required: {
                value: true,
                message: "Este campo es requerido"
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,4}$/i,
                message: "El email incluido no es válido"
              }
            })}
          />

          <InputBox
            label="Contraseña"
            type="password"
            name="password"
            ref={register({
              required: {
                value: true,
                message: "Este campo es requerido"
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$/,
                message:
                  "Debe tener al menos una mayúsucula, una minúscula, un número y un símbolo"
              }
            })}
          />
          <InputBox
            label="Nombre"
            name="name"
            ref={register({
              required: {
                value: true,
                message: "Este campo es requerido"
              }
            })}
          />
          <InputBox
            label="Apellidos"
            name="lastname"
            ref={register({
              required: {
                value: true,
                message: "Este campo es requerido"
              }
            })}
          />

          <InputBox
            label="Fecha de nacimiento"
            name="birthYear"
            type="date"
            ref={register({
              required: {
                value: true,
                message: "Este campo es requerido"
              }
            })}
          />

          <p>
            <button onClick={e => onChangePassport(e, true)}>DNI</button>/
            <button onClick={e => onChangePassport(e, false)}>Passport</button>
          </p>

          {(dniPassportTabs && (
            <InputBox
              label="Número de DNI"
              name="dniPassport"
              ref={register({
                required: {
                  value: true,
                  message: "Este campo es requerido"
                },
                pattern: {
                  value: /[0-9]{8}[A-Za-z]{1}/,
                  message: "El DNI incluido no es válido"
                }
              })}
            />
          )) || (
            <InputBox
              label="Número de Pasaporte"
              name="dniPassport"
              ref={register({
                required: {
                  value: true,
                  message: "Este campo es requerido"
                },
                pattern: {
                  value: /[a-zA-Z]{2}[0-9]{7}/,
                  message: "El número del Pasaporte es incorrecto"
                }
              })}
            />
          )}

          <InputBox
            label="Dirección"
            name="street"
            ref={register({
              required: {
                value: true,
                message: "Este campo es requerido"
              }
            })}
          />

          <InputBox
            label="Número"
            name="number"
            type="number"
            ref={register({
              required: {
                value: true,
                message: "Este campo es requerido"
              }
            })}
          />
          <InputBox label="Portal" name="portal" ref={register()} />
          <InputBox label="Escalera" name="stairs" ref={register()} />
          <InputBox label="Piso" name="floor" type="number" ref={register()} />
          <InputBox label="Letra" name="letter" ref={register()} />
          <InputBox
            label="Código Postal"
            name="postalCode"
            type="number"
            ref={register({
              required: {
                value: true,
                message: "Este campo es requerido"
              },
              pattern: {
                value: /((0[1-9]|5[0-2])|[1-4][0-9])[0-9]{3}/,
                message: "Código postal incorrecto"
              }
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
              "Zaragoza"
            ]}
            ref={register({
              required: {
                value: true,
                message: "Este campo es requerido"
              }
            })}
          />
          <InputBox
            name="legalCheck"
            type="radio"
            textCheckbox={``}
            ref={register({
              required: {
                value: true,
                message: "Este campo es requerido"
              }
            })}
          />

          <button type="submit" className="button">
            Registrar
          </button>
        </div>
      </FormBox>
    </FormContext>
  );
});
