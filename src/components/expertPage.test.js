import React from 'react';
import { shallow } from 'enzyme';

import ExpertPage from './expertPage';

describe('<ExpertPage />', () => {
	it('Renders without crashing', () => {
    shallow(<ExpertPage />);
  });
});