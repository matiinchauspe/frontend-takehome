const CollectionTransForm = (collection) => ({
  id: collection.id,
  value: collection.name,
});

const CollectionsDataAdapter = ({ collections }) => collections?.map(CollectionTransForm) ?? null;

export { CollectionsDataAdapter };
