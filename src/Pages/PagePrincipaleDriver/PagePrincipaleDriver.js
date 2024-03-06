import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getReservationAPi } from "../../Api/Reservation";
import Calendar from "../../Component/Calendar/Calendar";
import Demande from "../../Component/Demande/Demande"
import { acceptTrajetApi , rejectTrajetApi } from "../../Api/Trajet";


function PagePrincipaleDriver(props) {
  const user = useSelector((state) => state.auth.user)
  const [paths, setPaths] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedDate, setSelectedDate] = useState(new Date()); 
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

  const rejectReservation = async (reservationId, trajetId) => {
    setIsLoading(true)
    const body = {
      trajetId,
      reservationId
    }
    await rejectTrajetApi(body)
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
    < div style={{ width: "100%", padding: 20, display: "flex" ,flexFlow:"column"}}>
        < div style={{ width: "60%", padding: 20, margin: "auto" ,marginLeft:320}}><Calendar onChange={onChangeDate} /></div>
        <div><Demande paths={filterPathsByDate()} acceptReservation={acceptReservation} rejectReservation={rejectReservation} isLoading={isLoading}/></div>
    </div>
  );
}
export default PagePrincipaleDriver;
