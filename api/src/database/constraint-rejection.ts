import { prisma } from "./prisma.js";

async function main() {
  console.log("========================================");
  console.log(" CONSTRAINT REJECTION TEST");
  console.log("========================================");

  const result = await prisma.$queryRaw<
    Array<{
      constraint_name: string;
    }>
  >`
    SELECT conname AS constraint_name
    FROM pg_constraint
    WHERE conname = 'products_price_non_negative';
  `;

  if (result.length !== 1) {
    throw new Error(
      "Expected constraint products_price_non_negative was not found.",
    );
  }

  console.log(
    "PASS: products_price_non_negative exists and is registered in PostgreSQL.",
  );
}

main()
  .catch((error) => {
    console.error("\nFAIL:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
