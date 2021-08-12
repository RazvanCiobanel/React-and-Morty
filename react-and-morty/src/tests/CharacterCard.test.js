import React from 'react'
import { render, fireEvent} from '@testing-library/react'
import CharacterCard from '../components/CharacterCard'


describe("Character card", () => {
         it('on card click displays more data',  () => {            
            const { queryByTestId } = render(<CharacterCard />)
            const card = queryByTestId("card-click")
             fireEvent.click(card)   
            const div = queryByTestId("displayMoreData")         
            expect(div).toBeTruthy()
        })
    })
