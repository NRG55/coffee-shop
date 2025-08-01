import ProductPage from "../../src/pages/productPage/ProductPage";
import { it, expect, describe, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe('Product Page', () => {
    const user = userEvent.setup();  
    const mockAddProduct = vi.fn();

    beforeEach(() => {
        render(
            <MemoryRouter
                initialEntries={["/product/dass-coffee/1"]}
            >
                <Routes>
                    <Route
                        path="/product/:brand/:productId"
                        element={<ProductPage addProductToCart={mockAddProduct} />}
                    />
                </Routes>
            </MemoryRouter>
        );
    });

    it("should render a product image", () => {       
        const image = screen.getByRole("img");

        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute("alt", "product");
    });

    it('should render all product details', () => {
        const name = screen.getByRole('heading',{name:/huehuetenango/i});
        const weight = screen.getByText(/weigth:/i);
        const price = screen.getByText(/€/i);
        const description = screen.getByText(/these beans/i);
        const coffeeType = screen.getByText(/coffee type:/i);

        expect(name).toBeInTheDocument();
        expect(weight).toBeInTheDocument();
        expect(price).toBeInTheDocument();
        expect(description).toBeInTheDocument();
        expect(coffeeType).toBeInTheDocument();
    });

    it("should render a quantity input", () => {       
        const input = screen.getByLabelText("quantity");

        expect(input).toBeInTheDocument();       
    });

     it('should call an add product function when "Add to Cart" button is clicked', async () => {
        const addButton = screen.getByRole('button', {name: /add to cart/i});        

        await user.click(addButton); 
              
        expect(mockAddProduct).toBeCalledTimes(1);
    });

    it('should render a "Continue shopping" button linked to /shop/all path', () => {        
        const continueShoppingButton = screen.getByRole('button', { name: /continue shopping/i });        
        const link = continueShoppingButton.closest('a');
       
        expect(continueShoppingButton).toBeInTheDocument();      
        expect(link).toHaveAttribute('href', '/shop/all');
    });
})
  