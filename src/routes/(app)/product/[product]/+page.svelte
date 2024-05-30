<script lang="ts">
    // Component imports
    import * as Card from '$lib/components/ui/card';
    import { Badge } from '$lib/components/ui/badge';
    import { Button } from '$lib/components/ui/button';
    // Going through an empty product folder ensures it is in the URL. Improves UX and probably SEO.
    import { page } from '$app/stores'; 
    // Data object is now accessible as fetching is done once in +layout.server.ts. 
    // Type "any" is used to avoid TypeScript errors. In prod, I would potentially define the types in app.d.ts
    export let data: any;
    let product: any;
    
    for (let p of data.items.products) {
        if (p.sku == $page.params.product) {
            product = p;
            break;
        }
    }
   
</script>
<div class="flex w-full h-full items-center justify-center">
    <Card.Root class="grid grid-cols-2 p-6 w-2/3 mx-auto">
        <div>
            <Card.Header class="flex flex-row">
                <div class="flex items-start justify-center flex-col">
                    <p class="text-4xl text-left font-bold">{product.title}</p>
                    <p class="text-left text-gray-700">{product.description}</p>
                </div>
            </Card.Header>
            <Card.Content>
                <p class="text-lg font-semibold mt-2">${product.price}</p>
                {#if product.discountPercentage > 0}
                    <Badge class="bg-green-200 text-gray-800 mt-1">-{product.discountPercentage}%</Badge>
                {/if}
                <div class="mt-2">
                    <span class="font-bold text-gray-800">Brand:</span> {product.brand}
                </div>
                <div class="mt-2">
                    <span class="font-bold text-gray-800">Category:</span> {product.category}
                </div>
                <div class="mt-2">
                    <span class="font-bold text-gray-800">Availability:</span> {product.availabilityStatus}
                </div>
                <div class="mt-2">
                    <span class="font-bold text-gray-800">Rating:</span> {product.rating} / 5
                </div>
                <div class="mt-2">
                    <span class="font-bold text-gray-800">Stock:</span> {product.stock}
                </div>
            </Card.Content>
        </div>
        <div class="flex justify-between items-center h-full flex-col">
            <img src={product.images[0]} alt={product.title} class="w-full h-full"/>
            <Button class="w-1/2 self">Add to Cart</Button>
        </div>
        <Card.Footer class="flex w-full justify-between flex-row">
            <p class="text-sm text-gray-600">SKU: {product.sku}</p>
            <p class="text-sm text-gray-600">Minimum Order <br>Quantity: {product.minimumOrderQuantity}</p>
            <p class="text-sm text-gray-600">Shipping:<br> {product.shippingInformation}</p>
        </Card.Footer>
    </Card.Root>
</div>
