export const ordersEndpoints = {
    getOrderId: (id:string) => `/orders/${id}`,
    getOrders: () => `/orders`,
    updateOrder: (id:string) => `/orders/${id}`,
    createOrder: () =>  `/orders`,
    deleteOrder: (id:string) => `/orders/${id}`,
    confirmOrder: (id:string) => `/orders/${id}/confirm`,
    cancelOrder: (id:string) => `/orders/${id}/cancel`,


}
