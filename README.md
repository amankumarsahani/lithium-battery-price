

# Lithium-ion Battery Price on Scrap Metal.com Using Node.js

This Node.js programme retrieves the most recent Lithium-ion Battery price from Metal.com and delivers it as a JSON object.
To do this, it makes use of the express, axios, and cheerio packages.

## Installation : 
### Clone the repository
    git clone https://github.com/amankumarsahani/lithium-battery-price.git

### Install dependencies
     npm install

## Usage
### Start the server
    npm start

### Access the API 
    http://localhost:3000/price


## API Endpoint : GET /price 
##### 1. The current Lithium-ion Battery price from Metal.com is returned by this endpoint in JSON format. 
##### 2. It retrieves the pricing from the.strong___1JlBD class by scraping the website.
##### 3. The API provides a JSON object with a message property that contains an error message in the event that there is a problem while scraping the page or getting the data. 

