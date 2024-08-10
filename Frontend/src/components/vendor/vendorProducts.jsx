import { Component, useEffect, useState } from "react";
import { getVendorProductListByVendorId } from "../../services/vendor";
import { Link, useNavigate, useParams } from "react-router-dom";
import { styled}  from "styled-components" // Import styled-components
// import logo1 from '../src/images/lnbg.png'
//import logo1 from '../lnbg.png'
import "../../styles.css"

const StyledVendorList = styled.div
`
  background-image: url("path_to_your_background_image.jpg");
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  padding: 20px;

  h1 {
    text-align: center;
    margin: 10px 0;
    color: white;
  }

  .table {
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    overflow: hidden;

    th {
      background-color: #1abc9c;
      color: white;
    }
  }
`
;


function VendorProducts() {
    //useParams: Returns an object of key/value pairs of the dynamic params from the current URL that were matched by the route path.
//   const vendorId = sessionStorage.getItem('vendorId')
//   console.log("in VendorProductList "+vendorId)
    const [vproducts, setVproducts]=useState([])
    const {vendorId} = useParams()
   const navigate = useNavigate()

   sessionStorage['vendorId'] =vendorId
   
   useEffect(()=>{
        //get the list of products
        console.log("in component did mount")
        loadVproducts()

    },[])


    const loadVproducts= async () =>{
        // const response = await getVendorProductListByVendorId(vendorId)
        const response = await getVendorProductListByVendorId(vendorId)
        if(response){
            console.log("getVendorProductListByVendorId's-------")
            console.log(response)
            setVproducts(response['data'])
        }
        else{
            // toast.error('Error while calling get /product api')
        console.log("Error while calling get /product api")
        }
    }

    const GotoProdEditPage= (vendorProductId)=>{
        
        // debugger
        navigate(`/updateProduct/${vendorProductId}`)//back-quote // Replace with the actual URL you want

    }
   

    return (
       <div className="background-container">
            <h1 style={{ textAlign: 'center', margin: 10,  color: '#333'}}>VendorProducts</h1>
            <StyledVendorList>
            <div><button className="custom-button" ><Link to='/addProduct'>Add Product</Link></button> </div>
            <br></br>
            <table className="table table-striped">
                <thead>
                    <tr>
                        {/* <th><button className="btn btn-info">vendorProductId</button></th> */}
                        {/* <th>vendorProductId</th> */}
                        <th>Id</th>
                        <th>productName</th>
                        <th>productDesc</th>
                        <th>productMfgDate</th>
                        <th>productExpDate</th>
                        <th>productPrice</th>
                        <th>productQuantity</th>
                        <th>pmanufacturer</th>

                    </tr>
                </thead>
                <tbody>
                    {vproducts.map((vproduct)=>{
                        return(
                            <tr key={vproduct.vendorProductId}>
                               <td className="table table-striped table-bordered table-hover table-responsive" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' ,width: '14%' }}><button className="custom-button" onClick={()=>GotoProdEditPage(vproduct.vendorProductId)}>{vproduct.vendorProductId}</button></td>
                                {/* <td>{vproduct.vendorProductId}</td> */}
                                <td className="table table-striped table-bordered table-hover table-responsive" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' ,width: '14%' }}>{vproduct.productName}</td>
                                <td className="table table-striped table-bordered table-hover table-responsive" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' ,width: '14%' }}>{vproduct.productDesc}</td>
                                <td className="table table-striped table-bordered table-hover table-responsive" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' ,width: '14%' }}>{vproduct.productMfgDate}</td>
                                <td className="table table-striped table-bordered table-hover table-responsive" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' ,width: '14%' }}>{vproduct.productExpDate}</td>
                                <td className="table table-striped table-bordered table-hover table-responsive" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' ,width: '14%' }}>{vproduct.productPrice}</td>
                                <td className="table table-striped table-bordered table-hover table-responsive" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' ,width: '14%' }}>{vproduct.productQuantity}</td>
                                <td className="table table-striped table-bordered table-hover table-responsive" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' ,width: '14%' }}>{vproduct.pmanufacturer}</td>
                                {/* <td><button onClick={()=>GotoEditPage(vproduct.vendorProductId)} className="btn btn-primary">Update</button></td> */}
                            </tr>
                        )
                    })} 
                </tbody>
            </table>
            </StyledVendorList>
        </div>

      );
}

export default VendorProducts;