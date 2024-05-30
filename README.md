# Take Home Assignment Readme

## Setup

1. Clone the repository
```
$ git clone git@github.com:tom773/nbl-takehome.git
$ cd nbl-takehome
```

2. Install the dependencies
```
npm install
```
3. Run it
```
npm run dev --open
```
4. Optionally, run the tests I've written.
```
npx run test
```
## Project Details

This project is a simple web application that pulls data from the [Dummy API](https://dummyjson.com/products), displays the first 10 results on the home page, then allows the user to click on a product to view more details.

### Key Technologies Used
* [Svelte & SvelteKit](https://github.com/sveltejs) - Frontend, Server Side Rendering, and Routing Framework
* TypeScript - Business Logic Language
* [TailwindCSS](https://github.com/tailwindlabs/tailwindcss) - CSS Framework
* [Shadcn-Svelte](https://github.com/huntabyte/shadcn-svelte) - Amazing port of the Shadcn-ui library to Svelte
* [Playwright](https://github.com/microsoft/playwright) - Testing Framework

### Features
* Home Page
    * Displays the first 10 products from the Dummy API
    * Clicking "details" will take you to the product details page, the slug for which is the products SKU
* Product Details Page
    * Displays the product details for the product with the SKU in the URL
    * Details include basics like name, price, image, and description
    * There is some functionality for changing the styling based on stock levels.
    * Clicking "<-" will take you back to the home page
* Site Wide Features
    * Reactive Shopping Cart, using svelte stores - this is something I added on top of the requirements to demonstrate advanced state management

### To-Do Before Sunday
* [x] Implement the basic requirements - (fetching data, displaying it, and routing)
* [x] Add a shopping cart - (state management)
* [x] Add basic testing - (Testing)
* [ ] Add more advanced testing of the state management - (Testing)
* [x] Add useful, not overly verbose comments - (Documentation)
* [ ] Optimize for Mobile - (UI/UX)
* [ ] ARIA Roles & Keyboard Navigation - (Accessibility) 
* [ ] Deploy to Digital Ocean - (Deployment)
* [ ] Implement ii18n - (Internationalization)
