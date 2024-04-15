import { CheckCircleIcon, InboxIcon, XCircleIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

import Swal from 'sweetalert2';
import ReactLoading from "react-loading"

export default function UsersRequests() {

    const [loading, setLoading] = useState(true);
    const [itemsList,setItemsList] = useState([]);
    function getUsersRequests(){
        axios.get('/api/get-users-requests').then(res=>{
            if(res.status === 200)
            {
                setItemsList(res.data.requests);
            }
            setLoading(false);
        })
    }
    useEffect(()=>{
    getUsersRequests();
    return;
    },[])

    const acceptRequest = (e,data) =>{
        e.preventDefault();

        Swal.fire({
            title: 'Decline User Request',
            text: `Are you sure to Accept ${data.name} request ?`,
            showDenyButton: true,
            confirmButtonText: 'Accept',
            denyButtonText: `Cancel`,
            confirmButtonColor: '#16a34a',
            denyButtonColor: '#d9e2ef',
          }).then((result) => {
            if (result.isConfirmed) {

                axios.get('/sanctum/csrf-cookie').then(response => {
                    axios.post('/api/register',data).then(res =>{
                      
                            Swal.fire("Success",res.data.message,"success")
                            getUsersRequests();
                           
                    }).catch(err=>{
                        Swal.fire("Error",err.response.data.message,"error")
                    })
                })

            } else if (result.isDenied) {
            }
          });



    }

    const deleteItem = (e,item) =>{
        e.preventDefault();

        Swal.fire({
            title: 'Decline User Request',
            text: `Are you sure to decline ${item.name} request ?`,
            showDenyButton: true,
            confirmButtonText: 'Decline',
            denyButtonText: `Cancel`,
            confirmButtonColor: '#df4759',
            denyButtonColor: '#d9e2ef',
          }).then((result) => {
            if (result.isConfirmed) {
      
                axios.delete(`/api/decline-user-request/${item.id}`).then(res=>{
    
                        Swal.fire("Success",res.data.message,"success");
                        getUsersRequests();
    
                }).catch(err=>{
                    const response = err.response
                    if(response.status === 404)
                    {
                        Swal.fire("Erreur",response.data.message,"error")
                    }
                    else if(response.status === 401)
                    {
                        Swal.fire("Error",response.data.message,"error");
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
        <div className='mx-0 grid grid-cols-12 text-center'>
        <div className='pb-3 hidden md:block text-start col-span-1'>ID</div>
        <div className='pb-3 text-start col-span-8'>User</div>
        <div className='col-span-4 md:col-span-3'>Actions</div>
</div>
      {  itemsList.map((item)=>{
            return (
                <div key={item.id} className="mx-0 grid grid-cols-12 border-b-1 text-center">
                    <div className='pt-3 hidden md:block text-start col-span-1'>{item.id}</div>
                    <div className='pt-3 text-start col-span-8'><div className='flex flex-col items-start'> <div className='font-bold'>{item.name}</div> <div>{item.email}</div> </div></div>
                    <div className='pt-3 col-span-4 md:col-span-3 text-center'>
                        <div className='grid grid-cols-12'>
                        <div className='col-span-6'><button type='button'  className='btn p-0' onClick={(e)=>{acceptRequest(e,item);}}><CheckCircleIcon className="block h-8 w-8 text-green-600" aria-hidden="true"/></button></div>
                        <div className='col-span-6'><button type='button' className='btn p-0' onClick={(e)=>{deleteItem(e,item);}}><XCircleIcon className="block h-8 w-8 text-red-600" aria-hidden="true"/></button></div>
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
            <h3 className='text-2xl font-bold'>Theres no users requests</h3>

                </div>
    }
  return (
    <div className="max-w-7xl p-5 mx-auto">
        <div className='rounded-lg shadow-lg'>
            <div className="bg-gray-100 p-4 rounded-t-lg">
                <h5 className='mb-3 mb-0'>Requests ( {itemsList.length} )</h5>
            </div>
            <div className="p-5">
      
                        {items_HTMLTABLE}
            </div>
        </div>

    </div>
  )
}
