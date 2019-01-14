import React from 'react';

export default ({
  job: {
    jobTitle,
    jobType,
    jobLocation,
    jobCompany,
    jobCategory,
    jobDate,
    JobLink
  }
}) => {
  return (
    <div className="card mb-5">
      <a href={JobLink} target="_blank" rel="noopener noreferrer">
        <div className="card-header">
          {jobTitle} <span className="badge badge-success"> {jobType}</span>
        </div>
      </a>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <i className="fa fa-map-marker" aria-hidden="true" />
            &nbsp;&nbsp;{jobLocation}
          </li>
          <li className="list-group-item">
            <i className="fa fa-building-o" aria-hidden="true" />
            &nbsp;&nbsp;{jobCompany}
          </li>
          <li className="list-group-item">
            <i className="fa fa-tag" aria-hidden="true" />
            &nbsp;&nbsp;{jobCategory}
          </li>
          <li className="list-group-item">
            <i className="fa fa-calendar" aria-hidden="true" />
            &nbsp;&nbsp;{jobDate}
          </li>
        </ul>
      </div>
    </div>
  );
};
