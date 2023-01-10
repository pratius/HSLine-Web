import React from 'react';
import Link from "next/link";
import { Item1 } from '../../../constants/portfolio-item';

class Index extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            items : Item1
        }
    }

    render() {
        let items = this.state.items;
        items=items.filter((item)=>{
            if(this.props.filterdata=='all'){
                return true;
            }
            return item.filterClass.includes(this.props.filterdata);
        });
        return(
            <>

                { items.map((itemData,index) => (
                    <div key={index} className={"iq-masonry-item item "+itemData.filterClass}>
                        <div className="iq-portfolio">
                            <Link href={itemData.link} >
                            <a    className="iq-portfolio-img">
                                    <img   width="1260" height="954"  src={itemData.image}     className="attachment-post-thumbnail size-post-thumbnail wp-post-image"   alt="" />
                            </a>
                            </Link>
                            <div className="iq-portfolio-content  text-left">
                                <div className="details-box clearfix">
                                    <div className="consult-details">
                                        <Link href={itemData.link}>
                                        <a >
                                                <h5 className="text-hover">{itemData.title}</h5>
                                        </a>
                                        </Link>
                                        <p className="desc mb-0">{itemData.description}</p>
                                       
                                    </div>
                                    <div className="mb-0 portfolio-tag"><ul> <li>Html</li> <li>Video</li></ul></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )) }
            </>
        )
    }
}
export default Index;
