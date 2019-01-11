import React from 'react';
import { shallow } from 'enzyme';

describe('<HomePage />', () => {
	it('Renders without crashing', () => {
    shallow(<HomePage />);
  });
});