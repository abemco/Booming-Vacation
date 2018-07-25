import React from 'react';

const contactStyles = { paddingBottom: "30px",
                        paddingTop: "20px",
                        backgroundColor: "#f6f6f6" };
  

class Contact extends React.Component {
    render () {
        return (

<div style={contactStyles}>
    <div className="container text-center">     
        <div className="col-md-12">
            <h2>Contact Us</h2>
                <hr width="30%"></hr>
                    <p>Need to get in touch? Fill in the form below for more information:</p>
        </div>
    </div>
                
        <div className="row">
            <div className="col-md-8 mx-auto">
                <form>
                    <fieldset className="form-group">
                        <input type="text" class="form-control form-control-sm" id="name" placeholder="full name" required></input>
                    </fieldset>

                    <fieldset className="form-group">
                        <input type="email" class="form-control form-control-sm" id="email" placeholder="your@email.com" required></input>
                    </fieldset>

                        <fieldset className="form-group">
                            <input type="text" class="form-control form-control-sm" id="subject" placeholder="subject" required></input>
                        </fieldset>
                            
                            
                        <fieldset className="form-group">
                            <textarea className="form-control form-control-sm" id="message" placeholder="message" rows="3" required></textarea>
                        </fieldset>
                                
                        <button type="submit" class="btn btn-outline-info btn-block">SUBMIT</button>
                                
                            
                </form>
            </div>
        </div>

</div>


    
);
}
}

export default Contact;