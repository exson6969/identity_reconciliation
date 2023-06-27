# Documentation

It is a web service designed to identify and track customer identities across multiple purchases. It provides an HTTP endpoint /identify that accepts customer information and consolidates it in a relational database.

## Getting Started

### Prerequisites

Before running , make sure you have the following prerequisites installed:

* Node.js (version 18.16.0)
* MySQL 

### Installation
1. Clone the repository:
```
git clone https://github.com/exson6969/identity_reconciliation.git
```
2. Run Nodejs MySQL with Docker Compose:
```
docker-compose up
```
## Usage
### Endpoint

* /identify (POST)

### Request Format
The `/identify` endpoint expects a POST request with the following JSON body format:

```
{
  "email": "customer@example.com",
  "phoneNumber": "1234567890"
}
```