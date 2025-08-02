import { it, expect, describe, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import Shop from "../../src/pages/shop/Shop";
import CardsSection from "../../src/components/shopPageComponents/cardsSection/CardsSection";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("Shop Page", () => {
    beforeEach(() => {
        render(
        <MemoryRouter initialEntries={["/shop/all"]}>
            <Routes>
            <Route path="/shop" element={<Shop />}>
                <Route path=":brand" element={<CardsSection />} />
            </Route>
            </Routes>
        </MemoryRouter>
        );
    });

    it("should render two filter headings", () => {
        const brands = screen.getByRole('heading', {name: /brands/i});
        const coffeeType = screen.getByRole('heading', {name: /coffee type/i});

        expect(brands).toBeInTheDocument();
        expect(coffeeType).toBeInTheDocument();
    });

    it("should render coffee brand button and coffee type checkbox in the filter section", () => {
        const button = screen.getByRole('button', {name: /dass coffee/i}); 
        const checkBox = screen.getByRole('checkbox', {name: /arabica/i});        

        expect(button).toBeInTheDocument();
        expect(checkBox).toBeInTheDocument();        
    });

    it("should render products", () => { 
        const titleSidamo = screen.getByText(/sidamo/i);
        const titlePlutonio = screen.getByText(/plutonio/i);     

        expect(titleSidamo).toBeInTheDocument();
        expect(titlePlutonio).toBeInTheDocument();
    });
});