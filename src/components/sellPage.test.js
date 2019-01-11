import React from 'react';
import { shallow } from 'enzyme';

import {SellPage} from './sellPage';

describe('<SellPage />', () => {
	it('Renders without crashing', () => {
    shallow(<SellPage />);
  });
});