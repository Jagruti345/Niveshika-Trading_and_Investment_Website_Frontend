import raect from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";

//test suite
describe("Hero component", () => {
    //test case
    test("renders Hero Image Component", () => {
        render(<Hero />);  
        const heroImage = screen.getByAltText("Hero Image"); 
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", "media/images/homeHero (1).png");
    });


    test("renders Hero signup button", () => {
        render(<Hero />);  
        const signupButton = screen.getByRole("button", { name: /Signup now/i }); 
        expect(signupButton).toBeInTheDocument();
        expect(signupButton).toHaveClass("btn btn-primary fs-5");
    });
});