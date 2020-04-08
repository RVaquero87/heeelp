//React
import React, { useContext, useState, useEffect } from "react";

//Contexto
import { PrincipalContext } from "../../context/PrincipalContext";

//Functional & Services
import { doUnsubscribe, doEditUserAdmin } from "../../services/authServices";

//Form
import { useForm, FormContext } from "react-hook-form";

//Components
import { SelectBox } from "../../components/Select/index";

export const UserBoxItem = ({ user }) => {
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
      rol: user?.rol
    }
  });

  useEffect(() => {
    methods.reset({
      rol: user?.rol
    });
  }, [user]);

  const { register, handleSubmit, errors } = methods;

  //Change rol
  const changeRol = async data => {
    const userChange = { ...data, _id: user._id };
    const responseServer = await doEditUserAdmin(userChange);
    setMessageError(responseServer.message);
    setTimeout(() => {
      setMessageError(null);
    }, 5000);
  };

  return (
    <div>
      <p>{user.name}</p>
      <p>{user.username}</p>
      <p>{user.country}</p>
      <p>{user._id}</p>

      <FormContext {...methods}>
        <form onSubmit={handleSubmit(changeRol)}>
          <SelectBox
            label="Rol"
            name="rol"
            classNameDiv="claseSpecial"
            value={["Admin", "Helpers", "Helped"]}
            ref={register({
              required: {
                value: true,
                message: "Este campo es requerido"
              }
            })}
          />

          <button type="submit" className="button">
            change
          </button>
        </form>
      </FormContext>

      <button value={user._id} onClick={e => deleteUser(e, e.target.value)}>
        elimnar
      </button>
    </div>
  );
};
