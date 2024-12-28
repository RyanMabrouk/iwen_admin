export const writersEndpoints = {
  getwriters: () => `/writers`,
  getAllWriters: () => `/writers/all`,
  getwriter: (id: string) => `/writers/${id}`,
  updateWriter: (id: string) => `/writers/${id}`,
  createWriter: () => `/writers`,
  deleteWriter: (id: string) => `/writers/${id}`
};
