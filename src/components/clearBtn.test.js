import React from 'react';
import { shallow } from 'enzyme';

import ClearBtn from './clearBtn';

describe('<ClearBtn />', () => {
	it('Renders without crashing', () => {
    shallow(<ClearBtn />);
  });
});