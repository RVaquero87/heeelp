//React
import React from "react";

//Form
import { useFormContext } from "react-hook-form";

//Styles & AOS animation
import { SelectText, LabelText, BoxSelect } from "./styles/select.styles";
import { ErrorMessage } from "../../styles/Index.styles";

const hasError = (errors, name) => {
  if (name in errors) return "error";
  return;
};

const SelectBox = React.forwardRef(
  ({ className, classNameDiv, label, name, value, options = value }, ref) => {
    const { errors } = useFormContext();

    return (
      <BoxSelect
        className={classNameDiv ? `box-input ${classNameDiv}` : `box-input`}
      >
        <LabelText>{label}</LabelText>
        <SelectText className={hasError(errors, name)} name={name} ref={ref}>
          {value.map((value, i) => {
            return (
              <option key={i} value={value}>
                {options[i]}
              </option>
            );
          })}
        </SelectText>
        {errors[name]?.message && (
          <ErrorMessage>{errors[name].message}</ErrorMessage>
        )}
      </BoxSelect>
    );
  }
);
export default SelectBox;
