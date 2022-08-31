export interface Game {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  genreId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface User {
  id?: string;
  name: string;
  email: string;
  password?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Bag {
  id?: string;
  number: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Genre {
  id?: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Order {
  id?: string;
  userId: string;
  bagNumber?: number;
  createdAt?: Date;
}

export interface OrderToGame {
  id?: string;
  gameId: string;
  orderId: string;
  createdAt?: Date;
}

export interface Favorite {
  id?: string;
  userId: string;
  gameId: string;
  favoritedAt?: Date;
}
