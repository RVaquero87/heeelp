import React, { useContext, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { FormBox } from "../styles/Index.styles";
import {
  doLogout,
  doEdit,
  doUnsubscribe,
  uploadPhoto,
} from "../services/authServices";
import { PrincipalContext } from "../context/PrincipalContext";
import { useForm, FormContext } from "react-hook-form";
import { InputBox } from "../components/Input/index";
import { SelectBox } from "../components/Select/index";
import imgProfile from "../../public/images/default-profile.png";

export const ProfilePage = withRouter(({ history }) => {
  const { user, setUser, setMessageError } = useContext(PrincipalContext);

  //lOGOUT
  const onClickLogout = async (e) => {
    e.preventDefault();
    await doLogout();
    await setUser(null);
    history.push("/");
  };

  //UNSUBSCRIBE
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

  //GET YEARS
  const birthYearEdit = user?.birthYear.slice(0, 10);

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
  const handleChangeFile = (e) => {
    setImage({ imageUrl: e.target.files[0] });
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

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

  //Editar los datos
  const onEdit = async (data) => {
    const responseServer = await doEdit(data);

    const uploadData = new FormData();
    uploadData.append("imageUrl", image.imageUrl);
    const imageURL = await uploadPhoto(uploadData);

    setMessageError(responseServer?.message);
    setTimeout(() => {
      setMessageError(null);
    }, 5000);

    if (responseServer.status === 200) {
      setUser({ ...data, image: imageURL.secure_url });
    }
  };

  return (
    <>
      <FormContext {...methods}>
        <FormBox onSubmit={handleSubmit(onEdit)}>
          <div>
            <div className="box-input">
              <img
                width="100px"
                src={user?.image || imagePreview}
                alt="imagen"
              />
              <input type="file" onChange={handleChangeFile} />
            </div>
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

            <p>
              <button onClick={(e) => onChangePassport(e, true)}>DNI</button>/
              <button onClick={(e) => onChangePassport(e, false)}>
                Passport
              </button>
            </p>

            {(dniPassportTabs && (
              <InputBox
                label="Número de DNI"
                name="dniPassport"
                ref={register({
                  required: {
                    value: true,
                    message: "Este campo es requerido",
                  },
                  pattern: {
                    value: /[0-9]{8}[A-Za-z]{1}/,
                    message: "El DNI incluido no es válido",
                  },
                })}
              />
            )) || (
              <InputBox
                label="Número de Pasaporte"
                name="dniPassport"
                ref={register({
                  required: {
                    value: true,
                    message: "Este campo es requerido",
                  },
                  pattern: {
                    value: /[a-zA-Z]{2}[0-9]{7}/,
                    message: "El número del Pasaporte es incorrecto",
                  },
                })}
              />
            )}
            <InputBox
              label="Dirección"
              name="street"
              ref={register({
                required: {
                  value: true,
                  message: "Este campo es requerido",
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
                  message: "Este campo es requerido",
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
                  message: "Este campo es requerido",
                },
                pattern: {
                  value: /((0[1-9]|5[0-2])|[1-4][0-9])[0-9]{3}/,
                  message: "Código postal incorrecto",
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
                  message: "Este campo es requerido",
                },
              })}
            />
          </div>

          <button type="submit" className="button">
            eDITAR
          </button>
        </FormBox>
      </FormContext>

      <button className="button" onClick={(e) => onClickLogout(e)}>
        Logout
      </button>

      <button className="button" onClick={(e) => onClickUnsubscribe(e)}>
        Darse Baja
      </button>
    </>
  );
});
