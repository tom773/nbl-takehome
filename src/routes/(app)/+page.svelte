<script lang="ts">
    import Product from './Product.svelte';
    import  * as Carousel from '$lib/components/ui/carousel/index';
    export let data: any;
</script>
<div class="w-screen h-2/3 flex flex-col m-auto items-center justify-center">
    <div>
        <h1 class="text-4xl py-5 text-white font-bold">Products</h1>
    </div>
    {#if data.items.length != 0}
        <Carousel.Root opts={{align: "start"}} class="relative flex sm:flex-col justify-center w-full lg:w-3/4">
            <Carousel.Content class="flex -ml-[-1] lg:-ml-[-4]">
                {#each data.items.products as product}
                    <Carousel.Item class="md:basis-1/2 lg:basis-1/3 pl-1 lg:pl-4 flex-shrink-0">
                        <Product product={product} />
                    </Carousel.Item>
                {/each}
            </Carousel.Content>
            <Carousel.Previous />
            <Carousel.Next />
        </Carousel.Root>
    {/if}
</div>
