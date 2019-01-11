import React from 'react';
import { shallow } from 'enzyme';

import {DetailsBtn} from './detailsBtn';

describe('<DetailsBtn />', () => {
	it('Renders without crashing', () => {
    shallow(<DetailsBtn />);
  });
});