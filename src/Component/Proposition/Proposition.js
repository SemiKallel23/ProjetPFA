import React from "react";
import CovoiturageOffer from "./CovoiturageOffer"; // Assurez-vous de mettre le chemin correct
import { createReservation } from "../../Api/Reservation";
import { useSelector } from "react-redux";

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
    <div className="position-absolute ps-16 pt-24 pe-24" style={{
      width:400,
    }}>
      <div className="w-100 h-100 flex flex-col">
        <div className="flex-grow-1"
          style={{
            maxHeight: 530,
            overflow: "auto"
          }}
        >      
          {
            props.paths?.map((item, index) => {
              return (
                <CovoiturageOffer
                  key={index}
                  startAddress={item.startAdress}
                  departTime={item.departTime}
                  arrivalTime={item.arrivalTime}
                  endAddress={item.endAddress}
                  driverName={item.createdBy[0]?.firstname + ' ' + item.createdBy[0]?.lastname}
                  car={item.car}
                  date={item.date}
                  availableSeats={item.nbrPlaces}
                  createReservationApi={createReservationApi}
                  idRoute={item._id}
                  idDriver={item?.createdBy[0]?._id}
                  phoneNumber={item.createdBy[0]?.phoneNumber}
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
