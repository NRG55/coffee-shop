import CartItem from "../../src/components/shoppingCartPageComponents/cartItem/CartItem";
import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe('CartItem component', () => {
    const product = {
        id: "id",
        name: "name",
        brand: "brand",            
        price: "price"       
    };

    const imageUrl = 'http://localhost:5173/src/images/products/1.webp';

    it('should render a correct item cart', () => {
        render(
            <BrowserRouter>
                <CartItem 
                    product={product}
                    imageUrl={imageUrl}
                    productsQuantities={{'1': 2}}
                />
            </BrowserRouter>
        );

        const productName = screen.getByText(product.name).closest('p');
        const productPrice = screen.getByText(`price: €${product.price}`).closest('p');     
        const links = screen.queryAllByRole('link', /id/i);
        const buttonDelete = screen.getByRole('button', {name: /delete/i});
        const input = screen.getByLabelText(/quantity/i);

        expect(productName).toBeInTheDocument();
        expect(productPrice).toBeInTheDocument();       
        expect(links).toHaveLength(2);
        expect(buttonDelete).toBeInTheDocument();;
        expect(input).toBeInTheDocument();        
    });   
});