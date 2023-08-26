import React from "react";
import { useDispatch } from "react-redux";
import { deleteMeeting } from "../../redux/meeting";
import { MeetingInterface } from "../../App";
import { Link } from "react-router-dom";

type MeetingItemProps = {
  meeting: MeetingInterface;
};

const MeetingItem = ({ meeting }: MeetingItemProps) => {
  const dispatch = useDispatch();
  const handleDeleteMeeting = () => {
    dispatch(deleteMeeting(meeting.id));
  };

  return (
    <tr>
      <td>{meeting.name}</td>
      <td>{meeting.formattedNumber}</td>
      <td>{meeting.location}</td>
      <td>{meeting.completed ? "True" : "False"}</td>
      <td>{meeting.isUrgent ? "True" : "False"}</td>
      <td>{meeting.status}</td>
      <td>{meeting.favColor}</td>
      <td>
        <Link className="btn btn-info m-1" to={`/details/${meeting.id}`}>Details</Link>
        <Link className="btn btn-success m-1" to={`/edit/${meeting.id}`}>Edit</Link>
        <button className="btn btn-danger" onClick={() => handleDeleteMeeting()}>Delete</button>
      </td>
    </tr>
  )
};

export default MeetingItem;
