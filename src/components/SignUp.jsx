import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router";
const SignUp = () =>{
    // hooks
    const [username,setUsername]= useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword]= useState("")
    const[phone,setPhone]= useState("")

    // 
    const [loading,setLoading]= useState("")//show a message when loading
    const [success,setSuccess]= useState("")//successfully signed up
    const [error,setError]= useState("")//incase we get an error

    // function to handle submit
    const submit = async(e) => {
        e.preventDefault()//prevents the browser from refreshing
        // update the loading function
        setLoading("Your information is being processed, Please wait")
        try {
        // put the updated hooks data into variables
        const data = new FormData()
        data.append('username',username)
        data.append('email',email)
        data.append('password',password)
        data.append('phone',phone)
        // post data to backend API
        const response= await axios.post("http://brianswala.alwaysdata.net/api/signup",data)
        // after data has been successfully posted, set loading to be empty
        setLoading("")        
        //updating our hook with a success message
        setSuccess(response.data.success)   
        // clear the form fields
        setUsername("")
        setEmail("")
        setPassword("")
        setPhone("")
        } catch (error) {
             setLoading('')// update success hook with a success message
            setError(error.message)
        }
    }

    return(
        <div className="d-flex justify-content-center row text-center">
            <div className="col-md-6 p-2 mt-4 card shadow">
                {success}
                {loading}
                {error}
                <h1 className="text-center p-3">Sign Up Page</h1>
                <form onSubmit={submit}>
                    <input type="text" placeholder="Enter your username"className="form-control"required value={username} onChange={(e)=>setUsername(e.target.value)}/><br />
                    {username}
                    <input type="email" placeholder="Enter your email"className="form-control"required value={email} onChange={(e)=>setEmail(e.target.value)}/><br />
                    {email}
                    <input type="password" placeholder="Enter your password"className="form-control"required value={password} onChange={(e)=>setPassword(e.target.value)}/><br />
                    {password}
                    <input type="text" placeholder="Enter your phone number"className="form-control"required value={phone} onChange={(e)=>setPhone(e.target.value)}/><br />
                    {phone}
                    <button type="submit"className="btn btn-info">Sign Up</button>
                    {/* create a link that asks you whether you have an account */}
                    <p>Already have an account? <Link to="/signin">Sign In</Link></p>
                </form>
            </div>
        </div>
    )
}
export default SignUp