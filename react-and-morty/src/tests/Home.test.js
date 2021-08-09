import React from 'react'
import { render } from "@testing-library/react";
import Home from "../components/Home";

describe("Home Component", ()=>{

    it("render characters button", ()=>{
        const component = render(<Home/>)
        const charactersBtn = component.getByTestId("characters")
        expect(charactersBtn).toBeTruthy()
    })

    it("characters button text", ()=>{
        const component = render(<Home/>)
        const charactersBtn = component.getByTestId("characters")
        expect(charactersBtn.textContent).toBe("Characters")
    })

    it("render locations button", ()=>{
        const component = render(<Home/>)
        const locationsBtn = component.getByTestId("locations")
        expect(locationsBtn).toBeTruthy()
    })

    it("locations button text", ()=>{
        const component = render(<Home/>)
        const locationsBtn = component.getByTestId("locations")
        expect(locationsBtn.textContent).toBe("Locations")
    })
})