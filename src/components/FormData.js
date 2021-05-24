import React from "react";

class FormData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      number: "",
    };
  }

  getUsername = (e) => {
    this.setState({ username: e.target.value });
  };

  getEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  getNumber = (e) => {
    this.setState({ number: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
  };

  // renderData() {
  //   return this.state.data.map((value, index) => {
  //     return <h1>Table Data</h1>;
  //   });
  // }
  render() {
    const { formInputs } = this.state;
    return (
      <div className="col-md-6 mx-auto mt-5 card card-body">
        <h2 className="text-danger text-center">Form</h2>
        <form className="p-3" onSubmit={this.onFormSubmit}>
          <label className="form-contol" for="Username">
            Username
          </label>
          <input
            type="text"
            className="form-control mt-2"
            name="username"
            placeholder="Enter the username"
            onChange={this.getUsername}
          />
          <label className="form-contol mt-4" for="email">
            Email
          </label>
          <input
            type="email"
            className="form-control mt-2"
            name="email"
            placeholder="Enter your email "
            onChange={this.getEmail}
          />

          <label className="form-contol mt-4" for="mobile number">
            Mobile Number
          </label>
          <input
            type="number"
            className="form-control mt-2"
            name="number"
            placeholder="Enter your mobile number"
            onChange={this.getNumber}
          />

          <button
            type="submit"
            className="btn btn-danger d-flex mx-auto mt-4 px-4"
          >
            Submit
          </button>
        </form>

        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Number</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
            </tr>
          </thead>
          <tbody>
            {formInputs.map((formInputs) => {
              return (
                <tr>
                  <td>{username}</td>
                  <td>{email}</td>
                  <td>{number}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default FormData;
