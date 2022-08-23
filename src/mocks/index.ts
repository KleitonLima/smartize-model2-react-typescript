import * as T from "../types/index.js";

export const mockedUsers: T.User[] = [
  {
    id: "af38cbe3-003c-4fbf-aeb6-be144667d11b",
    name: "Kleiton",
    email: "kleiton@blue.com",
    password: "$2y$08$SixkccdRopP1LMejdRwrQOZz0V2TaTy3t1hL2l5euc.hiIaBDJbPS",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const mockedBags: T.Bag[] = [
  {
    id: "ef81e8bc-e9f5-4213-812c-f18c58b902c2",
    number: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "771c4309-7ec2-43c3-848e-4a7449f702ae",
    number: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "ce315e82-57d7-4a94-93f3-b2d70a231e5e",
    number: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const mockedGenres: T.Genre[] = [
  {
    id: "dd5e690e-0c70-4475-8de7-af27d962a335",
    name: "Ação",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "e1322c64-8815-4d7c-8284-f6930a605dd1",
    name: "Ação e aventura",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "fd418b99-b09b-4962-9f08-cdc23b7bc867",
    name: "Simulação",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const mockedOrders: T.Order[] = [
  {
    id: "489b8f88-0cb1-49f1-b8f2-529d82fc3f80",
    userId: "af38cbe3-003c-4fbf-aeb6-be144667d11b",
    bagNumber: 1,
    createdAt: new Date(),
  },
];

export const mockedOrdersToGame: T.OrderToGame[] = [
  {
    id: "c895593b-6908-4684-98dc-14c51e6d4eec",
    gameId: "f4d8339c-ffe1-45d0-92f1-14f2968bdd7f",
    orderId: "489b8f88-0cb1-49f1-b8f2-529d82fc3f80",
    createdAt: new Date(),
  },
  {
    id: "d51e4578-77a5-40b1-a9d1-6d40f911f20b",
    gameId: "b2083db3-19ed-4406-a419-ee1d5b5b2949",
    orderId: "489b8f88-0cb1-49f1-b8f2-529d82fc3f80",
    createdAt: new Date(),
  },
  {
    id: "bba44c6a-3623-4ee6-a3d6-ea649ae7e641",
    gameId: "c8b63a2a-7b92-4dcd-bcde-6c9091ef526f",
    orderId: "489b8f88-0cb1-49f1-b8f2-529d82fc3f80",
    createdAt: new Date(),
  },
];

export const mockedFavorites: T.Favorite[] = [
  {
    id: "b07b1250-3e00-4a44-8d00-c389c93798fa",
    userId: "af38cbe3-003c-4fbf-aeb6-be144667d11b",
    gameId: "f4d8339c-ffe1-45d0-92f1-14f2968bdd7f",
    favoritedAt: new Date(),
  },
  {
    id: "e8202f20-a33e-4bbc-8183-4bab3e7bdca4",
    userId: "b2083db3-19ed-4406-a419-ee1d5b5b2949",
    gameId: "f4d8339c-ffe1-45d0-92f1-14f2968bdd7f",
    favoritedAt: new Date(),
  },
  {
    id: "8a7f08c4-1a0e-47b3-9971-97211077fa41",
    userId: "af38cbe3-003c-4fbf-aeb6-be144667d11b",
    gameId: "c8b63a2a-7b92-4dcd-bcde-6c9091ef526f",
    favoritedAt: new Date(),
  },
];
