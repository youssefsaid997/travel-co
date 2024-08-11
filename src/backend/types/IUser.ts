type IUser = {
  id?: string;
  username: string;
  age: number;
  email: string;
  password: string;
  role: ["admin", "user"];
};

export default IUser;
