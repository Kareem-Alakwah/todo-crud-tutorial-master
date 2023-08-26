import { createSlice } from "@reduxjs/toolkit";
import { MeetingInterface } from "../App";

export interface MeetingsListInterface {
    meetings: MeetingInterface[],
    selectedMeeting: any
}

const initialState: MeetingsListInterface = {
    meetings: [],
    selectedMeeting: null
}

export const meetingSlice = createSlice({
    name: "meeting",
    initialState,
    reducers: {
        addMeeting: (state, action) => {
            state.meetings.push(action.payload);
        },
        getMeeting: (state, action) => {
            const meeting = state.meetings.find(obj => obj.id === action.payload);
            state.selectedMeeting = meeting;
        },
        editMeeting: (state, action) => {
            const editMeeting = action.payload;
            state.meetings = state.meetings.map(meeting => meeting.id === editMeeting.id ? editMeeting : meeting);
        },
        deleteMeeting: (state, action) => {
            state.meetings = state.meetings.filter(meeting => meeting.id !== action.payload);
        },
        toggleMeeting: (state, action) => {
            state.meetings = state.meetings.map(meeting => meeting.id === action.payload ? { ...meeting, completed: !meeting.completed } : meeting);
        },
    }
});

export const { addMeeting, getMeeting, editMeeting, deleteMeeting, toggleMeeting } = meetingSlice.actions;
export default meetingSlice.reducer;