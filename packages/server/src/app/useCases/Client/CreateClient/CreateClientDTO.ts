interface IAddressRequestDTO {
  zipcode: string;
  address: string;
  number: string;
  complement?: string;
  reference?: string;
  district: string;
  city: string;
  state: string;
  client: ICreateClientRequestDTO;
}

export interface ICreateClientRequestDTO {
  name: string;
  cpf: string;
  birthday: string;
  rg: string;
  phone: string;
  addresses: IAddressRequestDTO[];
}