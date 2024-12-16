export const writersEndpoints = {
    getwriters: () => `/writers`,
    getwriter: (id:string) => `/writers/${id}`,
    updateWriter: (id:string) => `/writers/${id}`,
    createWriter: () =>  `/writers`,
    deleteWriter: (id:string) => `/writers/${id}`,
}
