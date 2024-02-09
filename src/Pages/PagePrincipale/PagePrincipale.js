// import { useState } from "react";
import Calendar from "../../Component/Calendar/Calendar";
import Map from "../../Component/Map/Map";
import Proposition from "../../Component/Proposition/Proposition";


function PagePrincipale(props) {
  return (
    < div style={{ width: "100%", padding: 20 }}>
      < div style={{ width: "40%", padding: 20 }}><Calendar /></div>      
      <div className="class11">
        <div className="class111"><Map /> </div>
        <div className="class112">
          <Proposition />
        </div>
      </div>
    </div>
  );
}
export default PagePrincipale;
