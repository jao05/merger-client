import React from 'react';
import { shallow } from 'enzyme';

import MergerPage from './mergerPage';

describe('<MergerPage />', () => {
	it('Renders without crashing', () => {
    shallow(<MergerPage />);
  });
});