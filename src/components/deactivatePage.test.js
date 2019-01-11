import React from 'react';
import { shallow } from 'enzyme';

import {DeactivatePage} from './deactivatePage';

describe('<DeactivatePage />', () => {
	it('Renders without crashing', () => {
    shallow(<DeactivatePage />);
  });
});