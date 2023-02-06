import React from 'react';
import "./ContactUs.scss"

import { Button, Fab, TextField, Typography } from "@mui/material";

export default function Contact(offset) {

    return (
        <div className="contact_us">
            <h1 className="mb-2 tracking-tight leading-8 text-center sm:text-left font-bold text-2xl sm:text-2xl md:text-2xl lg:text-5xl text-gray-800 ">
                Research with us
            </h1>
            <p className="mb-2 text-xs sm:text-sm md:text-base text-gray-700 text-center sm:text-left">
                Unveiling the Results of HSLines's Team Research on International Trade: An In-Depth Look at Global Economic Dynamics.
            </p>
            <br />
            {/* <img src={AppLogo} onClick={() => history.push("/")}
            className="app-logo" alt="appLogo" /> */}
            <div className="contact-container mt-6">
                <div className="left-container" style={{ background: 'black' }}>
                    <img className='object-contain' src={"https://cdni.iconscout.com/illustration/premium/thumb/contact-us-3483604-2912020.png "} />

                </div>
                <div className="right-container">
                    <div>
                        {/* <h2 className="font-semibold text-xl">Contact Us</h2> */}
                        <h6 className='text-lg font-semibold mb-6 text-gray-800'>feel free to reach out

                        </h6>
                    </div>

                    <div className="forms">
                        <div className="input-element">
                            <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth size="small" />
                        </div>
                        <div className="input-element">
                            <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth size="small" />
                        </div>
                        <div className="input-element">
                            <TextField id="outlined-basic" label="Phone" type="tel" variant="outlined" fullWidth size="small" />
                        </div>
                        <div className="input-element">
                            <TextField id="outlined-basic" label="Company " type="tel" variant="outlined" fullWidth size="small" />
                        </div>

                        <div className="input-element">
                            <TextField id="outlined-basic" label="Country" type="tel" variant="outlined" fullWidth size="small" />
                        </div>
                        <div className="input-element_multiLine">
                            <TextField multiline={true}
                                rows={3} id="outlined-basic" label="Messages" type="tel" variant="outlined" fullWidth size="small" />
                        </div>
                        <div className="action-buttons">
                            <Button variant="contained" style={{ background: 'black', textTransform: 'none' }} fullWidth >Submit</Button>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
