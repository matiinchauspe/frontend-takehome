const CollectionTransForm = (collection) => ({
  id: collection.id,
  value: collection.name,
});

const CollectionsDataAdapter = (data) => ({
  collections: data?.collections.map(CollectionTransForm) ?? null,
  continuation: data?.continuation ?? null,
});

export { CollectionsDataAdapter };
