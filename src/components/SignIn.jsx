import axios from "axios"
import { useState } from "react"
import { Link } from "react-router"
const SignIn = () =>{
    const [username,setUsername]=useState("")
    const[password,setPassword]=useState("")
    //
    const[loading,setLoading]=useState("")
    const[success,setSuccess]=useState("")
    const[error,setError]=useState("")
    const submit = async(e)=>{
        e.preventDefault()
        setLoading("Please wait...")
        try {
            const data= new FormData()
            data.append('username',username)
            data.append('password',password)
            // wait for response from back end
            const response= await axios.post("http://brianswala.alwaysdata.net/api/signin",data)
            // the fields should be empty after submitting data
            setLoading("")
            setSuccess(response.data.message)
            // clear the form fields
                setUsername("")
                setPassword("")
        } catch (error) {
            setLoading('')
            setError(error.message)
            
        }
    }
    return(
        <div className="d-flex text-center justify-content-center row">
            <div className="col-md-6 card shadow">
                {success}
                {loading}
                {error}
                <h1>Sign In</h1>
                <form onSubmit={submit}>
                    <input type="text" placeholder="username"className="form-control" required value={username} onChange={(e)=>setUsername(e.target.value)}/><br />{username}
                    <input type="password" placeholder="password" className="form-control" required value={password} onChange={(e)=>setPassword(e.target.value)}/><br />{password}
                    <button type="submit" className="btn btn-info"> Sign In</button>
                    <p>Don't have an account?</p> <Link to="/signup">Sign Up</Link>
                </form>
            </div>
        </div>
    )
}
export default SignIn