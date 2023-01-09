import React from 'react';

const Index = (props) => {
    return (
        <>
            
                <div className=""> <input type="text" name="your-name" className="form-control text " placeholder="Your Name" /> </div>
                <div className=""> <input type="text" name="your-email" className="form-control text " placeholder="Your Email" /> </div>
                <div className=""> <input type="text" name="your-subject" className="form-control text " placeholder="Subject" /> </div>
                <div className=""> <textarea name="your-message" cols="40" rows="10" className="form-control textarea " placeholder="Your Message"></textarea> </div>
                <div> <button id="submit-4" name="submit" type="submit" value="Send" className="button d-block w-100">Send Message</button> </div>
        </>
    );
}

export default Index;
