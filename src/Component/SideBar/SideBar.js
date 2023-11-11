import React from "react";
import logo from "../../Style/images/logo.png";
import Button from "../Button/Button";
import AtomText from "../Text/Text";
import { useDispatch } from "react-redux";
import { resetToken } from "../../Redux/Reducers/AuthReducer/AuthReducer";

function SideBar() {
  const dispatch = useDispatch();
  return (
    <div className="position-absolute side-bar ps-16 pt-24 pe-24">
      <div className="w-100 h-100 flex flex-col">
        <img src={logo} className="wp-119 hp-54 mb-32" />
        <div className="flex-grow-1">
          <Button
            type={"sideBarBtn"}
            value={
              <AtomText type={"type-1"} isIcon={true} iconName={"Users"}>
                {"lang.users"}
              </AtomText>
            }
          />
        </div>
        <div className="pb-20">
          <Button
            type={"logout-btn"}
            onClick={() => {
              dispatch(resetToken());
            }}
            value={<AtomText type={"type-7"}>{"lang.logout"}</AtomText>}
          />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
