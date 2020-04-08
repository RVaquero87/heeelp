//React
import React from "react";
import { Link } from "react-router-dom";

//Form
import { useFormContext } from "react-hook-form";

//Styles & AOS animation
import { InputText, LabelText } from "./styles/input.styles";
import {ErrorMessage} from "../../../public/styles/Common.styles"

const hasError = (errors, name) => {
  if (name in errors) return "error";
  return;
};

export const InputBox = React.forwardRef(
  (
    { className, classNameDiv, label, name, type = "text", textCheckbox },
    ref
  ) => {
    const { errors } = useFormContext();
    return (
      <div className={classNameDiv ? `box-input ${classNameDiv}` : `box-input`}>
        {label && <LabelText>{label}</LabelText>}
        <InputText
          type={type}
          className={hasError(errors, name)}
          name={name}
          ref={ref}
        />
        {type == "radio" && (
          <p>
            He leido y acepto las <Link to="/">Bases Legales</Link> y el
            <Link to="/">contrato de Proteccion de datos</Link>
          </p>
        )}
        {errors[name]?.message && (
          <ErrorMessage>{errors[name].message}</ErrorMessage>
        )}
      </div>
    );
  }
);
