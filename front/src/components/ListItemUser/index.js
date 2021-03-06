//React
import React, { useContext, useEffect } from "react";

//Styles & AOS animation
import { FormBox, BoxImg, Paragraphs } from "../../styles/Index.styles";
import { BoxUser } from "./styles/ItemsUsers.style";

//Images
import { Save } from "react-feather";
import preventDefault from "../../../public/images/default-profile.png";

//Contexto
import { PrincipalContext } from "../../context/PrincipalContext";

//Functional & Services
import { getYearsOld } from "../../lib/commonFunctional";
import { doUnsubscribe, doEditUserAdmin } from "../../services/authServices";

//Form
import { useForm, FormContext } from "react-hook-form";

//Components
import SelectBox from "../Select";

const UserBoxItem = ({ user }) => {
  const { setMessageError, changeLisUsers, setchangeLisUsers } = useContext(
    PrincipalContext
  );

  const deleteUser = async (e, value) => {
    e.preventDefault();
    const responseServerDelete = await doUnsubscribe({ _id: value });
    setchangeLisUsers(!changeLisUsers);
    setMessageError(responseServerDelete.message);
    setTimeout(() => {
      setMessageError(null);
    }, 5000);
  };

  const methods = useForm({
    mode: "onBlur",
    defaultValues: {
      rol: user?.rol,
    },
  });

  useEffect(() => {
    methods.reset({
      rol: user?.rol,
    });
  }, [user]);

  const { register, handleSubmit, errors } = methods;

  //Change rol
  const changeRol = async (data) => {
    const userChange = { ...data, _id: user._id };
    const responseServer = await doEditUserAdmin(userChange);
    setMessageError(responseServer.message);
    setTimeout(() => {
      setMessageError(null);
    }, 5000);
  };

  return (
    <BoxUser data-aos="fade-up">
      <BoxImg>
        <img
          src={user?.image || preventDefault}
          title={user.name}
          alt={user.name}
        />
      </BoxImg>

      <Paragraphs blue>
        <span>
          {user.name} {user.lastname.slice(0, 1)}.
        </span>{" "}
        - {getYearsOld(user.birthYear)}
      </Paragraphs>
      <Paragraphs blue>{user.username}</Paragraphs>

      <FormContext {...methods}>
        <FormBox onSubmit={handleSubmit(changeRol)}>
          <SelectBox
            label="Rol"
            name="rol"
            value={["Admin", "Helpers", "Helped"]}
            ref={register({
              required: {
                value: true,
                message: "Este campo es requerido",
              },
            })}
          />
          <button type="submit">
            {" "}
            <Save color="#3e3874" />
          </button>
        </FormBox>
      </FormContext>

      <Paragraphs className="visits" blue>
        <span>{user.visits}</span>
      </Paragraphs>

      <button
        className="delete"
        value={user._id}
        onClick={(e) => deleteUser(e, e.target.value)}
      >
        Borrar
      </button>
    </BoxUser>
  );
};
export default UserBoxItem;
