import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import ShoppingCart from "../../src/pages/shoppingCart/ShoppingCart";
import { BrowserRouter } from "react-router-dom";

const cartProducts = {1: 1, 2: 1, 3: 2} // {productId: quantity, productId2: quantity, ... }

describe("Shopping Cart page", () => {
    beforeEach(() => {
        render(<ShoppingCart 
                    cartProducts={cartProducts}                    
                />, 
                {wrapper: BrowserRouter}
            );
    });

    it('should render a heading', () => {        
        const heading = screen.getByRole('heading', {name: /your cart/i});       

        expect(heading).toBeInTheDocument();       
    });

    it('should render a button "Back to Shop" linking to "/shop/all and a button "Check out"', () => {         
        const backToShopButton = screen.getByRole('button', { name: /back to shop/i });
        const checkOutButton = screen.getByRole('button', { name: /check out/i });
        const link = backToShopButton.closest('a');
       
        expect(backToShopButton).toBeInTheDocument();
        expect(checkOutButton).toBeInTheDocument();
        expect(link).toHaveAttribute('href', '/shop/all');
    });

    it("should render subtotal", () => {       
        const subtotal = screen.getByText(/subtotal/i);

        expect(subtotal).toBeInTheDocument();       
    });

    it('should render a heading and a button "Continue shopping" when the cart is empty', () => {
        render(<ShoppingCart cartProducts={{}}/>, {wrapper: BrowserRouter});

        expect(screen.getByRole('button', { name: /continue shopping/i })).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: /empty/i})).toBeInTheDocument();
    });
});