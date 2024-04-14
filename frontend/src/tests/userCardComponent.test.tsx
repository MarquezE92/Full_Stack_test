/* import React from 'react';
import TestRenderer from 'react-test-renderer'
import UserCardComponentTest from '../components/UserCardComponentTest';

describe('CardComponent testing', ()=> {
    test('CardComponent renders correctly', () => {
  // Arrange
  const mockData = {
    name: 'Estefanía Márquez',
    city: 'Mar del Plata',
    country: 'Argentina',
    favourite_sport: 'Basketball'
  };

  
  const treeLine = TestRenderer.create(<UserCardComponentTest {...mockData} />).toJSON()
  expect(treeLine).toMatchSnapshot()
});

})
 */