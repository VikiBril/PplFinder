import React from "react";
import { Button as MuiButton } from "@material-ui/core";
import * as C from "constant";

const Button = ({
  label,
  color = C.COLORS.default,
  disabled,
  size = C.SIZE.medium,
  variant = C.VARIANT.standard,
  onClick,
}) => {
  
  const [favorites, setFavorite] = useState("");
  useEffect(async ()=>{
  let savedFavorite = await localStorage.getItem('__Fav');
  if(savedFavorite) {
    setFavorite(savedFavorite);
  }
}, [])
  
  return (
    <MuiButton
      onClick={onClick}
      color={color}
      disabled={disabled}
      size={size}
      variant={variant}
    >
      {label}
    </MuiButton>
  );
};

export default Button;
