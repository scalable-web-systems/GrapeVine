import React from 'react';

function Contact(props) {
    return (
        <div className="container">
            <div className="row row-content">
                <div className="col-12">
                    <h3>Location Information</h3>
                </div>
                <img src='assets/images/grapes.png' height="30" width="41" alt='GrapeVine' />
                <div className="col-12 col-sm-4 offset-sm-1">
                    <h5>Our Address</h5>
                    <address>
                        181 Presidents Drive<br />
                        Amherst, MA<br />
                        United States<br />
                        <i className="fa fa-phone fa-lg"></i>: +123 456 7890<br />
                        <i className="fa fa-fax fa-lg"></i>: +123 456 7890<br />
                        <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:fruit@grapevine.com">fruit@grapevine.com</a>
                    </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+1234567890"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:fruit@grapevine.com"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;