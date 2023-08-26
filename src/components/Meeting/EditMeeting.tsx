import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getMeeting, editMeeting } from "../../redux/meeting";
import { RootState } from "../../redux/store";

const EditMeeting = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ id: 0, name: "", formattedNumber: "", location: "", completed: false, isUrgent: true, status: "", favColor: "" });

  // useEffect(() => {
  //   const getMeeting = async () => {
  //     const response = await fetch(`/api/objects/${id}`);
  //     const meeting = await response.json();
  //     setFormData(meeting);
  //   };

  //   getMeeting();
  // }, [id]);

  useEffect(() => {
    dispatch(getMeeting(id));
  }, [dispatch, id]);

  const meeting = useSelector((state: RootState) => state.meetings.selectedMeeting);
  useEffect(() => {
    setFormData(meeting);
  }, [meeting]);

  if (formData.id === 0) {
    return <div>Loading...</div>;
  }

  const handleMeetingSubmit = (e: any) => {
    e.preventDefault();
    dispatch(editMeeting(formData));
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
      <h2>Edit Meeting</h2>
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
          <button className="btn btn-primary">Edit Meeting</button>
        </div>
      </form>
    </div>
  );
};

export default EditMeeting;