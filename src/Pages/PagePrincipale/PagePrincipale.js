import { useEffect, useState } from "react";
import { gettrajetApi } from "../../Api/Trajet";
import Calendar from "../../Component/Calendar/Calendar";
import Map from "../../Component/Map/Map";
import Proposition from "../../Component/Proposition/Proposition";
import { useSelector } from "react-redux";
import { Column } from "react-rainbow-components";


function PagePrincipale(props) {
  const user = useSelector((state) => state.auth.user)
  const [paths, setPaths] = useState([])
  const getTrajet = async () => {
    console.log("user?._id", user?._id);
    const resp = await gettrajetApi(user?._id)
    console.log("resp", resp);
    if (resp?.status === 200) {
       setPaths(resp.trajets)
    }
  }
  useEffect(() => {
    getTrajet()
  }, [])
  return (
    < div style={{ width: "100%", padding: 20, display:"flex", flexFlow:Column }}>
      <div className="class111">
      < div style={{ width: "70%", padding: 20 }}><Calendar /></div>
      <div ><Map /> </div>
      </div>
      <div className="class112">
      <div ><Proposition paths={paths} /></div>
      </div>
    </div>
  );
}
export default PagePrincipale;
