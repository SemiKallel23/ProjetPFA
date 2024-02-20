import React from "react";
import CovoiturageDemande from "./CovoiturageDemande"

function Demande(props) {
  return (
    <div className="position-absolute ps-16 pt-24 pe-24">
      <div className="w-100 h-100 flex flex-col">
        <div className="flex-grow-1"
             style={{
              maxHeight : 530,
              overflow : "auto" 
            }}
            >
    
        {
           props.paths?.map((item,index)=> {
            return (  
            <CovoiturageDemande
            passengerName={item.createdBy[0]?.firstname + ' ' + item.createdBy[0]?.lastname}
            startAddress ={item.relatedToRoute[0]?.startAdress}
            departTime ={item.relatedToRoute[0]?.departTime}
            endAddress ={item.relatedToRoute[0]?.endAddress}
            arrivalTime ={item.relatedToRoute[0]?.arrivalTime}
            phoneNumber={item.createdBy[0]?.phoneNumber}


          
            
              />)
    
          
            })
        }
        </div>
      </div>
    </div>
  );
}

export default Demande;
