import React from 'react';
import TestRenderer from 'react-test-renderer'
import {ButtonComponentForTest} from '../components/ButtonComponentTest';

describe('ButtonComponent testing', ()=> {
    test('ButtonComponent renders correctly', () => {
  // Arrange
  const mockData = {
    label: 'Upload file',
    isOn: true,
    handleClick: jest.fn(), // Mock handleClick function
  };

  
  const treeLine = TestRenderer.create(<ButtonComponentForTest {...mockData} />).toJSON()
  expect(treeLine).toMatchSnapshot()
});

})
