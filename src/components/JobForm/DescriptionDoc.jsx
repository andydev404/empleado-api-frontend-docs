import React from 'react';
import { API_URL } from '../../utils/misc';

export default ({ bodyRequest: { page, pageSize, category } }) => {
  return (
    <React.Fragment>
      <ul className="list-group">
        <li className="list-group-item active">
          <h4>GET A JOB LIST</h4>
        </li>
        <li className="list-group-item">
          <strong>Description: </strong> Get a job list
        </li>
        <li className="list-group-item">
          <strong>Endpoint: </strong> {API_URL}
        </li>
        <li className="list-group-item">
          <strong>HTTP method supported: </strong> GET
        </li>
        <li className="list-group-item">
          <strong>Params supported: </strong> page - PageSize - JobCategory
        </li>
      </ul>
      <div className="endpoint">
        {' '}
        {API_URL}?page={page}&PageSize={pageSize}&JobCategory={category}
      </div>
    </React.Fragment>
  );
};
