import { screen, render } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

const MockTodoFooter = ( {number} ) => {
    return ( 
        <BrowserRouter>
            <TodoFooter numberOfIncompleteTasks={number}/>
        </BrowserRouter>
     );
}

describe("TodoFooter", ()=>{
    it("should render the correct amount of incomplete tasks", ()=>{
        render(<MockTodoFooter number={5}/>);
        const htmlElement = screen.getByText('5 tasks left');
        expect(htmlElement).toBeInTheDocument();
    });
    
    // it("should render the correct amount of incomplete tasks", ()=>{
    //     render(<MockTodoFooter number={5}/>);
    //     const htmlElement = screen.getByText('5 tasks left');
    //     expect(htmlElement).toContainHTML('p');
    // });
    
    // it("should render the correct amount of incomplete tasks", ()=>{
    //     render(<MockTodoFooter number={5}/>);
    //     const htmlElement = screen.getByText('5 tasks left');
    //     expect(htmlElement).not.toBeFalsy();
    // });
});