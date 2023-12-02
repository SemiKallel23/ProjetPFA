import React, { useState } from "react";
import { LoginTemplate } from "../../Template";
import { createState } from "../../Common";
import { formValidation } from "../../Common/Functions/Validation";
// import { loginApi } from "../../Api/Auth";
import { setToken } from "../../Redux/Reducers/AuthReducer/AuthReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import InscriTemplate from "../../Template/InscriTemplate/InscriTemplate";
import Address from "../../Template/InscriTemplate/Address";
// import { allowedRoles } from "../../Common/Data/data";

export default function Inscri() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialForm = {
    firstname: { ...createState({ value: "" }) },
    lastname: { ...createState({ value: "" }) },
    email: { ...createState({ value: "" }) },
    password1: { ...createState({ value: "" }) },
    password2: { ...createState({ value: "" }) },
    dateOfBirth: { ...createState({ value: "" }) },
    phoneNumber: { ...createState({ value: "" }) },
    startAddress: { ...createState({ value: "" }) },
    endAddress: { ...createState({ value: "" }) },
  };
  const [form, setForm] = useState(initialForm);
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [notAuthorized, setNotAuthorized] = useState("");
  const submit = async () => {
    const validationStatePassword = [
      {
        value: "email",
        validation: [
          { error: "Enter your mail", type: "isNotEmpty" },
          { error: "Please enter a valid mail", type: "isMail" },
        ],
      },
      {
        value: "password1",
        validation: [{ error: "Enter your password", type: "isNotEmpty" }],
      },
      {
        value: "password2",
        validation: [
          { error: "Enter your password", type: "isNotEmpty" },
          {
            error: "Please verify your password",
            type: "identicalPassword",
            firstPassword: form.password1.value,
          },
        ],
      },
      {
        value: "dateOfBirth",
        validation: [{ error: "Enter your date of birth", type: "isNotEmpty" }],
      },
      {
        value: "firstname",
        validation: [{ error: "Enter your first name", type: "isNotEmpty" }],
      },
      {
        value: "lastname",
        validation: [{ error: "Enter your last name", type: "isNotEmpty" }],
      },
      {
        value: "phoneNumber",
        validation: [
          { error: "Enter your phone number", type: "isNotEmpty" },
          { error: "Enter a valid phone number", type: "isValidPhoneNumber" },
        ],
      },
    ];
    const { res, verif } = formValidation({
      list: validationStatePassword,
      state: form,
    });
    if (!verif) {
      setForm({ ...form, ...res });
      return;
    }
    setIsLoading(true);
    setStep(2);
  };
  const submitAddress = async () => {
    const validationStatePassword = [
      {
        value: "startAddress",
        validation: [
          { error: "Enter your mail", type: "isNotEmpty" },
        ],
      },
      {
        value: "endAddress",
        validation: [{ error: "Enter your password", type: "isNotEmpty" }],
      },
      
    ];
    const { res, verif } = formValidation({
      list: validationStatePassword,
      state: form,
    });
    if (!verif) {
      setForm({ ...form, ...res });
      return;
    }
    setIsLoading(true);
    //api
    navigate("/login")
  };

  const onChange = (e, key) => {
    setForm({
      ...form,
      [key]: { ...form[key], value: e.target.value.trim(), isInvalid: false },
    });
  };

  return (<div className="w-100"
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
  }} 
  >
    {
    step === 1 ? (
      
      <InscriTemplate onChange={onChange} form={form} submit={submit} />
      ) : (
        <Address  form={form} submitAddress={submitAddress} onChange={onChange} setStep={setStep}/>
        )
      }
  </div>)
}
