import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getReservationAPi } from "../../Api/Reservation";
import Calendar from "../../Component/Calendar/Calendar";
import Map from "../../Component/Map/Map";
import Demande from "../../Component/Demande/Demande"
import { Column } from "react-rainbow-components";


function PagePrincipaleDriver(props) {
  const user = useSelector((state) => state.auth.user)
  const [paths, setPaths] = useState([])
  const getReservation = async () => {
    console.log("user?._id", user?._id);
    const resp = await getReservationAPi(user?._id)
    console.log("resp", resp);
    if (resp?.status === 200) {
       setPaths(resp.reservations)
    }
  }
  useEffect(() => {
    getReservation()
  }, [])
  return (
    < div style={{ width: "100%", padding: 20, display:"flex", flexFlow:Column }}>
      <div className="class111">
      < div style={{ width: "70%", padding: 20 }}><Calendar /></div>
      <div ><Map /> </div>
      </div>
      <div className="class112">
      <div style ={{width : 200}} ><Demande paths={paths} /></div>
      </div>
    </div>
  );
}
export default PagePrincipaleDriver;
