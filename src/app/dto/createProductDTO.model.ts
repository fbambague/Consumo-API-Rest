import { Product } from "../models/product.model";

export interface CreateProductDTO extends Omit<Product, 'id' | 'category'>{
  categoryId: number;
}
