import React, { useEffect, useState } from 'react'
import ReactLoading from "react-loading"
import ToDate from '../../../lib/ToDate';

export default function ViewComplaintCmp(props) {

    const [complaint, setComplaint] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (props.toview) {
            setComplaint(props.toview);
            setLoading(false);
        }

    }, [props.toview])

    if (loading) {
        return (
            <ReactLoading />
        )
    }

    return (
        <div className='max-w-xl mx-auto h-100 flex justify-center items-center'>

            <div className='flex flex-col gap-4 w-full'>
                <div>
                    <strong>Name :</strong> {complaint.name}
                </div>
                <div>
                    <strong>Email :</strong> {complaint.email}
                </div>
                <div>
                   <strong>Complaint :</strong> {complaint.complaint}
                </div>
                <div>
                   <strong>Date :</strong> {ToDate(complaint.created_at)}
                </div>
            </div>
        </div>
    )
}
