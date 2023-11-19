export interface User {
  correo: string,
  password: string,
}

export interface Pagination {
  limit: number,
  page: number,
}

export interface Employee {
  id: number;
  nombre: string;
  correo: string;
  cargo: string;
  departamento: string;
  oficina: string;
  estadoCuenta: string;
}