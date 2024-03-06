import React, { useState } from "react";
import NewRoute from "../../Template/NewRoute/NewRoute";
import { trajetApi } from "../../Api/Trajet";
import { useSelector } from "react-redux";
import Calendar from "../../Component/Calendar/Calendar";

export default function ProposeRoute() {
  const user = useSelector((state) => state.auth.user);
  const initialForm = {
    startAdress: { value: "", isInvalid: false, errorMessage: "" },
    departTime: { value: "", isInvalid: false, errorMessage: "" },
    endAddress: { value: "", isInvalid: false, errorMessage: "" },
    arrivalTime: { value: "", isInvalid: false, errorMessage: "" },
    nbrPlaces: { value: "", isInvalid: false, errorMessage: "" },
    car: { value: "", isInvalid: false, errorMessage: "" },
    matricule: { value: "", isInvalid: false, errorMessage: "" },
    date: { value: "", isInvalid: false, errorMessage: "" },
  };

  const [form, setForm] = useState(initialForm);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [date, setDate] = useState(null);

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

  const onChangeDate = (newDate) => {
    setDate(newDate);
    setForm({
      ...form,
      date: {
        value: newDate,
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
      matricule: form.matricule.value,
      date: form.date.value,
      createdBy: user._id
    });

    setPopupMessage("Successful creation !");
    setShowPopup(true);
    setForm(initialForm);
  };

  return (
    <div className="route">
      <div className="w-100, class1">
        <div style={{ width: "70%", padding: 20, margin: "auto" }}>
          <Calendar onChange={onChangeDate} />
        </div>
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
