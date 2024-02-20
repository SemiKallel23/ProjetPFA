import React from "react";
import logo from "../../Style/images/logo.png";
import { Input, Button } from "../../Component";
import { Link } from "react-router-dom";
export default function PublicOrganism(props) {
  const renderButtonText = () => {
    let buttonText = "";
    if (props.isLogin) buttonText = "Sign in";
    if (props.isForgetPassword) buttonText = "Send Password";
    if (props.isResetPassword) buttonText = "Reset Password";

    return buttonText;
  };
  return (
    <div className="flex justify-center h-100">
      <div className="flex flex-col justify-center" style={{ width: "400px" }}>
        <div className="flex flex-col box-shadow1 p-30 ">
          <div className="flex justify-center w-100 mb-30  ">
            <img src={logo} alt="" />
          </div>
          {(props.isLogin || props.isForgetPassword) && (
            <Input
              label={"Email"}
              type={"primary"}
              onChange={(e) => {
                props.onChange(e, "email");
              }}
              value={props.form.email.value}
              error={props.form.email.errorMessage}
              isInvalid={props.form.email.isInvalid}
            />
          )}
          {(props.isLogin || props.isResetPassword) && (
            <Input
              label={props.isLogin ? "Password" : "New Password"}
              type={"primary"}
              isPassword={true}
              onChange={(e) => {
                props.onChange(e, "password");
              }}
              value={props.form.password.value}
              error={props.form.password.errorMessage}
              isInvalid={props.form.password.isInvalid}
            />
          )}
          {props.isResetPassword && (
            <Input
              label={"Confirm Password"}
              type={"primary"}
              isPassword={true}
              onChange={(e) => {
                props.onChange(e, "password1");
              }}
              value={props.form.password1.value}
              error={props.form.password1.errorMessage}
              isInvalid={props.form.password1.isInvalid}
            />
          )}
          <div className="mt-20 w-100">
            {props.notAuthorized && (
              <div className="text-center text-red font-12p pb-8">
                {props.notAuthorized}
              </div>
            )}
            <Button
              value={renderButtonText()}
              type={"primary"}
              className={"w-100"}
              onClick={props.submit}
              isLoading={props.isLoading}
            />
          </div>
          {props.isLogin && (
            <div className="my-8 text-center">
              <Link to={"/forget"} className="text-none font-16p">
                {"Forget Password"}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
