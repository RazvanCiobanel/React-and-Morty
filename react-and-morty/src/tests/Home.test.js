import React from 'react'
import { render } from "@testing-library/react";
import Home from "../components/Home";

describe("Home Component", ()=>{

    let getByTestId
    beforeEach(()=>{
        const component = render(<Home/>)
        getByTestId = component.getByTestId
      })

    it("render characters button", ()=>{
        const charactersBtn = getByTestId("characters")
        expect(charactersBtn).toBeTruthy()
    })

    it("characters button text", ()=>{
        const charactersBtn = getByTestId("characters")
        expect(charactersBtn.textContent).toBe("Characters")
    })

    it("render locations button", ()=>{
        const locationsBtn = getByTestId("locations")
        expect(locationsBtn).toBeTruthy()
    })

    it("locations button text", ()=>{
        const locationsBtn = getByTestId("locations")
        expect(locationsBtn.textContent).toBe("Locations")
    })

    test('renders logo', ()=>{
        const logo = getByTestId("logo")
        expect(logo).toBeTruthy()
    })
})