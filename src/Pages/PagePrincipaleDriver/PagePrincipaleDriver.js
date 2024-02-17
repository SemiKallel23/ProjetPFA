// import { useState } from "react";
import Calendar from "../../Component/Calendar/Calendar";
import Map from "../../Component/Map/Map";
import Demande from "../../Component/Demande/Demande"
import { Column } from "react-rainbow-components";


function PagePrincipaleDriver(props) {
  return (
    < div style={{ width: "100%", padding: 20, display:"flex", flexFlow:Column }}>
      <div className="class111">
      < div style={{ width: "70%", padding: 20 }}><Calendar /></div>
      <div ><Map /> </div>
      </div>
      <div className="class112">
      <div ><Demande /></div>
      </div>
    </div>
  );
}
export default PagePrincipaleDriver;
