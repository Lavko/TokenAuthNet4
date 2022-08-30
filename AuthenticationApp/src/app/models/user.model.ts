export class User {
  public name: string;
  public email: string;
  public roles: string[];
  public token: string;

  constructor(name: string, email: string, roles: string[], token: string) {
    this.name = name;
    this.email = email;
    this.roles = roles;
    this.token = token;
  }
}
