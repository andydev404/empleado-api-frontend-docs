import React from 'react';

export default class FormDoc extends React.Component {
  handleOnChange = input => {
    let body = {
      name: input.target.name,
      value: input.target.value
    };
    this.props.handleInputOnChange(body);
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.handleApiRequest();
  };

  render() {
    const { bodyRequest } = this.props;
    return (
      <React.Fragment>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label>
              <strong>Page</strong>
            </label>
            <input
              type="text"
              className="form-control"
              value={bodyRequest.page}
              onChange={this.handleOnChange}
              placeholder="Page"
              name="page"
            />
          </div>
          <div className="form-group">
            <label>
              <strong>Page size</strong>
            </label>
            <input
              type="text"
              className="form-control"
              value={bodyRequest.pageSize}
              onChange={this.handleOnChange}
              placeholder="Page size"
              name="pageSize"
            />
          </div>
          <div className="form-group">
            <label>
              <strong>Category</strong>
            </label>
            <select
              className="form-control"
              name="category"
              value={bodyRequest.category}
              onChange={this.handleOnChange}
            >
              <option value="None">None</option>
              <option value="SoftwareDevelopment">
                Desarrollo de Software
              </option>
              <option value="WebDevelopment">Desarrollo Web</option>
              <option value="MobileDevelopment">Desarrollo Movil</option>
              <option value="Networking">Redes y Telecomunicaciones</option>
              <option value="SystemAdministrator">
                Administrador de Sistemas
              </option>
            </select>
          </div>
          <button className="btn-try mr-5">Try it</button>
        </form>
      </React.Fragment>
    );
  }
}
