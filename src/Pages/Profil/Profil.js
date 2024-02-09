import React, { useState, useEffect } from "react";
import UserProfil from "../../Component/UserProfil/UserProfil";
import { profileApi } from "../../Api/Auth";

function Profil(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Appel à l'API pour obtenir les données du profil
        const response = await profileApi();
        console.log(response);
        if (response.status === 200) {
          // Mettre à jour l'état local avec les données de l'utilisateur
          setUser(response.data);
         // console.log(typeof response.data)
        } else {
          console.error("Erreur lors de la récupération des données du profil");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des données du profil", error);
      }
    };

    fetchData(); // Appel de la fonction fetchData lors du montage du composant

  }, []); // Le tableau vide [] signifie que cela ne s'exécute qu'une seule fois lors du montage

  return (
    <div style={{ width: "100%" }}>
      {user ? (
        <UserProfil user={user} />
      ) : (
        <p>Chargement en cours...</p>
      )}
    </div>
  );
}

export default Profil;
