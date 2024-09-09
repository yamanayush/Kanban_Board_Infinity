# React Todo App 📝

# 🔗 []

This project is a dynamic task management application built with React and Redux. It provides a user-friendly interface for managing tasks through features like task creation, updates, and deletions. Users can categorize tasks into different statuses such as TODO, IN PROGRESS, and COMPLETED. The application supports drag-and-drop functionality for reordering tasks and integrates with a Firebase backend service for data persistence. Additionally, interactive modals and notifications enhance user experience, making task management efficient and intuitive.

# Tech Stack 💻:

- **Frontend**: React.js, Tailwind CSS
- **State Management**: Redux Toolkit
- **Utilities**: React Toastify,React DnD (Drag and Drop), React Calendar
- **Backend**: firebase
# Features 🗒:

- **Add Tasks ⚡**: Users can create new tasks by providing a title, description, status, priority, and due date.Users can create new tasks by providing a title, description, status, priority, and due date.
- **Update Tasks ✔️**: Existing tasks can be edited to update their title, description, status, priority.
- **Delete Tasks ➿**:  Users can remove tasks that are no longer needed.

- **Drag and Drop ✏️**: Users can select and set due dates for tasks using an interactive calendar.
- **Responsive Design📱**: The app is fully responsive and optimized for various screen sizes and devices.

## Installation

1. Clone the repository:
   ```
   https://github.com/Vikash8101/ToDo_Board_infinity.git
   ```
2. Navigate to the project directory:
   ```
   cd ToDo-Board-Infinity
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```

## Project Structure

## Here's an overview of the project structure:

```
todo-app/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── nav.jsx
│   │   ├── section.jsx
│   │   ├── sectionHeaders.jsx
│   │   └── Taskadder.jsx
├   |   |-- taskDisplayer.jsx
│   │   ├── tasksections.jsx
│   │   ├── updatermodal.jsx
│   │    
│   │
│   ├── store/
│   │   ├── tasksSlice.js
│   │   └── store.js
│   │
│   ├── App.jsx
│   ├── index.js
│   └── firebase.js
│
├── package.json
└── README.md
```

### **Components Documentation**

- **Tasks Sections Component**:
  Purpose: The TaskSections component displays tasks organized by their status. It categorizes tasks into sections such as "Todo", "In Progress", and "Completed" for better organization and management.
  Props: Receives status to filter and display tasks according to their current status.
  State Management: Uses useSelector from React Redux to access tasks from the Redux store.

- **Task Adder Component**:
  Purpose: The TaskAdder component handles the creation of new tasks. It provides a form that allows users to input a task's name, description, and status.
  State Management: Utilizes useState for managing local state and useDispatch for dispatching Redux actions to add new tasks.
  Validation: Ensures that a task's name is provided before allowing submission.
- **UpdaterModal Component**:
  Purpose: The UpdaterModal component is used for updating or deleting tasks. It opens as a modal dialog when a task is being edited or deleted, allowing users to modify task details or remove the task 
  from the list.
  Props: Receives onClose, isOpen, task, and setTask to manage the modal's visibility and handle task updates or deletions.
  State Management: Utilizes Redux to dispatch actions for updating or deleting tasks. It uses useDispatch from React Redux to interact with the Redux store.

### **State Management**

-**Redux Toolkit**:

Purpose: Redux Toolkit is used for managing the application's state in a predictable way. It simplifies the process of setting up a Redux store and provides tools for writing Redux logic more efficiently.
Setup: The store.js file configures the Redux store, integrating slices for tasks and other potential states.
Tasks Slice: The tasksSlice.js file defines the state structure for tasks and includes reducers and actions for handling task-related operations such as fetching, updating, adding, and deleting tasks.
Thunks: Asynchronous operations such as fetching tasks from an API are handled using thunk actions in the tasksSlice.js file.
Selectors: The application uses selectors to access specific pieces of state from the Redux store. For example, useSelector is used in components to retrieve tasks and manage their display.


#### Actions:

**addTask**: Adds a new task to the state which gets saved to firebase database.
**updateTask**: Updates an existing task based on its id.
**deleteTask**: Removes a task from the state by its id.
**dndTask**: click on the 6 dots icon on task side bar and drag it to the other section
## Deployment

The application is deployed on Vercel and can be accessed [here]().
