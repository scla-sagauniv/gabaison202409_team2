import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ダミーデータを追加する
  await prisma.restaurants.createMany({
    data: [
      {
        address: "123 Tokyo Street, Tokyo, Japan",
        name: "Sakura Sushi",
        description: "Fresh and delicious sushi with a traditional touch.",
        image_url: "https://example.com/images/sakura-sushi.jpg",
      },
      {
        address: "456 Kyoto Avenue, Kyoto, Japan",
        name: "Kyoto Ramen House",
        description: "Authentic ramen experience with a variety of flavors.",
        image_url: "https://example.com/images/kyoto-ramen.jpg",
      },
      {
        address: "789 Osaka Road, Osaka, Japan",
        name: "Osaka Grill",
        description: "Grill and barbecue with a modern twist.",
        image_url: "https://example.com/images/osaka-grill.jpg",
      },
    ],
  });

  console.log("Dummy data has been added to the Restaurants table.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
