
import { screen, render, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";

const MockSetTodos = jest.fn();

describe("AddInput", ()=>{

    it('should render input element', ()=>{
        render(<AddInput todos={[]} setTodos={MockSetTodos}/>);
        const inputElement = screen.getByRole('input');
        expect(inputElement).toBeInTheDocument();
    });

    it('should be able to type into input', ()=>{
        render(<AddInput todos={[]} setTodos={MockSetTodos}/>);
        const inputElement = screen.getByRole('input');
        fireEvent.change(inputElement, { target: { value: 'this is a test for change' } })
        expect(inputElement.value).toBe("this is a test for change");
    });

    it('should have empty input when add button is clicked', ()=>{
        render(<AddInput todos={[]} setTodos={MockSetTodos}/>);

        const inputElement = screen.getByRole('input');
        const buttonElement = screen.getByRole('button', { name: /Add/i });
        fireEvent.change(inputElement, { target: { value: 'this is a test for change' } })
        fireEvent.click(buttonElement);
        expect(inputElement.value).toBe('');
    });
});
