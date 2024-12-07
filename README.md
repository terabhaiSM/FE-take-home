# Frontend Assignment: Dynamic Table with Dropdown Selection

## 1. Assignment Overview

### Objective  
Build a **React application** that displays data in a table, allowing users to switch between different data sources using a dropdown menu. The goal is to create a simple yet polished user experience with a focus on clean design and usability.

### A Note from Us  
We value your time! If this assignment takes more than **8 hours**, feel free to submit what you have.  

The functionality is simple, but we’re looking for **attention to detail, clean design, and thoughtful execution**. While the code doesn’t need to be production-ready, it should reflect quality and care.  

Feel free to go beyond the requirements and include a README outlining any bonus features or ideas for improvement.

---

## 2. Getting Started

1. **Fork the Repository**  
   - Start by forking the assignment repository we’ve shared with you:  
     [Take-home Asssignment Repo](https://github.com/sarthakb657/FE-take-home).

2. **Clone Your Fork**  
   - Clone your forked repository to your local machine:  
     ```bash
     git clone https://github.com/<your-username>/FE-take-home
     cd FE-take-home
     ```

3. **Install Dependencies**  
   - Install the required dependencies using npm:  
     ```bash
     npm install
     ```

4. **Start the Development Server**  
   - Run the following command to start the app:  
     ```bash
     npm start
     ```
     The app should now be running at [http://localhost:3000](http://localhost:3000).

5. **Recommended Tools**  
   - **Node.js v16+**  
   - A modern browser with developer tools (e.g., **Chrome** or **Edge**)


## 3. Design Reference

Refer to the [Figma design file](https://www.figma.com/design/gJ3UgzzhS41hJpyuxgbVR4/Frontend-assignment?node-id=2127-188&t=aFTI90flpSf1BTeN-1) for guidance on the layout and styling.

---

## 4. Backend API

The application will fetch data from the following endpoints:

- **Posts**:  
  [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)  
  Columns to display: **ID**, **Title**

- **Comments**:  
  [https://jsonplaceholder.typicode.com/comments](https://jsonplaceholder.typicode.com/comments)  
  Columns to display: **ID**, **Name**

API calls should dynamically update the table content based on the dropdown selection.

---

## 5. Tasks / Deliverables

### Tasks  

1. **Dropdown**  
   - Create a dropdown with two options: `Posts` and `Comments`.  
   - Fetch data from the selected API endpoint.  
   - Dynamically update the displayed table without page reloads.

2. **Table (Reusable Component)**  
   - Create a nested `TableComponent` to handle table rendering.  
   - Pass fetched data and column configurations as props.  
   - Ensure appropriate columns are displayed:  
     - For **Posts**: `ID` and `Title`  
     - For **Comments**: `ID` and `Name`  

3. **Pagination**  
   - Implement pagination to display **10 rows per page**.  
   - Include navigation controls (Previous, Next, Page Numbers) below the table.

4. **Download Button**  
   - Add a "Download" button below the table to export the currently displayed data.

### Bonus Task (Optional)  
- Add a loading spinner while data is being fetched.

---

## 6. Submission Guidelines

1. **Complete the Assignment**  
   - Work directly in the forked repository you created during the "Getting Started" step.
   - Ensure all necessary files are included and that the app runs successfully.

2. **Update the README**  
   - Include instructions for running your project locally.  
   - Document any assumptions, design decisions, or bonus features you implemented.

3. **Share Your Work**  
   - Submit the link to your forked repository.


---

## 7. Evaluation Criteria

Your submission will be evaluated on the following criteria:  

1. **Functionality**  
   - The app meets the core requirements (dropdown, table, pagination).  

2. **Code Quality**  
   - Clean, modular, and reusable components.  
   - Best practices in **TypeScript** and **React**.  

3. **Design & Usability**  
   - Follows the provided Figma design.  
   - Delivers a polished and user-friendly experience.  

4. **Creativity**  
   - Thoughtful execution and attention to detail.  
   - Bonus points for enhancements.

---

Best of luck. We are excited to see your work.
