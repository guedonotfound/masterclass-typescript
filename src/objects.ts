// Type
type Order = {
  productId: string;
  price: number;
};

type User = {
  firstName: string;
  age: number;
  email: string;
  password?: string;
  orders: Order[];
};

const user: User = {
  firstName: "Gabriel",
  age: 27,
  email: "gabriel@email.com",
  orders: [{ productId: "1", price: 200 }],
};

const printLog = (message: string) => {};

printLog(user.password!);

// Unions
type Author = {
  books: string[];
};

const author: Author & User = {
  age: 20,
  email: "author@gmail.com",
  books: ["1"],
  firstName: "Jane",
  orders: [],
};

// Interfaces
interface UserInterface {
  readonly firstName: string;
  email: string;
}

const emailUser: UserInterface = {
  email: "blablabla@email.com",
  firstName: "Blablabla",
};

interface AuthorInterface {
  books: string[];
}

const newAuthor: UserInterface & AuthorInterface = {
  email: "author@author",
  firstName: "Gabriel",
  books: [],
};

type Grade = number | string;
const grade: Grade = 1;
