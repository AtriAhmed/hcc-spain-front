import React, { useEffect, useState } from 'react'
import ReactLoading from "react-loading"
import ToDate from '../../../lib/ToDate';

export default function ViewApplyCmp(props) {

    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (props.toview) {
            setItem(props.toview);
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
                    <strong>Company Name :</strong> {item.company}
                </div>
                <div>
                    <strong>Name :</strong> {item.name}
                </div>
                <div>
                    <strong>Email :</strong> {item.email}
                </div>
                <div>
                    <strong>Tel :</strong> {item.tel}
                </div>
                <div>
                    <strong>Head office address :</strong> {item.office_address}
                </div>
                <div>
                    <strong>Factory address :</strong> {item.factory_address}
                </div>
                <div>
                   <strong>Explanation :</strong> {item.explanation}
                </div>
                <div>
                   <strong>Date :</strong> {ToDate(item.created_at)}
                </div>
            </div>
        </div>
    )
}
