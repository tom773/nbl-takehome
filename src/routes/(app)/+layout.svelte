<script>
    // component imports
    import { ArrowLeft, ShoppingCart, X } from 'lucide-svelte';
    import { Button } from '$lib/components/ui/button'; 
    import * as DropdownMenu from '$lib/components/ui/dropdown-menu';

    // Stores
    import { cart, cartTotal, quantity} from '$lib/stores/cart';
    import { page } from '$app/stores';
    
    // Functions
    import { removeFromCart } from '$lib/utils/cart';
    
    // Typescript screams about this, even with the full callback types. I actually don't know why. 
    // Potantially because the store values may be undefined at compile time?
    $: totalItems = Object.values($quantity).reduce((a, b) => a + b, 0);
</script>
<nav class="z-10 flex flex-row justify-between text-white absolute w-screen">
    <div class="flex justify-start items-center">
        {#if $page.url.pathname != "/"}
            <div>
                <a href="/"><ArrowLeft class="m-5 text-white hover:text-gray-400"/></a>
            </div>
        {/if} 
    </div>
    <div class="flex justify-end items-center">
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                <div class="flex p-5">
                    <ShoppingCart class="cursor-pointer hover:text-gray-400 h-8 w-8"/><span data-testid="dropdown" class="flex items-center justify-center rounded-full bg-red-400 h-4 w-4 text-xs">{ totalItems }</span>
                </div>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
                {#if $cart.length == 0}
                    <DropdownMenu.Item class="p-2">Your cart is empty</DropdownMenu.Item>
                {:else}
                    {#each $cart as item}
                        <DropdownMenu.Item class="p-2 pr-4">
                            <span class="font-bold flex items-center inline-flex text-l"><img class="w-10 h-10" src={item.images[0]} alt=""/> <p>{item.title} x {$quantity[item.sku]}</p></span>
                            <button on:click={()=>removeFromCart(item)} tabindex="0" aria-label="rm-cart"><X class="z-20 cursor-pointer text-red-400 hover:text-red-600 pl-2 h-8 w-8"/></button>
                        </DropdownMenu.Item>
                    {/each}
                        <DropdownMenu.Item class="ml-2 p-2"><p class="font-bold text-l">Total:</p><p>&nbsp;${$cartTotal}</p></DropdownMenu.Item>
                        <DropdownMenu.Item class="ml-2 p-2"><Button>Checkout</Button></DropdownMenu.Item>
                {/if}
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    </div>
</nav>
<slot></slot>

