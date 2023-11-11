import React, { useState } from "react";
import { formValidation } from "../../Common/Functions/Validation";
import { ForgetPassTemplate } from "../../Template";
import { createState } from "../../Common";
import { sendMailResetApi } from "../../Api/Auth";
import { useNavigate } from "react-router-dom";

export default function ForgetPassword() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: { ...createState({ value: "" }) },
  });
  const [isLoading, setIsLoading] = useState(false);
  const [notAuthorized, setNotAuthorized] = useState("");
  const onForgetPass = async () => {
    const validationForgetPassword = [
      {
        value: "email",
        validation: [
          { error: " lang.errorEmail", type: "isNotEmpty" },
          { error: " lang.msgInvalid", type: "isMail" },
        ],
      },
    ];
    const { res, verif } = formValidation({
      list: validationForgetPassword,
      state: form,
    });
    if (!verif) {
      setForm({ ...form, ...res });
      return;
    }
    setIsLoading(true);
    const body = { mail: form.email.value };
    const response = await sendMailResetApi(body);
    if (response && response.statusCode === 200) {
      setIsLoading(false);
      navigate("/login");
    } else {
      setIsLoading(false);
      setNotAuthorized("lang.forgetPassError");
    }
  };

  const onChange = (e, key) => {
    setForm({
      ...form,
      [key]: { ...form[key], value: e.target.value.trim(), isInvalid: false },
    });
  };
  return (
    <ForgetPassTemplate
      submit={onForgetPass}
      onChange={onChange}
      form={form}
      isLoading={isLoading}
      notAuthorized={notAuthorized}
    />
  );
}
