class LoginModel {
  email: string;
  mdp: string;

  constructor(email: string, mdp: string) {
    this.email = email;
    this.mdp = mdp;
  }
}

export default LoginModel;
