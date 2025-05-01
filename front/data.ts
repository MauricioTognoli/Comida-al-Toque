// "Pasta", "Burgers", "Sopas", "Ensaladas", "Sándwiches", "Cócteles", "Postres", "Bebidas"

interface iCategory {
  id: number;
  name: string;
  img: string;
}

export const categories: iCategory[] = [
  { id: 1, name: "Pasta", img: "/pasta.webp" },
  { id: 2, name: "Burgers", img: "/burger.jpg" },
  { id: 3, name: "Sopas", img: "/sopa.jpg" },
  { id: 4, name: "Ensaladas", img: "/ensalada.jpg" },
  { id: 5, name: "Sándwiches", img: "/sandwich.webp" },
  { id: 6, name: "Cócteles", img: "/coctel.avif" },
  { id: 7, name: "Postres", img: "/postre.webp" },
  { id: 8, name: "Bebidas", img: "/bebida.webp" },
];
