import { cart, cartTotal, quantity } from '$lib/stores/cart';

function addToCart(product: any): void {
    cart.update((data: any) => {
        if (data.includes(product)) {
            quantity.update((qdata: any) => {
                qdata[product.sku] = (qdata[product.sku] || 0) + 1;
                return qdata;
            });
            cartTotal.update((data: any) => data + product.price);
            return data;
        } else {
            cartTotal.update((data: any) => data + product.price);
            quantity.update((qdata: any) => {
                qdata[product.sku] = 1;
                return qdata;
        });
        return [...data, product];
        }
    });
}

function removeFromCart(product: any): void {
    cart.update((data: any) => {
        if (data.includes(product)) {
            quantity.update((qdata: any) => {
                const newq = qdata[product.sku] = (qdata[product.sku] || 0) - 1;
                if (newq === 0) {
                    delete qdata[product.sku];
                    data = data.filter((p: any) => p.sku !== product.sku);
                } else {
                    qdata[product.sku] = newq;
                }
                return qdata;
            });
            cartTotal.update((data: any) => data - product.price);
            return data;
        } else {
            return data;
        }
    });
}

export { addToCart, removeFromCart };
