// endpoints.ts

// Función segura para obtener la URL
function getBaseUrl(): string {
  // En producción/vercel/netlify, usar variable de entorno
  if (typeof process !== 'undefined' && process.env && process.env["API_BASE_URL"]) {
    return process.env["API_BASE_URL"];
  }

  // Fallback para desarrollo local
  return 'http://localhost:3000';
}

const API_BASE_URL = getBaseUrl();

export const BRANDS = {
  GET_ALL: `${API_BASE_URL}/brands`,
  GET_ONE: (id: string | number) => `${API_BASE_URL}/brands/${id}`,
  CREATE: `${API_BASE_URL}/brands`,
};

export const COMMON = {
  GET_CATEGORIES: `${API_BASE_URL}/common/categories`,
  GET_APPLICATIONS: `${API_BASE_URL}/common/applications`,
  GET_TECHNOLOGIES: `${API_BASE_URL}/common/technologies`,
};

export const PRODUCTS = {
  GET_ALL: (filters?: {
    brandId?: number;
    categoryId?: number;
    technologyId?: number;
    applicationId?: number;
  }) => {
    const query = new URLSearchParams();
    if (filters) {
      if (filters.brandId) query.append('brandId', filters.brandId.toString());
      if (filters.categoryId) query.append('categoryId', filters.categoryId.toString());
      if (filters.technologyId) query.append('technologyId', filters.technologyId.toString());
      if (filters.applicationId) query.append('applicationId', filters.applicationId.toString());
    }
    const queryString = query.toString();
    return `${API_BASE_URL}/products${queryString ? `?${queryString}` : ''}`;
  },
  GET_ONE: (id: string | number) => `${API_BASE_URL}/products/${id}`,
  CREATE: `${API_BASE_URL}/products`,
};

export const CART = {
  SAVE: `${API_BASE_URL}/cart`,
  GET: (userId: string) => `${API_BASE_URL}/cart/${userId}`,
  CLEAR: (userId: string) => `${API_BASE_URL}/cart/${userId}`,
  ADD_ITEM: `${API_BASE_URL}/cart/items`,
  REMOVE_ITEM: (itemId: string) => `${API_BASE_URL}/cart/items/${itemId}`,
};

export const ORDERS = {
  CREATE: `${API_BASE_URL}/orders`,
  GET_ALL: (userId: string) => `${API_BASE_URL}/orders/user/${userId}`,
  GET_ONE: (id: string) => `${API_BASE_URL}/orders/${id}`,
};
