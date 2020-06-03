export class User {
   public userId: string;
   public userUsername: string;
   public userPassword: string;
   public userFirstName: string;
   public userLastName: string;
   public userEmail: string;
   public userPhoneNumber: string;
   public token: string;

   constructor(userId: string, userUsername: string, userPassword: string, userFirstName: string, userLastName: string, userEmail: string, userPhoneNumber: string, token: string) {
       this.userId = userId;
       this.userUsername = userUsername;
       this.userPassword = userPassword;
       this.userFirstName = userFirstName;
       this.userLastName = userLastName;
       this.userEmail = userEmail;
       this.userPhoneNumber = userPhoneNumber;
       this.token = token;
   }
}