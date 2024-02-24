// UserProfile.js
import React, { useState, useEffect } from "react";
import { updateRoleApi } from "../../Api/Auth";
import image from "../../Style/images/avatar.png";
import { useDispatch } from "react-redux";
import { setRole } from "../../Redux/Reducers/AuthReducer/AuthReducer";
import { formatDateFromNumber } from "../../Common";

//import axios from 'axios';


const UserProfile = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedRole, setEditedRole] = useState(user.role);
  const dispatch = useDispatch()
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleRoleChange = (e) => {
    setEditedRole(e.target.value);
  };

  const updateRoleAPi = async () => {
    const body = {
      role: editedRole
    }
    dispatch(setRole({ role: editedRole }))
    await updateRoleApi(body)
    setIsEditing(false);
  }
  return (
    <div className="profile-container">
      <div className="avatar-container">
        <img src={image} className="avatar" />
      </div>
      <div className="user-details">
        <h2>{user.firstname + ' ' + user.lastname}</h2>
        <p className="email">{user.email}</p>
        <p className="info">Date of birth: {formatDateFromNumber(user.dateOfBirth)}</p>
        <p className="info">Phone number: {user.phoneNumber}</p>
        <p className="info">Start Address: {user.startAddress}</p>
        <p className="info">End Address: {user.endAddress}</p>
        <p className="info">Role : {editedRole}</p>

        {isEditing && (
          <div className="role-edit">
            <select
              name="role"
              value={editedRole}
              onChange={handleRoleChange}
            >
              <option value="passenger">Passenger</option>
              <option value="driver">Driver</option>
            </select>
            <button className="save-button" onClick={updateRoleAPi}>
              Save changes
            </button>
          </div>
        )}

        {!isEditing && (
          <button className="edit-button" onClick={handleEditToggle}>
            Change role
          </button>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
