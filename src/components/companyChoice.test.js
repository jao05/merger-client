import React from 'react';
import { shallow } from 'enzyme';

import {CompanyChoice} from './companyChoice';

describe('<CompanyChoice />', () => {
	it('Renders without crashing', () => {
    shallow(<CompanyChoice />);
  });
});