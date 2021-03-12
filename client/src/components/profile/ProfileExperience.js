import React from 'react';
import PropTypes from 'prop-types';
import Profile from './Profile';
import Moment from 'react-moment';

const ProfileExperience = ({
  experience: { company, title, location, current, to, from, description },
}) => {
  return (
    <div>
      <h3 className='text-dark'>{company}</h3>
      <p>
        <Moment format='MM/DD/YYYY'>{from}</Moment> -{' '}
        {!to ? 'Now' : <Moment format='MM/DD/YYYY'>{to}</Moment>}
      </p>
      <p>
        Position: <strong>{title}</strong>
      </p>
      <p>
        Location: <strong>{location}</strong>
      </p>

      <p>
        Description: <strong>{description}</strong>
      </p>
    </div>
  );
};
ProfileExperience.propTypes = {
  experience: PropTypes.array.isRequired,
};

export default ProfileExperience;
