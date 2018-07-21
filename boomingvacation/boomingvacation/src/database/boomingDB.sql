-- Erases (drops) database if in existence
DROP DATABASE IF EXISTS boomingDB;

-- Creates a new database called bamazonDB
CREATE database boomingDB;

-- Call to use the bamazonDB database
USE boomingDB;

-- creates tables called "property" that contains the inventory
CREATE TABLE property (
    item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
    property_name VARCHAR(30) NOT NULL,
    number_bedrooms INTEGER(11) NOT NULL,
    number_guests INTEGER(11) NOT NULL,
	stock_quantity INTEGER(11) NOT NULL,
	PRIMARY KEY (item_id)
);


-- Data for our property table 
INSERT INTO property (property_name, number_bedrooms, number_guests, stock_quantity)
VALUES 
    ('Romeo Drive', '4', 12, 1),
    ('Windermere Ave 23', '4', 12, 1),
    ('Windermere Ave 24', '4', 12, 1),
    ('Windermere Ave 26', '4', 12, 1);