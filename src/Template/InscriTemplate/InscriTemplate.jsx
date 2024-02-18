import React from "react";
import { Button, Input } from "../../Component";
import logo from "../../Style/images/logo.png";


export default function InscriTemplate(props) {
  return (
    <div
      className="w-30"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 30,
      }}
    >
      <div style={{
        marginTop : 50,
      }}>
      <img src={logo} alt="" />
      </div>
      <Input
        label={"First Name"}
        type={"primary"}
        onChange={(e) => {
          props.onChange(e, "firstname");
        }}
        value={props.form?.firstname?.value}
        error={props.form?.firstname?.errorMessage}
        isInvalid={props.form?.firstname?.isInvalid}
      />
      <Input
        label={"Last Name"}
        type={"primary"}
        onChange={(e) => {
          props.onChange(e, "lastname");
        }}
        value={props.form?.lastname?.value}
        error={props.form?.lastname?.errorMessage}
        isInvalid={props.form?.lastname?.isInvalid}
      />
      <Input
        label={"Date of birth"}
        type={"primary"}
        onChange={(e) => {
          props.onChange(e, "dateOfBirth");
        }}
        value={props.form?.dateOfBirth?.value}
        error={props.form?.dateOfBirth?.errorMessage}
        isInvalid={props.form?.dateOfBirth?.isInvalid}
        typeInput="date"
      />
      <Input
        label={"Email"}
        type={"primary"}
        onChange={(e) => {
          props.onChange(e, "email");
        }}
        value={props.form?.email?.value}
        error={props.form?.email?.errorMessage}
        isInvalid={props.form?.email?.isInvalid}
      />
      <Input
        label={"Password"}
        type={"primary"}
        onChange={(e) => {
          props.onChange(e, "password1");
        }}
        value={props.form?.password1?.value}
        error={props.form?.password1?.errorMessage}
        isInvalid={props.form?.password1?.isInvalid}
        isPassword
      />
      <Input
        label={"Verify password"}
        type={"primary"}
        onChange={(e) => {
          props.onChange(e, "password2");
        }}
        value={props.form?.password2?.value}
        error={props.form?.password2?.errorMessage}
        isInvalid={props.form?.password2?.isInvalid}
        isPassword
      />
      <Input
        label={"Phone number"}
        type={"primary"}
        onChange={(e) => {
          props.onChange(e, "phoneNumber");
        }}
        value={props.form?.phoneNumber?.value}
        error={props.form?.phoneNumber?.errorMessage}
        isInvalid={props.form?.phoneNumber?.isInvalid}
      />

<label htmlFor="role" className="default-label , classLabel">
  Role
</label>
<select
  id="role"
  onChange={(e) => {
    props.onChange(e, "role");
  }}
  value={props.form?.role?.value}
  className={`input-primary ${props.form?.role?.isInvalid ? "invalid" : ""}`}
>
  <option value="" disabled > Choose a role</option>
  <option value="driver">Driver</option>
  <option value="passenger">Passenger</option>
</select>
{props.form?.role?.isInvalid && (
  <div className="error-message">{props.form?.role?.errorMessage}</div>
)}


      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button
          value={"Next >"}
          type={"primary"}
          className={"w-50"}
          onClick={props.submit}
          
        />
      </div>
    </div>
  );
}
