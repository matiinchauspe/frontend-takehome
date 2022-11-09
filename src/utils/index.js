// @Helpers
export const fetcher = (...args) => fetch(...args).then((res) => res.json());

// @Theme
export * from './theme';
// @Date
export * from './date';
