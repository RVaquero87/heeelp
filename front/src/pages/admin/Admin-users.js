//React
import React, { useContext, useState, useEffect } from "react";

//Styles & AOS animation
import {
  SectionBox,
  SectionUsersAdmin,
  Paragraphs,
  FilterUser,
  FilterText,
  ContainDivDefault,
  SectionUserAdminList,
} from "../../styles/Index.styles";

//Contexto
import { PrincipalContext } from "../../context/PrincipalContext";

//Functional & Services
import { getListUsers } from "../../services/authServices";

//Compoments
import { UserBoxItem } from "../../components/ListItemUser/Index";

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
      const re = new RegExp(value.toLowerCase());
      return re.test(item.username.toLowerCase());
    });
    setFilterlistUsers(filter);
  };

  //set stado
  return (
    <>
      {!filterlistUsers ? (
        <SectionBox column>
          <ContainDivDefault>
            <Paragraphs blue>
              <span>Loading...</span>
            </Paragraphs>
          </ContainDivDefault>
        </SectionBox>
      ) : (
        <>
          <SectionBox justify="start">
            <SectionUsersAdmin className="contain">
              <FilterUser data-aos="fade-up">
                <div className="contain-filters">
                  <Paragraphs blue>
                    <span>Filtrar por usuario:</span>
                  </Paragraphs>
                  <FilterText
                    value={filterStartText}
                    onChange={(e) => handleFilterTextUser(e, e.target.value)}
                  />
                </div>
                <div className="contain-filters">
                  <div className="box-filter">
                    <select
                      onChange={(e) => handleFilterRolUser(e, e.target.value)}
                    >
                      <option value="all">Filtra tipo de Usuario</option>
                      <option value="Helpers">Usuarios Helpers</option>
                      <option value="Helped">Usuarios Helped</option>
                      <option value="Admin">Usuarios Admin</option>
                      <option value="all">Todos los Usuarios</option>
                    </select>
                  </div>
                </div>
              </FilterUser>
              <div className="box-counter">
                <Paragraphs blue>
                  Nº de usuarios: <span>{listUsers.length}</span>
                </Paragraphs>
                <Paragraphs blue>
                  Nº de Admins: <span>{filterNumberLenght("Admin")}</span>
                </Paragraphs>
                <Paragraphs blue>
                  Nº de Helpers: <span>{filterNumberLenght("Helpers")}</span>
                </Paragraphs>
                <Paragraphs blue>
                  Nº de Helped: <span>{filterNumberLenght("Helped")}</span>
                </Paragraphs>
              </div>
            </SectionUsersAdmin>
          </SectionBox>

          <SectionBox>
            <SectionUserAdminList>
              {filterlistUsers.length === 0 ? (
                <Paragraphs blue>No existen nínguna con ese filtro</Paragraphs>
              ) : (
                <>
                  {filterlistUsers
                    .sort((a, b) => {
                      if (a.createdAt > b.createdAt) {
                        return -1;
                      }
                      if (a.createdAt < b.createdAt) {
                        return 1;
                      }
                      // a must be equal to b
                      return 0;
                    })
                    .map((user, i) => {
                      return <UserBoxItem user={user} key={i} />;
                    })}
                </>
              )}
            </SectionUserAdminList>
          </SectionBox>
        </>
      )}
    </>
  );
};
