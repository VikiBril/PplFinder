import React, { useEffect, useState } from "react";
import Text from "components/Text";
import Spinner from "components/Spinner";
import CheckBox from "components/CheckBox";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import * as S from "./style";
import { BrandingWatermark } from "@material-ui/icons";

const UserList = ({ users, isLoading }) => {
  const [hoveredUserId, setHoveredUserId] = useState();

  const[countries,setCountries] = useState({"Brazil":false ,"Germany":false, "Australia":false,"Canada":false})
  
  useEffect(()=>{console.log(countries)},[countries])

  const handleMouseEnter = (index) => {
    setHoveredUserId(index);
  };

  const handleMouseLeave = () => {
    setHoveredUserId();
  };

  const changeDisplay = (isMarked,label) => {
    console.log("Hey");
    switch(label){
      case "Brazil":{
        if(isMarked){
          let obj = countries;
          obj["Brazil"] = true;
          setCountries(obj);
        }
        else {
            let obj = countries;
            obj["Brazil"] = false;
            setCountries(obj);
        }
        break;
      }
      case "Germany":{
        if(isMarked){
          let obj = countries;
          obj["Germany"] = true;
          setCountries(obj);
        }
        else {
            let obj = countries;
            obj["Germany"] = false;
            setCountries(obj);
        }
        break;
      }
      case "Australia":{
        if(isMarked){
          let obj = countries;
          obj["Australia"] = true;
          setCountries(obj);
        }
        else {
            let obj = countries;
            obj["Australia"] = false;
            setCountries(obj);
        }
        break;
      
      }
      case "Canada":{
        if(isMarked){
          let obj = countries;
          obj["Canada"] = true;
          setCountries(obj);
        }
        else {
            let obj = countries;
            obj["Canada"] = false;
            setCountries(obj);
        }
        break;
      }

    }
  }

  return (
    <S.UserList>
      <S.Filters>
        <CheckBox value="BR" label="Brazil" toDisplay={changeDisplay} />
        <CheckBox value="AU" label="Australia" toDisplay={changeDisplay} />
        <CheckBox value="CA" label="Canada" toDisplay={changeDisplay}/>
        <CheckBox value="DE" label="Germany" toDisplay={changeDisplay} />
      </S.Filters>
      <S.List>
        {users.map((user, index) => {
          if(countries['Germany'] || countries['Canada'] || countries['Australia'] || countries['Brazil']){
            if(countries[user.location.country]==true){
          return (
            <S.User
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <S.UserPicture src={user?.picture.large} alt="" />
              <S.UserInfo>
                <Text size="22px" bold>
                  {user?.name.title} {user?.name.first} {user?.name.last}
                </Text>
                <Text size="14px">{user?.email}</Text>
                <Text size="14px">
                  {user?.location.street.number} {user?.location.street.name}
                </Text>
                <Text size="14px">
                  {user?.location.city} {user?.location.country}
                </Text>
              </S.UserInfo>
              <S.IconButtonWrapper isVisible={index === hoveredUserId}>
                <IconButton>
                  <FavoriteIcon color="error" />
                </IconButton>
              </S.IconButtonWrapper>
            </S.User>
          )}
          }
          else {
            return (
              <S.User
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <S.UserPicture src={user?.picture.large} alt="" />
                <S.UserInfo>
                  <Text size="22px" bold>
                    {user?.name.title} {user?.name.first} {user?.name.last}
                  </Text>
                  <Text size="14px">{user?.email}</Text>
                  <Text size="14px">
                    {user?.location.street.number} {user?.location.street.name}
                  </Text>
                  <Text size="14px">
                    {user?.location.city} {user?.location.country}
                  </Text>
                </S.UserInfo>
                <S.IconButtonWrapper isVisible={index === hoveredUserId}>
                  <IconButton>
                    <FavoriteIcon color="error" />
                  </IconButton>
                </S.IconButtonWrapper>
              </S.User>
            )}         
})}
        {isLoading && (
          <S.SpinnerWrapper>
            <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
          </S.SpinnerWrapper>
        )}
      </S.List>
    </S.UserList>
  );
};

export default UserList;
