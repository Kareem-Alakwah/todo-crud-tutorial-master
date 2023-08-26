import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useSelector } from 'react-redux';
import type { RootState } from "../../redux/store";
import { Link } from 'react-router-dom';

const MeetingsDataTable = () => {
    const meetings = useSelector((state: RootState) => state.meetings.meetings);

    return (
        <div className="container mt-5">
            <h1>Prime Meetings</h1>
            <DataTable value={meetings} className="table table-striped" tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name"></Column>
                <Column field="formattedNumber" header="Formatted Number"></Column>
                <Column field="location" header="Location"></Column>
                <Column field="completed" header="Completed"></Column>
                <Column field="isUrgent" header="Is Urgent"></Column>
                <Column field="status" header="Status"></Column>
                <Column field="favColor" header="Favourite Color"></Column>
            </DataTable>
            <div className="d-flex justify-content-end">
                <Link className="btn btn-primary" to="/">Back</Link>
            </div>
        </div>
    );
}

export default MeetingsDataTable