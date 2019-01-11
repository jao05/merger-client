import React from 'react';
import { shallow } from 'enzyme';

import EditProfilePage from './editProfilePage';

describe('<EditProfilePage />', () => {
	it('Renders without crashing', () => {
    shallow(<EditProfilePage />);
  });
});