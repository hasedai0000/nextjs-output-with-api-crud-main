export type UserType = {
  id: number;
  name: string;
  email: string;
};

export type AuthResponseType = {
  user: UserType;
  token: string;
};
