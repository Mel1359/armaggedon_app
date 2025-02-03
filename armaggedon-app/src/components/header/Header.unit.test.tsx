import {Header} from "./Header";
import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";

describe("[components] Header", ()=>{
    beforeEach(()=>{
        render(<BrowserRouter><Header/></BrowserRouter>)
    })

    it("should contain common header html element", ()=>{
        const header = screen.getByRole("heading");
        expect(header).toBeInTheDocument();
        expect(header).toHaveTextContent("ARMAGGEDON V")
    });
    it("should contain links to asteroids and destroyment pages", ()=>{
        const links = screen.getAllByRole("heading");
        expect(links[0]).toHaveAttribute("href", "/asteroids");
        expect(links[1]).toHaveAttribute("href", "/destruction");
    })
    it("should contain button, after click on it should hide button and display input", ()=>{
        const button = screen.getByText("Unauthorized");
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
        waitFor(()=> {
            expect(button).not.toBeInTheDocument();
            expect(screen.getByTestId('api_key_input')).toBeInTheDocument();
        })
    })
})