import React from 'react';
import "./ContactUs.scss"

import { Button, Fab, TextField, Typography } from "@mui/material";

export default function Contact(offset) {

    return (
        <div className="contact_us">
            <h1 className="mb-2 tracking-tight leading-8 text-center sm:text-left font-bold text-2xl sm:text-2xl md:text-2xl lg:text-2xl ">
                Research with us
            </h1>
            <p className="mb-2 text-xs sm:text-sm md:text-sm text-gray-600 text-center sm:text-left">
                Unveiling the Results of HSLines's Team Research on International Trade: An In-Depth Look at Global Economic Dynamics.
            </p>
            <br />
            {/* <img src={AppLogo} onClick={() => history.push("/")}
            className="app-logo" alt="appLogo" /> */}
            <div className="contact-container">
                <div className="left-container">
                    <img src={"https://img.freepik.com/free-photo/business-handshake-two-men-demonstrating-their-agreement-sign-agreement-contract-their-firms-companies-enterprises_1423-100.jpg?w=2000&t=st=1674973040~exp=1674973640~hmac=f2dcb7c28ab81e7b84598098d2bf0201f6c78172e24d386472ca2d01c84d6656"} />

                </div>
                <div className="right-container">
                    <div>
                        {/* <h2 className="font-semibold text-xl">Contact Us</h2> */}
                        <h6>Have questions, comments, or concerns?

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
                            <Button variant="contained" style={{ background: 'black', textTransform: 'none' }} fullWidth >Send Inquiry</Button>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
