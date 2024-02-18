// Proposition.js
import React from "react";
import CovoiturageOffer from "./CovoiturageOffer"; // Assurez-vous de mettre le chemin correct
import { createReservation } from "../../Api/Reservation";
import { useSelector } from "react-redux";
import Icon from "../Icon/Icon";

function Proposition(props) {
  const user = useSelector((state) => state.auth.user)
  const createReservationApi = async (idRoute, idDriver) => {
    const body = {
      createdBy: user._id,
      relatedToRoute: idRoute,
      idDriver: idDriver
    }
    const resp = await createReservation(body)
  }
  return (
    <div className="position-absolute ps-16 pt-24 pe-24">
      <div className="w-100 h-100 flex flex-col">
        <div className="flex-grow-1"
          style={{
            maxHeight: 530,
            overflow: "auto"
          }}
        >
          <Icon color={"red"} iconName={"whatsapp"} size={"16"} />
          <a href={`https://wa.me/${"+21688445645"}`}> WhatsApp Contact</a>
          {
            props.paths?.map((item, index) => {
              return (
                <CovoiturageOffer
                  key={index}
                  startAddress={item.startAdress}
                  endAddress={item.endAddress}
                  driverName={item.createdBy[0]?.firstname + ' ' + item.createdBy[0]?.lastname}
                  car={item.car}
                  availableSeats={item.nbrPlaces}
                  createReservationApi={createReservationApi}
                  idRoute={item._id}
                  idDriver={item?.createdBy[0]?._id}
                />
              )
            })
          }

        </div>
      </div>
    </div>
  );
}

export default Proposition;
