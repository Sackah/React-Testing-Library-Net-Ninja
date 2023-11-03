<<<<<<< HEAD
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
=======
import { render, screen } from '@testing-library/react';
import TodoFooter from "../TodoFooter"
import { BrowserRouter } from "react-router-dom"

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
    return (
        <BrowserRouter>
          <TodoFooter 
            numberOfIncompleteTasks={numberOfIncompleteTasks}
          />
        </BrowserRouter>
    )
}

describe("TodoFooter", () => {
  it('should render the correct amount of incomplete tasks', () => {
    render(
        <MockTodoFooter 
          numberOfIncompleteTasks={5}
        />
    );
    const pElement = screen.getByText(/5 tasks left/i);
    expect(pElement).toBeInTheDocument();
  });

  it('should render "task" when the number of incomplete tasks is one', () => {
    render(
        <MockTodoFooter 
          numberOfIncompleteTasks={1}
        />
    );
    const pElement = screen.getByText(/1 task left/i);
    expect(pElement).toBeInTheDocument();
  });
})

// it('p element should be truthy when the number of incomplete tasks is one', () => {
//   render(
//       <MockTodoFooter 
//         numberOfIncompleteTasks={1}
//       />
//   );
//   const pElement = screen.getByText(/1 task left/i);
//   expect(pElement).toBeTruthy();
// });

// it('"task" should be visible when the number of incomplete tasks is one', () => {
//   render(
//       <MockTodoFooter 
//         numberOfIncompleteTasks={1}
//       />
//   );
//   const pElement = screen.getByText(/1 task left/i);
//   expect(pElement).toBeVisible();
// });

// it('should contain p tag with correct text', () => {
//   render(
//       <MockTodoFooter 
//         numberOfIncompleteTasks={1}
//       />
//   );
//   const pElement = screen.getByText(/1 task left/i);
//   expect(pElement).toContainHTML('p');
// });

// it('should render correct text content', () => {
//   render(
//       <MockTodoFooter 
//         numberOfIncompleteTasks={1}
//       />
//   );
//   const pElement = screen.getByText(/1 task left/i);
//   expect(pElement).toHaveTextContent("1 task left");
// });

// it('should render correct text content', () => {
//   render(
//       <MockTodoFooter 
//         numberOfIncompleteTasks={1}
//       />
//   );
//   const pElement = screen.getByText(/1 task left/i);
//   expect(pElement).not.toBeFalsy();
// });

// it('should render correct text content', () => {
//   render(
//       <MockTodoFooter 
//         numberOfIncompleteTasks={1}
//       />
//   );
//   const pElement = screen.getByText(/1 task left/i);
//   expect(pElement.textContent).toBe("1 task left");
// });
>>>>>>> main
