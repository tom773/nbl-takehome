import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
    let items = await fetch('https://dummyjson.com/products?limit=10')
        .then((res) => res.json())
        .catch((err) => {
            console.error(err);
            return [];
        });
    return { items };
};
