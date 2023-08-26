import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./components/Shared/SharedLayout";
import Home from "./components/Home";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import AddMeeting from "./components/Meeting/AddMeeting";
import EditMeeting from "./components/Meeting/EditMeeting";
import MeetingDetails from "./components/Meeting/MeetingDetails";
import MeetingsDataTable from "./components/Meeting/MeetingsDataTable";

export interface MeetingInterface {
  id: string;
  name: string;
  formattedNumber: string;
  location: string;
  completed: boolean;
  isUrgent: string;
  status: string;
  favColor: string;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='*' element={<ErrorPage />} />
          <Route path='add' element={<AddMeeting />} />
          <Route path='edit/:id' element={<EditMeeting />} />
          <Route path='details/:id' element={<MeetingDetails />} />
          <Route path='dataTable' element={<MeetingsDataTable />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;