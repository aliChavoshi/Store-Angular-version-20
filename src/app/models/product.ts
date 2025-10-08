// Product-related interfaces for DummyJSON-like response

export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface Review {
  rating: number;
  comment: string;
  date: string; // ISO string (e.g. "2024-05-23T08:56:21.618Z")
  reviewerName: string;
  reviewerEmail: string;
}

export interface Meta {
  createdAt?: string; // ISO string
  updatedAt?: string; // ISO string
  barcode?: string;
  qrCode?: string;
  [key: string]: unknown; // allow extra meta fields
}

export interface Product {
  id: number;
  title: string;
  description?: string;
  category?: string;
  price: number;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  tags?: string[];
  brand?: string;
  sku?: string;
  weight?: number;
  dimensions?: Dimensions;
  warrantyInformation?: string;
  shippingInformation?: string;
  availabilityStatus?: string;
  reviews?: Review[];
  returnPolicy?: string;
  minimumOrderQuantity?: number;
  meta?: Meta;
  thumbnail?: string | null;
  images?: string[];
  // Allow for any extra fields the API may return
  [extra: string]: unknown;
}

export interface ProductsListResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
