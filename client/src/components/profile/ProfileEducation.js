import React from 'react';
import PropTypes from 'prop-types';

import Moment from 'react-moment';

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, current, to, from, description },
}) => {
  return (
    <div>
      <h3 className='text-dark'>{school}</h3>
      <p>
        <Moment format='MM/DD/YYYY'>{from}</Moment> -{' '}
        {!to ? 'Now' : <Moment format='MM/DD/YYYY'>{to}</Moment>}
      </p>
      <p>
        Degree: <strong>{degree}</strong>
      </p>
      <p>
        Field of Study: <strong>{fieldofstudy}</strong>
      </p>

      <p>
        Description: <strong>{description}</strong>
      </p>
    </div>
  );
};
ProfileEducation.propTypes = {
  education: PropTypes.array.isRequired,
};

export default ProfileEducation;
