import React from "react";
import logo from "../../Style/images/logo.png";
import Button from "../Button/Button";
import AtomText from "../Text/Text";
import { useDispatch, useSelector } from "react-redux";
import { resetToken } from "../../Redux/Reducers/AuthReducer/AuthReducer";
import { useNavigate } from 'react-router-dom';


function SideBar() {
  const user = useSelector((state) => state.auth.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/test');
  };
  const handleButtonClick5 = () => {
    navigate('/driver');
  };
  const handleButtonClick2 = () => {
    navigate('/profil');
  };
  const handleButtonClick3 = () => {
    navigate('/proposeRoute');
  };
  const handleButtonClick4 = () => {
    navigate('/about');
  };

  return (
    <div className="position-fixed side-bar ps-16 pt-24 pe-24">
      <div className="w-100 h-100 flex flex-col">
        <img src={logo} className="wp-200 hp-54 mb-32" />
        <div className="flex-grow-1">
          {
            user.role === "passenger" &&
          <Button
            type={"sideBarBtn"}
            onClick={handleButtonClick}
            value={
              <AtomText type={"type-1"}  isIcon={true} iconName={"home"}>
                {"Home"}
              </AtomText>
            }
          />
}
{
   user.role === "driver" &&
          <Button
            type={"sideBarBtn"}
            onClick={handleButtonClick5}
            value={
              <AtomText type={"type-1"}  isIcon={true} iconName={"home"}>
                {"Home"}
              </AtomText>
            }
          />
}
          <Button
            type={"sideBarBtn"}
            onClick={handleButtonClick2}
            value={
              <AtomText type={"type-1"} isIcon={true} iconName={"user"}>
                {"Profile"}
              </AtomText>
            }
          />
          {
            user.role === "driver" &&
            <Button
              type={"sideBarBtn"}
              onClick={handleButtonClick3}
              value={
                <AtomText type={"type-1"} isIcon={true} iconName={"target"}>
                  {"Propose Route"}
                </AtomText>
              }

            />
          }

        </div>
        <div className="pb-20">
          <Button
            type={"sideBarBtn"}
            onClick={handleButtonClick4}
            value={
              <AtomText type={"type-1"} isIcon={true} iconName={"info"}>
                {"About"}
              </AtomText>
            }
          />
         <Button
  type={"logout-btn"}
  onClick={() => {
    dispatch(resetToken());
  }}
  value={
    <AtomText type={"type-7"} isIcon={true} iconName={"exit"} >
      {"Log out"}
    </AtomText>
  }
/>

        </div>
      </div>
    </div>
  );
}

export default SideBar;
