import axios, { all } from 'axios';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { useDispatch,useSelector} from 'react-redux'
import { logout, setUserInfo } from '../redux/Slice/authSlice';

export const useSignup=()=>{
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {currentUser}= useSelector((state)=>state.auth)
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);

    const fetchData=async(signupData)=>{
        setError(null);
        setLoading(true);

        try {
            const res= await axios.post(
                `${import.meta.env.VITE_API_URL}/auth/signup`,
                signupData,
                {withCredentials: true}
            )
            console.log(res.data);
            dispatch(setUserInfo(res.data));
            navigate("/")
        } catch (error) {
            setError( error.response?.data||"Something went wrong");	
        }finally{
            setLoading(false);
        }
    };
    return {currentUser,loading,error,fetchData};
}

export const useLogin=()=>{
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {currentUser}= useSelector((state)=>state.auth)
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);

    const fetchData=async(loginData)=>{
        setError(null);
        setLoading(true);

        try {
            const res= await axios.post(
                `${import.meta.env.VITE_API_URL}/auth/login`,
                loginData,
                {withCredentials: true}
            )
            console.log(res.data);
            dispatch(setUserInfo(res.data));
            navigate("/")
        } catch (error) {
            setError( error.response?.data||"Something went wrong");	
        }finally{
            setLoading(false);
        }
    };
    return {currentUser,loading,error,fetchData};
}

export const useLogout=()=>{
    const dispatch=useDispatch();
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);
    
    const fetchData=async()=>{
        setError(null);
        setLoading(true);
        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/auth/logout`,
                {},
                {withCredentials:true}
            );
            dispatch(logout());
        } catch (error) {
            setError( error.response?.data||"Something went wrong");	
        }finally{
            setLoading(false);
        }
    }

    return {fetchData,loading,error};
}


export const useGetAllUser=()=>{
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);
    const [allUsers,setAllUsers]=useState({});

    const fetchAllUser=async()=>{
        setLoading(true);
        try {
            const res=await axios.get(`${import.meta.env.VITE_API_URL}/auth/all-users`)
            console.log(res.data);
            setAllUsers(res.data)
        } catch (error) {
            setError( error.response?.data||"Something went wrong");	
        }finally{
            setLoading(false)
        }
    }
    return {fetchAllUser,allUsers,loading,error};
}