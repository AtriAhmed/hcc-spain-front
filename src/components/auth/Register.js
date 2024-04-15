import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import navigate, { Link } from 'gatsby'
import ReactLoading from 'react-loading'

export default function Register() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('/api/checkLoggedIn').then(res => {
                Swal.fire("","You are already logged in","warning").then(()=>{
                    navigate('/admin')
                })
        }).catch(err=>{
            setLoading(false);
        });

        return;
    }, []);
    const [registerInput, setRegister] = useState({
        name: '',
        email: '',
        password: '',
    })

    function resetInputs(){
        setRegister({
                name: '',
                email: '',
                password: ''
            })
            setErrors({})
    }

    const [errors,setErrors] = useState([])

    const handleInput = (e) => {
        e.persist()
        setRegister({ ...registerInput, [e.target.name]: e.target.value })
    }

    const registerSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: registerInput.name,
            email: registerInput.email,
            password: registerInput.password,
        }

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post('/api/user-request', data).then(res => {
                
                    Swal.fire("Success", res.data.message, "success")
                    resetInputs()
                
            }).catch(err=>{
                const response = err.response;
                setErrors(response.data.validation_errors)
            })
        })
    }

    if (loading) {
        return (
            <ReactLoading />
        )
    }

    return (
        <>
            <div className='max-w-xl mx-auto h-[80vh] flex justify-center items-center'>
                <form className='flex flex-col shadow-lg p-10 gap-4 w-full' onSubmit={registerSubmit}>
                    <h5 className='text-center font-bold text-3xl mb-3'>Request Admin Account</h5>
                    <div>
                        <input placeholder='Name' type="text" name="name" onChange={handleInput} value={registerInput.name} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
                        <span className='text-red-600'>{errors?.name}</span>
                    </div>
                    <div>
                        <input placeholder='Adresse email' type="text" name="email" onChange={handleInput} value={registerInput.email} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
                        <span className='text-red-600'>{errors?.email}</span>
                    </div>
                    <div>
                        <input placeholder='Mot de passe' type="" name="password" onChange={handleInput} value={registerInput.password} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
                        <span className='text-red-600'>{errors?.password}</span>
                    </div>
                    <button type="submit" className="self-center w-[50%] bg-blue-500 hover:bg-blue-700 rounded-full py-3 text-white font-bold">Request</button>
                    <hr/>
                    <p className="">you already have admin account? <Link className='text-blue-500' to="/login">Connexion</Link></p>

                </form>
            </div>
        </>
    )
}
