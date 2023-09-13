// MS SQL
CREATE view ORDER_DETAILS
AS SELECT
o.order_id,
o.order_date,
c.name as customer_name,
c.phone as customer_phone,
c.email as customer_email
FROM orders o join customers c ON o.customer = c.customer_id;

SELECT * FROM ORDER_DETAILS;


CREATE INDEX IX_VEHICLES_GOVERMENTNUMBER ON vehicles (goverment_number);

CREATE SEQUENCE ORDER_ID_SEQUENCE START WITH 1 INCREMENT BY 1;

// ORACLE
CREATE OR REPLACE VIEW ORDER_DETAILS
AS SELECT
o.order_id,
o.order_date,
c.name as customer_name,
c.phone as customer_phone,
c.email as customer_email
FROM orders o join customers c ON o.customer = c.customer_id;

CREATE INDEX IX_VEHICLES_GOVERMENTNUMBER ON vehicles (goverment_number);

CREATE SEQUENCE ORDER_ID_SEQUENCE START WITH 1 INCREMENT BY 1 NOCACHE NOCYCLE;