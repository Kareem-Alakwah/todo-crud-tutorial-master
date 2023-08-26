import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addMeeting } from "../../redux/meeting";
import { useNavigate } from "react-router-dom";

const AddMeeting = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ id: uuidv4(), name: "", formattedNumber: "", location: "", completed: false, isUrgent: true, status: "", favColor: "" });

  const handleMeetingSubmit = (e: any) => {
    e.preventDefault();
    dispatch(addMeeting(formData));
    navigate("/");
  };

  const handleMeetingChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    });
  };

  return (
    <div className="container mt-5">
      <h2>Add Meeting</h2>
      <form onSubmit={handleMeetingSubmit} >
        <div className="input-group mb-3">
          <input type="text" placeholder="Meeting Name" name="name" className="form-control"
            value={formData.name} onChange={handleMeetingChange} />
        </div>
        <div className="input-group mb-3">
          <input type="text" placeholder="Formatted Number" name="formattedNumber" className="form-control"
            value={formData.formattedNumber} onChange={handleMeetingChange} />
        </div>
        <div className="input-group mb-3">
          <input type="text" placeholder="Location" name="location" className="form-control"
            value={formData.location} onChange={handleMeetingChange} />
        </div>
        <div className="form-check mb-3">
          <input id="isUrgent" type="checkbox" name="isUrgent" className="form-check-input"
            checked={formData.isUrgent} onChange={handleMeetingChange} />
          <label htmlFor="isUrgent" className="form-check-label">Is it urgent ?</label>
        </div>
        <div className="form-check mb-3">
          <fieldset>
            <legend>Current meeting status</legend>

            <input id="agenda" type="radio" name="status" value="agenda" className="form-check-input"
              onChange={handleMeetingChange} checked={formData.status === "agenda"} />
            <label htmlFor="agenda" className="form-check-label">Agenda</label>
            <br />

            <input id="meeting" type="radio" name="status" value="meeting" className="form-check-input"
              onChange={handleMeetingChange} checked={formData.status === "meeting"} />
            <label htmlFor="meeting" className="form-check-label">Meeting</label>
            <br />

            <input id="minutesOfMeeting" type="radio" name="status" value="minutesOfMeeting" className="form-check-input"
              onChange={handleMeetingChange} checked={formData.status === "minutesOfMeeting"} />
            <label htmlFor="minutesOfMeeting" className="form-check-label">Minutes Of Meeting</label>
            <br />
          </fieldset>
        </div>
        <div className="form-group">
          <label htmlFor="favColor">What is your favorite color?</label>
          <br />
          <select id="favColor" name="favColor" value={formData.favColor} onChange={handleMeetingChange} className="form-select mb-3" >
            <option value=""> --Choose-- </option>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="indigo">Indigo</option>
            <option value="violet">Violet</option>
          </select>
        </div>
        <div className="d-flex justify-content-end">
          <button className="btn btn-primary">Add Meeting</button>
        </div>
      </form>
    </div>
  );
};

export default AddMeeting;
