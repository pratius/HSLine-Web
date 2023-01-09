import React from 'react';
import $ from 'jquery';
import { SectionTitle, CardStyle1,PortfolioItem } from '../../xamin';
import { Item } from '../../../constants/portfolio-item';


const Index = (props) => {
     
        return (
            <>
                    <section>
                        <div className="container">
                            <div className="row wow fadeInUp">
                                <div className="col-sm-12">
                                    <div className="iq-masonry-block ">
                                        <div className="isotope-filters isotope-tooltip">
                                        <button data-filter="" className="active">All<span className="post_no">8</span></button><button data-filter=".design">Design<span className="post_no">3</span></button><button data-filter=".html">HTML<span className="post_no">2</span></button><button data-filter=".photography">Photography<span className="post_no">3</span></button><button data-filter=".video">Video<span className="post_no">1</span></button>
                                        </div> 
                                        <div className={props.className}>
                                                <PortfolioItem 
                                                    filterdata={'all'}
                                                />
                                        </div>
                                    </div> 
                                </div> 
                            </div> 
                        </div>
                    </section>           
            </>
        );
    }

export default Index;