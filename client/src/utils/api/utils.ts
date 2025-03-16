// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const formatResponse = (data: any) => {
  if (data.createdAt) {
    data.createdAt = new Date(data.createdAt);
  }
  if (data.updatedAt && data.updatedAt !== null) {
    data.updatedAt = new Date(data.updatedAt);
  }
  return data;
};
