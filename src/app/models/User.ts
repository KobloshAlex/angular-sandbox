export interface User {
  firstName: string;
  lastName: string;
  age?: number;
  email: string
  image?: string;
  isActive?: boolean;
  balance?: number;
  registered?: Date;
  hide?:boolean
}
