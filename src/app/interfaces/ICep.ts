export type ICepDate = {
  fromCep: string; // local partida
  toCep: string; // local recebimento
  quantity: number;
};

type Company = {
  id: number;
  name: string;
  picture: string;
};

type DeliveryRange = {
  min: number;
  max: number;
};

type AdditionalServices = {
  receipt: boolean;
  own_hand: boolean;
  collect: boolean;
};

type ShippingOption = {
  id: number;
  name: string;
  price?: string;
  custom_price?: string;
  discount?: string;
  currency?: string;
  delivery_time?: number;
  delivery_range?: DeliveryRange;
  custom_delivery_time?: number;
  custom_delivery_range?: DeliveryRange;
  additional_services?: AdditionalServices;
  company: Company;
  error?: string;
};

export type IOutputCep = {
  resultCepCalculator: ShippingOption[];
};

export type cepState = {
  name: string;
  price: string;
  deliveryTime: {
    min: number;
    max: number
  }

}
