import React from "react";
import { MeetingInterface } from "../../App";
import MeetingItem from "./MeetingItem";
import { Link } from "react-router-dom";

type MeetingsListProps = {
  meetings: MeetingInterface[];
  meetingFilterValue: string;
};

const MeetingsList = ({ meetings, meetingFilterValue }: MeetingsListProps) => {
  return (
    <div className='container'>
      <div className="d-flex justify-content-end">
        <Link className="btn btn-primary m-1" to="/dataTable">Prime Meetings</Link>
        <Link className="btn btn-primary m-1" to="/add">Add Meeting</Link>
      </div>
      <div className='container'>
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="text-center">Name</th>
              <th className="text-center">Formatted Number</th>
              <th className="text-center">Location</th>
              <th className="text-center">Completed</th>
              <th className="text-center">Is Urgent</th>
              <th className="text-center">Status</th>
              <th className="text-center">Favourite Color</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {meetings[0] ? (meetings.filter((meeting: MeetingInterface) => (meetingFilterValue === "all" ? true : meeting.completed)).map((meeting: MeetingInterface) => (
              <MeetingItem key={meeting.id} meeting={meeting} />
            ))) : (
              <tr>
                <td colSpan={8}>
                  <p style={{ textAlign: "center" }}>No data</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MeetingsList;