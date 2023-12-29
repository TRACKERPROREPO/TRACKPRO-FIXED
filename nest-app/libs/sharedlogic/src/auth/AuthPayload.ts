import { TPUserType } from '@prisma/client';

export interface AuthPayload {
  email: string;
  password: string;
  type: TPUserType;
}
