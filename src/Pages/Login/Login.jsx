import React, { useState } from "react";
import { LoginTemplate } from "../../Template";
import { createState } from "../../Common";
import { formValidation } from "../../Common/Functions/Validation";
import { loginApi } from "../../Api/Auth";
import { setToken } from "../../Redux/Reducers/AuthReducer/AuthReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { allowedRoles } from "../../Common/Data/data";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialForm = {
    email: { ...createState({ value: "" }) },
    password: { ...createState({ value: "" }) },
  };
  const [form, setForm] = useState(initialForm);
  const [isLoading, setIsLoading] = useState(false);
  const [notAuthorized, setNotAuthorized] = useState("");

  const onLogin = async () => {
    const validationStatePassword = [
      {
        value: "email",
        validation: [
          { error: "lang.errorEmail", type: "isNotEmpty" },
          { error: "lang.msgInvalid", type: "isMail" },
        ],
      },
      {
        value: "password",
        validation: [{ error: " lang.msgErreurPassword1", type: "isNotEmpty" }],
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
    const body = {
      email: form.email.value,
      password: form.password.value,
    };
    const response = await loginApi(body);
    if (response && response.statusCode === 200) {
      setIsLoading(false);
      if (!response.role && allowedRoles.includes(response.role)) {
        setNotAuthorized("lang.onlyAdmins");
        setForm(initialForm);
        return;
      }
      dispatch(
        setToken({
          accessToken: response.accessToken,
          refreshToken: response.refreshToken,
          user: response.user,
          role: response.role,
        })
      );
      navigate("/");
    } else {
      setNotAuthorized("lang.errorLogin");
      setIsLoading(false);
    }
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
