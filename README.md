# Documentation

It is a web service designed to identify and track customer identities across multiple purchases. It provides an HTTP endpoint /identify that accepts customer information and consolidates it in a relational database.

## Getting Started

### Prerequisites

Before running , make sure you have the following prerequisites installed:

* Docker

### Installation
1. Clone the repository:
```
git clone https://github.com/exson6969/identity_reconciliation.git
```
2. Create `.env` file in root folder:
```
DB_HOST= localhost
DB_PORT= 3306
DB_NAME= identity_db
DB_USERNAME= root
DB_PASSWORD= password
MYSQLDB_LOCAL_PORT=3307

NODE_LOCAL_PORT=6868
NODE_DOCKER_PORT=8080
```
3. Run Nodejs MySQL with Docker Compose:
```
sudo docker-compose up
```
or
```
docker-compose up
```
3. Create database and table in MySql docker
- Find MySQL container Id
```
docker ps
```
<img src="img\docker_ps.png" alt="docker_ps"/>

- Find MySQL IP address:
Run below command 
```
docker inspect <container_id>
```
<img src="img\docker_inspect.png"/>

scroll to bottom of terminal and copy "IPAddress"
<img src="img\ip_add.png"/>

- Open docker desktop.
<img src="img\docker_page.png"/>

- Expand "identity_reconciliation" 
<img src="img\docker_page identity_reconciliation.png"/>

- Click on `mysql` 

- Navigate to `Terminal`

- Enter command
```
mysql -h <ip_address> -u root -p
```
Enter password mentioned in .env
<img src="img\docker_sql_teminal.png"/>

- Database called "identity_db" will be create.
- To create table :
```
CREATE TABLE contact(
  id INT PRIMARY KEY AUTO_INCREMENT,
  phoneNumber VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  linkedId INT,
  linkPrecedence ENUM('secondary', 'primary') NOT NULL,
  createdAt DATETIME NOT NULL,
  updatedAt DATETIME,
  deletedAt DATETIME
);
```
- Add sample data to table:
```
INSERT INTO contact (id, phoneNumber, email, linkedId, linkPrecedence, createdAt, updatedAt, deletedAt)
VALUES (1, '123456', 'lorraine@hillvalley.edu', NULL, 'primary', '2023-04-01 00:00:00', '2023-04-01 00:00:00', NULL);

INSERT INTO contact (id, phoneNumber, email, linkedId, linkPrecedence, createdAt, updatedAt, deletedAt)
VALUES (23, '123456', 'mcfly@hillvalley.edu', 1, 'secondary', '2023-04-20 05:30:00', '2023-04-20 05:30:00', NULL);

INSERT INTO contact (id, phoneNumber, email, linkedId, linkPrecedence, createdAt, updatedAt, deletedAt)
VALUES (11, '919191', 'george@hillvalley.edu', NULL, 'primary', '2023-04-11 00:00:00', '2023-04-11 00:00:00', NULL);

INSERT INTO contact (id, phoneNumber, email, linkedId, linkPrecedence, createdAt, updatedAt, deletedAt)
VALUES (27, '717171', 'biffsucks@hillvalley.edu', 11, 'primary', '2023-04-21 05:30:00', '2023-04-21 05:30:00', NULL);
```
<img src="img\docker_sql_table.png"/>

## Usage
### Endpoint
Test cURL
```
curl --location 'http://localhost:6868/identify' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "george@hillvalley.edu",
    "phoneNumber": "919191"
}'
```
* http://localhost:6868/identify (POST)

### Request Format
The `/identify` endpoint expects a POST request with the following JSON body format:

```
{
    "email": "george@hillvalley.edu",
    "phoneNumber": "919191"
}
```
<img src="img\postmanAPI.png"/>
