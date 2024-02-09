// UserProfile.js
import React, { useState ,useEffect } from "react";
//import axios from 'axios';


const UserProfile = ({ user }) => {
 /*useEffect(() => {
    axios.get('http://localhost:4000/auth/profile')
      .then(response => {
        // Traitement des données reçues
        console.log(response.data);
      })
      .catch(error => {
        // Gestion des erreurs
        console.error(error);
      });
  }, []); // Le tableau vide en second argument signifie que cela s'exécutera une seule fois après le montage initial du composant
*/
  const [isEditing, setIsEditing] = useState(false);
  const [editedRole, setEditedRole] = useState(user.role);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleRoleChange = (e) => {
    setEditedRole(e.target.value);
  };

  const handleSaveChanges = () => {
    // Enregistrez les modifications du rôle, par exemple, en envoyant une requête API
    // Vous pouvez implémenter cette fonction en fonction de votre backend
    console.log("Role changed:", editedRole);
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <div className="avatar-container">
        <img src={user.avatarUrl} alt={user.name} className="avatar" />
      </div>
      <div className="user-details">
        <h2>{user.name}</h2>
        <p className="email">{user.email}</p>
        <p className="info">Date of birth: {user.dateOfBirth}</p>
        <p className="info">Phone number: {user.phoneNumber}</p>
        <p className="info">Start Address: {user.startingAddress}</p>
        <p className="info">End Adress: {user.destinationAddress}</p>
        <p className="info">Role : {user.role}</p>

        {isEditing && (
          <div className="role-edit">
            <select
              name="role"
              value={editedRole}
              onChange={handleRoleChange}
            >
              <option value="passager">Passager</option>
              <option value="conducteur">Conducteur</option>
            </select>
            <button className="save-button" onClick={handleSaveChanges}>
              Enregistrer les modifications
            </button>
          </div>
        )}

        {!isEditing && (
          <button className="edit-button" onClick={handleEditToggle}>
            Modifier le rôle
          </button>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
