import React from 'react';
import { CardStyle12} from '../../../xamin';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: [
                    {
                       location:"USA Office",
                       text:"Michael I. Days 3756 Preston Street Wichita, KS 67213 Phone:857-778-1265"
                    },
                    {
                        location:"Australia Office",
                       text:"Michael I. Days 3756 Preston Street Wichita, KS 67213 Phone:857-778-1265"
                    },
                    {
                        location:"New zealand Office",
                       text:"Michael I. Days 3756 Preston Street Wichita, KS 67213 Phone:857-778-1265"
                    },
                    
               
            ]
        }
       
    }
    render() {
      const data =this.state.value;
        return (
            <>
              <section>
                    <div className="container">
                        <div className="row">
                            { data.map((item, index) => (
                                        <CardStyle12
                                            key={index}
                                            location={item.location}
                                            text ={item.text}
                                        />
                                
                                )) }
                        </div>
                    </div>
              </section>
            </>
        );
    }
}

export default Index;