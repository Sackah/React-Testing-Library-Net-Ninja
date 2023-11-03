import { screen, render } from "@testing-library/react";
import Header from "../Header";

it('should render same text passed into title prop', ()=>{
    render(<Header title={'My Header'}/>);
    const headingElement = screen.getByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
});

// it('should render same text passed into title prop', ()=>{
//     render(<Header title={'My Heading'}/>);
//     const headingElement = screen.getByRole('heading', { name: 'My Heading' });
//     expect(headingElement).toBeInTheDocument();
// });

// it('should render same text passed into title prop', ()=>{
//     render(<Header title={'My Header'}/>);
//     const headingElement = screen.getByTestId('header-1');
//     expect(headingElement).toBeInTheDocument();
// });

// it('should render same text passed into title prop', async ()=>{
//     render(<Header title={'My second heading'}/>);
//     const headingElement = await screen.findByRole('heading');
//     expect(headingElement.textContent).toBe('My second heading');
// });

// it('should render same text passed into title prop', ()=>{
//     render(<Header title={'My heading'}/>);
//     const headingElement = screen.queryByText('dog');
//     expect(headingElement).not.toBeInTheDocument();
// });

// it('should render same text passed into title prop', ()=>{
//     render(<Header title={'My heading'}/>);
//     const headingElements = screen.getAllByRole('heading');
//     expect(headingElements.length).toBe(1);