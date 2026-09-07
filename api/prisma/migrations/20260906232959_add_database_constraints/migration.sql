-- This is an empty migration.

ALTER TABLE "products"
ADD CONSTRAINT "products_price_non_negative"
CHECK ("price" >= 0);

ALTER TABLE "products"
ADD CONSTRAINT "products_cost_non_negative"
CHECK ("cost" >= 0);

ALTER TABLE "inventory"
ADD CONSTRAINT "inventory_quantity_non_negative"
CHECK ("quantity" >= 0);

ALTER TABLE "inventory_movements"
ADD CONSTRAINT "inventory_movements_quantity_positive"
CHECK ("quantity" > 0);

ALTER TABLE "purchase_items"
ADD CONSTRAINT "purchase_items_quantity_positive"
CHECK ("quantity" > 0);

ALTER TABLE "purchase_items"
ADD CONSTRAINT "purchase_items_unit_cost_non_negative"
CHECK ("unitCost" >= 0);

ALTER TABLE "purchase_items"
ADD CONSTRAINT "purchase_items_subtotal_non_negative"
CHECK ("subtotal" >= 0);

ALTER TABLE "sale_items"
ADD CONSTRAINT "sale_items_quantity_positive"
CHECK ("quantity" > 0);

ALTER TABLE "sale_items"
ADD CONSTRAINT "sale_items_unit_price_non_negative"
CHECK ("unitPrice" >= 0);

ALTER TABLE "sale_items"
ADD CONSTRAINT "sale_items_subtotal_non_negative"
CHECK ("subtotal" >= 0);

ALTER TABLE "purchases"
ADD CONSTRAINT "purchases_total_non_negative"
CHECK ("total" >= 0);

ALTER TABLE "sales"
ADD CONSTRAINT "sales_total_non_negative"
CHECK ("total" >= 0);