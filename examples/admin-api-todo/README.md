# Hydrogen-based TODO app using the Admin API

Hydrogen is a React framework and SDK that you can use to build fast and dynamic Shopify custom storefronts.

- [Check out the docs](https://shopify.dev/custom-storefronts/hydrogen)

- [Run this template on StackBlitz](https://stackblitz.com/github/Shopify/hydrogen/tree/stackblitz/templates/hello-world-js)

## Required Admin API token to `.env` 🔑

```
SHOPIFY_ADMIN_API_PRIVATE_TOKEN=shpat_....
SHOPIFY_ADMIN_API_VERSION=2022-04
SHOPIFY_ADMIN_API_DOMAIN=yourstore.myshopify.com
```

## Getting started

**Requirements:**

- Node.js version 16.5.0 or higher
- Yarn

```bash
npm init @shopify/hydrogen@latest --template hello-world-ts
```

Remember to update `hydrogen.config.js` with your shop's domain and Storefront API token!

## Building for production

```bash
yarn build
```

## Previewing a production build

To run a local preview of your Hydrogen app in an environment similar to Oxygen, build your Hydrogen app and then run `yarn preview`:

```bash
yarn build
yarn preview
```