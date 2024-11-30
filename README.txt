Objective: Build a Product Performance Dashboard

Create a single-page application (SPA) that:
1. Displays a list of products with details such as name, category, sales in the last 30 days, performance, and insights.
2. Allows users to:
	- Add a new product.
	- Edit an existing product's details (e.g., name, category, performance, or sales).
	- Delete a product.
3. Provides a filter option to view products by:
	- Category (e.g., Apparel, Electronics).
	- Performance (High, Medium, Low).
(optional) 4. Displays sales trends for a selected product:
	- Fetch sales data for the selected product and show a simple chart (e.g., using Chart.js or Recharts) visualizing quantities sold over time.
5. Persists changes using the mock API.

Technical Requirements
1. Use TypeScript.
2. Use React for the frontend.
3. Implement state management using Context API, Redux, or similar.
4. Use the provided db.json data <<https://my-json-server.typicode.com/sarthakb657/fe-hiring/db>>

Bonus Points
1. Add unit tests with Jest and React Testing Library.
2. Implement pagination for the product list.
3. Deploy the app to Vercel or Netlify.

API Endpoints
Method	Endpoint		Description
GET	/products		Fetch all products.
GET	/products/{id}		Fetch a specific product by ID.
POST	/products		Add a new product (mock).
PUT	/products/{id}		Update a product by ID (mock).
DELETE	/products/{id}		Delete a product by ID (mock).
GET	/users			Fetch all users.
GET	/users/{id}		Fetch a specific user by ID.
GET	/sales			Fetch all sales.
GET	/sales?productId={id}	Fetch sales for a specific product.


Deliverables
1. A GitHub repository containing:
	- Source code
	- A README.md file with setup instructions.
2.A live demo link of the deployed application.

