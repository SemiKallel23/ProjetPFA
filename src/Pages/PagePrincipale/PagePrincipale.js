import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { gettrajetApi } from "../../Api/Trajet";
import Calendar from "../../Component/Calendar/Calendar";
import Proposition from "../../Component/Proposition/Proposition";

function PagePrincipale() {
  const user = useSelector((state) => state.auth.user);
  const [paths, setPaths] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date()); 

  const getTrajet = async () => {
    const resp = await gettrajetApi(user?._id);
    if (resp?.status === 200) {
      setPaths(resp.trajets); 
      console.log('aaaa',resp.trajets);
    }
  };

  useEffect(() => {
    getTrajet();
  }, []);

  const filterPathsByDate = () => {
    if (!selectedDate || !paths) {
      return paths;
    }

    const filteredPaths = paths.filter((path) => {
      const pathDate = new Date(path.date);
      console.log(path.date);
      return pathDate.toDateString() === selectedDate.toDateString(); 
    });
console.log('filteredPaths', filteredPaths);
    return filteredPaths;
  };

  const onChangeDate = (newDate) => {
    setSelectedDate(newDate);
  };

  return (
    <div style={{ width: "100%", padding: 10, display: "flex", flexFlow:"column"}}>
        <div style={{ width: "40%", padding: 20 , margin:"auto" , marginLeft:320 }}><Calendar onChange={onChangeDate} /></div>
        <div ><Proposition paths={filterPathsByDate()} /></div>
    </div>
  );
}

export default PagePrincipale;
