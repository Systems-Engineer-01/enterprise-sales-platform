import { prisma } from "./prisma.js";

async function main() {
  console.log("========================================");
  console.log(" DATABASE INTEGRITY TEST");
  console.log("========================================");

  const result = await prisma.$queryRaw<
    Array<{
      table_name: string;
      constraint_name: string;
      definition: string;
    }>
  >`
    SELECT
      conrelid::regclass::text AS table_name,
      conname AS constraint_name,
      pg_get_constraintdef(oid) AS definition
    FROM pg_constraint
    WHERE contype = 'c'
    ORDER BY conrelid::regclass::text, conname;
  `;

  console.log("\nCHECK constraints found:");

  for (const constraint of result) {
    console.log(
      `${constraint.table_name} -> ${constraint.constraint_name}: ${constraint.definition}`,
    );
  }

  console.log("\nTotal CHECK constraints:", result.length);

  if (result.length === 0) {
    throw new Error("No CHECK constraints were found.");
  }

  console.log("\nPASS: database constraints are present.");
}

main()
  .catch((error) => {
    console.error("\nFAIL: database integrity test failed.");
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
