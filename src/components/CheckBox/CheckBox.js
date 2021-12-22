import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import * as S from "./style";

const CheckBox = ({ isChecked, onChange, label, value, toDisplay}) => {
  const handleChange = (isMarked) => {
   toDisplay(isMarked, label);
   console.log("ismarked", isMarked);
   console.log("value", value);
   
    onChange && onChange(value);
  };


  return (
    <S.CheckBox>
      <FormControlLabel
        control={<Checkbox checked={isChecked} onChange={(e)=>{handleChange(e.target.checked)}} color="primary" />}
        label={label}
      />
    </S.CheckBox>
  );
};


export default CheckBox;
