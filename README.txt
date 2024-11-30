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
4. Use the provided db.json data as a mock API via json-server.

Bonus Points
1. Add unit tests with Jest and React Testing Library.
2. Implement pagination for the product list.
3. Deploy the app to Vercel or Netlify.
