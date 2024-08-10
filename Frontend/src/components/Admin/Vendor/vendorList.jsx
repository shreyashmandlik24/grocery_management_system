import { Component, useEffect , useState } from "react"
import { toast } from "react-toastify"
import { getVendorList } from "../../../services/vendor"
import { useNavigate } from 'react-router-dom'
import { styled}  from "styled-components" // Import styled-components
// import logo1 from '../src/images/lnbg.png'
//import logo1 from '../lnbg.png'
import "../../../styles.css"

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
    border-radius: 5px;
    overflow: hidden;

    th {
      background-color: #1abc9c;
      color: white;
    }
  }
`
;


function VendorList() {

    const [vendors, setVendors] = useState([])

    const [searchQuery, setSearchQuery] = useState('')

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
      };
      
    const navigate = useNavigate()
    useEffect(() => {
      // get the list of vendors from server
      loadVendors()
    }, [])
  
    const loadVendors = async () => {
      const response = await getVendorList()
    //   if (response['status'] === 'success') {
        console.log(response)
        if(response){
        setVendors(response['data'])
        debugger;
      } else {
        toast.error('Error while calling get /vendor api')
      }
    }

    const navigateToVendorDetails = (vendorId) => {
        console.log(vendorId)
        sessionStorage.setItem('vId',vendorId)
        navigate(`/vendorProductList/${vendorId}`); // Replace with the actual URL you want
    };

    const addVendor = () =>{
        navigate('/addNewVendor')
    }

    return ( 
<>
        <div className="background-container">
            {/* <body className='row'> <img src={logo1} alt="logo-color" style={{ maxWidth: '200px', marginTop:50 }}/> */}
        <h1 style={{ textAlign: 'center', margin: 10,  color: '#333'}}>Vendor List</h1>
        <StyledVendorList>
        <div className='row' style={{ marginTop: 10 }}>
            <div className="container">
            <button onClick={addVendor} className='custom-button'>
                Add Vendor
              </button>
              <br></br>
              <br></br>
              {/* <table className="table"> */}
              <table className="table table-striped table-bordered table-hover table-responsive" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
            {/* <table className="table table-striped table-bordered table-hover table-responsive"> */}
                        <thead>
                        <tr>
                            <th>
                                VendorID
                            </th>
                            <th>
                                Email
                            </th>
                            <th>
                                First Name 
                            </th>
                            <th>
                                Last Name 
                            </th>
                            <th>
                                Mobile
                            </th>
                            <th>
                                Password
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {vendors.map((vendor) => {
                             return (
                                <tr>
                                <td className="table table-striped table-bordered table-hover table-responsive" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' ,width: '14%' }}>
                                    {vendor['vendorId']}
                                </td>
                                <td className="table table-striped table-bordered table-hover table-responsive" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' ,width: '14%'}}>
                                    {vendor['email']}
                                </td>
                                <td className="table table-striped table-bordered table-hover table-responsive" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' ,width: '14%'}}>
                                    {vendor['fname']}
                                </td>
                                <td className="table table-striped table-bordered table-hover table-responsive" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' ,width: '14%'}}>
                                    {vendor['lname']}
                                </td>
                                <td className="table table-striped table-bordered table-hover table-responsive" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' ,width: '14%'}}>
                                    {vendor['mobile']}
                                </td>
                                <td className="table table-striped table-bordered table-hover table-responsive" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' ,width: '14%'}}>
                                    {vendor['password']}
                                </td>
                                <td className="table table-striped table-bordered table-hover table-responsive" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' ,width: '14%'}}>
                                        <button
                                            className="btn btn-secondary"
                                            onClick={() => navigateToVendorDetails(vendor.vendorId)}
                                        >
                                            View Products
                                        </button>
                                    </td>


                            </tr>
                                     )
          })}

                        </tbody>
                    </table>
            </div>
          
        </div>
        </StyledVendorList>
        {/* </body> */}
        {/* <footer style={{ backgroundColor: '#AED581', textAlign: 'center', marginTop: 20, padding: 10 }}>
        This is the footer text.
      </footer>
      <footer style={{ backgroundColor: '#7CB342', textAlign: 'center', marginTop: 20, padding: 10 }}>
  This is the footer text.
</footer> */}

{/* <footer style={{ backgroundColor: '#66BB6A', textAlign: 'center', marginTop: 20, padding: 10 }}>
  This is the footer text.
</footer>
<footer style={{ backgroundColor: '#9CCC65', textAlign: 'center', marginTop: 20, padding: 10 }}>
  This is the footer text.
</footer> */}

      </div>
      <nav className='navbar navbar-expand-sm bg-success navbar-dark sticky-top' >
        <div>    </div>
         <div style={{ textAlign: 'center'}}>GroceryBuddy. ©2023. All Rights Reserved</div> 
</nav>
      </>
    );
}

export default VendorList;









// import { useEffect , useState } from "react"
// import { toast } from "react-toastify"
// import { getVendorList } from "../../../services/vendor"
// import { useNavigate } from 'react-router-dom'

// function VendorList() {

//     const [vendors, setVendors] = useState([])

//     const navigate = useNavigate()
//     useEffect(() => {
//       // get the list of vendors from server
//       loadVendors()
//     }, [])
  
//     const loadVendors = async () => {
//       const response = await getVendorList()
//     //   if (response['status'] === 'success') {
//         console.log(response)
//         if(response){
//         setVendors(response['data'])
//         debugger;
//       } else {
//         toast.error('Error while calling get /vendor api')
//       }
//     }

//     const navigateToVendorDetails = (vendorId) => {
//         console.log(vendorId)
//         navigate(`/vendorProductList/${vendorId}`); // Replace with the actual URL you want
//     };

//     const addVendor = () =>{
//         navigate('/addNewVendor')
//     }

//     return ( 
//         <div>
            
//         <h1 style={{ textAlign: 'center', margin: 10 }}>Vendor List</h1>
//         <div className='row' style={{ marginTop: 50 }}>
//             <div className="container">
//             <button onClick={addVendor} className='btn btn-primary'>
//                 Add Vendor
//               </button>
//             <table className="table table-striped table-bordered table-hover table-responsive">
//                         <tr>
//                             <th>
//                                 VendorID
//                             </th>
//                             <th>
//                                 Email
//                             </th>
//                             <th>
//                                 First Name 
//                             </th>
//                             <th>
//                                 Last Name 
//                             </th>
//                             <th>
//                                 Mobile
//                             </th>
//                             <th>
//                                 Password
//                             </th>
//                         </tr>
//                         <tbody>
//                         {vendors.map((vendor) => {
//                              return (
//                                 <tr>
//                                 <td>
//                                     {vendor['vendorId']}
//                                 </td>
//                                 <td>
//                                     {vendor['email']}
//                                 </td>
//                                 <td>
//                                     {vendor['fname']}
//                                 </td>
//                                 <td>
//                                     {vendor['lname']}
//                                 </td>
//                                 <td>
//                                     {vendor['mobile']}
//                                 </td>
//                                 <td>
//                                     {vendor['password']}
//                                 </td>
//                                 <td>
//                                         <button
//                                             className="btn btn-secondary"
//                                             onClick={() => navigateToVendorDetails(vendor.vendorId)}
//                                         >
//                                             View Products
//                                         </button>
//                                     </td>


//                             </tr>
//                                      )
//           })}

//                         </tbody>
//                     </table>
//             </div>
          
//         </div>
//       </div>
//     );
// }

// export default VendorList;