import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import { Link } from 'react-router-dom'
import axios from "axios"




const Main = () => {
    const [userdata, setuserdata] = useState({
        typename: "",
        bhkname: "",
        bathroomname: "",
        Furnishing: "",
        projectstatus: "",
        Listedname: "",
        sqftname: "",
        Carpetname: "",
        Maintenance: "",
        tfloors: "",
        nfloors: "",
        Carparking: "",
        Facing: "",
        Project: "",
        adtitle: "",
        Description: "",
        Price: "",
        location1: "",
        State: ""
    })
    const navigate = useNavigate()

    const [files, setFiles] = useState({});

    const handleFileChange = (e, index) => {
        const selectedFile = e.target.files[0];

        setFiles(prevFiles => ({
            ...prevFiles,
            [index]: selectedFile
        }));
    };

    const clickupdate = (e) => {
        let name = e.target.name
        let value = e.target.value
        setuserdata({
            ...userdata, [name]: value
        })
    }
    const okinsubmit = async (e) => {
        e.preventDefault();

        try {
            if(Object.keys(userdata).some(key => !userdata[key])) return;
            const formData = new FormData();

            Object.entries(files).forEach(([index, file]) => {
                if (file)
                    formData.append(`files`, file);
            });

            formData.append('form', JSON.stringify(userdata))
              
            await axios.post("https://olx-server-1.onrender.com/api/auth/olxserver", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then((response) => {
                    console.log(response)
                })
                 setuserdata({
          typename: "",
        bhkname: "",
        bathroomname: "",
        Furnishing: "",
        projectstatus: "",
        Listedname: "",
        sqftname: "",
        Carpetname: "",
        Maintenance: "",
        tfloors: "",
        nfloors: "",
        Carparking: "",
        Facing: "",
        Project: "",
        adtitle: "",
        Description: "",
        Price: "",
        location1: "List",
        State: ""
        })

        navigate("/home")
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <>
            <div className="container-fluid mt-2">
                <div className="div.row">
<div className="col-12 col-md-6">
    <div className="section ">
                    <h1 className='headingfirst'>Post your Ad</h1>
                </div>
</div>
<div className="col-12 col-md-6">
     <Link to="/home"><button type="button" class="btn btn-light"> <spam className="plusicon"> + </spam> <spam className="plustext">SELL</spam></button></Link>
</div>
                </div>
            </div>
            < div className="container mt-3">
                <div className="card">
                    <form onSubmit={okinsubmit}>
                        <div className="p-3">
                            <p className='text-uppercase mt-3 boll'>Selected category</p>
                            <p>Properties /For Sale: Houses & Apartments</p>
                            <hr />
                            <h5 className='text-uppercase boll px-3'>Include some details</h5>
                        </div>

                        {/*    TYPE    */}

                        <div className="row mt-2">
                            <div className="col-md-6 ">
                                <div className="container">
                                    <label htmlFor="" > Type*</label>
                                    <div class=" ">
                                        <input type="radio" class="btn-check" name="typename" onChange={clickupdate} id="success-outlined1" value="flats" autocomplete="off" />
                                        <label class="btn btn-outline-success" for="success-outlined1">Flats / Apartments</label>
                                        <input type="radio" class="btn-check" name="typename" onChange={clickupdate} id="success-outlined2" value="builderFloor" autocomplete="off" />
                                        <label class="btn btn-outline-success" for="success-outlined2">Independent / Builder Floors</label>
                                        <input type="radio" class="btn-check" name="typename" onChange={clickupdate} id="success-outlined3" value="farmHouse" autocomplete="off" />
                                        <label class="btn btn-outline-success" for="success-outlined3">Farm House</label>
                                        <input type="radio" class="btn-check" name="typename" onChange={clickupdate} id="success-outlined4" value='House' autocomplete="off" />
                                        <label class="btn btn-outline-success" for="success-outlined4">House & Villa</label>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*    BHK    */}

                        <div className="row mt-2">
                            <div className="col-md-6 ">
                                <div className="container">
                                    <label htmlFor="submit" >BHK</label>
                                    <div class=" ">
                                        <input type="radio" class="btn-check" name="bhkname" onChange={clickupdate} id="success-outlined5" value='1' autocomplete="off" />
                                        <label class="btn btn-outline-success" for="success-outlined5">1</label>
                                        <input type="radio" class="btn-check" name="bhkname" onChange={clickupdate} id="success-outlined6" value='2' autocomplete="off" />
                                        <label class="btn btn-outline-success" for="success-outlined6">2</label>
                                        <input type="radio" class="btn-check" name="bhkname" onChange={clickupdate} id="success-outlined7" value='3' autocomplete="off" />
                                        <label class="btn btn-outline-success" for="success-outlined7">3</label>
                                        <input type="radio" class="btn-check" name="bhkname" onChange={clickupdate} id="success-outlined8" value='4' autocomplete="off" />
                                        <label class="btn btn-outline-success" for="success-outlined8">4+</label>

                                    </div>
                                </div>

                            </div>
                        </div>

                        {/*  Bathrooms  */}

                        <div className="row mt-2">
                            <div className="col-md-6 ">
                                <div className="container">
                                    <p >Bathrooms</p>
                                    <div class="">
                                        <input type="radio" class="btn-check" name="bathroomname" onChange={clickupdate} id="success-outlined9" value='1' autocomplete="off" />
                                        <label class="btn btn-outline-success" for="success-outlined9">1</label>
                                        <input type="radio" class="btn-check" name="bathroomname" onChange={clickupdate} id="success-outlined10" value='2' autocomplete="off" />
                                        <label class="btn btn-outline-success" for="success-outlined10">2</label>
                                        <input type="radio" class="btn-check" name="bathroomname" onChange={clickupdate} id="success-outlined11" value='3' autocomplete="off" />
                                        <label class="btn btn-outline-success" for="success-outlined11">3</label>
                                        <input type="radio" class="btn-check" name="bathroomname" onChange={clickupdate} id="success-outlined12" value='4' autocomplete="off" />
                                        <label class="btn btn-outline-success" for="success-outlined12">4+</label>

                                    </div>
                                </div>

                            </div>
                        </div>



                        {/*   Furnishing */}

                        <div className="row mt-2">
                            <div className="col-md-6 ">
                                <div className="container">
                                    <label htmlFor="">Furnishing</label>
                                    <br />
                                    <div class="btn mx-2">
                                        <input type="radio" class="btn-check" name="Furnishing" onChange={clickupdate} id="success-outlined13" value='Furnishing' autocomplete="off" />
                                        <label class="btn btn-outline-success" for="success-outlined13">Furnished</label>
                                        <input type="radio" class="btn-check" name="Furnishing" onChange={clickupdate} id="success-outlined14" value='Semi-Furnishing' autocomplete="off" />
                                        <label class="btn btn-outline-success" for="success-outlined14">Semi-Furnished</label>
                                        <input type="radio" class="btn-check" name="Furnishing" onChange={clickupdate} id="success-outlined15" value='Unfurnishin' autocomplete="off" />
                                        <label class="btn btn-outline-success" for="success-outlined15">Unfurnished</label>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Project Status */}

                        <div className="row mt-2">
                            <div className="col-md-6 ">
                                <div className="container">
                                    <label htmlFor="" >Project Status</label>
                                    <br />
                                    <div class="btn mx-2">
                                        <input type="radio" class="btn-check" name="projectstatus" onChange={clickupdate} id="success-outlined16" value='New Launch' autocomplete="off" />
                                        <label class="btn btn-outline-success" for="success-outlined16">New Launch</label>
                                        <input type="radio" class="btn-check" name="projectstatus" onChange={clickupdate} id="success-outlined17" value='Ready to Move' autocomplete="off" />
                                        <label class="btn btn-outline-success" for="success-outlined17">Ready to Move</label>
                                        <input type="radio" class="btn-check" name="projectstatus" onChange={clickupdate} id="success-outlined18" value='Under Construction' autocomplete="off" />
                                        <label class="btn btn-outline-success" for="success-outlined18">Under Construction</label>



                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Listed by */}

                        <div className="row mt-2">
                            <div className="col-md-6 ">
                                <div className="container">
                                    <label htmlFor="" >Listed by</label>
                                    <br />
                                    <div class="btn mx-2">
                                        <input type="radio" class="btn-check" name="Listedname" onChange={clickupdate} id="success-outlined19" value='Builder' autocomplete="off" />
                                        <label class="btn btn-outline-success" for="success-outlined19">Builder</label>
                                        <input type="radio" class="btn-check" name="Listedname" onChange={clickupdate} id="success-outlined20" value='Dealer' autocomplete="off" />
                                        <label class="btn btn-outline-success" for="success-outlined20">Dealer</label>
                                        <input type="radio" class="btn-check" name="Listedname" onChange={clickupdate} id="success-outlined21" value='Owner' autocomplete="off" />
                                        <label class="btn btn-outline-success" for="success-outlined21">Owner</label>


                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* Super Builtup area sqft  */}
                        <div className="row mt-2">
                            <div className="col-md-6 ">
                                <div className="container">
                                    <p >Super Builtup area sqft *</p>

                                    <div class="input-group input-group-lg">

                                        <input type="text" class="form-control" value={userdata.sqftname} name='sqftname' onChange={clickupdate} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/*Carpet Area sqft */}
                        <div className="row mt-2">
                            <div className="col-md-6 ">
                                <div className="container">
                                    <p >Carpet Area sqft *</p>

                                    <div class="input-group input-group-lg">

                                        <input type="text" class="form-control" value={userdata.Carpetname} name='Carpetname' onChange={clickupdate} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* Maintenance (Monthly) */}
                        <div className="row mt-2">
                            <div className="col-md-6 ">
                                <div className="container">
                                    <p >Maintenance (Monthly)</p>

                                    <div class="input-group input-group-lg">

                                        <input type="text" class="form-control" value={userdata.Maintenance} name='Maintenance' onChange={clickupdate} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* Total Floors */}
                        <div className="row mt-2">
                            <div className="col-md-6 ">
                                <div className="container">
                                    <p >Total Floors</p>

                                    <div class="input-group input-group-lg">

                                        <input type="text" class="form-control" value={userdata.tfloors} name='tfloors' onChange={clickupdate} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* Floor No */}
                        <div className="row mt-2">
                            <div className="col-md-6 ">
                                <div className="container">
                                    <p >Floor No</p>

                                    <div class="input-group input-group-lg">

                                        <input type="text" class="form-control" value={userdata.nfloors} name='nfloors' onChange={clickupdate} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Car Parking */}

                        <div className="row mt-2">
                            <div className="col-md-6 ">
                                <div className="container">
                                    <p >Car Parking</p>

                                    <div class="btn mx-2">
                                        <input type="radio" class="btn-check" name="Carparking" onChange={clickupdate} id="success-outlined22" value='0' autocomplete="off" />
                                        <label class="btn btn-outline-success" for="success-outlined22">0</label>
                                        <input type="radio" class="btn-check" name="Carparking" onChange={clickupdate} id="success-outlined23" value='1' autocomplete="off" />
                                        <label class="btn btn-outline-success" for="success-outlined23">1</label>
                                        <input type="radio" class="btn-check" name="Carparking" onChange={clickupdate} id="success-outlined24" value='2' autocomplete="off" />
                                        <label class="btn btn-outline-success" for="success-outlined24">2</label>
                                        <input type="radio" class="btn-check" name="Carparking" onChange={clickupdate} id="success-outlined25" value='3' autocomplete="off" />
                                        <label class="btn btn-outline-success" for="success-outlined25">3+</label>

                                    </div>
                                </div>

                            </div>
                        </div>

                        {/*Facing*/}
                        <div className="row mt-2">
                            <div className="col-md-6 ">
                                <div className="container">
                                    <p>Facing</p>

                                    <div class="input-group input-group-lg">

                                        <input type="text" class="form-control" name='Facing' value={userdata.Facing} onChange={clickupdate} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/*Project Name*/}
                        <div className="row mt-2">
                            <div className="col-md-6 ">
                                <div className="container">
                                    <p >Project Name</p>

                                    <div class="input-group input-group-lg">

                                        <input type="text" class="form-control" name='Project' value={userdata.Project} onChange={clickupdate} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/*Ad title */}
                        <div className="row mt-2">
                            <div className="col-md-6 ">
                                <div className="container">
                                    <p>Ad title *</p>

                                    <div class="input-group input-group-lg">

                                        <input type="text" class="form-control" name='adtitle' value={userdata.adtitle} onChange={clickupdate} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/*Description **/}
                        <div className="row mt-2">
                            <div className="col-md-6 ">
                                <div className="container">
                                    <p >Description *</p>

                                    <div class="input-group">

                                        <textarea class="form-control" name='Description' value={userdata.Description} onChange={clickupdate} aria-label="With textarea"></textarea>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <  hr />
                        {/*Set a price*/}
                        <div className="row mt-2">
                            <div className="col-md-6 ">
                                <div className="container">
                                    <h5 className='text-uppercase boll px-3'>Set a price</h5>
                                    <p>Price*</p>

                                    <div class="input-group flex-nowrap">
                                        <span class="input-group-text" id="addon-wrapping">₹</span>
                                        <input type="text" class="form-control" name='Price' value={userdata.Price} onChange={clickupdate} aria-label="Username" aria-describedby="addon-wrapping" />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <hr />
                        {/*Upload up to 20 photos*/}
                        <div className="row mt-2">
                            <div className="col-md-6 ">
                                <div className="container">
                                    <h5 className='text-uppercase boll px-3'>Upload up to 20 photos</h5>
                                    {
                                        new Array(1).fill(0).map((elem, i) => {
                                            return (
                                                <>
                                                    <input type="file" name={`photo${i}`} id={`photo${i}`} onChange={(e) => handleFileChange(e, i)} />
                                                </>
                                            )
                                        })
                                    }
                                </div>

                            </div>
                        </div>
                        <hr />
                        {/*Confirm your location*/}
                        <div className="row mt-2">
                            <div className="col-md-6 ">
                                <div className="container">
                                    <p >State *</p>
                                    <h5 className='text-uppercase boll px-3'>Confirm your location</h5>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="location1" onChange={clickupdate} id="inlineRadio1" value='List' />
                                        <label class="form-check-label" for="inlineRadio1">List</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="location1" onChange={clickupdate} id="inlineRadio2" value='Current location' />
                                        <label class="form-check-label" for="inlineRadio2">Current location</label>
                                    </div>

                                    <div class="location"><select id="State" name="State" value={userdata.State} onChange={clickupdate} class="location2" data-aut-id="dd-state">
                                        <option value="unknown"></option>
                                        <option value="Andaman $ Nicobar Islands">Andaman &amp; Nicobar Islands</option>
                                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                        <option value="Assam">Assam</option>
                                        <option value="Bihar">Bihar</option>
                                        <option value="Chandigarh">Chandigarh</option>
                                        <option value="Chhattisgarh">Chhattisgarh</option>
                                        <option value="Dadra & Nagar Haveli">Dadra &amp; Nagar Haveli</option>
                                        <option value="Daman & Diu">Daman &amp; Diu</option>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Goa">Goa</option>
                                        <option value="Gujarat">Gujarat</option>
                                        <option value="Haryana">Haryana</option>
                                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                                        <option value="Jammu & Kashmir">Jammu &amp; Kashmir</option>
                                        <option value="Jharkhand">Jharkhand</option>
                                        <option value="Karnataka">Karnataka</option>
                                        <option value="Kerala">Kerala</option>
                                        <option value="Lakshadweep">Lakshadweep</option>
                                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                                        <option value="Maharashtra">Maharashtra</option>
                                        <option value="Manipur">Manipur</option>
                                        <option value="Meghalaya">Meghalaya</option>
                                        <option value="Mizoram">Mizoram</option>
                                        <option value="Nagaland">Nagaland</option>
                                        <option value="Odisha">Odisha</option>
                                        <option value="Pondicherry">Pondicherry</option>
                                        <option value="Punjab">Punjab</option>
                                        <option value="Rajasthan">Rajasthan</option>
                                        <option value="Sikkim">Sikkim</option>
                                        <option value="Tamil Nadu">Tamil Nadu</option>
                                        <option value="Telangana">Telangana</option>
                                        <option value="Tripura">Tripura</option>
                                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                                        <option value="Uttaranchal">Uttaranchal</option>
                                        <option value="West Bengal">West Bengal</option>
                                        </select><div class="rui-Q6xN5"><div class="rui-UgU64"></div><div class="rui-1bxrI"></div></div></div>

                                </div>


                            </div>
                        </div>
                        <hr />

                        <div className="row mt-2">
                            <div className="col-md-6 mb-2">
                                
                                            <div className="container">
                                                <button type='submit' className='btn btn-success'>Post now </button>

                                         </div>
                                         </div>
                                     </div>




                    </form>
                </div>
            </div>

        </>
    )
}

export default Main