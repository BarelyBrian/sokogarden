import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
const GetProduct = () => {
    //hooks
    // products hook
    const [products, setProducts] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState("")
    const navigate=useNavigate()
    const img_url = "https://malombeswala.alwaysdata.net/static/images/"
    // functionn to get all the products
    const getproducts = async () => {
        setLoading("")
        try {
            // connect to backend api
            const response = await axios.get("http://malombeswala.alwaysdata.net/api/get_product_details")
            // update the products hook with data from the api response
            setProducts(response.data)
            setLoading("")
        } catch (error) {
            setLoading("")
            setError("Something went wrong")
        }
    }
    useEffect(() => {
        getproducts()
    }, [])//the empty dependency
    return (
        <div className="row">
            <h1 className="display-4 mt-3">Available Products</h1>
            {loading}
            {error}
            {products.map((product) => (

                <div className="col-md-3 text-center mb-4">
                    {/* a card with dummy data */}
                    <div className="card shadow">
                        <img src={img_url + product.product_photo} alt="" className="product_img mt-4" />
                        <div className="card-body">
                            <h5 className="mt-2">{product.product_name}</h5>
                            <p className="text-muted">{product.product_description}</p>
                            <b className="text-warning">KES {product.product_cost}</b>
                            <button className="btn btn-dark w-100" onClick={()=>navigate("/mpesapayment",{state: {product}})}>Purchase now</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default GetProduct