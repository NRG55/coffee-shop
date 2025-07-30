import Home from "../../src/pages/home/Home";
import { it, expect, describe, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe('Home page', () => {
    beforeEach(() => {
        render(<Home />, {wrapper: BrowserRouter});
    });

    it('should render a heading, a paragraph and a button linking to "/shop/all', () => {        
        const heading = screen.getByRole('heading', {name: /find your flavor/i});
        const paragraph = screen.getByText(/we have a wide selection/i);
        const shopNowButton = screen.getByRole('button', { name: /shop now/i });
        const link = shopNowButton.closest('a');

        expect(heading).toBeInTheDocument();
        expect(paragraph).toBeInTheDocument();
        expect(shopNowButton).toBeInTheDocument();
        expect(link).toHaveAttribute('href', '/shop/all');
        });

    it('should render "Popular Now" and "Why choosing us" headings', () => {
        const popularNowHeading = screen.getByText(/popular now/i);
        const choosingUsHeading = screen.getByText(/why choosing us/i);
        
        expect(popularNowHeading).toBeInTheDocument();
        expect(choosingUsHeading).toBeInTheDocument();
    });    
});

