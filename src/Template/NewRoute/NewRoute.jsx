import React from "react";
import { Button, Input } from "../../Component";


export default function NewRoute(props) {
  return (
    <div
      className="w-100"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 30,
      }}
    >
      <Input
        label={"Start Address"}
        type={"primary"}
        onChange={(e) => {
          props.onChange(e, "startAdress");
        }}
        value={props.form?.startAdress?.value}
        error={props.form?.startAdress?.errorMessage}
        isInvalid={props.form?.startAdress?.isInvalid}
      />
      <Input
        label={"Departure Time"}
        type={"primary"}
        onChange={(e) => {
          props.onChange(e, "departTime");
        }}
        value={props.form?.departTime?.value}
        error={props.form?.departTime?.errorMessage}
        isInvalid={props.form?.departTime?.isInvalid}
      />
      <Input
        label={"End Address"}
        type={"primary"}
        onChange={(e) => {
          props.onChange(e, "endAddress");
        }}
        value={props.form?.endAddress?.value}
        error={props.form?.endAddress?.errorMessage}
        isInvalid={props.form?.endAddress?.isInvalid}
      />
      <Input
        label={"Arrival Time"}
        type={"primary"}
        onChange={(e) => {
          props.onChange(e, "arrivalTime");
        }}
        value={props.form?.arrivalTime?.value}
        error={props.form?.arrivalTime?.errorMessage}
        isInvalid={props.form?.arrivalTime?.isInvalid}
      />
      <Input
        label={"Number of places available:"}
        type={"primary"}
        onChange={(e) => {
          props.onChange(e, "nbrPlaces");
        }}
        value={props.form?.nbrPlaces?.value}
        error={props.form?.nbrPlaces?.errorMessage}
        isInvalid={props.form?.nbrPlaces?.isInvalid}
      />
      <Input
        label={"Car"}
        type={"primary"}
        onChange={(e) => {
          props.onChange(e, "car");
        }}
        value={props.form?.car?.value}
        error={props.form?.car?.errorMessage}
        isInvalid={props.form?.car?.isInvalid}
      />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button
          value={"Valider"}
          type={"primary"}
          className={"w-15"}
          onClick={props.submit}
          
        />
      </div>
    </div>
  );
}
