import React, { Fragment } from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteEducation } from '../../actions/profile';
const Education = ({ education, deleteEducation }) => {
  const educationExps = education.map((edu) => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td>{edu.degree}</td>
      <td>
        <Moment format='MM/DD/YYYY'>{edu.from}</Moment> -{' '}
        {/*If this is current job (it will be null), show 'from - Present', else show 'to' date */}
        {edu.to === null ? (
          'Present'
        ) : (
          <Moment format='MM/DD/YYYY'>{edu.to}</Moment>
        )}
      </td>
      <td>
        <button
          onClick={() => deleteEducation(edu._id)}
          className='btn btn-danger'
          style={{ 'border-radius': '5px' }}
        >
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
  deleteEducation: PropTypes.func.isRequired,
};

export default connect(null, { deleteEducation })(Education);
