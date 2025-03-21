import React from "react";
import CovoiturageDemande from "./CovoiturageDemande"

function Demande(props) {
  return (
    <div className="position-absolute ps-16 pt-24 pe-24" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap : 10 , justifyContent: 'center', alignItems: 'center' }}>
  {
    props.paths?.map((item, index) => {
      return (
        <CovoiturageDemande
          key={item._id}
          passengerName={item.createdBy[0]?.firstname + ' ' + item.createdBy[0]?.lastname}
          startAddress={item.relatedToRoute[0]?.startAdress}
          departTime={item.relatedToRoute[0]?.departTime}
          endAddress={item.relatedToRoute[0]?.endAddress}
          arrivalTime={item.relatedToRoute[0]?.arrivalTime}
          phoneNumber={item.createdBy[0]?.phoneNumber}
          date={item.relatedToRoute[0]?.date}
          acceptReservation={props.acceptReservation}
          rejectReservation={props.rejectReservation}
          reservationId={item._id}
          trajetId={item.relatedToRoute[0]._id}
          createdBy={item.createdBy[0]?._id}
          isLoading={props.isLoading}
        />
      )
    })
  }
</div>

  );
}

export default Demande;
