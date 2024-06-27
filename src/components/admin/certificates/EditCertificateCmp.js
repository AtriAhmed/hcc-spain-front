import axios from 'axios';
import  React,{useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import ReactLoading from "react-loading"
import Modal from '../../Modal';

export default function EditCertificateCmp(props) {

    const [Input, setInput] = useState({
        companyAddress:'',
        manufacturer:'',
        manufacturerAddress:'',
        brandName:'',
        productName:'',
        standardsApplicable:'',
        productCategory:'',
        issueDate:'',
        validUntil:'',
    });

    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (props.toedit) {
            setInput(props.toedit);
            setLoading(false);
        }

    }, [props.toedit])

    const handleInput = (e) => {
        e.persist();
        setInput({ ...Input, [e.target.name]: e.target.value });
    }

    const updateItem = (e) => {
        e.preventDefault();
        const data = {
            companyAddress:Input.companyAddress,
            manufacturer:Input.manufacturer,
            manufacturerAddress:Input.manufacturerAddress,
            brandName:Input.brandName,
            productName:Input.productName,
            standardsApplicable:Input.standardsApplicable,
            productCategory:Input.productCategory,
            issueDate:Input.issueDate,
            validUntil:Input.validUntil,
        };
        axios.put(`/api/update-certificate/${props.toedit.id}`, data).then(res => {

            Swal.fire("Success", res.data.message, "success");
            setErrors([])

        }).catch(err => {
            const response = err.response
            if (response?.status === 422) {
                Swal.fire("All Fields are mandatory", "", "error");
                setErrors(response.data.errors)
            }
            else {
                Swal.fire("Error", response.data.message, "error");
            }
        })
    }

    if (loading) {
        return (
            <ReactLoading />
        )
    }

    return (
        <Modal show={props.show} hide={props.hide} >
        <div className='max-w-xl mx-auto h-100 flex justify-center items-center'>

            <form className='flex flex-col gap-4 w-full' onSubmit={updateItem}>
            <div>
            <input placeholder='Company Address' type="text" name="companyAddress" onChange={handleInput} value={Input.companyAddress} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
            <span className='text-red-600'>{errors?.companyAddress}</span>
        </div>
        <div>
            <input placeholder='Manufacturer' type="text" name="manufacturer" onChange={handleInput} value={Input.manufacturer} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
            <span className='text-red-600'>{errors?.manufacturer}</span>
        </div>
        <div>
            <input placeholder='Manufacturer Address' type="text" name="manufacturerAddress" onChange={handleInput} value={Input.manufacturerAddress} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
            <span className='text-red-600'>{errors?.manufacturerAddress}</span>
        </div>
        <div>
            <input placeholder='Brand Name' type="text" name="brandName" onChange={handleInput} value={Input.brandName} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
            <span className='text-red-600'>{errors?.brandName}</span>
        </div>
        <div>
            <input placeholder='Product Name' type="text" name="productName" onChange={handleInput} value={Input.productName} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
            <span className='text-red-600'>{errors?.productName}</span>
        </div>
        <div>
            <input placeholder='Standards Applicable' type="text" name="standardsApplicable" onChange={handleInput} value={Input.standardsApplicable} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
            <span className='text-red-600'>{errors?.standardsApplicable}</span>
        </div>
        <div>
            <input placeholder='Product Category' type="text" name="productCategory" onChange={handleInput} value={Input.productCategory} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
            <span className='text-red-600'>{errors?.productCategory}</span>
        </div>
        <div>
            <input placeholder='Issue Date' type="date" name="issueDate" onChange={handleInput} value={Input.issueDate} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
            <span className='text-red-600'>{errors?.issueDate}</span>
        </div>
        <div>
            <input placeholder='Valid Until' type="date" name="validUntil" onChange={handleInput} value={Input.validUntil} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
            <span className='text-red-600'>{errors?.validUntil}</span>
        </div>
                <button type="submit" className="self-center w-[50%] bg-blue-500 hover:bg-blue-700 rounded-full py-3 text-white font-bold">Edit Certificate</button>

            </form>
        </div>
        </Modal>
    )
}
