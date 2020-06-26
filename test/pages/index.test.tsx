import React from 'react';
import {
  render,
  // , fireEvent
} from '../testUtils';
import HomeContent from '../../src/home/index';

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<HomeContent />, {});
    expect(asFragment()).toMatchSnapshot();
  });

  // it('clicking button triggers alert', () => {
  //   const { getByText } = render(<Home />, {});
  //   window.alert = jest.fn();
  //   fireEvent.click(getByText('Test Button'));
  //   expect(window.alert).toHaveBeenCalledWith('With typescript and Jest');
  // });
});
