import { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";
const MpesaPayment = () => {
    const { product } = useLocation().state || {}
    console.log(product)
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")

    const img_url = "https://malombeswala.alwaysdata.net/static/images/"
    const submit = async (e) => {
        e.preventDefault()
        setMessage("please wait")
        try {
            // create a form datacreate
            const data= new FormData()
            data.append('phone',phone)
            data.append('price',product.product_cost)
            const response= await axios.post("https://malombeswala.alwaysdata.net/api/get_product_details")
            setMessage(response.data.message)
        } catch (error) {

        }
    }
    return (
        <div className="row">

            <div className="d-flex justify-content-center row">
                <div className="col-md-6 p-2 mt-4 card shadow">

                    <h1>Lipa na M-Pesa</h1>
                        <img src={img_url + product.product_photo} alt="product" className="img-fluid mb-2" />
                        <p className="mb-1"><strong>Product: </strong>{product.product_name}</p>
                        <p className="mb-2"><strong>Price: </strong>{product.product_cost}</p>
                    <form onSubmit={submit}>
                        <input type="text" placeholder="Enter phone number" className="form-control mb-2" required value={phone} onChange={(e) => setPhone(e.target.value)} /> <br />{phone}
                        <button type="submit" className="btn btn-info text-center">Pay now</button>
                    </form>
                    <p className="text-center mt-2">{message}</p>
                </div>
            </div>
        </div>
    )
}
export default MpesaPayment