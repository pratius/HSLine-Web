import React from 'react';

const Index = (props) => {

    return (
        <>
            <div id="search-2" className="widget widget_search wow fadeInRight">
                <form method="get" className="search-form"> 
                    <label for="search-form-5de637b4605ec"> </label> 
                    <input type="search" id="search-form-5de637b4605ec" className={props.className} placeholder="Search" value="" name="s" /> 
                    <button type="submit" className="search-submit"><i className="fa fa-search"></i> </button>
                </form>
            </div>
        </>
    );
};

export default Index;