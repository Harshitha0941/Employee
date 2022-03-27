import React, { Component } from "react";

class EmployeeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      mobile: " ",
      address: "",
      department: "",
      sapId: "",
      errors:"",
    };
  }
 
  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  formValidation=() =>{
    const {email,mobile,department,sapId} = this.state;
    const errors  = {};
    if(mobile.length !== 10){
        errors.mobile ="Mobile number should be of 10 digits";
    }
    if(sapId.length !== 7){
        errors.sapId ="sapId should be of 7 digits";
    }
    if(email.length == " "){
        errors.email ="EmailId cannot be empty";
    }
    if(department.length ==""){
        errors.department ="Department Cannot be empty";
    }
    this.setState({errors});
  }
  onSubmit = (event) => {
    event.preventDefault();
     this.formValidation();
    console.log("EmployeeDetails:") 
    console.log("EmailId:",this.state.email,"Department:",this.state.department,"Mobile Number:",this.state.mobile,"SapId:",this.state.sapId,"Address:",this.state.address);
  };

  render() {
    const {errors}=this.state; 
    return (
      <div>
        <div className="project">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h4 className="display-4 text-center">Employee Information form</h4>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                  Email: &nbsp;
                    <input
                      type="text"
                      className="form-control form-control-lg "
                      placeholder="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                  </div>&nbsp;
                  {errors.email}
                  &nbsp;
                  <div className="form-group">
                  Mobile Number : &nbsp;
                    <input
                      type="text"
                      className="form-control form-control-lg "
                      placeholder="mobile"
                      name="mobile"
                      value={this.state.mobile}
                      onChange={this.onChange}
                    />
                  </div>&nbsp;
                  {errors.mobile}
                  &nbsp;&nbsp;
                  <div className="form-group">
                  Address : &nbsp;
                    <textarea
                      className="form-control form-control-lg "
                      placeholder="address"
                      name="address"
                      value={this.state.address}
                      onChange={this.onChange}
                    ></textarea>
                  </div>
                  &nbsp;&nbsp;
                  <div className="form-group">
                  Department: &nbsp;
                    <input
                      className="form-control form-control-lg "
                      placeholder="department"
                      name="department"
                      value={this.state.department}
                      onChange={this.onChange}
                    ></input>
                  </div>
                  &nbsp;&nbsp;
                  {errors.department}
                  <div className="form-group">
                  SapId: &nbsp;
                    <input
                      className="form-control form-control-lg "
                      placeholder="sapId"
                      name="sapId"
                      value={this.state.sapId}
                      onChange={this.onChange}
                    ></input>
                    &nbsp;
                  </div>&nbsp;
                  {errors.sapId}
                  &nbsp;
                  <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EmployeeComponent;
