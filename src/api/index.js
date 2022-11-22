const { VITE_APP_API_URL: baseUrl } = process.env;

/**
 * It takes an object with a url and a transform function, fetches the url, transforms the data, and
 * returns the transformed data
 * @returns A function that takes an object with a url and transform property (or not).
 */
export const fetcher = ({ url, queryParams = '', transform }) =>
  fetch(`${url}${queryParams}`).then((res) => {
    return res.json().then((data) => {
      const result = transform?.(data) ?? data;

      return result;
    });
  });

const SWRConfigValue = {
  fetcher,
};

// #Api urls
const collectionsUrl = `${baseUrl}/collections/v5`;
const tokensUrl = `${baseUrl}/tokens/v5`;

export { SWRConfigValue, collectionsUrl, tokensUrl };
