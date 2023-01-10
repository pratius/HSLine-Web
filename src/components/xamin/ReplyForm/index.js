import React from 'react';

const Index = (props) => {
    return (
        <>
                <div id="comments" className="comments-area wow fadeInUp">
                    <div id="respond" className="comment-respond">
                        <h3 id="reply-title" className="comment-reply-title mb-3">Leave a Reply <small><a rel="nofollow" id="cancel-comment-reply-link" href="index.html#respond">Cancel reply</a></small></h3>
                        <form action="#" method="post" className="">
                            <div className="contact-form">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <label>Comment</label>
                                <textarea name="your-message" cols="40" rows="10" className="form-control textarea " placeholder="Comment"></textarea>
                                </div>
                                <div className="col-lg-4">
                                    <label>Your Name</label>
                                <input type="text" name="your-name" className="form-control text " placeholder="Your Name" />
                                </div>
                                <div className="col-lg-4">
                                    <label>Your Email</label>
                                <input type="text" name="your-email" className="form-control text " placeholder="Your Email" />
                                </div>
                                <div className="col-lg-4">
                                    <label>Website</label>
                                <input type="text" name="your-website" className="form-control text " placeholder="Website" />
                                </div>
                                <div className="col-sm-12">
                                <input type="submit" className="btn btn-primary mb-4 mb-lg-0" value="Submit" />
                                </div>
                                </div>
                            </div>
                        </form>
                    </div>
            </div>
        </>
    );
}

export default Index;
