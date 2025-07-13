export interface RawUser {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  company?: {
    department?: string;
    [key: string]: number | string | undefined;
  };
  [key: string]: null | string | number | object | undefined;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  department: string;
}
