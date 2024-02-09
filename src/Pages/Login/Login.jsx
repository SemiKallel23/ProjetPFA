import React, { useState } from "react";
import { LoginTemplate } from "../../Template";
import { createState } from "../../Common";
import { formValidation } from "../../Common/Functions/Validation";
import { loginApi } from "../../Api/Auth";
import { setToken } from "../../Redux/Reducers/AuthReducer/AuthReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { allowedRoles } from "../../Common/Data/data";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialForm = {
    email: { ...createState({ value: "" }) },
    password: { ...createState({ value: "" }) },
  };
  const [form, setForm] = useState(initialForm);
  console.log("form", form);
  const [isLoading, setIsLoading] = useState(false);
  const [notAuthorized, setNotAuthorized] = useState("");

  const onLogin = async () => {
    const validationStatePassword = [
      {
        value: "email",
        validation: [
          { error: "Enter your mail", type: "isNotEmpty" },
          { error: "Please enter a valid mail", type: "isMail" },
        ],
      },
      {
        value: "password",
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
    const login = await loginApi(
      {
        email: form.email.value,
        password: form.password.value
      }
    )
    if (login.status === 200) {
      dispatch(
        setToken({
          accessToken: login.token,
          user: login.user,
        })
      );
      //api
      navigate("/test");
    }
    else{
      setNotAuthorized("not found")
    }
    setIsLoading(false);
  };

  const onChange = (e, key) => {
    setNotAuthorized("");
    setForm({
      ...form,
      [key]: { ...form[key], value: e.target.value.trim(), isInvalid: false },
    });
  };

  return (
    <LoginTemplate
      submit={onLogin}
      onChange={onChange}
      form={form}
      isLoading={isLoading}
      notAuthorized={notAuthorized}
    />
  );
}
