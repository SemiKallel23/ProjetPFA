import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getReservationAPi } from "../../Api/Reservation";
import Calendar from "../../Component/Calendar/Calendar";
import Map from "../../Component/Map/Map";
import Demande from "../../Component/Demande/Demande"
import { Column } from "react-rainbow-components";
import { acceptTrajetApi } from "../../Api/Trajet";


function PagePrincipaleDriver(props) {
  const user = useSelector((state) => state.auth.user)
  const [paths, setPaths] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedDate, setSelectedDate] = useState(new Date()); // Initialisez avec la date actuelle
  const acceptReservation = async (reservationId, trajetId, passengerId) => {
    setIsLoading(true)
    const body = {
      trajetId,
      reservationId,
      passengerId
    }
    await acceptTrajetApi(body)
    setIsLoading(false)
    getReservation()
  }

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

  const filterPathsByDate = () => {
    if (!selectedDate || !paths) {
      return paths;
    }

    const filteredPaths = paths.filter((path) => {
      const pathDate = new Date(path.relatedToRoute[0].date);
      return pathDate.toDateString() === selectedDate.toDateString();
    });
    console.log('filteredPaths', filteredPaths);
    return filteredPaths;
  };

  const onChangeDate = (newDate) => {
    setSelectedDate(newDate);
  };


  return (
    < div style={{ width: "100%", padding: 20, display: "flex" }}>
      <div className="class111">
        < div style={{ width: "70%", padding: 20, margin: "auto" }}><Calendar onChange={onChangeDate} /></div>
        <div ><Map /> </div>
      </div>
      <div className="class112">
        <div style={{ width: 200 }} ><Demande paths={filterPathsByDate()} acceptReservation={acceptReservation} isLoading={isLoading}/></div>
      </div>
    </div>
  );
}
export default PagePrincipaleDriver;
