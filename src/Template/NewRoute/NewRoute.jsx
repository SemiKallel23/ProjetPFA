import React from "react";
import { Button, Input } from "../../Component";


export default function NewRoute(props) {
  const { form, onChange, submit } = props;

  return (
    <div className="w-100">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 30,
          marginTop: 30
        }}
      >
        <Input
          label={"Start Address"}
          type={"primary"}
          onChange={(e) => onChange(e, "startAdress")}
          value={form?.startAdress?.value}
          error={form?.startAdress?.errorMessage}
          isInvalid={form?.startAdress?.isInvalid}
        />
        <Input
        label={"Departure Time"}
        type={"primary"} // Utilisation du type datetime-local
        onChange={(e) => onChange(e, "departTime")}
        value={form?.departTime?.value}
        error={form?.departTime?.errorMessage}
        isInvalid={form?.departTime?.isInvalid}
        />

        <Input
          label={"End Address"}
          type={"primary"}
          onChange={(e) => onChange(e, "endAddress")}
          value={form?.endAddress?.value}
          error={form?.endAddress?.errorMessage}
          isInvalid={form?.endAddress?.isInvalid}
        />
        <Input
          label={"Arrival Time"}
          type={"primary"}
          onChange={(e) => onChange(e, "arrivalTime")}
          value={form?.arrivalTime?.value}
          error={form?.arrivalTime?.errorMessage}
          isInvalid={form?.arrivalTime?.isInvalid}
        />
        <Input
          label={"Number of places available"}
          type={"primary"}
          onChange={(e) => onChange(e, "nbrPlaces")}
          value={form?.nbrPlaces?.value}
          error={form?.nbrPlaces?.errorMessage}
          isInvalid={form?.nbrPlaces?.isInvalid}
        />
        <Input
          label={"Car"}
          type={"primary"}
          onChange={(e) => onChange(e, "car")}
          value={form?.car?.value}
          error={form?.car?.errorMessage}
          isInvalid={form?.car?.isInvalid}
        />
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            value={"Validate"}
            type={"primary"}
            className={"w-15"}
            onClick={submit}
          />
        </div>
      </div>
    </div>
  );
}
