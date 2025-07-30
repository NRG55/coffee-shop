import Header from "../../src/components/header/Header";
import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

const renderHeader = () => {
    return render(<Header />, {wrapper: BrowserRouter});
}

describe('Header', () => {
    it('should have a logo linking to "/"', () => {
        renderHeader();

        const logo = screen.getByRole('link', { name: /Logo/i });

        expect(logo).toBeInTheDocument();
        expect(logo).toHaveAttribute('href', '/');  
    });

    it('should have a navbar that contains a list', () => {
        renderHeader();

        const nav = screen.getByRole('navigation');
        const list = screen.getByRole('list');   

        expect(nav).toBeInTheDocument();
        expect(list).toBeInTheDocument();
        expect(nav).toContainElement(list);   
    });

    it('should have a list with links: home "/", shop "/shop" and about "/about"', () => {
        renderHeader();

        const list = screen.getByRole('list');
        const home = screen.getByText('HOME').closest('a');
        const shop = screen.getByText("SHOP").closest('a');
        const about = screen.getByText("ABOUT").closest('a');

        expect(list).toContainElement(home);
        expect(list).toContainElement(shop);
        expect(list).toContainElement(about);

        expect(home).toHaveAttribute('href', '/');
        expect(shop).toHaveAttribute("href", '/shop/all');
        expect(about).toHaveAttribute("href", '/about');
    });

     it('should have a shopping cart button linking to "/shopping-cart"', () => {
        renderHeader();

        const shoppingCartButton = screen.getByRole('button', {name: /shopping cart/i});
        const link = shoppingCartButton.closest('a');          

        expect(shoppingCartButton).toBeInTheDocument();
        expect(link).toHaveAttribute('href', '/shopping-cart');
        ;   
    });
});
