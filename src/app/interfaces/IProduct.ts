interface IVariation {
  size: string;
  quantity: number;
}

interface ICategory {
  name: string;
}

interface IBrand {
  name: string;
}

export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  brandId: string;
  color: string;
  image: number[];
  categoryId: number;
  gender: string;
  category: ICategory;
  variations: IVariation[];
  brand: IBrand;
}
