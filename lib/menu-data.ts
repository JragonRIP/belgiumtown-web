export type MenuItem = {
  name: string;
  description?: string;
  price: string;
  localFavorite?: boolean;
};

export type MenuCategoryData = {
  title: string;
  subtitle?: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategoryData[] = [
  {
    title: "Dinners",
    subtitle: "Hearty plates from the kitchen",
    items: [
      {
        name: "Tenderloin Tips",
        price: "$11.95",
      },
      {
        name: "Citrus Chicken",
        price: "$9.75",
      },
      {
        name: "Steamed Cod",
        price: "$10.75",
      },
      {
        name: "Shrimp Scampi",
        price: "$10.25",
      },
      {
        name: "Friday Fish Fry",
        description:
          "Weekly preparation: crispy, lemon, and all the fixings every Friday.",
        price: "See menu",
        localFavorite: true,
      },
    ],
  },
  {
    title: "Burgers",
    subtitle: "Served with seasoned fries",
    items: [
      {
        name: "Classic",
        price: "$5.50",
      },
      {
        name: "Bacon Cheeseburger",
        price: "$6.50",
      },
      {
        name: "Mushroom Swiss",
        price: "$6.50",
      },
      {
        name: "Western",
        price: "$6.50",
      },
      {
        name: "Belgian Burger",
        description:
          "Two patties, mushrooms, onions, green peppers, two cheeses: the house heavyweight.",
        price: "$9.00",
        localFavorite: true,
      },
    ],
  },
  {
    title: "Pizza",
    subtitle: "Stone baked favorites",
    items: [
      {
        name: "Cuban",
        description:
          "Savory layers inspired by the classic sandwich, with a Belgiumtown twist.",
        price: "Ask server",
        localFavorite: true,
      },
      {
        name: "Hot Honey Ricotta",
        description:
          "Sweet heat, creamy ricotta, and the crust we never rush.",
        price: "Ask server",
        localFavorite: true,
      },
    ],
  },
  {
    title: "Wraps",
    subtitle: "All wraps priced the same",
    items: [
      {
        name: "Chicken Fajita",
        price: "$7.95",
      },
      {
        name: "Chicken Tender",
        price: "$7.95",
      },
      {
        name: "Turkey Bacon",
        price: "$7.95",
      },
    ],
  },
  {
    title: "Sandwiches",
    subtitle: "Stacked and grilled",
    items: [
      {
        name: "Garlic Beef",
        price: "$8.25",
      },
      {
        name: "Grilled Club",
        price: "$6.95",
      },
      {
        name: "Grilled Chicken",
        price: "$6.75",
      },
      {
        name: "BLT",
        price: "$5.50",
      },
    ],
  },
];
