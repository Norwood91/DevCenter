import React, { Fragment } from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Education = ({ education }) => {
  const educationExps = education.map((edu) => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td>{edu.degree}</td>
      <td>
        <Moment format='YYYY/MM/DD'>{edu.from}</Moment> -{' '}
        {/*If this is current job (it will be null), show 'from - Present', else show 'to' date */}
        {edu.to === null ? (
          'Present'
        ) : (
          <Moment format='YYYY/MM/DD'>{edu.to}</Moment>
        )}
      </td>
      <td>
        <button className='btn btn-danger' style={{ 'border-radius': '5px' }}>
          <i className='fas fa-trash-alt'></i>
        </button>
      </td>
    </tr>
  ));
  return (
    <Fragment>
      <h2 className='my-2'>Education</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>School</th>
            <th>Degree</th>
            <th>Years</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{educationExps}</tbody>
      </table>
    </Fragment>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
};

export default connect()(Education);
