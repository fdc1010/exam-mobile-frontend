import 'react-native';
import React from 'react';
import {describe, it} from '@jest/globals';

import {fireEvent, render} from '../../app/utils/test-utils';

import Users from '../../app/screens/Users';

describe('Users screen', () => {
  it('the screen exists', () => {
    let {getByTestId} = render(<Users />, {});
    getByTestId('Screen.Users');
  });

  it('screen has a input with placeholder "New User"', () => {
    let {getByPlaceholderText} = render(<Users />, {});
    getByPlaceholderText('New User');
  });

  it('Add new User', () => {
    let {getByTestId, getByText} = render(<Users />, {});
    // get textinput by testId & Type item title in input: fireevent changeText
    fireEvent.changeText(
      getByTestId('Users.newUserInput'),
      'This is a Test User',
    );
    // submit button: fireEvent press
    fireEvent(getByTestId('Users.newUserInput'), 'submitEditing');
    // Check screen for submitted item using getByText
    getByText('This is a Test user');
  });
});
