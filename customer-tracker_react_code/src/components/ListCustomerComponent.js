import React,{useState,useEffect} from 'react';
import axios from 'axios';

const URL="http://localhost:9991/customor-tracker-springrest/api/customers";
function ListCustomerComponent(props) {

    const [customers, setCustomers] = useState([])
    
    useEffect(() => {
        getCustomers();
    }, [])

    const getCustomers=()=>{
      axios.get(URL)
      .then(data=>{
      setCustomers(data.data)
      })
    }

    const deleteCustomer=(customerId)=>{
        axios.delete(URL+`/${customerId}`)
      .then(data=>{
          props.history.push(`/customers`);
      })
    }
 
   const editCustomer=(customerId)=>{
    props.history.push(`/addCustomer/${customerId}`);
   }

    const addCustomer=()=>{
        props.history.push('/addCustomer/-1');
    }




    return (
        <div>
            <h2 className="text-center">Customers List</h2>
            
               
            
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                          <tr>
                              <th>Customer First Name</th>
                              <th>Customer Last Name</th>
                              <th>Customer Email Id </th>
                              <th>Actions</th>
                          </tr>

                    </thead> 
                    <tbody>          

                               {
                                   customers.map(
                                       customer=><tr key={customer.id}>
                                           
                                            <td>{customer.firstName}</td>
                                            <td>{customer.lastName}</td>
                                            <td>{customer.email}</td>
                                            <td>
                                                <button onClick={()=>editCustomer(customer.id)} className="btn btn-info">Update</button>
                                                <button onClick={()=>deleteCustomer(customer.id)} className="btn btn-danger">Delete</button>
                                            </td>
                                        </tr>       
                                )
                            }
                           

                    </tbody>
                </table>
            </div>
           <div className="text-center">
            <button className="btn btn-primary" onClick={addCustomer}>Add Customer</button>
           </div>
        </div>
    )
}

export default ListCustomerComponent;

