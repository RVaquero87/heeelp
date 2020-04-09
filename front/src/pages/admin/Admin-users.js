import React, { useContext, useState, useEffect } from "react";
import { getListUsers } from "../../services/authServices";
import { PrincipalContext } from "../../context/PrincipalContext";
import { Loading } from "../../components/Loading/index";
import { UserBoxItem } from "../../components/ListItemUser/index";

export const AdminUsers = () => {
  const { changeLisUsers, setchangeLisUsers } = useContext(PrincipalContext);

  const [listUsers, setListUsers] = useState();
  const [filterlistUsers, setFilterlistUsers] = useState();
  const [filterStartText, setFilterStartText] = useState("");

  const filterNumberLenght = (igualToValue) =>
    listUsers.filter((user) => user.rol === igualToValue).length;

  useEffect(() => {
    getListUsers()
      .then((user) => {
        setListUsers(user);
        setFilterlistUsers(user);
      })
      .catch((e) => {});
  }, [changeLisUsers]);

  //Filter rol
  const handleFilterRolUser = async (e, value) => {
    e.preventDefault();
    let filter = await listUsers.filter((item) => {
      return item.rol == value;
    });
    setFilterlistUsers(filter);
    if (value === "all") {
      setchangeLisUsers(!changeLisUsers);
    }
  };

  //Filter Text
  const handleFilterTextUser = async (e, value) => {
    e.preventDefault();
    setFilterStartText(value);
    let filter = await listUsers.filter((item) => {
      const re = new RegExp(value);
      return re.test(item.name);
    });
    setFilterlistUsers(filter);
  };

  //set stado
  return (
    <>
      {!filterlistUsers ? (
        <Loading />
      ) : (
        <>
          <p>Filtro</p>
          <input
            placeholder="Filtro"
            value={filterStartText}
            onChange={(e) => handleFilterTextUser(e, e.target.value)}
          />
          <select onChange={(e) => handleFilterRolUser(e, e.target.value)}>
            <option value="all">Todos</option>
            <option value="Helpers">Helpers</option>
            <option value="Helped">Helped</option>
            <option value="Admin">Admin</option>
          </select>
          <p>NºTotal de uSUARIOS {listUsers.length} </p>
          <p>NºTotal de Admin: {filterNumberLenght("Admin")}</p>
          <p>NºTotal de Helpers: {filterNumberLenght("Helpers")}</p>
          <p>NºTotal de Helped: {filterNumberLenght("Helped")}</p>
          {filterlistUsers.length === 0 ? (
            <p>No existen nínguna con ese filtro</p>
          ) : (
            <>
              <div data-aos="fade-up">
                {filterlistUsers.map((user, i) => {
                  return <UserBoxItem user={user} key={i} />;
                })}
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};
