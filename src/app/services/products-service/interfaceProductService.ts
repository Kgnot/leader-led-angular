import {Product} from '../../models/product';

export interface ProductService {
  getProducts: () => Product[]
  getProductById: (id: number) => Product | null
  getProductsByCategory: (categoryId: number) => Product[]
  getProductsByTechnology: (technologyId: number) => Product[]
  getProductsByApplication: (applicationId: number) => Product[]

  //
  getTotalProducts(): number
}
