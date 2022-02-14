import React from 'react';
import {classnameRoot, MistakesCounter} from "./MistakesCounter";
import {fireEvent, render, screen} from '@testing-library/react'
describe('100k1 Mistakes counter', ()=>{
    it('100k1 Mistakes counter renders without crashing', () => {
        render(<MistakesCounter roundNumber={2}/>);
    });

    it('100k1 Mistakes counter renders 3 buttons', () => {
        render(<MistakesCounter roundNumber={2}/>);
        const mistakesButtons = screen.getAllByRole('button')
        expect(mistakesButtons).toHaveLength(3)
    });

    it('clicking the mistake button changes classname and second click keeps the classname', () => {
        render(<MistakesCounter roundNumber={2}/>);
        const button = document.querySelector('button')
        fireEvent.click(button)
        expect(button).toHaveClass(`${classnameRoot}__cross-icon_mistake`)
        fireEvent.click(button)
        expect(button).not.toHaveClass(`${classnameRoot}__cross-icon_regular`)
    });

    it('100k1 Mistakes counter snapshot', () => {
        const mistakesCounter = render(<MistakesCounter roundNumber={2}/>);
        expect(mistakesCounter).toMatchSnapshot();
    });
})
