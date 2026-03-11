import React from "react";
import { Link } from "react-router";
const SignUp = () =>{
    return(
        <div className="d-flex justify-content-center row text-center">
            <div className="col-md-6 p-2 mt-4 card shadow">
                <h1 className="text-center p-3">Sign Up Page</h1>
                <form action="">
                    <input type="text" placeholder="Enter your username"className="form-control"required/><br />
                    <input type="email" placeholder="Enter your email"className="form-control"required/><br />
                    <input type="password" placeholder="Enter your password"className="form-control"required/><br />
                    <input type="text" placeholder="Enter your phone number"className="form-control"required/><br />
                    <button type="submit"className="btn btn-info">Sign Up</button>
                    {/* create a link that asks you whether you have an account */}
                    <p>Already have an account? <Link to="/signin">Sign In</Link></p>
                </form>
            </div>
        </div>
    )
}
export default SignUp