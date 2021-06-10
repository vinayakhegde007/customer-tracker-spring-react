import React,{useState,useEffect} from 'react'
import axios  from 'axios';


const URL="http://localhost:9991/customor-tracker-springrest/api/customers";
function AddCustomerComponent(props) {
    const initialState={
        id:props.match.params.id,
        fistName:"",
        lastName:"",
        email:""
    }
    const [Customer, setCustomer] = useState(initialState)

    useEffect(() => {
        if(props.match.params.id==-1){
            return
        }
        else{
            axios.get(URL+`/${props.match.params.id}`).then(res => {
                setCustomer(res.data)
            })
        }
    }, [])

    const saveCustomer=()=>{
        if(props.match.params.id==-1){
            axios.post(URL,Customer).then(data=>{
                props.history.push("/customers")
            })
        }else{
             axios.put(URL,Customer).then(data=>{
                props.history.push("/customers")
            })

        }
    }
    const cancel=()=>{
        
        props.history.push("/customers")
    }

    return (
        <div>
            <div className="cotainer">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                    <br/>
                        <h3 className="text-center">
                            { Customer.id == -1 ? "Add Cusomer" : "Update Customer"}</h3>
                        <div className="card-body">
                            <form>

                                <div className="form-group">
                                    <label> First Name:</label>
                                    <input name="fistName" placeholder="FistName"  className="form-control"
                                    value={Customer.firstName} onChange={(e)=>{
                                          setCustomer({...Customer,firstName:e.target.value})
                                    }}/>
                                    
                                </div>
                                <br/>

                                <div className="form-group">
                                    <label> Last Name:</label>
                                    <input name="lastName" placeholder="LastName"  className="form-control"
                                    value={Customer.lastName} onChange={(e)=>{
                                        setCustomer({...Customer,lastName:e.target.value})
                                  }}/>
                                    
                                </div>
                                <br/>

                                <div className="form-group">
                                    <label> Email:</label>
                                    <input name="email" placeholder="Email Id" type="email" className="form-control"
                                    value={Customer.email} onChange={(e)=>{
                                        setCustomer({...Customer,email:e.target.value})
                                  }}/>
                                  <br/>

                                </div>
                            </form>
                                  <button className="btn btn-success" onClick={saveCustomer}>
                                      { Customer.id == -1 ? "Save" : "Update"}
                                  </button>
                                  <button className="btn btn-danger" onClick={cancel} style={{marginLeft:"10px"}}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCustomerComponent
