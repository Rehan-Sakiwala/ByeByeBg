# ByeByeBG - erase background with ease!

## Project Description
ByeByeBG is a React + Vite project designed to provide an easy and efficient way to remove backgrounds from images. The project integrates payment processing using Razorpay and user authentication via Clerk, making it a full-featured background removal web application.

## Technologies Used
- React 19
- Vite (build tool and development server)
- Tailwind CSS (utility-first CSS framework)
- Axios (HTTP client)
- React Router DOM (routing)
- Clerk React (authentication)
- Razorpay (payment gateway integration)
- lucide-react (icon library)
- react-hot-toast (notifications)

## Project Structure
- `src/` - Main source code folder containing:
  - `components/` - Reusable React components
  - `pages/` - Application pages (e.g., Home, Result)
  - `context/` - React context for state management
  - `assets/` - Images, videos, and other static assets
  - `service/` - Service layer for API calls and business logic

- `public/` - Public assets served statically
- `vite.config.js` - Vite configuration file
- `package.json` - Project metadata and dependencies

## Getting Started

### Prerequisites
- Node.js (recommended version 16 or higher)
- npm (comes with Node.js)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd bg-remover
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server
Start the development server with hot module replacement:
```bash
npm run dev
```
Open your browser and go to `http://localhost:5173` (or the URL shown in the terminal).

### Building for Production
To create an optimized production build:
```bash
npm run build
```

### Previewing the Production Build
To locally preview the production build:
```bash
npm run preview
```

## Additional Scripts
- `npm run lint` - Run ESLint to check for code quality and style issues.

## Features
- Background removal functionality with an intuitive UI
- User authentication using Clerk
- Payment integration with Razorpay
- Responsive design using Tailwind CSS
- Notifications for user feedback