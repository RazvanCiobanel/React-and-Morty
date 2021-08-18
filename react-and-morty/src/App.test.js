import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


describe("Testing App",()=>{
  

  test('renders application div', () => {
    const  {getByTestId} = render(<App/>);
    const application = getByTestId("application");
    expect(application).toBeTruthy();
  });

  test('renders <Home>', () =>{
    const {queryByTestId} = render(<App/>);
    const homeComp = queryByTestId("homeComp")
    expect(homeComp).toBeTruthy()
  });

  test('renders <Characters>', () =>{
    const {queryByTestId} = render(<App/>);
    const charComp = queryByTestId("charComp")
    expect(charComp).toBeFalsy()
  });

  test('renders <Locations>', () =>{
    const {queryByTestId} = render(<App/>);
    const locComp = queryByTestId("locComp")
    expect(locComp).toBeFalsy()
  });
})

