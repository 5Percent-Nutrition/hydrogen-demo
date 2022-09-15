import {
  useShopQuery,
  gql,
  CacheLong,
  type HydrogenRouteProps,
} from '@shopify/hydrogen';
import type {Shop} from '@shopify/hydrogen/storefront-api-types';

/*
  This route redirects you to your Shopify Admin
  by querying for your myshopify.com domain.
  Learn more about the redirect method here:
  https://developer.mozilla.org/en-US/docs/Web/API/Response/redirect
*/

export default function AdminRedirect({response}: HydrogenRouteProps) {
  const {data, errors} = useShopQuery<{
    shop: Shop;
  }>({
    query: SHOP_QUERY,
    cache: CacheLong(),
  });

  if (!data || errors) {
    throw new Error(
      `There were either errors or no data returned for the query. ${
        errors?.length &&
        `Errors: ${errors.map((err) => err.message).join('. ')}`
      }`,
    );
  }

  const {url} = data.shop.primaryDomain;
  return response.redirect(`${url}/admin`);
}

const SHOP_QUERY = gql`
  query {
    shop {
      primaryDomain {
        url
      }
    }
  }
`;
