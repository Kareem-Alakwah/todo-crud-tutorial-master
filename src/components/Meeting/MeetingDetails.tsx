import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getMeeting } from "../../redux/meeting";
import { RootState } from "../../redux/store";

const MeetingDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
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

  if (!meeting) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <h2>Meeting Details</h2>
      <p className="text-muted">Meeting Name: {meeting.name}</p>
      <p className="text-muted">Formatted Number: {meeting.formattedNumber}</p>
      <p className="text-muted">Location: {meeting.location}</p>
      <p className="text-muted">Is Urgent: {meeting.isUrgent ? "" : ""}</p>
      <p className="text-muted">Status: {meeting.status}</p>
      <p className="text-muted">Favorite Color: {meeting.favColor}</p>
      <div className="d-flex justify-content-end">
        <Link className="btn btn-primary" to="/">Back</Link>
      </div>
    </div>
  );
};

export default MeetingDetails;