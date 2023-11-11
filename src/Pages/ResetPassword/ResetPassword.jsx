import React, { useState } from "react";
import { formValidation } from "../../Common/Functions/Validation";
import { createState } from "../../Common";
import { ResetPassTemplate } from "../../Template";
import { resetPasswordApi } from "../../Api/Auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetToken } from "../../Redux/Reducers/AuthReducer/AuthReducer";

export default function ResetPassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    password: { ...createState({ value: "" }) },
    password1: { ...createState({ value: "" }) },
  });
  const [isLoading, setIsLoading] = useState(false);
  const [notAuthorized, setNotAuthorized] = useState("");

  const onResetPass = async () => {
    const validationStatePassword = [
      {
        value: "password",
        validation: [
          { error: "lang.msgErreurPassword1", type: "isNotEmpty" },
          { error: "lang.errorValidPassword", type: "validPassword" },
        ],
      },
      {
        value: "password1",
        validation: [
          { error: "lang.msgErreurPassword1", type: "isNotEmpty" },
          {
            error: "lang.msgErreurPassword2",
            type: "identicalPassword",
            firstPassword: form.password.value,
          },
          { error: " lang.errorValidPassword", type: "validPassword" },
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
    const body = { password: form.password.value };
    const response = await resetPasswordApi(body);
    if (response && response.statusCode === 200) {
      setIsLoading(false);
      dispatch(resetToken());
      navigate("/login");
    } else {
      setIsLoading(false);
      setNotAuthorized("lang.unauthorized");
    }
  };

  const onChange = (e, key) => {
    setForm({
      ...form,
      [key]: { ...form[key], value: e.target.value.trim(), isInvalid: false },
    });
  };
  return (
    <ResetPassTemplate
      submit={onResetPass}
      onChange={onChange}
      form={form}
      isLoading={isLoading}
      notAuthorized={notAuthorized}
    />
  );
}
