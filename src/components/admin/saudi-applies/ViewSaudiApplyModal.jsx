import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import ToDate from '../../../lib/ToDate';
import Modal from '../../Modal';

export default function ViewSaudiApplicationModal({ toview, show, hide }) {
    const [application, setApplication] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (toview) {
            setApplication(toview);
            setLoading(false);
        }
    }, [toview]);

    if (loading) {
        return <ReactLoading />;
    }

    return (
        <Modal title="View Saudi Application" show={show} hide={hide}>
            <div className='max-w-xl mx-auto h-100 flex justify-center items-center'>
                <div className='flex flex-col gap-4 w-full'>
                    <div>
                        <strong>Company Name:</strong> {application?.coName}
                    </div>
                    <div>
                        <strong>Company Address:</strong> {application?.coAddress}
                    </div>
                    <div>
                        <strong>Registration Number:</strong> {application?.regNB}
                    </div>
                    <div>
                        <strong>Activity:</strong> {application?.activity}
                    </div>
                    <div>
                        <strong>Number of Employees:</strong> {application?.empNB}
                    </div>
                    <div>
                        <strong>Contact Person:</strong> {application?.cPerson}
                    </div>
                    <div>
                        <strong>Email:</strong> {application?.cEmail}
                    </div>
                    <div>
                        <strong>Phone:</strong> {application?.cPhone}
                    </div>
                    <div>
                        <strong>Remarks:</strong> {application?.remark}
                    </div>
                    <div>
                        <strong>Quality Certification:</strong> {application?.qualCertif}
                    </div>
                    <div>
                        <strong>Product Registration Form:</strong>
                        {application?.prodReg && (
                            <Link to={`${process.env.GATSBY_API_URL + application?.prodReg}`} target="_blank" download>
                                <div className='flex items-end gap-1 text-blue-600'>
                                    <ArrowDownTrayIcon className="block h-8 w-8" aria-hidden="true" /> Download file
                                </div>
                            </Link>
                        )}
                    </div>
                    <div>
                        <strong>Factory Halal Certification:</strong>
                        {application?.facCertif && (
                            <Link to={`${process.env.GATSBY_API_URL + application?.facCertif}`} target="_blank" download>
                                <div className='flex items-end gap-1 text-blue-600'>
                                    <ArrowDownTrayIcon className="block h-8 w-8" aria-hidden="true" /> Download file
                                </div>
                            </Link>
                        )}
                    </div>
                    <div>
                        <strong>Submission Date:</strong> {ToDate(application?.created_at)}
                    </div>
                </div>
            </div>
        </Modal>
    );
}
