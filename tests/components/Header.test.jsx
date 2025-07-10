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
        const home = screen.getByText('Home').closest('a');
        const shop = screen.getByText("Shop").closest('a');
        const about = screen.getByText("About").closest('a');

        expect(list).toContainElement(home);
        expect(list).toContainElement(shop);
        expect(list).toContainElement(about);

        expect(home).toHaveAttribute('href', '/');
        expect(shop).toHaveAttribute("href", '/shop');
        expect(about).toHaveAttribute("href", '/about');
    });
});
