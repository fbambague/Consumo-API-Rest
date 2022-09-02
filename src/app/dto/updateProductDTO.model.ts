import { CreateProductDTO } from "./createProductDTO.model";

export interface UpdateProductDTO extends Partial<CreateProductDTO>{}
