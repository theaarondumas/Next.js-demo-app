
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
await prisma.item.createMany({
  data: [
    { sku: "SKU-1", name: "Demo Item A" },
    { sku: "SKU-2", name: "Demo Item B" }
  ]
});
console.log("Seeded");
process.exit(0);
