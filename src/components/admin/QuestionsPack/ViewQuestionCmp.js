import React, { useEffect, useState } from 'react'
import ReactLoading from "react-loading"
import ToDate from '../../../lib/ToDate';

export default function ViewQuestionCmp(props) {

    const [question, setQuestion] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (props.toview) {
            setQuestion(props.toview);
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
                    <strong>Name :</strong> {question.name}
                </div>
                <div>
                    <strong>Email :</strong> {question.email}
                </div>
                <div>
                   <strong>Tel :</strong> {question.tel}
                </div>
                <div>
                   <strong>Question :</strong> {question.question}
                </div>
                <div>
                   <strong>Date :</strong> {ToDate(question.created_at)}
                </div>
            </div>
        </div>
    )
}
