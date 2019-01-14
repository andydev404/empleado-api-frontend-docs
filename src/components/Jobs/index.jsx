import React from 'react';
import JobItem from './JobItem';

export default ({ jobs, loading }) => {
  return (
    <div className="job-list">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {loading ? (
              <h3 className="text-center">
                <i className="fa fa-spinner fa-spin" aria-hidden="true" />{' '}
                Loading Jobs...
              </h3>
            ) : (
              <div className="card-columns">
                {jobs.map((job, index) => (
                  <JobItem key={index} job={job} index={index} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
