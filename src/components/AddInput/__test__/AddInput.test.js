<<<<<<< HEAD
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
=======
import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from "../AddInput"

const mockedSetTodo = jest.fn();

describe("AddInput", () => {
    it('should render input element', () => {
        render(
            <AddInput 
                todos={[]}
                setTodos={mockedSetTodo}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        expect(inputElement).toBeInTheDocument();
    });
    
    it('should be able to type into input', () => {
        render(
            <AddInput 
                todos={[]}
                setTodos={mockedSetTodo}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.click(inputElement)
        fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping" } })
        expect(inputElement.value).toBe("Go Grocery Shopping");
    });
    
    it('should be able to type into input', () => {
        render(
            <AddInput 
                todos={[]}
                setTodos={mockedSetTodo}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.click(inputElement)
        fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping" } });
        const buttonElement = screen.getByRole("button", { name: /Add/i});
        fireEvent.click(buttonElement)
        expect(mockedSetTodo).toBeCalled()
    });
    
    it('should have empty input when add button is cliked', () => {
        render(
            <AddInput 
                todos={[]}
                setTodos={mockedSetTodo}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping" } });
        const buttonElement = screen.getByRole("button", { name: /Add/i});
        fireEvent.click(buttonElement)
        expect(inputElement.value).toBe("")
    });
})
>>>>>>> main
