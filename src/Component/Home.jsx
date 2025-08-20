import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import Footercard from './Footercard'

const Home = () => {
    const [users, setusers] = useState([])

    useEffect(() => {
        const fetch = async () => {
            const olxai = await axios.get("https://olx-server-1.onrender.com/api/auth/olxgetdata")
            setusers(olxai.data)
        }
        fetch()
    }, []);



    return (
        <>
            <div className="container">

       <Link to="/"><button type="button" class="btn btn-light"> <spam className="plusicon"> + </spam> <spam className="plustext">SELL</spam></button></Link>
   

                <div className="row">
     
   
         {
                            users.map((user) => {
                                return (
                                    <div className="col-12 col-md-3 dicnun" >
                                        <Link to={{ pathname: "/hometwo", search: `id=${user._id}` }} >
                                            <div class="card mb-3" key={user._id}>
                                                {
                                                    user.files.map((file) => {
                                                        return (
                                                            <img src={`data:${file.mimeType};base64,${file.base64}`} alt="Uploaded file" />
                                                        )
                                                    })
                                                }
                                                <div class="card-body">
                                                    <h2 class="card-title">₹ {user.Price}</h2>
                                                    <p class="card-title"> {user.bhkname} BHK {user.bathroomname} Bathrooms {user.sqftname} Sqft</p>
                                                    <p class="card-title">{user.State}</p>

                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            }, [])
                        }
 
                   
                       
                  

                   

                </div>


            </div>

<Footercard/>

        </>
    )
}

export default Home


      









