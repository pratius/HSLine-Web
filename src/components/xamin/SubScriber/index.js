import React from 'react';

const Index = (props) => {
    return (
        <>
            <div className="row algin-self-center footer_top_block">
                <div className="col-md-6">
                    <h4 className="footer-title">Subscribe for Newsletter</h4>			
                </div>
                <div className="col-md-6">
                    <div className="mc4wp-form-fields">
                        <input type="email" name="EMAIL" placeholder="Your Email" required="" />
                        <input type="submit" value="Sign up" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;
