import React from 'react'
import { render, fireEvent, act } from '@testing-library/react'
import CharacterCard from '../components/CharacterCard'


describe("Character card", () => {
         it('on card click displays more data',  () => {
            
            const { queryByTestId } = render(<CharacterCard />)
            const card = queryByTestId("card-click")
            const div = queryByTestId("displayMoreData")
            expect(div).toBeFalsy()
            fireEvent.click(card)
            expect(div).toBeTruthy()
        })
    })
