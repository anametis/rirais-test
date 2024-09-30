Wall Component Project
======================

This project implements a **Wall** for managing sticky notes with features like adding, editing, deleting, and moving notes. The note colors dynamically shift based on the proximity to a user-defined deadline, turning from green to yellow, orange, red, and finally black as the deadline approaches or expires. The project is built with **Next.js**, **TypeScript**, **Redux**, **Tailwind CSS**, and **ShadCN UI**.

Features
--------

-   **Add Note**: Users can create a new note with a message, timestamp, and a deadline. The note starts with a green background color and changes as the deadline nears.
-   **Edit Note**: Modify the content of the note (message, deadline, etc.).
-   **Delete Note**: Remove an existing note.
-   **Move Note**: Reorder notes on the wall.
-   **Dynamic Color Change**: The color of each note changes dynamically based on the proximity to the deadline:
    -   **Green**: Freshly added.
    -   **Yellow**: Nearing the deadline.
    -   **Orange**: Closer to the deadline.
    -   **Red**: Last 3 days before the deadline.
    -   **Black**: Expired.

Technologies Used
-----------------

### 1\. **Next.js**

This project uses [Next.js](https://nextjs.org/), a powerful React framework for server-side rendering, static site generation, and building modern web applications with ease.

### 2\. **TypeScript**

The project is fully typed using [TypeScript](https://www.typescriptlang.org/), ensuring strong typing, better code completion, and reducing potential bugs during development.

### 3\. **Redux**

State management is handled by Redux, allowing for predictable state transitions and managing note operations like adding, editing, deleting, and color updates based on the deadline.

### 4\. **Tailwind CSS**

The project leverages [Tailwind CSS](https://tailwindcss.com/) to quickly style components with utility-first CSS, making responsive designs and highly customizable UI elements easy to implement.

### 5\. **ShadCN UI**

The UI components, including forms and buttons, are styled using [ShadCN UI](https://shadcn.dev/), which provides beautiful and accessible UI elements that integrate seamlessly with Tailwind CSS.

Installation
------------

Follow these steps to get the project running locally:

1.  **Clone the repository:**

    bash

    Copy code

    `git clone https://github.com/anametis/.git
    cd rirais-test`

2.  **Install dependencies:**

    bash

    Copy code

    `npm install`

3.  **Run the development server:**

    bash

    Copy code

    `npm run dev`

4.  **Open the app in your browser:** Navigate to `http://localhost:3000` to see the app in action.

Project Structure
-----------------

arduino

Copy code

`.
├── app
│   ├── layout.tsx            // Layout component for the app
│   └── page.tsx              // Main page component for the app
├── components
│   ├── Note.tsx              // Renders individual note with editing, deleting, and moving options
│   ├── NoteForm.tsx          // Form for adding new notes
│   └── Wall.tsx              // Main Wall component that displays notes
├── store
│   ├── store.ts              // Redux store setup
│   └── notesSlice.ts         // Redux slice for handling note operations
├── hooks
│   └── useNotes.ts           // Custom hook for managing notes
├── utils
│   ├── DateUtils.ts          // Utility functions for date manipulation
│   └── GetNoteColor.ts       // Function to get the color of a note based on its deadline
├── lib
│   └── utils.ts              // Utility functions for the project
├── tailwind.config.js        // Tailwind CSS configuration
├── README.md                 // Documentation
└── package.json              // Project dependencies and scripts`

Usage
-----

-   **Adding a note**: Use the input fields in the `NoteForm` to create a new note with a message and deadline.
-   **Editing a note**: Click the "Edit" button on a note to modify its content or deadline.
-   **Deleting a note**: Click the "Delete" button on a note to remove it from the wall.
-   **Moving a note**: Use the "Move Up" or "Move Down" buttons to reorder the notes.

Available Scripts
-----------------

-   `npm run dev`: Starts the development server.
-   `npm run build`: Builds the project for production.
-   `npm run start`: Starts the production server.
-   `npm run lint`: Lints the code to ensure best practices.

Future Enhancements
-------------------

-   **Drag-and-drop functionality**: Implement drag-and-drop for rearranging notes.
-   **Local storage sync**: Store notes in local storage for persistence between sessions.
-   **Push notifications**: Notify users when deadlines are near.

License
-------

This project is licensed under the MIT License. Feel free to modify and distribute as needed.

Contributing
------------

If you'd like to contribute to the project, please fork the repository and submit a pull request. Contributions are welcome!