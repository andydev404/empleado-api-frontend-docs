import React from 'react';
import FormDocs from './FormDoc';
import DescriptionDoc from './DescriptionDoc';

export default ({ handleApiRequest, bodyRequest, handleInputOnChange }) => {
  return (
    <div className="api-info">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <DescriptionDoc bodyRequest={bodyRequest} />
          </div>
          <div className="col-md-6">
            <FormDocs
              handleApiRequest={handleApiRequest}
              handleInputOnChange={handleInputOnChange}
              bodyRequest={bodyRequest}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
