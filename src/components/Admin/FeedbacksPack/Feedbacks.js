import { DocumentMagnifyingGlassIcon, InboxIcon, TrashIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import ReactLoading from "react-loading"
import ViewFeedbackModal from './ViewFeedbackModal';
import ToDate from '../../../lib/ToDate';

export default function Feedbacks() {

    const [viewModalShow, setViewModalShow] = useState(false);
    const [toView, setToView] = useState({});

    const [loading, setLoading] = useState(true);
    const [itemsList,setItemsList] = useState([]);
    function getFeedbacks(){
        axios.get('/api/get-feedbacks').then(res=>{

                setItemsList(res.data.feedbacks);
            
            setLoading(false);
        }).catch(err=>{
            const response = err.response
            Swal.fire("Error",err.response.data.message,"error")
            setLoading(false);
        })
    }
    useEffect(()=>{
    getFeedbacks();
    return;
    },[])

    const deleteItem = (e,item) =>{
        e.preventDefault();

        Swal.fire({
            title: 'Delete Feedback',
            text: `Are you sure to delete ${item.name} feedback ?`,
            showDenyButton: true,
            confirmButtonText: 'Delete',
            denyButtonText: `Cancel`,
            confirmButtonColor: '#df4759',
            denyButtonColor: '#d9e2ef',
          }).then((result) => {
            if (result.isConfirmed) {
      
                axios.delete(`/api/delete-feedback/${item.id}`).then(res=>{
       
                        Swal.fire("Success",res.data.message,"success");
                        getFeedbacks();
                    
                }).catch(err=>{
                    if(err.response.status === 404)
                    {
                        Swal.fire("Erreur",err.response.data.message,"error")
                    }
                    else if(err.response.status === 401)
                    {
                        Swal.fire("Error",err.response.data.message,"error");
                    }
                })
      
            } else if (result.isDenied) {
            }
          });


    }
    if(loading)
    {
        return (
            <ReactLoading/>
        )
    }
    
    var items_HTMLTABLE=[];
if(itemsList.length > 0){
        items_HTMLTABLE =
        <>
        <div className='mx-0 grid grid-cols-12 text-center break-all'>
        <div className='pb-3 hidden md:block text-start col-span-1'>ID</div>
        <div className='pb-3 text-start col-span-6 md:col-span-4'>Visitor</div>
        <div className='pb-3 hidden md:block col-span-3'>Feedback</div>
        <div className='pb-3 col-span-3 md:col-span-2'>Date</div>
        <div className='pb-3 col-span-3 md:col-span-2 pb-3 text-end sm:text-center'>Actions</div>
</div>
{        itemsList.map((item)=>{
            return (
                <div key={item.id} className="mx-0 grid grid-cols-12 text-center break-all">
                    <div className='pt-3 hidden md:block text-start col-span-1'>{item.id}</div>
                    <div className='pt-3 text-start col-span-6 md:col-span-4'><div className='flex flex-col items-start'> <div className='font-bold'>{item.name}</div> <div>{item.email}</div> </div></div>
                    <div className='pt-3 hidden md:block col-span-3 truncate'>{item.feedback}</div>
                    <div className='pt-3 col-span-3 md:col-span-2'>{ToDate(item.created_at)}</div>
                    <div className='pt-3 col-span-3 md:col-span-2 pb-3 text-end sm:text-center'>
                        <div className='grid grid-cols-12'>
                        <div className='col-span-12 sm:col-span-6 text-end sm:text-center'><button type='button' className='btn p-0' onClick={(e)=>{setToView(item);setViewModalShow(true)}}><DocumentMagnifyingGlassIcon className="block h-8 w-8 text-blue-600" aria-hidden="true"/></button></div>
                        <div className='col-span-12 sm:col-span-6 text-end sm:text-center'><button type='button' className='btn p-0' onClick={(e)=>{deleteItem(e,item);}}><TrashIcon className="block h-8 w-8 text-red-600" aria-hidden="true"/></button></div>
                        </div> 
                    </div>
                </div>
            )
        })}
        </>
    }
    else{
        items_HTMLTABLE =
                <div className="flex flex-col gap-4 items-center justify-center text-center h-[25vh]">

<InboxIcon className="block h-20 w-20" aria-hidden="true"/>
            <h3 className='text-2xl font-bold'>Theres no Feedbacks</h3>

                </div>
    }
  return (
    <div className="max-w-7xl p-5 mx-auto">
        <div className='rounded-lg shadow-lg'>
            <div className="bg-gray-100 p-4 rounded-t-lg">
                <h5 className='mb-3 mb-0'>Feedbacks ( {itemsList.length} )</h5>
            </div>
            <div className="p-5">
      
                        {items_HTMLTABLE}
            </div>
        </div>
<ViewFeedbackModal show={viewModalShow} hide={()=>{setViewModalShow(false);getFeedbacks()}} toview={toView} />
    </div>
  )
}
