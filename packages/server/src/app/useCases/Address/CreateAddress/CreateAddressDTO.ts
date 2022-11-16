export interface ICreateAddressRequestDTO {
  zipcode: string;
  address: string;
  number: string;
  complement?: string;
  district: string;
  city: string;
  state: string;
  reference?: string;
}