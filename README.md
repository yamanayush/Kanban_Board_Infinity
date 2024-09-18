Sure! Here’s a revised version of your project description that organizes and streamlines the content:

---

Deploy link :- { https://kanban-board-infinity-tawny.vercel.app/ }

# React Todo App 📝

## Overview

This React-based Todo application, integrated with Redux and Firebase, offers a dynamic task management experience. Users can efficiently handle tasks with features like creation, updates, and deletions. Tasks can be organized into categories such as TODO, IN PROGRESS, and COMPLETED. The app supports drag-and-drop functionality for task reordering and integrates with Firebase for data persistence. It also includes interactive modals and notifications for enhanced user experience.

## Tech Stack 💻

- **Frontend**: React.js, Tailwind CSS
- **State Management**: Redux Toolkit
- **Utilities**: React Toastify, React DnD (Drag and Drop), React Calendar
- **Backend**: Firebase

## Features 🗒

- **Add Tasks **: Create new tasks with title, description, status, priority, and due date.
- **Update Tasks ✔**: Edit existing tasks to update title, description, status, and priority.
- **Delete Tasks **: Remove tasks that are no longer needed.
- **Drag and Drop ✏**: Reorder tasks by dragging and dropping.


## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yamanayush/Kanban_Board_Infinity.git
   ```
2. Navigate to the project directory:
   ```bash
   cd ToDo-Board-Infinity
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Project Structure

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
│   │   ├── Nav.jsx
│   │   ├── Section.jsx
│   │   ├── SectionHeaders.jsx
│   │   ├── TaskAdder.jsx
│   │   ├── TaskDisplayer.jsx
│   │   ├── TaskSections.jsx
│   │   └── UpdaterModal.jsx
│   ├── store/
│   │   ├── tasksSlice.js
│   │   └── store.js
│   ├── App.jsx
│   ├── index.js
│   └── firebase.js
│
├── package.json
└── README.md
```

## Components Documentation

- **TaskSections Component**
  - **Purpose**: Displays tasks organized by status (TODO, IN PROGRESS, COMPLETED).
  - **Props**: Receives `status` to filter tasks.
  - **State Management**: Uses `useSelector` to access tasks from the Redux store.

- **TaskAdder Component**
  - **Purpose**: Handles task creation with a form for title, description, status, and other details.
  - **State Management**: Utilizes `useState` for local state and `useDispatch` for adding tasks to Redux.
  - **Validation**: Ensures a task’s name is provided before submission.

- **UpdaterModal Component**
  - **Purpose**: Used for editing or deleting tasks. Opens as a modal for task updates or removal.
  - **Props**: Receives `onClose`, `isOpen`, `task`, and `setTask`.
  - **State Management**: Utilizes Redux to dispatch actions for updates or deletions.

## State Management

- **Redux Toolkit**
  - **Purpose**: Manages application state predictably and simplifies Redux setup.
  - **Setup**: Configured in `store.js` with slices for tasks and other states.
  - **Tasks Slice**: Defines task state structure and reducers for task operations.
  - **Thunks**: Handles asynchronous operations like API calls.
  - **Selectors**: Access specific state pieces using selectors.

### Actions

- **addTask**: Adds a new task to both the Redux state and Firebase database.
- **updateTask**: Updates an existing task by ID.
- **deleteTask**: Removes a task from the state and Firebase by ID.
- **dndTask**: Enables dragging and dropping tasks to reorder or move them.

## Deployment

The application is deployed on Vercel. Access it [here](https://kanban-board-infinity-tawny.vercel.app/).

---

Let me know if you need any further adjustments!
