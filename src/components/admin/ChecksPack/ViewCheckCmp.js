import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react'
import ReactLoading from 'react-loading';
import ToDate from '../../../lib/ToDate';

export default function ViewCheckCmp(props) {

    const [check, setCheck] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (props.toview) {
            setCheck(props.toview);
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
                    <strong>Company name :</strong> {check.name}
                </div>
                <div>
                    <strong>Name :</strong> {check.name}
                </div>
                <div>
                    <strong>Email :</strong> {check.email}
                </div>
                <div>
                    <strong>Position :</strong> {check.position}
                </div>
                <div>
                    <strong>Question :</strong> {check.question}
                </div>
                <div>
                    <strong>Certificate found or used in :</strong> {check.question}
                </div>
                <div>
                    <strong>Attached file :</strong> <Link to={`${process.env.GATSBY_API_URL + check.image}`} target="_blank" download><div className='flex items-end gap-1 text-blue-600'><ArrowDownTrayIcon className="block h-8 w-8" aria-hidden="true" /> Download file</div></Link>
                </div>
                <div>
                    <strong>Date :</strong> {ToDate(check.created_at)}
                </div>
            </div>
        </div>
    )
}
