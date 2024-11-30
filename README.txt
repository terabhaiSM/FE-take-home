Assignment: Product Sales Insights Manager

Objective:

Build a single-page application where users can:

View a list of products and their sales performance.
- Add, edit, or delete products.
- View detailed insights for a specific product.
- Filter products by sales performance (e.g., High, Medium, Low).

Requirements

Features:

- Product Listing:
	Display a table of products with columns: Name, Category, Sales (Last 30 Days), and Performance.
	Each product should have an option to view detailed insights, edit, or delete the product.
	Product Details Page:

- Show details like product name, category, total sales (monthly), and insights (e.g., "Predicted revenue growth: +10%").
	Fetch this data from the API when clicking "View Details."
	Add/Edit Product Form:

- Input fields for Name, Category, and Sales (Last 30 Days).
	A dropdown for Performance (High, Medium, Low).
	
- Filter by Performance:
	A dropdown or tabs to filter products by their sales performance.

- Persist Data:
	Use a mock API to add, edit, delete, and fetch products.

Technical Expectations:
- Use TypeScript.
- Use React.
- Use state management (React Context, Redux, etc.).
- Deploy on Vercel or Netlify.

Bonus Points:
- Add unit tests using Jest or React Testing Library.
- Implement pagination for the product list.
- Include a simple chart (e.g., using Chart.js or Recharts) in the product details page to visualize sales trends.

Deliverables:
- GitHub repository containing the code.
- Live demo link of the deployed application.
- README file with:	
	Steps to run the project locally.
	Assumptions made during implementation.