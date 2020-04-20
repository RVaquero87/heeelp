//React
import React, { useContext, useEffect, useState } from "react";

//Route Protected
import { withProtected } from "../lib/protectRoute.hoc";

//Form
import { useForm, FormContext } from "react-hook-form";

//Styles & AOS animation
import {
  SectionBox,
  SectionFilterAidRequest,
  ContentText,
  BoxImg,
  H1,
  Col2HeaderHomeRol,
  Paragraphs,
  FilterAidsRequest,
  SectionAidsRequest,
} from "../styles/Index.styles";

//Images
import youngGirl from "../../public/images/young-girl.svg";

//Contexto
import { PrincipalContext } from "../context/PrincipalContext";

//Functional & Services
import { scrollInit } from "../lib/commonFunctional";
import { getAidRequest } from "../services/aidRequestServices";

//Compoments
import { AidsRequestBox } from "../components/ItemAidRequest";
import { Loading } from "../components/Loading";

export const ListAidsRequestPage = () => {
  const { user, changeFilterAidsRequest } = useContext(PrincipalContext);

  //Reset Scroll
  useEffect(() => {
    scrollInit();
  }, []);

  //Aid Request Filter
  const [allAidsRequest, setAllFilterAidsRequest] = useState([]);
  const [filterAidsRequest, setFilterAidsRequest] = useState();
  const [typeSelectValue, setTypeSelectValue] = useState({
    type: "all",
    price: "all",
  });

  useEffect(() => {
    getAidRequest()
      .then((aidsRequest) => {
        const aidAllFilter = aidsRequest.filter((aids) => {
          const today = new Date().getTime();
          const modifyAidTime = new Date(aids.modifyCard).getTime();
          const subtractionDate = today - modifyAidTime;

          if (
            aids.status == "Publicada" ||
            (aids.status == "En curso" &&
              aids.helperId._id == user._id &&
              subtractionDate <= 3600000)
          ) {
            return aids;
          }
        });
        setFilterAidsRequest(aidAllFilter);
        setAllFilterAidsRequest(aidAllFilter);
      })
      .catch((e) => {});
  }, [changeFilterAidsRequest]);

  //Filter rol
  const handleFilterAids = async (e, value, filterType) => {
    e.preventDefault();

    let filterObject = {
      type: typeSelectValue["type"],
      price: typeSelectValue["price"],
    };

    if (filterType == "type") {
      setTypeSelectValue({ ...typeSelectValue, type: value });
      filterObject[filterType] = value;
    } else {
      setTypeSelectValue({ ...typeSelectValue, price: value });
      filterObject[filterType] = value;
    }

    if (filterObject.type === "all" && filterObject.price === "all") {
      let filter = await allAidsRequest.map((item) => item);
      setFilterAidsRequest(filter);
    } else if (filterObject.type === "all") {
      let filter = await allAidsRequest.filter((item) => {
        return item["price"] == filterObject["price"];
      });
      setFilterAidsRequest(filter);
    } else if (filterObject.price === "all") {
      let filter = await allAidsRequest.filter((item) => {
        return item["type"] == filterObject["type"];
      });
      setFilterAidsRequest(filter);
    } else {
      let filter = await allAidsRequest.filter((item) => {
        return (
          item["type"] == filterObject["type"] &&
          item["price"] == filterObject["price"]
        );
      });
      setFilterAidsRequest(filter);
    }
  };

  return (
    <>
      {!filterAidsRequest ? (
        <Loading />
      ) : (
        <>
          <SectionBox bgColor="blueLight" justify="evenly" className="z1">
            <Col2HeaderHomeRol className="contain" data-aos="fade-up">
              <ContentText>
                <H1>Listado de peticiones</H1>
              </ContentText>
              <BoxImg className="helper">
                <img src={youngGirl} alt="heeelp!" title="heeelp!" />
              </BoxImg>
            </Col2HeaderHomeRol>
          </SectionBox>

          <SectionBox justify="start">
            <SectionFilterAidRequest className="contain" data-aos="fade-up">
              <FilterAidsRequest>
                <div className="box-filter">
                  <select
                    onChange={(e) =>
                      handleFilterAids(e, e.target.value, "type")
                    }
                  >
                    <option value="all">Todos los servicios</option>
                    <option value="Animales domésticos">
                      Animales domésticos
                    </option>
                    <option value="Lavandería">Lavandería</option>
                    <option value="Parafarmacia">Parafarmacia</option>
                    <option value="Supermercado">Supermercado</option>
                    <option value="Tareas domésticas">Tareas domésticas</option>
                  </select>
                </div>
                <div className="box-filter">
                  <select
                    onChange={(e) =>
                      handleFilterAids(e, e.target.value, "price")
                    }
                  >
                    <option value="all">Todos los precios</option>
                    <option value="Free">Gratis</option>
                    <option value="5€/hora">5€/hora</option>
                    <option value="6€/hora">6€/hora</option>
                    <option value="7€/hora">7€/hora</option>
                    <option value="8€/hora">8€/hora</option>
                    <option value="9€/hora">9€/hora</option>
                    <option value="10€/hora">10€/hora</option>
                  </select>
                </div>
              </FilterAidsRequest>
            </SectionFilterAidRequest>
          </SectionBox>

          <SectionBox justify="center" column>
            <SectionAidsRequest
              className={
                filterAidsRequest.length == 0
                  ? "contain list-aids zero-aids"
                  : "contain list-aids"
              }
              data-aos="fade-up"
            >
              <div className="box-aids">
                {filterAidsRequest.length == 0 ? (
                  <Paragraphs blue>
                    <span>
                      No existe ninguna petición publicada en estos momentos con
                      esos requisitos.
                    </span>
                  </Paragraphs>
                ) : (
                  filterAidsRequest.map((aids, i) => {
                    return <AidsRequestBox aidrequest={aids} key={i} />;
                  })
                )}
              </div>
            </SectionAidsRequest>
          </SectionBox>
        </>
      )}
    </>
  );
};

export const ListAidsRequestPagePrivate = withProtected(ListAidsRequestPage, {
  redirect: false,
});
