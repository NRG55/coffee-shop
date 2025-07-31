import Card from "../../src/components/shopPageComponents/card/Card";
import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe('Card component', () => {
    const product = {
        id: "id",
        name: "name",
        brand: "brand",       
        price: "price"       
    };

    it('should render a correct card for a product', () => {
        render(
            <BrowserRouter>
                <Card product={product}/>
            </BrowserRouter>
        );

        const productName = screen.getByText(product.name).closest('p');
        const productPrice = screen.getByText(`€${product.price}`).closest('p');
        const cardLink = screen.getByRole('link', /id/i);

        expect(productName).toBeInTheDocument();
        expect(productPrice).toBeInTheDocument();
        expect(cardLink).toBeInTheDocument();
        expect(cardLink).toHaveAttribute('href', '/product/brand/id');
    });
});