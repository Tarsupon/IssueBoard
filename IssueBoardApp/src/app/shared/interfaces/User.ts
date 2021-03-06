export class User {

  id:string;
  email:string;

  static fromBasicProfile(profile: gapi.auth2.BasicProfile): User {
    let user:User = new User();
    user.id = profile.getId();
    user.email = profile.getEmail();
    return user;
  }
}
