import { InfinitySpin } from 'react-loader-spinner';
import PropTypes from 'prop-types';

const Loader = () => {
  return (
    <div>
      <InfinitySpin width="200" color="#c05f5b" />
    </div>
  );
};

Loader.propTypes = {
  isLoading: PropTypes.bool,
};

export default Loader;
