import React, { useState } from "react";
import NewRoute from "../../Template/NewRoute/NewRoute";
import { trajetApi } from "../../Api/Trajet";


export default function ProposeRoute() {
  const initialForm = {
    startAdress: { value: "", isInvalid: false, errorMessage: "" },
    departTime: { value: "", isInvalid: false, errorMessage: "" },
    endAddress: { value: "", isInvalid: false, errorMessage: "" },
    arrivalTime: { value: "", isInvalid: false, errorMessage: "" },
    nbrPlaces: { value: "", isInvalid: false, errorMessage: "" },
    car: { value: "", isInvalid: false, errorMessage: "" },
  };

  const [form, setForm] = useState(initialForm);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleChange = (e, field) => {
    const value = e.target.value;
    setForm({
      ...form,
      [field]: {
        ...form[field],
        value: value,
        isInvalid: false,
        errorMessage: ""
      }
    });
  };

  const submit = async () => {
    const create = await trajetApi({
      startAdress: form.startAdress.value,
      departTime: form.departTime.value,
      endAddress: form.endAddress.value,
      arrivalTime: form.arrivalTime.value,
      nbrPlaces: form.nbrPlaces.value,
      car: form.car.value,
    });
    console.log(create);

    setPopupMessage("Successful creation !");
      setShowPopup(true);
      setForm(initialForm);

  };

  return (
    <div className="route">
      <div className="w-100 , class1">
        <NewRoute form={form} onChange={handleChange} submit={submit} />
      </div>
      {showPopup && (
        <div className="popup">
          <p>{popupMessage}</p>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
    </div>
  );
}
