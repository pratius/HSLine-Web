import React from 'react';

import { CheckboxList } from '../../../xamin';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            tabs:[
                {
                    href:'tab-software-development',
                    title:'Software Development',
                    subTitle:'Choose Your Software Development Service',
                    description:'Tame your big data through robust solutions that empower data collection, storage,processing and analysis.'
                },
                {
                    href:'tab-application-services',
                    title:'Application Services',
                    subTitle:'Choose Your Application Service',
                    description:'Tame your big data through robust solutions that empower data collection, storage,processing and analysis.'
                },
                {
                    href:'tab-data-analytics',
                    title:'Data Analytics',
                    subTitle:'Choose Your Data Analytics Service',
                    description:'Tame your big data through robust solutions that empower data collection, storage,processing and analysis.'
                },
                {
                    href:'tab-help-desk-services',
                    title:'Help Desk Services',
                    subTitle:'Choose Your Help Desk Service',
                    description:'Tame your big data through robust solutions that empower data collection, storage,processing and analysis.'
                }
            ],
            checkList:[
                "Advance Advisory Team",
                "Professional Consulting Services",
                "24/7 Support Help Center",
                "Customer Service &amp; Operations",
                "There are many variations of passages."
            ]
        }
    }

    render() {
        let { tabs, checkList } = this.state;
        return (
            <>
                <section className="iq-bg-over">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="custom-tab">
                                    <ul className="nav nav-pills text-center flex-column mb-5 mb-md-0" id="pills-tab" role="tablist" aria-orientation="vertical">
                                        {
                                            tabs.map((tab,index) => (
                                                <li key={index} className="nav-item w-inherit">
                                                    <a className={"nav-link w-100"+(index==0 ? ' show active' : '')} data-toggle="pill" href={'#'+tab.href} role="tab" aria-selected={index==0 ? 'true' : 'false'}>
                                                        <h5 className="tab-title">{tab.title}</h5>
                                                    </a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="tab-content">
                                    {
                                        tabs.map((tab,index) => (
                                            <div key={index} id={tab.href} className={"tab-pane fade "+(index==0 ? " active show" : '')}>
                                                <h3 className="pb-3">{tab.subTitle}</h3>
                                                <p>{tab.description}</p>
                                                <CheckboxList className="column-2" items={checkList} />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Index;
