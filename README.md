
# SyncDoc – AI Powered Collaborative Workspace
A real-time collaborative document editor that allows multiple users to edit documents simultaneously, communicate through live chat, and receive AI-powered insights.

This project demonstrates a full-stack architecture using modern web technologies such as React, Node.js, and Socket.IO.


## Features
### 1. Real-Time Document Editing

Multiple users can edit the same document simultaneously. Changes appear instantly for all users.

### 2. Live Chat System

Users can communicate while editing documents through a real-time chat interface.

### 3. AI Assistance

Integrated AI tools help with:

### 4. Document summarization

Grammar and tone correction

### 5.File Sharing

Users can upload files directly in the workspace for collaboration.

### 6. Responsive UI

Clean and modern interface designed for usability and collaboration.

## Tech Stack

### Frontend
- **React**
- **JavaScript**
- **Socket.IO Client**

### Backend
- **Node.js**
- **Express**
- **Socket.IO**

### Version Control
- **Git**
- **GitHub**

## How It Works

### 1. User Connects to the Application
When a user opens the application, the frontend establishes a connection with the backend server using **Socket.IO**.

### 2. Document Session Starts
Each document has a unique **Document ID**. When users open a document, they join a specific WebSocket room associated with that document.

### 3. Real-Time Updates
When a user edits the document:
- The updated content is sent to the server.
- The server broadcasts the change to all users in the same document room.
- All collaborators see the update instantly.

### 4. Chat Communication
Users can communicate through the chat panel:
- Messages are sent to the server.
- The server broadcasts the message to all active collaborators in the document session.
  ## Syncdoc-project
│
├── backend
│ ├── server.js
│ └── package.json
│
├── frontend
│ ├── App.js
│ └── package.json
│
└── README.md

## Author
## Palak Jain
