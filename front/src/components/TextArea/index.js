import React from "react";
import { LabelAreaText, AreaBox, ErrorMessage } from "./styles/input.styles";
import { useFormContext } from "react-hook-form";

const hasError = (errors, name) => {
  if (name in errors) return "error";
  return;
};

export const TextAreaBox = React.forwardRef(
  ({ className, classNameDiv, label, name }, ref) => {
    const { errors } = useFormContext();
    return (
      <div className={classNameDiv ? `box-input ${classNameDiv}` : `box-input`}>
        {label && <LabelAreaText>{label}</LabelAreaText>}
        <AreaBox className={hasError(errors, name)} name={name} ref={ref} />
        {errors[name]?.message && (
          <ErrorMessage>{errors[name].message}</ErrorMessage>
        )}
      </div>
    );
  }
);
