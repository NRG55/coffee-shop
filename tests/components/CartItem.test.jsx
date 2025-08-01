import CartItem from "../../src/components/shoppingCartPageComponents/cartItem/CartItem";
import { it, expect, describe, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

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
        const image = screen.getByRole('img');

        expect(productName).toBeInTheDocument();
        expect(productPrice).toBeInTheDocument();       
        expect(links).toHaveLength(2);
        expect(buttonDelete).toBeInTheDocument();;
        expect(input).toBeInTheDocument(); 
        expect(image).toBeInTheDocument(); 
        expect(image).toHaveAttribute('src', imageUrl);       
    }); 
    
    it('should call a remove product function when "delete" button is clicked', async () => {
        const user = userEvent.setup();       
        const mockRemoveProduct = vi.fn();

         render(
            <BrowserRouter>
                <CartItem 
                    product={product}
                    imageUrl={imageUrl}
                    productsQuantities={{'1': 2}}
                    removeProductFromCart={mockRemoveProduct}
                />
            </BrowserRouter>
        );       

        const deleteButton = screen.getByRole('button', {name: /delete/i});        

        await user.click(deleteButton); 
              
        expect(mockRemoveProduct).toBeCalledTimes(1);
    });
});