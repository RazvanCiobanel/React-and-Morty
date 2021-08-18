import React from 'react'
import { render, fireEvent} from '@testing-library/react'
import LocationCard from '../components/LocationCard'


describe("Location card", () =>{
    it('on card click displays more data', ()=>{
        const {queryByTestId} = render(<LocationCard />)
        const card = queryByTestId("card-click")
        fireEvent.click(card)
        const div = queryByTestId("displayMoreData")         
        expect(div).toBeTruthy() 
    })
})