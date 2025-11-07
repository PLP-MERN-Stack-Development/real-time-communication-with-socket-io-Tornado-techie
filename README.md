# Real-Time Chat Application with Socket.io

## 🚀 Live Application

**Try the Live Application:**
- **Frontend (Vercel):** [https://realtime-socketio-chatapp-z6rv.vercel.app](https://realtime-socketio-chatapp-z6rv.vercel.app)
- **Backend API (Render):** [https://socket-io-chat-app-mhoi.onrender.com](https://socket-io-chat-app-mhoi.onrender.com)
- **Health Check:** [https://socket-io-chat-app-mhoi.onrender.com/health](https://socket-io-chat-app-mhoi.onrender.com/health)

> **Note:** The backend may take 30-60 seconds to wake up on first request (Render free tier limitation).

---

## About

This repository contains a real-time chat application built with a React front-end and a Node/Express + Socket.io back-end. It demonstrates bidirectional real-time messaging, user presence, message operations (reply, star, edit, delete), private messaging, and additional UX improvements and is a requirement of my week 5 assignment in my specialization as a full stack MERN developer.

---

## Project overview

- Frontend: React (client/) — real-time UI, context providers, custom hooks, and a message context menu
- Backend: Node.js + Express (server/) — REST endpoints, Socket.io handlers, MongoDB models
- Communication: Socket.io for real-time events (messages, typing, presence, notifications)

This app was created as a learning project and includes several advanced chat features described below.

## Repository structure

```
real-time-communication-with-socket-io-Tornado-techie/
├── .git/                   # Git repository metadata
├── .gitignore              # Git ignore rules
├── render.yaml             # Render deployment configuration
├── client/                 # React front-end application
│   ├── public/             # Static files
│   │   └── index.html      # Main HTML template
│   ├── src/                # React source code
│   │   ├── components/     # UI components
│   │   │   ├── ChatRoom.jsx           # Main chat interface
│   │   │   ├── Login.jsx              # Login/Register component
│   │   │   └── MessageContextMenu.jsx # Right-click context menu
│   │   ├── context/        # React context providers
│   │   │   └── AuthContext.jsx        # Authentication context
│   │   ├── hooks/          # Custom React hooks
│   │   │   ├── useMessageContextMenu.js  # Context menu hook
│   │   │   └── useNotifications.js       # Browser notifications hook
│   │   ├── socket/         # Socket.io client configuration
│   │   │   └── socket.js   # Socket client setup
│   │   ├── App.css         # Global styles
│   │   ├── App.jsx         # Main app component
│   │   └── index.js        # React entry point
│   └── package.json        # Client dependencies and scripts
├── server/                 # Express + Socket.io server
│   ├── middleware/         # Express middleware
│   │   └── auth.js         # Socket authentication middleware
│   ├── models/             # Mongoose database models
│   │   ├── Message.js      # Chat message model
│   │   └── user.js         # User model
│   ├── routes/             # Express API routes
│   │   └── auth.js         # Authentication routes
│   ├── socket/             # Socket.io event handlers
│   │   └── ChatHandlers.js # Chat-related socket events
│   ├── server.js           # Server entry point
│   └── package.json        # Server dependencies and scripts
├── screenshots/            # Application screenshots
│   ├── advancedfeature1.png
│   ├── advancedfeature2.png
│   ├── advancedfeature3-online-status.png
│   ├── chatsection.png
│   ├── loginpage.png
│   └── registerpage.png
├── Week5-Assignment.md     # Assignment instructions
└── README.md               # This documentation file
```

---

## 🚀 CI/CD Pipeline & Deployment Process

### GitHub Actions Workflows
This project includes automated CI/CD pipelines that run on every push and pull request:

**Continuous Integration Pipeline** (`.github/workflows/ci-cd.yml`):
- ✅ **Multi-Node Testing**: Tests on Node.js 18.x and 20.x
- ✅ **Dependency Installation**: Installs both server and client dependencies  
- ✅ **Code Quality Checks**: Runs linting on both frontend and backend
- ✅ **Automated Testing**: Executes test suites with coverage reports
- ✅ **Production Build**: Builds optimized React application
- ✅ **Deployment Triggers**: Auto-deploys to production on main branch

**Code Quality Pipeline** (`.github/workflows/code-quality.yml`):
- 🔍 **Security Audits**: Checks for vulnerable dependencies
- 📊 **Package Analysis**: Identifies outdated packages
- 🛡️ **Multi-level Checks**: Runs on both server and client codebases

### Deployment Process Documentation

#### Automatic Deployment Flow
```
1. Developer pushes to main branch
2. GitHub Actions triggers CI/CD pipeline
3. Tests run automatically (Node 18.x & 20.x)
4. Code quality and security checks execute
5. If all checks pass:
   ├── Render auto-deploys backend
   └── Vercel auto-deploys frontend
6. Health checks verify deployment success
```

#### Manual Deployment Process
```bash
# 1. Ensure all tests pass locally
npm test

# 2. Build production version
cd client && npm run build

# 3. Commit and push changes
git add .
git commit -m "feat: description of changes"
git push origin main

# 4. Monitor deployment in dashboards:
# - GitHub Actions: Check workflow status
# - Render: Monitor backend deployment
# - Vercel: Monitor frontend deployment
```

### CI/CD Pipeline Screenshots

![CI/CD Pipeline Overview](screenshots/ci-cd-pipeline.png)
*GitHub Actions workflow showing successful CI/CD pipeline execution*

![Deployment Success](screenshots/pages-build-deployment.png)
*Successful automatic deployment to production environments*

![Code Quality Checks](screenshots/code-quality.png)
*Security audits and code quality analysis results*

### 📸 How to Capture CI/CD Pipeline Screenshots

#### 1. **CI/CD Pipeline Overview** (`cicd-pipeline-overview.png`)
```
1. Go to your GitHub repository
2. Click on "Actions" tab
3. Click on any recent workflow run
4. Take screenshot showing:
   - Workflow name and status
   - All job stages (test, deploy-backend, deploy-frontend)
   - Execution time and results
   - Green checkmarks for successful runs
```

#### 2. **Test Results** (`test-results.png`)
```
1. In GitHub Actions, click on a completed workflow
2. Click on "Test Application" job
3. Expand the test execution steps
4. Screenshot showing:
   - Node.js version matrix (18.x, 20.x)
   - Test execution output
   - Coverage reports (if available)
   - Lint results
```

#### 3. **Deployment Success** (`deployment-success.png`)
```
1. In GitHub Actions, show completed workflow with all green checkmarks
2. Alternatively, show Render/Vercel deployment dashboards
3. Screenshot should show:
   - Successful deployment status
   - Deployment time and duration
   - Live application URLs
   - Health check confirmations
```

#### 4. **Code Quality Checks** (`code-quality-checks.png`)
```
1. Click on "Code Quality Check" workflow
2. Expand security audit steps
3. Screenshot showing:
   - npm audit results
   - Security vulnerability scans
   - Package outdated checks
   - Overall security status
```

#### 📁 Screenshot Requirements:
- **Format**: PNG or JPG
- **Size**: 1200px width recommended
- **Quality**: Clear text, readable interface elements
- **Content**: Include timestamps and status indicators

---

## Advanced features implemented

- Real-time messaging with Socket.io
- User authentication and presence tracking (isOnline, lastSeen)
- Message history per room and private messages
- Typing indicators and stop-typing events
- Message actions via context menu: Reply, Reply privately, Star/Unstar, Copy, Forward
- Reply-to-message feature with reply preview and clickable reply previews (scrolls and highlights original message)
- Message edit and delete
- Message starring (star/unstar) with per-user state
- Desktop/notification hooks when receiving messages or presence changes
- Graceful server shutdown and error handling

---

## Setup and Deployment

### Local Development

Follow these steps to run the project locally. Commands assume you're in the repository root.

**Prerequisites:**
- Node.js (v16+ recommended) and npm installed
- MongoDB running locally (or a cloud MongoDB URI)

**Server Setup:**
```powershell
cd server
# Install server dependencies
npm install

# Create .env file in server/ with required variables (see Environment Variables section)
# Start server in development mode
npm run dev
```

**Client Setup:**
```powershell
cd client
npm install
# Start client development server
npm start
```

Open http://localhost:3000 in your browser. The client connects to the server at http://localhost:5000.

### Production Deployment

**Render (Backend):**
1. Connect your GitHub repository to Render
2. Create a new Web Service using the `render.yaml` blueprint
3. Set the required environment variables in Render dashboard:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
   - `JWT_SECRET`: A secure random string for JWT signing
   - `CLIENT_URL`: Your frontend URL (GitHub Pages URL)
   - `NODE_ENV`: Set to `production`
4. Render will automatically build and deploy your backend

**Vercel (Frontend):**
1. Frontend is deployed to Vercel automatically from GitHub
2. URL: https://realtime-socketio-chatapp-z6rv.vercel.app
3. Environment variables are configured in `vercel.json` for production builds

**Deployment Files:**
- `render.yaml`: Render service configuration for backend deployment

---

## Deployment Configuration

This project includes configuration for production deployment on Render:

- **`render.yaml`**: Render service blueprint for backend deployment

---

## Environment variables

### Development (.env file in server/ folder):
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/chat-app
JWT_SECRET=your_secure_jwt_secret_here
CLIENT_URL=http://localhost:3000
NODE_ENV=development
```

### Production (Render Environment Variables):
```
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>
JWT_SECRET=your_secure_production_jwt_secret
CLIENT_URL=https://realtime-socketio-chatapp-z6rv.vercel.app
NODE_ENV=production
```

**Important Notes:**
- MongoDB Atlas is recommended for production (replace local MongoDB URI)
- Generate a secure JWT secret using: `node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"`
- Client URL should point to your deployed frontend
- **Security Warning:** Never commit real credentials to your repository. Replace `<username>`, `<password>`, `<cluster>`, and `<database>` with your actual MongoDB Atlas credentials only in your deployment environment variables.

---

## How reply highlighting works (quick note for maintainers)

- When a message is replied to, the message object contains a `repliedTo` field (either an id or an object depending on server serialization).
- The client shows a condensed reply preview inside the replying message and allows clicking the preview to scroll to and temporarily highlight the original message.
- The CSS class `highlighted-message` runs a brief pulse animation to make the origin obvious.

---

## Screenshots

![Chat - register view](screenshots/registerpage.png)

![Chat - login view](screenshots/loginpage.png)

![Chat - main view](screenshots/chatsection.png)

![Reply preview and highlighted message](screenshots/advancedfeature2.png)

![Send preview and core features](screenshots/advancedfeature1.png)

![Online status](screenshots/advancedfeature3-online-status.png)

---

## Troubleshooting

**ERR_CONNECTION_REFUSED when connecting to Socket.io:**
- Ensure server is running (`npm run dev` in server directory)
- Confirm server port matches the client socket URL
- Check that CLIENT_URL environment variable is set correctly

**"require is not defined in ES module scope" errors:**
- Project uses ES modules (`"type": "module"` in package.json)
- Use `import/export` syntax instead of `require/module.exports`

**CORS issues:**
- Verify server CORS settings allow the client origin
- Check CLIENT_URL environment variable matches your frontend URL

**Render deployment failures:**
- Ensure all environment variables are set in Render dashboard
- Check Render build logs for specific error messages
- Verify MongoDB connection string is correct
- Render may take a few minutes for the initial deploy

**GitHub Actions CI/CD failures:**
- Check workflow logs in GitHub Actions tab
- Verify Node.js version compatibility (18.x, 20.x supported)
- Ensure all environment secrets are configured
- Check for dependency conflicts or security vulnerabilities
- Verify build scripts work locally before pushing

**MongoDB connection issues:**
- For local development: Ensure MongoDB is running on localhost:27017
- For production: Verify MongoDB Atlas connection string and network access

**Environment variable issues:**
- Create a `.env` file in the `server/` directory for local development
- For production: Set variables in Render dashboard, not in .env file
- Ensure JWT_SECRET is a secure, long random string

---

## Development notes & next steps

**Technical Stack:**
- Frontend: React with Socket.io client
- Backend: Node.js, Express, Socket.io server
- Database: MongoDB (local development) / MongoDB Atlas (production)
- Deployment: Vercel (frontend) + Render (backend)

**Potential Improvements:**
- Add unit/integration tests for socket handlers and React components
- Implement message delivery/read receipts
- Add persistence for starred messages per-user
- Improve accessibility (keyboard context menu, ARIA labels)
- Add file sharing capabilities
- Implement message search functionality

---

**Repository Notes:**
- This repository is a fork from the classroom repo
- Original classroom repo: `PLP-MERN-Stack-Development/real-time-communication-with-socket-io-Tornado-techie`
- Personal fork: `Tornado-techie/real-time-communication-with-socket-io-Tornado-techie`
- Frontend deployed from personal fork to Vercel
- Backend deployed from personal fork to Render

---

Happy coding! by Salome Mundia#   U p d a t e d   1 1 / 0 7 / 2 0 2 5   1 8 : 1 8 : 2 0 
 
 