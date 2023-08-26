import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import MeetingsList from "./Meeting/MeetingsList";

const Home = () => {
  const meetings = useSelector((state: RootState) => state.meetings.meetings);

  return (
    <div className="container mt-5">
      <main className="py-4">
        <h1>Meetings</h1>
        <MeetingsList meetings={meetings} meetingFilterValue="all" />
      </main>
    </div>
  );
};

export default Home;