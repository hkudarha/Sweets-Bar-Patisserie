import img1 from "../../assets/cards/blue-orchids-bouquet-n-choco-cake-9813430co-A_0.avif";
import img2 from "../../assets/cards/blue-orchids-bouquet-n-choco-cake-9813430co-C_1.avif";
import img3 from "../../assets/cards/DSC_1243_0.jpg";
import img4 from "../../assets/cards/DSC_1964_0.avif";
import img5 from "../../assets/cards/engraved-acrylic-photo-lamp-B_0.avif";
import img6 from "../../assets/cards/jade-terrarium-9978940pl-D.avif";
import img7 from "../../assets/cards/luscious-rasmalai-pista-cream-cake-9815470ca-A.avif";
import img8 from "../../assets/cards/profuse-jade-terrarium-9969080pl-A_0.avif";
import img9 from "../../assets/cards/scrumptious-vanilla-cake-9993570ca-AAA.avif";
import img10 from "../../assets/cards/the-long-distance-hug-pillow-9788200sd-A_0.avif";

const products = [
  {
    id: 0,
    name: "Chocolate Cream Cake",
    category: "Chocolate",
    image: img1,
    price: 599,
    rating: 4.5,
    reviews: 120,
    delivery: "Same day delivery",
    weights:["500gm","1kg","1.0kg","2kg","3kg"],
    productContains: [
      "Flavour: Chocolate",
      "Shape: Round",
      "Type: Cream Cake",
      "Toppings: Dark Chocolate",
     
    ],
    description:
      "This round cream cake is full of chocolate sponge and chocolate cream. It’s perfect for every celebration like a birthday or anniversary, and everyone can enjoy it as it comes in an eggless only.",
    careInstructions: [
      "Cream cakes must be refrigerated.",
      "Fondant cakes should be kept in a cool, air-conditioned space—avoid the fridge.",
      "Bring the cake to room temperature before serving for best taste.",
      "Use a serrated knife for clean slices.",
      
    ]
  },
  {
    id: 1,
    name: "Strawberry Delight Cake",
    category: "Fruit",
    image: img2,
    price: 649,
    rating: 4.3,
    reviews: 85,
    delivery: "Same day delivery",
     weights:["500gm","1kg","1.0kg","2kg","3kg"],
    productContains: [
      "Flavour: Strawberry",
      "Shape: Heart",
      "Type: Cream Cake",
      "Toppings: Fresh Strawberries",
      "Net Quantity: 1",
      "Ingredients: Flour, Sugar, Milk, Strawberry Puree, Cream",
      "Allergens: Milk, Wheat (Gluten)"
    ],
    description: "A delightful strawberry cream cake to sweeten any moment.",
    careInstructions: [
      "Refrigerate immediately.",
      "Best consumed within 24 hours.",
      "Keep away from direct sunlight."
    ]
  },
  {
    id: 2,
    name: "Butterscotch Crunch Cake",
    category: "Butterscotch",
    image: img3,
    price: 599,
    rating: 4.4,
    reviews: 98,
    delivery: "Same day delivery",
     weights:["500gm","1kg","1.0kg","2kg","3kg"],
    productContains: [
      "Flavour: Butterscotch",
      "Shape: Round",
      "Type: Cream Cake",
      "Toppings: Caramel Crunch",
      "Net Quantity: 1",
      "Ingredients: Flour, Butter, Sugar, Cream, Caramel",
      "Allergens: Milk, Nuts, Wheat"
    ],
    description: "Rich butterscotch cream and crunchy caramel for every bite.",
    careInstructions: [
      "Keep refrigerated.",
      "Serve at room temperature for best taste."
    ]
  },
  {
    id: 3,
    name: "Black Forest Cake",
    category: "Chocolate",
    image: img4,
    price: 499,
    rating: 4.6,
    reviews: 150,
    delivery: "Same day delivery",
     weights:["500gm","1kg","1.0kg","2kg","3kg"],
    productContains: [
      "Flavour: Chocolate & Cherry",
      "Shape: Round",
      "Type: Cream Cake",
      "Toppings: Cherries & Chocolate Shavings",
      "Net Quantity: 1",
      "Ingredients: Flour, Cocoa, Cream, Cherries",
      "Allergens: Milk, Wheat, Nuts"
    ],
    description: "Classic black forest cake with rich cream and cherries.",
    careInstructions: [
      "Refrigerate and consume within 24 hours."
    ]
  },
  {
    id: 4,
    name: "Pineapple Cream Cake",
    category: "Fruit",
    image: img5,
    price: 549,
    rating: 4.2,
    reviews: 75,
    delivery: "Same day delivery",
     weights:["500gm","1kg","1.0kg","2kg","3kg"],
    productContains: [
      "Flavour: Pineapple",
      "Shape: Round",
      "Type: Cream Cake",
      "Toppings: Pineapple Slices",
      "Net Quantity: 1",
      "Ingredients: Flour, Pineapple, Cream, Sugar",
      "Allergens: Milk, Wheat"
    ],
    description: "Tropical pineapple flavors in a soft cream cake.",
    careInstructions: [
      "Keep cool and dry.",
      "Refrigerate after opening."
    ]
  },
  {
    id: 5,
    name: "Vanilla Cream Cake",
    category: "Vanilla",
    image: img6,
    price: 499,
    rating: 4.1,
    reviews: 60,
    delivery: "Same day delivery",
     weights:["500gm","1kg","1.0kg","2kg","3kg"],
    productContains: [
      "Flavour: Vanilla",
      "Shape: Square",
      "Type: Cream Cake",
      "Toppings: Cream Flowers",
      "Net Quantity: 1",
      "Ingredients: Flour, Sugar, Vanilla Extract, Cream",
      "Allergens: Milk, Wheat"
    ],
    description: "Simple and elegant vanilla cake for every occasion.",
    careInstructions: [
      "Store in fridge.",
      "Serve chilled."
    ]
  },
  {
    id: 6,
    name: "Red Velvet Cake",
    category: "Velvet",
    image: img7,
    price: 699,
    rating: 4.7,
    reviews: 132,
    delivery: "Same day delivery",
     weights:["500gm","1kg","1.0kg","2kg","3kg"],
    productContains: [
      "Flavour: Red Velvet",
      "Shape: Heart",
      "Type: Cream Cake",
      "Toppings: Red Velvet Crumbs",
      "Net Quantity: 1",
      "Ingredients: Flour, Cocoa, Cream Cheese, Sugar",
      "Allergens: Milk, Wheat"
    ],
    description: "Smooth cream cheese frosting on a vibrant red velvet base.",
    careInstructions: [
      "Keep refrigerated.",
      "Best enjoyed within 24 hours."
    ]
  },
  {
    id: 7,
    name: "Coffee Mocha Cake",
    category: "Coffee",
    image: img8,
    price: 649,
    rating: 4.4,
    reviews: 92,
    delivery: "Same day delivery",
     weights:["500gm","1kg","1.0kg","2kg","3kg"],
    productContains: [
      "Flavour: Coffee Mocha",
      "Shape: Round",
      "Type: Cream Cake",
      "Toppings: Coffee Beans",
      "Net Quantity: 1",
      "Ingredients: Flour, Coffee, Cocoa, Cream, Sugar",
      "Allergens: Milk, Wheat"
    ],
    description: "Perfect for coffee lovers with a hint of cocoa.",
    careInstructions: [
      "Refrigerate and avoid direct sunlight."
    ]
  },
  {
    id: 8,
    name: "Blueberry Cheesecake",
    category: "Cheesecake",
    image: img9,
    price: 799,
    rating: 4.8,
    reviews: 140,
    delivery: "Same day delivery",
     weights:["500gm","1kg","1.0kg","2kg","3kg"],
    productContains: [
      "Flavour: Blueberry",
      "Shape: Round",
      "Type: Cheesecake",
      "Toppings: Blueberry Sauce",
      "Net Quantity: 1",
      "Ingredients: Cream Cheese, Sugar, Blueberry, Biscuit Base",
      "Allergens: Milk, Wheat"
    ],
    description: "Tangy blueberry topping over creamy cheesecake.",
    careInstructions: [
      "Store in fridge.",
      "Do not freeze."
    ]
  },
  {
    id: 9,
    name: "Mango Cream Cake",
    category: "Fruit",
    image: img10,
    price: 699,
    rating: 4.5,
    reviews: 110,
    delivery: "Same day delivery",
     weights:["500gm","1kg","1.0kg","2kg","3kg"],
    productContains: [
      "Flavour: Mango",
      "Shape: Round",
      "Type: Cream Cake",
      "Toppings: Mango Slices",
      "Net Quantity: 1",
      "Ingredients: Flour, Sugar, Mango Pulp, Cream",
      "Allergens: Milk, Wheat"
    ],
    description: "Fresh mango flavor wrapped in a creamy cake.",
    careInstructions: [
      "Refrigerate immediately.",
      "Serve chilled."
    ]
  }
];

export default products;
