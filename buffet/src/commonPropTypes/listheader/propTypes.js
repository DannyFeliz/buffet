import PropTypes from 'prop-types';

export default {
  button: PropTypes.shape({
    color: PropTypes.string,
    icon: PropTypes.bool,
    type: PropTypes.string,
  }),
  subtitle: PropTypes.string,
  title: PropTypes.string,
};
