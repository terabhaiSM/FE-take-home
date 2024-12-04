Dynamic Table with Dropdown Selection

Objective
Build a React application using TypeScript that displays data from two API endpoints in a table. The user can select the data source using a dropdown menu, and the table should update dynamically without reloading the page. The table should be implemented as a nested reusable component.

Tasks
1. Dropdown
  Create a dropdown with two options: "Posts" and "Comments".
  Fetch data from the appropriate API endpoint based on the user's selection:
  For "Posts": https://jsonplaceholder.typicode.com/posts
  For "Comments": https://jsonplaceholder.typicode.com/comments
  Dynamically update the displayed table when the user selects a different option, ensuring no page reloads occur.

2. Table (Nested Component)
  Create a separate reusable TableComponent to handle the rendering of the table.
  Pass the fetched data and column configuration as props to the TableComponent.
  Display the appropriate columns for each data source:
  For /posts: Display ID and Title.
  For /comments: Display ID and Name.
  Ensure the TableComponent is modular and can handle data updates efficiently.

3. Dynamic Update
  Use React's useState and useEffect hooks to fetch and manage data dynamically.
  Ensure the application reacts instantly to changes in dropdown selection without refreshing the page.
  Maintain a clean separation of concerns between the parent and nested components.

Requirements
Use React and TypeScript.

Organize the code into:
  A parent component to handle the dropdown and data fetching logic.
  A nested TableComponent to display the table dynamically based on props.
  Dynamically fetch and update the table data based on dropdown selection.
  Implement clean and reusable code following React best practices.

Deliverables
A React app with the following features:
  A dropdown menu to select between Posts and Comments data sources.
  A nested TableComponent that dynamically displays data for the selected source.
  Responsive updates of the table content without reloading the page.

Bonus Enhancement (Optional)
Display a loading spinner while fetching data from the API.
