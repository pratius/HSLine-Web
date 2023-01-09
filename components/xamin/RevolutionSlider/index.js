import React from 'react';


class Index extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }

    render(props) {
        return (
            <>
                <p className="rs-p-wp-fix"></p>
                <rs-module-wrap
                    id={this.props.revId + '_wrapper'}
                    data-alias="xamin"
                    data-source="gallery"
                    style={{background:"transparent",padding:0,margin:"0px auto",marginTop:0,marginBottom:0}}
                >

                    <rs-module
                        id={this.props.revId}
                        className=" rs-ov-hidden"
                        // style={{display:"none"}}
                        data-version="6.1.0"
                    >
                        <rs-slides>
                            {this.props.children}
                        </rs-slides>
                        <rs-static-layers></rs-static-layers>
                        <rs-progress className="rs-bottom" style={{visibility: "hidden !important"}}></rs-progress>
                    </rs-module>

                </rs-module-wrap>
            </>
        );
    }
}

export default Index;