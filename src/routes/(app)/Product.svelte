<script>
    import { Button } from "$lib/components/ui/button"; 
    import * as Card from "$lib/components/ui/card";
    export let product;
</script>

<Card.Root data-testid="item" class="w-full mx-0 px-0 items-center justify-center h-full bg-gray-300">
    <Card.Header>
        <Card.Title data-testid="title">{product.title}</Card.Title>
    </Card.Header>
    <Card.Content>
        <div>
            <div class="flex flex-row">
                <Card.Description data-testid="desc">{product.description}</Card.Description>
                <img class="w-20 h-20" src={product.images[0]} alt={product.title} />
            </div>
        </div>
    </Card.Content>
    <Card.Footer class="mb-0">
        <div class="flex justify-between mb-0 items-center w-full flex-row">
            <div>
                <p data-testid="price">${product.price}</p>
            </div>
            <div class="flex">
                <Button data-testid="details" href="/product/{product.sku}" class="bg-gray-400 hover:bg-gray-600 text-black font-bold rounded">
                    Details
                </Button>
            </div>
        </div>
    </Card.Footer>
</Card.Root>
