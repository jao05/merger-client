import React from 'react';
import { shallow } from 'enzyme';

import AcquisitionPage from './acquisitionPage';

describe('<AcquisitionPage />', () => {
	it('Renders without crashing', () => {
    shallow(<AcquisitionPage />);
  });
});