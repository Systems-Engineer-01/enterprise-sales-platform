import "dotenv/config";

import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient, Prisma } from "../generated/prisma/client.js";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
    throw new Error("DATABASE_URL is not defined");
}

const adapter = new PrismaPg({
    connectionString
});

const prisma = new PrismaClient({
    adapter
});

async function seedRoles(tx: Prisma.TransactionClient) {
    console.log("Seeding Roles...");
    const roles = [
        { name: "ADMIN", description: "Administración completa" },
        { name: "SALES", description: "Operaciones comerciales" },
        { name: "WAREHOUSE", description: "Gestión de inventario" },
        { name: "PURCHASING", description: "Gestión de compras" }
    ];
    for (const r of roles) {
        await tx.role.upsert({
            where: { name: r.name },
            update: { description: r.description },
            create: { name: r.name, description: r.description }
        });
    }
}

async function seedPermissions(tx: Prisma.TransactionClient) {
    console.log("Seeding Permissions...");
    const permissions = [
        "USER_READ", "USER_CREATE", "USER_UPDATE",
        "ROLE_READ", "ROLE_MANAGE",
        "PRODUCT_READ", "PRODUCT_CREATE", "PRODUCT_UPDATE",
        "CATEGORY_READ", "CATEGORY_CREATE", "CATEGORY_UPDATE",
        "CUSTOMER_READ", "CUSTOMER_CREATE", "CUSTOMER_UPDATE",
        "SUPPLIER_READ", "SUPPLIER_CREATE", "SUPPLIER_UPDATE",
        "WAREHOUSE_READ", "WAREHOUSE_CREATE", "WAREHOUSE_UPDATE",
        "INVENTORY_READ", "INVENTORY_ADJUST",
        "PURCHASE_READ", "PURCHASE_CREATE",
        "SALE_READ", "SALE_CREATE"
    ];
    for (const code of permissions) {
        await tx.permission.upsert({
            where: { code: code },
            update: {},
            create: { code: code }
        });
    }
}

async function seedRolePermissions(tx: Prisma.TransactionClient) {
    console.log("Seeding RolePermissions...");
    const rolesWithPerms = [
        {
            role: "ADMIN",
            permissions: [
                "USER_READ", "USER_CREATE", "USER_UPDATE",
                "ROLE_READ", "ROLE_MANAGE",
                "PRODUCT_READ", "PRODUCT_CREATE", "PRODUCT_UPDATE",
                "CATEGORY_READ", "CATEGORY_CREATE", "CATEGORY_UPDATE",
                "CUSTOMER_READ", "CUSTOMER_CREATE", "CUSTOMER_UPDATE",
                "SUPPLIER_READ", "SUPPLIER_CREATE", "SUPPLIER_UPDATE",
                "WAREHOUSE_READ", "WAREHOUSE_CREATE", "WAREHOUSE_UPDATE",
                "INVENTORY_READ", "INVENTORY_ADJUST",
                "PURCHASE_READ", "PURCHASE_CREATE",
                "SALE_READ", "SALE_CREATE"
            ]
        },
        {
            role: "SALES",
            permissions: [
                "PRODUCT_READ", "CATEGORY_READ",
                "CUSTOMER_READ", "CUSTOMER_CREATE", "CUSTOMER_UPDATE",
                "SALE_READ", "SALE_CREATE",
                "INVENTORY_READ"
            ]
        },
        {
            role: "WAREHOUSE",
            permissions: [
                "PRODUCT_READ", "CATEGORY_READ",
                "WAREHOUSE_READ", "INVENTORY_READ", "INVENTORY_ADJUST"
            ]
        },
        {
            role: "PURCHASING",
            permissions: [
                "PRODUCT_READ", "CATEGORY_READ",
                "SUPPLIER_READ", "SUPPLIER_CREATE", "SUPPLIER_UPDATE",
                "PURCHASE_READ", "PURCHASE_CREATE"
            ]
        }
    ];

    for (const mapping of rolesWithPerms) {
        const role = await tx.role.findUnique({ where: { name: mapping.role } });
        if (!role) throw new Error(`Role not found: ${mapping.role}`);

        for (const permCode of mapping.permissions) {
            const permission = await tx.permission.findUnique({ where: { code: permCode } });
            if (!permission) throw new Error(`Permission not found: ${permCode}`);

            await tx.rolePermission.upsert({
                where: {
                    roleId_permissionId: {
                        roleId: role.id,
                        permissionId: permission.id
                    }
                },
                update: {},
                create: {
                    roleId: role.id,
                    permissionId: permission.id
                }
            });
        }
    }
}

async function seedCategories(tx: Prisma.TransactionClient) {
    console.log("Seeding Categories...");
    const categories = [
        { name: "Electronics", description: "ELEC" },
        { name: "Office", description: "OFFICE" },
        { name: "Computing", description: "COMPUTING" }
    ];
    for (const c of categories) {
        await tx.category.upsert({
            where: { name: c.name },
            update: { description: c.description, status: "ACTIVE" },
            create: { name: c.name, description: c.description, status: "ACTIVE" }
        });
    }
}

async function seedProducts(tx: Prisma.TransactionClient) {
    console.log("Seeding Products...");
    const products = [
        { code: "LAP-001", name: "Business Laptop", categoryName: "Computing", price: 1200.00, cost: 900.00 },
        { code: "MON-001", name: "24-inch Monitor", categoryName: "Computing", price: 250.00, cost: 180.00 },
        { code: "KEY-001", name: "Mechanical Keyboard", categoryName: "Computing", price: 80.00, cost: 50.00 },
        { code: "MOU-001", name: "Wireless Mouse", categoryName: "Computing", price: 40.00, cost: 20.00 },
        { code: "PRI-001", name: "Office Printer", categoryName: "Office", price: 300.00, cost: 200.00 }
    ];

    for (const p of products) {
        const category = await tx.category.findUnique({ where: { name: p.categoryName } });
        if (!category) throw new Error(`Category not found: ${p.categoryName}`);

        await tx.product.upsert({
            where: { code: p.code },
            update: {
                name: p.name,
                price: p.price,
                cost: p.cost,
                categoryId: category.id,
                status: "ACTIVE"
            },
            create: {
                code: p.code,
                name: p.name,
                price: p.price,
                cost: p.cost,
                categoryId: category.id,
                status: "ACTIVE"
            }
        });
    }
}

async function seedCustomers(tx: any) {
    console.log("Seeding Customers...");
    const customers = [
        { document: "CUS-001", firstName: "Empresa Norte", lastName: "SAC" },
        { document: "CUS-002", firstName: "Comercial Andina", lastName: "SAC" },
        { document: "CUS-003", firstName: "Servicios del Pacífico", lastName: "SAC" }
    ];

    for (const c of customers) {
        await tx.customer.upsert({
            where: { document: c.document },
            update: { firstName: c.firstName, lastName: c.lastName, status: "ACTIVE" },
            create: { document: c.document, firstName: c.firstName, lastName: c.lastName, status: "ACTIVE" }
        });
    }
}

async function seedSuppliers(tx: any) {
    console.log("Seeding Suppliers...");
    const suppliers = [
        { document: "SUP-001", businessName: "Distribuciones Tech SAC" },
        { document: "SUP-002", businessName: "Importaciones Andinas SAC" },
        { document: "SUP-003", businessName: "Proveedores del Pacífico SAC" }
    ];

    for (const s of suppliers) {
        await tx.supplier.upsert({
            where: { document: s.document },
            update: { businessName: s.businessName, status: "ACTIVE" },
            create: { document: s.document, businessName: s.businessName, status: "ACTIVE" }
        });
    }
}

async function seedWarehouses(tx: any) {
    console.log("Seeding Warehouses...");
    const warehouses = [
        { code: "WH-001", name: "MAIN" },
        { code: "WH-002", name: "SECONDARY" }
    ];

    for (const w of warehouses) {
        await tx.warehouse.upsert({
            where: { code: w.code },
            update: { name: w.name, status: "ACTIVE" },
            create: { code: w.code, name: w.name, status: "ACTIVE" }
        });
    }
}

async function main(): Promise<void> {
    console.log("Starting database seed...");
    console.log("Database seed infrastructure is ready.");

    await prisma.$transaction(async (tx) => {
        await seedRoles(tx);
        await seedPermissions(tx);
        await seedRolePermissions(tx);
        await seedCategories(tx);
        await seedProducts(tx);
        await seedCustomers(tx);
        await seedSuppliers(tx);
        await seedWarehouses(tx);
    }, {
        timeout: 30000 // In case there are many writes, increase timeout
    });

    console.log("Database seed completed successfully.");
}

main()
    .catch((error) => {
        console.error("Database seed failed:", error);
        process.exitCode = 1;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });