import React, { useEffect, useState } from 'react'
import ReactLoading from 'react-loading';
import ToDate from '../../../lib/ToDate';

export default function ViewFeedbackCmp(props) {

    const [feedback, setFeedback] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (props.toview) {
            setFeedback(props.toview);
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
                    <strong>Name :</strong> {feedback.name}
                </div>
                <div>
                    <strong>Email :</strong> {feedback.email}
                </div>
                <div>
                   <strong>Feedback :</strong> {feedback.feedback}
                </div>
                <div>
                   <strong>Date :</strong> {ToDate(feedback.created_at)}
                </div>
            </div>
        </div>
    )
}
