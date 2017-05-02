export interface User {
  email: string;
  password: string;
  password_confirm: string;
  profile:{firstname:string,lastname:string};
}
