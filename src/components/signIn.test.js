import React from 'react';
import { shallow } from 'enzyme';

import SignIn from './signIn';

describe('<SignIn />', () => {
	it('Renders without crashing', () => {
    shallow(<SignIn />);
  });
});