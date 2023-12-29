import { TPUserType } from '@prisma/client';

export interface User {
  first_name: string;
  last_name: string;
  email: string;
  number: string;
  password: string;
  type: TPUserType;
}
