import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom';
import axios from 'axios'
import Footercard from './Footercard';

const Hometwo = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [listing, setListing] = useState({});

    useEffect(() => {
        const id = searchParams.get("id");
        const fetch = async () => {
            const olxai = await axios.get(`https://olx-server-1.onrender.com/api/auth/olxid/${id}`)
            setListing(olxai.data)
        }
        fetch()
    }, [searchParams])

    return (
        <>
        <div className="container">
 <Link to="/home"><button type="button" class="btn btn-light">  <spam className="plustext">B A C K</spam></button></Link>
        </div>
            <div className="bggsection pb-5">
                <div className="container">
                    <div className="row pt-5 ">
                        <div className="col-12 col-md-8">
                            <div className="row">

                                <div className="col-12 bfgf ">
                                    <div className="img ">
                                        {
                                            listing?.files?.map((file) => {
                                                return (

                                                    <img className='imghometwo' src={`data:${file.mimeType};base64,${file.base64}`} alt="Uploaded file" />
                                                )
                                            })
                                        }

                                    </div>
                                </div>
                                <div className="col-12 ">

                                    <div className="row bfg pt-2">
                                        <h4>Details</h4>
                                        <div className="col-6 col-md-3">
                                            <p>Type</p>
                                            <p>Super  area sqft</p>
                                            <p>Furnishing</p>
                                            <p>Listed By</p>
                                            <p>Maintenance </p>
                                            <p>Floor No</p>
                                        </div>
                                        <div className="col-6 col-md-3">
                                            <p>{listing.Price}</p>
                                            <p>{listing.sqftname}</p>
                                            <p>{listing.Furnishing}</p>
                                            <p>{listing.Listedname}</p>
                                            <p>{listing.Maintenance}</p>
                                            <p>{listing.nfloors}</p>

                                        </div>
                                        <div className="col-6 col-md-3">

                                            <p>Bathrooms</p>
                                            <p>Project Status</p>
                                            <p>Facing</p>
                                            <p>Car Parking</p>
                                            <p>Total Floors</p>
                                           
                                        </div>
                                        <div className="col-6 col-md-3">
                                            <p>{listing.bathroomname}</p>
                                            <p>{listing.projectstatu}</p>
                                            <p>{listing.Facing}</p>
                                            <p>{listing.Carparking}</p>
                                            <p>{listing.tfloors}</p>
                                            


                                        </div>


                                    </div>
                                </div>
                                <div className="col-12 col-md-12 bfg">
                                    <h4 >Description</h4>
                                    <p>PROPERTY HIGHLIGHTS</p>
                                    <p>{listing.Description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mt-5">
                            <div className="card p-3 ">
                                <h5>₹{listing.Price}</h5>
                                <h5>{listing.bhkname} BHK - {listing.bathroomname}Bathroom - {listing.sqftname} sqft</h5>
                                <br />
                                <p>{listing.State}</p>
                            </div>
                            <div className="card p-3 mt-3">
                                <h3>Posted in</h3>
                                <br />
                                <p>{listing.State}</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <Footercard />
        </>
    )
}

export default Hometwo

