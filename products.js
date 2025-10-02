const products = [
  {
    id: 1,
    name: "YSL Black Bag",
    price: "PKR 2450/-",
    image: "content/bags/DSC00169.webp",
    images: [
      "content/bags/DSC00169.webp",
      "content/bags/DSC00170.webp",
      "content/bags/DSC00171.webp",
    ],
    shortDescription:
      "Black YSL Bag, deep textured, perfect for daily and occasional use.",
    description:
      "Black Colored YSL Bag, Deep textured surface, Perfect for daily and occasional use. Spacious interior, premium hardware, and a timeless design make it suitable for both casual and formal outings.",
    inStock: 1,
  },
  {
    id: 2,
    name: "Light Pastel Blue YSL bag",
    price: "PKR 2450/-",
    image: "content/bags/DSC00163.webp",
    images: [
      "content/bags/DSC00167.webp",
      "content/bags/DSC00168.webp",
      "content/bags/DSC00165.webp",
    ],
    shortDescription: "Pastel Blue YSL Bag, textured, stylish and versatile.",
    description:
      "Light Pastel Blue YSL Bag, Deep textured surface, Perfect for daily and occasional use. Features a soft pastel tone, durable material, and elegant finish for any occasion.",
    inStock: 1,
  },
  {
    id: 3,
    name: "Marroon YSL Bag",
    price: "PKR 2450/-",
    image: "content/bags/DSC00176.webp",
    images: [
      "content/bags/DSC00176.webp",
      "content/bags/DSC00177.webp",
      "content/bags/DSC00178.webp",
    ],
    shortDescription: "Maroon YSL Bag, textured, ideal for all events.",
    description:
      "Maroon Colored YSL Bag, Deep textured surface, Perfect for daily and occasional use. The rich maroon color adds a touch of luxury to your wardrobe.",
    inStock: 1,
  },
  {
    id: 4,
    name: "C K Red Bag",
    price: "PKR 2000/-",
    image: "content/bags/DSC00180.webp",
    images: [
      "content/bags/DSC00179.webp",
      "content/bags/DSC00181.webp",
      "content/bags/DSC00182.webp",
    ],
    shortDescription: "CK Red Bag, vibrant and trendy for summer.",
    description:
      "The CK Red Bag is crafted for those who love bold colors and practical design. Spacious, lightweight, and easy to carry.",
    inStock: 1,
  },
  {
    id: 5,
    name: "C K Black Bag",
    price: "PKR 2000/-",
    image: "content/bags/DSC00172.webp",
    images: [
      "content/bags/DSC00172.webp",
      "content/bags/DSC00174.webp",
      "content/bags/DSC00175.webp",
    ],
    shortDescription: "Black Medium Bag to elevate your fashion experience. ",
    description:
      "Black CK Bag, Made from premium materials, Smooth exterior with spacious interiour, Perfect for daily use or special occasions.",
    inStock: 1,
  },
  {
    id: 6,
    name: "C K Mustard Bag",
    price: "PKR 2500/-",
    image: "content/bags/DSC00185.webp",
    images: [
      "content/bags/DSC00185.webp",
      "content/bags/DSC00186.webp",
      "content/bags/DSC00187.webp",
    ],
    sizeChart: "content/sizechart-blazer.png",
    shortDescription: "C K Mustard bag, stylish and professional.",
    description:
      "C K Mustard bag, perfect for daily use. This stylish and professional bag is designed to hold your essentials while adding a touch of sophistication to your outfit. The mustard color is trendy and eye-catching.",
    inStock: 1,
  },
  {
    id: 7,
    name: "Choholate Brown clutch",
    price: "PKR 1050/-",
    image: "content/bags/DSC00190.webp",
    images: ["content/bags/DSC00190.webp", "content/bags/DSC00191.webp"],
    shortDescription: "Choholate Brown clutch, stylish and compact.",
    description:
      "Choholate Brown clutch, perfect for evening outings. This compact clutch is designed to hold your essentials while adding a touch of elegance to your outfit.",
    inStock: 1,
  },
  {
    id: 8,
    name: "Pink clutch",
    price: "PKR 1050/-",
    image: "content/bags/DSC00192.webp",
    images: ["content/bags/DSC00192.webp", "content/bags/DSC00193.webp"],
    sizeChart: "content/sizechart-blazer.png",
    shortDescription: "Pink clutch, elegant and stylish.",
    description:
      "Pink clutch, perfect for evening outings. This elegant clutch is designed to hold your essentials while adding a touch of sophistication to your outfit.",
    inStock: 1,
  },
  {
    id: 9,
    name: "Grey Clutch",
    price: "PKR 1050/-",
    image: "content/bags/DSC00188.webp",
    images: ["content/bags/DSC00188.webp", "content/bags/DSC00189.webp"],
    shortDescription: "Grey Clutch, sleek and modern.",
    description:
      "Grey Clutch, perfect for evening outings. This sleek and modern clutch is designed to hold your essentials while adding a touch of elegance to your outfit.",
    inStock: 1,
  },
  {
    id: 10,
    name: "Red Clutch",
    price: "PKR 1050/-",
    image: "content/bags/DSC00196.webp",
    images: ["content/bags/DSC00196.webp", "content/bags/DSC00197.webp"],
    shortDescription: "Red Clutch, bold and stylish.",
    description:
      "Red Clutch, perfect for evening outings. This bold and stylish clutch is designed to hold your essentials while adding a pop of color to your outfit.",
    inStock: 1,
  },
  {
    id: 11,
    name: "Brown Clutch with stripes",
    price: "PKR 950/-",
    image: "content/bags/DSC00194.webp",
    images: ["content/bags/DSC00194.webp", "content/bags/DSC00195.webp"],
    shortDescription: "Brown Clutch with stripes, chic and trendy.",
    description:
      "Brown Clutch with stripes, perfect for evening outings. This chic and trendy clutch is designed to hold your essentials while adding a stylish touch to your outfit.",
    inStock: 1,
  },
  {
    id: 12,
    name: "Red purse",
    price: "PKR 700/-",
    image: "content/bags/DSC00198.webp",
    images: ["content/bags/DSC00198.webp", "content/bags/DSC00199.webp"],
    shortDescription: "Red Purse, Sleek and Compact.",
    description:
      "Red Purse, perfect for daily use. This sleek and compact purse is designed to hold your essentials while adding a touch of elegance to your everyday look. Red textured exterior with a Soft Pink interior, this purse is both stylish and functional.",
    inStock: 1,
  },
  {
    id: 13,
    name: "Greenish Black purse",
    price: "PKR 700/-",
    image: "content/bags/DSC00200.webp",
    images: ["content/bags/DSC00200.webp", "content/bags/DSC00201.webp"],
    shortDescription: "Greenish Black Purse, elegant and versatile.",
    description:
      "Greenish Black Purse, perfect for daily use. This elegant and versatile purse is designed to hold your essentials while adding a touch of sophistication to your outfit. The unique greenish-black color makes it a standout accessory.",
    inStock: 1,
  },
  {
    id: 14,
    name: "Mustard purse",
    price: "PKR 700/-",
    image: "content/bags/DSC00202.webp",
    images: ["content/bags/DSC00202.webp", "content/bags/DSC00203.webp"],
    shortDescription: "Mustard Purse, stylish and functional.",
    description:
      "Mustard Purse, perfect for daily use. This stylish and functional purse is designed to hold your essentials while adding a pop of color to your outfit. The mustard hue is trendy and eye-catching.",
    inStock: 1,
  },
  {
    id: 15,
    name: "Pink Textured purse",
    price: "PKR 750/-",
    image: "content/bags/DSC00204.webp",
    images: ["content/bags/DSC00204.webp", "content/bags/DSC00205.webp"],
    shortDescription: "Pink Textured Purse, chic and elegant.",
    description:
      "Pink Textured Purse, perfect for daily use. This chic and elegant purse is designed to hold your essentials while adding a touch of style to your outfit. The textured finish adds a unique flair.",
    inStock: 1,
  },
  {
    id: 16,
    name: "Grey purse",
    price: "PKR 700/-",
    image: "content/bags/DSC00206.webp",
    images: ["content/bags/DSC00206.webp", "content/bags/DSC00207.webp"],
    shortDescription: "Grey Purse, spacious and elegant.",
    description:
      "Grey Purse, perfect for daily use. This spacious and elegant purse is designed to hold your essentials while adding a touch of sophistication to your outfit. The grey color is versatile and timeless.",
    inStock: 1,
  },
  {
    id: 18,
    name: "Orange MK Purse",
    price: "PKR 1100/-",
    image: "content/bags/DSC00213.webp",
    images: [
      "content/bags/DSC00213.webp",
      "content/bags/DSC00214.webp",
      "content/bags/DSC00227.webp",
    ],
    shortDescription: "Orange Textured MK Purse, modern and stylish.",
    description:
      "Orange Textured MK Purse, perfect for daily use. This modern and stylish purse is designed to hold your essentials while adding a vibrant touch to your outfit. The textured finish enhances its appeal.",
    inStock: 1,
  },
  {
    id: 19,
    name: "Red YSL Clutch",
    price: "PKR 1100/-",
    image: "content/bags/DSC00218.webp",
    images: [
      "content/bags/DSC00218.webp",
      "content/bags/DSC00219.webp",
      "content/bags/DSC00220.webp",
    ],
    shortDescription: "Red YSL Clutch, elegant and compact.",
    description:
      "Red YSL Clutch, perfect for evening outings. This elegant and compact clutch is designed to hold your essentials while adding a touch of luxury to your outfit. The red color is bold and eye-catching.",
    inStock: 1,
  },
  {
    id: 20,
    name: "Black YSL Clutch",
    price: "PKR 1100/-",
    image: "content/bags/DSC00221.webp",
    images: [
      "content/bags/DSC00221.webp",
      "content/bags/DSC00222.webp",
      "content/bags/DSC00220.webp",
    ],
    shortDescription: "Black YSL Clutch, casual and spacious. ",
    description:
      "Black YSL Clutch, perfect for casual outings. This spacious clutch is designed to hold your essentials while adding a touch of elegance to your everyday look. The black color is versatile and timeless.",
    inStock: 1,
  },
  {
    id: 21,
    name: "Light Pastel Blue YSL Clutch",
    price: "PKR 1100/-",
    image: "content/bags/DSC00233.webp",
    images: ["content/bags/DSC00233.webp", "content/bags/DSC00233.webp"],
    shortDescription: "Light Pastel Blue YSL Clutch, luxurious and soft.",
    description:
      "Light Pastel Blue YSL Clutch, perfect for evening outings. This luxurious and soft clutch is designed to hold your essentials while adding a touch of elegance to your outfit. The pastel blue color is soothing and stylish.",
    inStock: 1,
  },
  {
    id: 22,
    name: "White Grey LV",
    price: "PKR 1700/-",
    image: "content/bags/DSC00229.webp",
    images: [
      "content/bags/DSC00229.webp",
      "content/bags/DSC00230.webp",
      "content/bags/DSC00231.webp",
    ],
    shortDescription:
      "Checkered bag in white and grey, modern and lightweight.",
    description:
      "Checkered bag in white and grey, modern and lightweight. This bag is designed for everyday use, featuring a spacious interior and a stylish checkered pattern that adds a contemporary touch to your outfit.",
    inStock: 1,
  },
  {
    id: 23,
    name: "Chocolate Brown LV",
    price: "PKR 1700/-",
    image: "content/bags/DSC00223.webp",
    images: [
      "content/bags/DSC00223.webp",
      "content/bags/DSC00224.webp",
      "content/bags/DSC00231.webp",
    ],
    shortDescription: "Chocolate brown clutch for everyday use",
    description:
      "Chocolate brown clutch, perfect for everyday use. This stylish clutch features a rich chocolate brown color, spacious interior, and a sleek design that complements any outfit. Ideal for carrying your essentials with elegance.",
    inStock: 1,
  },
  {
    id: 24,
    name: "MK Pink Clutch",
    price: "PKR 1100/-",
    image: "content/bags/DSC00225.webp",
    images: [
      "content/bags/DSC00225.webp",
      "content/bags/DSC00226.webp",
      "content/bags/DSC00227.webp",
    ],
    shortDescription: "Pink MK Clutch with classic design.",
    description:
      "Pink MK Clutch, perfect for evening outings. This clutch features a classic design with a soft pink color, spacious interior, and a stylish finish that adds a touch of elegance to your outfit.",
    inStock: 1,
  },
  {
    id: 25,
    name: "Emerald Green Prada",
    price: "PKR 4500/-",
    image: "content/bags/DSC00326.webp",
    images: [
      "content/bags/DSC00326.webp",
      "content/bags/DSC00328.webp",
      "content/bags/DSC00327.webp",
      "content/bags/DSC00325.webp",
    ],
    shortDescription: "Emerald Green Prada, luxurious and spacious.",
    description:
      "Emerald Green Prada, perfect for daily and occasional use. This luxurious bag features a rich emerald green color, spacious interior, and premium hardware that adds a touch of sophistication to your outfit.",
    inStock: 1,
  },
  {
    id: 26,
    name: "Black and Blue Dior",
    price: "PKR 4500/-",
    image: "content/bags/DSC00291.webp",
    images: [
      "content/bags/DSC00291.webp",
      "content/bags/DSC00291.webp",
      "content/bags/DSC00292.webp",
      "content/bags/DSC00293.webp",
      "content/bags/DSC00295.webp",
      "content/bags/DSC00296.webp",
      "content/bags/DSC00297.webp",
    ],
    shortDescription: "Black and Blue Dior, elegant and versatile.",
    description:
      "Black and Blue Dior, perfect for daily and occasional use. This elegant bag features a striking black and blue color combination, spacious interior, and premium hardware that adds a touch of sophistication to your outfit.",
    inStock: 1,
  },
  {
    id: 27,
    name: "Black Prada",
    price: "PKR 4500/-",
    image: "content/bags/DSC00303.webp",
    images: [
      "content/bags/DSC00303.webp",
      "content/bags/DSC00304.webp",
      "content/bags/DSC00305.webp",
      "content/bags/DSC00307.webp",
    ],
    shortDescription: "Black Prada, timeless and chic.",
    description:
      "Black Prada, perfect for daily and occasional use. This timeless bag features a classic black color, spacious interior, and premium hardware that adds a touch of elegance to your outfit.",
    inStock: 1,
  },
  {
    id: 28,
    name: "Cream and Brown Dior",
    price: "PKR 4500/-",
    image: "content/bags/DSC00308.webp",
    images: [
      "content/bags/DSC00308.webp",
      "content/bags/DSC00309.webp",
      "content/bags/DSC00310.webp",
    ],
    shortDescription: "Cream and Brown Dior, elegant and versatile.",
    description:
      "Cream and Brown Dior, perfect for daily and occasional use. This elegant bag features a sophisticated cream and brown color combination, spacious interior, and premium hardware that adds a touch of luxury to your outfit.",
    inStock: 1,
  },
  {
    id: 29,
    name: "Red Clutch",
    price: "PKR 3800/-",
    image: "content/bags/DSC00311.webp",
    images: [
      "content/bags/DSC00311.webp",
      "content/bags/DSC00312.webp",
      "content/bags/DSC00313.webp",
      "content/bags/DSC00314.webp",
    ],
    shortDescription: "Medium Red Clutch, bold and stylish.",
    description:
      "Medium Red Clutch, perfect for evening outings. This bold and stylish clutch is designed to hold your essentials while adding a pop of color to your outfit. The red color is vibrant and eye-catching.",
    inStock: 1,
  },
  {
    id: 30,
    name: "Orange Tote Bag ",
    price: "PKR 3800/-",
    image: "content/bags/DSC00315.webp",
    images: [
      "content/bags/DSC00315.webp",
      "content/bags/DSC00316.webp",
      "content/bags/DSC00317.webp",
      "content/bags/DSC00318.webp",
      "content/bags/DSC00319.webp",
      "content/bags/DSC00320.webp",
    ],
    shortDescription: "Orange Tote Bag, vibrant and practical.",
    description:
      "Orange Tote Bag, perfect for daily use. This vibrant and practical tote bag is designed to hold your essentials while adding a pop of color to your outfit. the beautifull ornaments elevate your outfit to another level The spacious interior and sturdy handles make it ideal for everyday activities.",
    inStock: 1,
  },
  {
    id: 31,
    name: "Golden Clutch ",
    price: "PKR 2600/-",
    image: "content/bags/DSC00321.webp",
    images: [
      "content/bags/DSC00321.webp",
      "content/bags/DSC00322.webp",
      "content/bags/DSC00323.webp",
      "content/bags/DSC00324.webp",
    ],
    shortDescription: "Golden Clutch, glamorous and chic.",
    description:
      "Golden Clutch, perfect for evening outings. This glamorous and chic clutch is designed to hold your essentials while adding a touch of luxury to your outfit. The golden color is radiant and eye-catching.",
    inStock: 1,
  },
  {
    id: 32,
    name: "Skin and Brown Michael kors",
    price: "PKR 4200/-",
    image: "content/bags/DSC00330.webp",
    images: [
      "content/bags/DSC00330.webp",
      "content/bags/DSC00331.webp",
      "content/bags/DSC00332.webp",
      "content/bags/DSC00334.webp",
    ],
    shortDescription: "Skin and Brown Michael kors, elegant and versatile.",
    description:
      "Skin and Brown Michael kors, perfect for daily and occasional use. This elegant bag features a sophisticated skin and brown color combination, spacious interior, and premium hardware that adds a touch of luxury to your outfit.",
    inStock: 1,
  },
  {
    id: 33,
    name: "Large copper colored bag",
    price: "PKR 4000/-",
    image: "content/bags/DSC00335.webp",
    images: [
      "content/bags/DSC00321.webp",
      "content/bags/DSC00322.webp",
      "content/bags/DSC00323.webp",
      "content/bags/DSC00324.webp",
    ],
    shortDescription: "Golden Clutch, glamorous and chic.",
    description:
      "Golden Clutch, perfect for evening outings. This glamorous and chic clutch is designed to hold your essentials while adding a touch of luxury to your outfit. The golden color is radiant and eye-catching.",
    inStock: 1,
  },
  {
    id: 42,
    name: "Small black purse",
    price: "PKR 700/-",
    image: "content/bags/DSC00342.webp",
    images: [
      "content/bags/DSC00342.webp",
      "content/bags/DSC00341.webp",
      "content/bags/DSC00340.webp",
    ],
    shortDescription: "Small black purse, sleek and compact.",
    description:
      "Small black purse, perfect for daily use. This sleek and compact purse is designed to hold your essentials while adding a touch of elegance to your everyday look. The black color is versatile and timeless.",
    inStock: 1,
  },
  {
    id: 34,
    name: "Brown Leather Wallet Smooth texture, Big size",
    price: "PKR 2850/-",
    image: "content/bags/DSC00524.JPG",
    images: [
      "content/bags/DSC00524.JPG",
      "content/bags/DSC00525.JPG",
      "content/bags/DSC00527.JPG",
      "content/bags/DSC00528.JPG",
      "content/bags/DSC00541.JPG",
    ],
    shortDescription:
      "Large brown wallet with smooth finish, spacious and refined.",
    description:
      "Upgrade your accessories with this large brown leather wallet. Its smooth finish and generous size make it ideal for those who need extra space without sacrificing style. Multiple pockets and a refined look ensure you stay organized and elegant.",
    inStock: 1,
  },

  {
    id: 35,
    name: "Brown Leather Wallet Grainy texture",
    price: "PKR 1550/-",
    image: "content/bags/DSC00500.JPG",
    images: [
      "content/bags/DSC00500.JPG",
      "content/bags/DSC00501.JPG",
      "content/bags/DSC00504.JPG",
      "content/bags/DSC00534.JPG",
    ],
    shortDescription: "Grainy brown leather wallet, rustic and bold.",
    description:
      "Embrace rustic charm with this grainy brown leather wallet. Its bold texture and sturdy build make it perfect for everyday use. Enjoy ample space for cards and cash, all wrapped in a warm brown hue that stands out.",
    inStock: 1,
  },
  {
    id: 36,
    name: "Black Leather Wallet Smooth texture with zipper",
    price: "PKR 1500/-",
    image: "content/bags/DSC00505.JPG",
    images: [
      "content/bags/DSC00505.JPG",
      "content/bags/DSC00507.JPG",
      "content/bags/DSC00507.JPG",
    ],
    shortDescription: "Black leather wallet with zipper, secure and stylish.",
    description:
      "Keep your valuables safe with this black leather wallet featuring a secure zipper. Its smooth texture and compact design make it ideal for those on the go. The classic black color ensures it matches any outfit, day or night.",
    inStock: 1,
  },
  {
    id: 37,
    name: "Black Leather Wallet Grainy texture",
    price: "PKR 1550/-",
    image: "content/bags/DSC00508.JPG",
    images: [
      "content/bags/DSC00508.JPG",
      "content/bags/DSC00509.JPG",
      "content/bags/DSC00511.JPG",
      "content/bags/DSC00533.JPG",
    ],
    shortDescription: "Textured black leather wallet, bold and durable.",
    description:
      "Make a statement with this textured black leather wallet. Its bold grain and durable construction are perfect for those who value both style and strength. Plenty of room for your essentials, all in a wallet that lasts.",
    inStock: 1,
  },
  {
    id: 38,
    name: "Black Leather Wallet Grainy texture, Small size",
    price: "PKR 1550/-",
    image: "content/bags/DSC00514.JPG",
    images: [
      "content/bags/DSC00514.JPG",
      "content/bags/DSC00515.JPG",
      "content/bags/DSC00517.JPG",
      "content/bags/DSC00537.JPG",
    ],
    shortDescription: "Compact black wallet, textured and handy.",
    description:
      "Enjoy convenience with this compact black wallet. Its textured leather finish and small size make it easy to carry, while still offering enough space for your cards and cash. Perfect for minimalists who love a touch of luxury.",
    inStock: 1,
  },
  {
    id: 39,
    name: "Brown Leather Wallet Grainy texture, Big size",
    price: "PKR 2000/-",
    image: "content/bags/DSC00517.JPG",
    images: [
      "content/bags/DSC00517.JPG",
      "content/bags/DSC00519.JPG",
      "content/bags/DSC00520.JPG",
      "content/bags/DSC00536.JPG",
    ],
    shortDescription: "Large brown wallet, textured and very spacious.",
    description:
      "Go big with this large brown wallet. Its textured leather and spacious interior are perfect for those who need extra room. The warm brown color and sturdy build make it a reliable companion for everyday use.",
    inStock: 1,
  },
  {
    id: 40,
    name: "Brown Leather Wallet Grainy texture, Full leather",
    price: "PKR 2000/-",
    image: "content/bags/DSC00521.JPG",
    images: [
      "content/bags/DSC00521.JPG",
      "content/bags/DSC00522.JPG",
      "content/bags/DSC00523.JPG",
      "content/bags/DSC00535.JPG",
    ],
    shortDescription: "Full-grain brown leather wallet, classic and robust.",
    description:
      "Experience timeless style with this full-grain brown leather wallet. Crafted for durability and elegance, it features a rich texture and spacious compartments for all your essentials. The perfect blend of luxury and practicality for everyday use.",
    inStock: 1,
  },
  {
    id: 41,
    name: "Black Leather Wallet smooth texture, FULL leather",
    price: "PKR 2000/-",
    image: "content/bags/DSC00492.JPG",
    images: [
      "content/bags/DSC00492.JPG",
      "content/bags/DSC00493.JPG",
      "content/bags/DSC00496.JPG",
      "content/bags/DSC00539.JPG",
    ],
    shortDescription: "Smooth black leather wallet, sleek and modern.",
    description:
      "Discover the elegance of this smooth black leather wallet. Its modern design and soft texture make it a must-have for those who appreciate style and practicality. Multiple compartments keep your essentials organized, while the classic black finish suits any occasion.",
    inStock: 1,
  },
  {
    id: 42,
    name: "Black Leather Wallet smooth texture, FULL leather",
    price: "PKR 2000/-",
    image: "content/bags/DSC00492.JPG",
    images: [
      "content/bags/DSC00492.JPG",
      "content/bags/DSC00493.JPG",
      "content/bags/DSC00496.JPG",
      "content/bags/DSC00539.JPG",
    ],
    shortDescription: "Smooth black leather wallet, sleek and modern.",
    description:
      "Discover the elegance of this smooth black leather wallet. Its modern design and soft texture make it a must-have for those who appreciate style and practicality. Multiple compartments keep your essentials organized, while the classic black finish suits any occasion.",
    inStock: 1,
  },
  {
    id: 43,
    name: "Brown File bag, Very durable.",
    price: "PKR 3800/-",
    image: "content/bags/0006.jpeg",
    images: [
      "content/bags/0006.jpeg",
      "content/bags/0007.jpeg",
      "content/bags/0008.jpeg",
    ],
    shortDescription: "Brown File bag for office use, very spacious.",
    description:
      "Brown File bag, perfect for office use. This spacious bag is designed to hold your documents, laptop, and other essentials while adding a touch of professionalism to your outfit. The premium construction ensures durability and a classic look.",
    inStock: 1,
  },
  {
    id: 44,
    name: "Blue Bagpack for everyday use, very durable.",
    price: "PKR 3800/-",
    image: "content/bags/0009.jpeg",
    images: [
      "content/bags/0009.jpeg",
      "content/bags/0010.jpeg",
      "content/bags/0011.jpeg",
    ],
    shortDescription:
      "Blue bagpack, very spacious and great for college and uviversity use.",
    description:
      "Blue Bagpack, perfect for everyday use. This spacious bagpack is designed to hold your books, laptop, and other essentials while adding a touch of style to your outfit. The durable construction ensures it can handle daily wear and tear.",
    inStock: 1,
  },
  {
    id: 45,
    name: "Black Bagpack for everyday use, very durable.",
    price: "PKR 3800/-",
    image: "content/bags/0004.jpeg",
    images: [
      "content/bags/0004.jpeg",
      "content/bags/0004.jpeg",
      "content/bags/0005.jpeg",
    ],
    shortDescription:
      "Black bagpack, very spacious and great for college and uviversity use.",
    description:
      "Black Bagpack, perfect for everyday use. This spacious bagpack is designed to hold your books, laptop, and other essentials while adding a touch of style to your outfit. The durable construction ensures it can handle daily wear and tear.",
    inStock: 1,
  },
  {
    id: 45,
    name: "Black Bagpack for everyday use, very durable.",
    price: "PKR 3800/-",
    image: "content/bags/0004.jpeg",
    images: [
      "content/bags/0004.jpeg",
      "content/bags/0004.jpeg",
      "content/bags/0005.jpeg",
    ],
    shortDescription:
      "Black bagpack, very spacious and great for college and uviversity use.",
    description:
      "Black Bagpack, perfect for everyday use. This spacious bagpack is designed to hold your books, laptop, and other essentials while adding a touch of style to your outfit. The durable construction ensures it can handle daily wear and tear.",
    inStock: 1,
  },
  {
    id: 46,
    name: "Pink Bagpack for girls, Best for everyday use, very durable.",
    price: "PKR 3800/-",
    image: "content/bags/0030.jpg",
    images: [
      "content/bags/0030.jpg",
      "content/bags/0029.jpg",
      "content/bags/0028.jpg",
    ],
    shortDescription:
      "Pink bagpack, very spacious and great for college and uviversity use.",
    description:
      "Pink Bagpack, perfect for everyday use. This spacious bagpack is designed to hold your books, laptop, and other essentials while adding a touch of style to your outfit. The durable construction ensures it can handle daily wear and tear.",
    inStock: 1,
  },
  {
    id: 47,
    name: "Blue Bagpack for girls, Best for everyday use, very durable.",
    price: "PKR 3800/-",
    image: "content/bags/0027.jpg",
    images: [
      "content/bags/0027.jpg",
      "content/bags/0026.jpg",
      "content/bags/0025.jpg",
    ],
    shortDescription:
      "Blue bagpack, very spacious and great for college and uviversity use.",
    description:
      "Blue Bagpack, perfect for everyday use. This spacious bagpack is designed to hold your books, laptop, and other essentials while adding a touch of style to your outfit. The durable construction ensures it can handle daily wear and tear.",
    inStock: 1,
  },
  {
    id: 48,
    name: "Brown Shoulder Bag for everyday use, very durable.",
    price: "PKR 3800/-",
    image: "content/bags/0024.jpg",
    images: [
      "content/bags/0024.jpg",
      "content/bags/0023.jpg",
      "content/bags/0022.jpg",
    ],
    shortDescription:
      "Brown bagpack, very spacious and great for college and uviversity use.",
    description:
      "Brown Bagpack, perfect for everyday use. This spacious bagpack is designed to hold your books, laptop, and other essentials while adding a touch of style to your outfit. The durable construction ensures it can handle daily wear and tear.",
    inStock: 1,
  },
  {
    id: 49,
    name: "Pale-Brown Shoulder Bag for everyday use, very durable.",
    price: "PKR 3800/-",
    image: "content/bags/0021.jpg",
    images: [
      "content/bags/0021.jpg",
      "content/bags/0020.jpg",
      "content/bags/0019.jpg",
    ],
    shortDescription:
      "Pale-Brown bagpack, very spacious and great for college and uviversity use.",
    description:
      "Pale-Brown Bagpack, perfect for everyday use. This spacious bagpack is designed to hold your books, laptop, and other essentials while adding a touch of style to your outfit. The durable construction ensures it can handle daily wear and tear.",
    inStock: 1,
  },
  {
    id: 50,
    name: "Marroon Shoulder Bag for everyday use, very durable.",
    price: "PKR 3800/-",
    image: "content/bags/0018.jpg",
    images: [
      "content/bags/0018.jpg",
      "content/bags/0017.jpg",
      "content/bags/0016.jpg",
    ],
    shortDescription:
      "Marroon bagpack, very spacious and great for college and uviversity use.",
    description:
      "Marroon Bagpack, perfect for everyday use. This spacious bagpack is designed to hold your books, laptop, and other essentials while adding a touch of style to your outfit. The durable construction ensures it can handle daily wear and tear.",
    inStock: 1,
  },
  {
    id: 51,
    name: "Beige Shoulder Bag for everyday use, very durable.",
    price: "PKR 3800/-",
    image: "content/bags/0018.jpg",
    images: [
      "content/bags/0018.jpg",
      "content/bags/0017.jpg",
      "content/bags/0016.jpg",
    ],
    shortDescription:
      "Beige bagpack, very spacious and great for college and uviversity use.",
    description:
      "Beige Bagpack, perfect for everyday use. This spacious bagpack is designed to hold your books, laptop, and other essentials while adding a touch of style to your outfit. The durable construction ensures it can handle daily wear and tear.",
    inStock: 1,
  },
];
