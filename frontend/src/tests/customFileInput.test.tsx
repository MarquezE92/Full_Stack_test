import React from 'react';
import TestRenderer from 'react-test-renderer'
import CustomFileInputTest from '../components/CustomFileInputTest';

describe('Custom input testing', ()=> {
    test('Custom input renders correctly', () => {
  // Arrange
  const mockData = {
    isOn: true,
    onChange: jest.fn(), // Mock handleClick function
  };

  
  const treeLine = TestRenderer.create(<CustomFileInputTest {...mockData} />).toJSON()
  expect(treeLine).toMatchSnapshot()
});

})
