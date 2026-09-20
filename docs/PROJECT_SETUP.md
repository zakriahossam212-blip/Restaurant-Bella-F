# Project Setup Guide

Complete guide to setting up the Bella Restaurant project for development.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Development Server](#development-server)
- [Build Process](#build-process)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)

## Prerequisites

### System Requirements

- **OS**: Windows, macOS, or Linux
- **RAM**: Minimum 4GB (8GB recommended)
- **Disk Space**: 2GB free space

### Required Software

- **Node.js**: 18.x or 20.x LTS
  - Download: https://nodejs.org/
  - Verify: `node --version`

- **npm**: 9.x or higher
  - Included with Node.js
  - Verify: `npm --version`

- **Git**: Latest version
  - Download: https://git-scm.com/
  - Verify: `git --version`

### Optional Tools

- **Visual Studio Code**: Recommended IDE
  - Download: https://code.visualstudio.com/
  - Extensions:
    - Angular Language Service
    - ESLint
    - Prettier
    - Thunder Client (API testing)

- **Docker**: For containerized development
  - Download: https://www.docker.com/

- **Postman**: For API testing
  - Download: https://www.postman.com/

## Installation

### 1. Clone Repository

```bash
# Clone the repository
git clone https://github.com/Mostafa-SAID7/Bella.git

# Navigate to project directory
cd Bella
```

### 2. Install Dependencies

```bash
# Install npm packages
npm install

# Verify installation
npm list
```

### 3. Verify Installation

```bash
# Check Angular CLI
ng version

# Check TypeScript
npx tsc --version

# Check ESLint
npx eslint --version
```

## Configuration

### Environment Setup

Create `.env` file in project root (if needed):

```bash
# API Configuration
API_BASE_URL=http://localhost:3000
API_TIMEOUT=30000

# Firebase Configuration (optional)
FIREBASE_API_KEY=your_api_key
FIREBASE_AUTH_DOMAIN=your_auth_domain
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_sender_id
FIREBASE_APP_ID=your_app_id

# Environment
NODE_ENV=development
```

### Angular Configuration

Angular configuration is in `angular.json`:

```json
{
  "projects": {
    "resturent": {
      "architect": {
        "build": {
          "configurations": {
            "development": {},
            "production": {}
          }
        }
      }
    }
  }
}
```

### TypeScript Configuration

TypeScript settings in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ES2022",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

### ESLint Configuration

ESLint rules in `.eslintrc.json`:

```json
{
  "extends": [
    "eslint:recommended",
    "plugin:@angular-eslint/recommended"
  ],
  "rules": {
    "no-console": "warn",
    "no-debugger": "warn"
  }
}
```

### Prettier Configuration

Code formatting in `.prettierrc`:

```json
{
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5"
}
```

## Development Server

### Start Development Server

```bash
# Start the development server
npm start

# Application will be available at http://localhost:4200

# Live Demo: https://bella-flax.vercel.app/
```

### Development Server Options

```bash
# Start with specific port
ng serve --port 4300

# Start with live reload disabled
ng serve --live-reload=false

# Start with source maps
ng serve --source-map

# Start with specific configuration
ng serve --configuration development
```

### Hot Module Replacement

The development server includes HMR (Hot Module Replacement):

- Changes are automatically reloaded
- Application state is preserved
- No full page refresh needed

### Accessing the Application

- **Local**: http://localhost:4200
- **Network**: http://your-ip:4200
- **Mobile**: Use network URL on mobile device
- **Live Demo**: https://bella-flax.vercel.app/

## Build Process

### Development Build

```bash
# Build for development
npm run build

# Output: dist/resturent/
```

### Production Build

```bash
# Build for production
npm run build:prod

# Output: dist/resturent/
# Includes: minification, tree-shaking, optimization
```

### Build Options

```bash
# Build with source maps
ng build --source-map

# Build with stats
ng build --stats-json

# Build with progress
ng build --progress

# Build specific configuration
ng build --configuration production
```

### Build Output

```
dist/resturent/
├── index.html              # Main HTML file
├── main.js                 # Main bundle
├── polyfills.js            # Polyfills
├── styles.css              # Global styles
├── assets/                 # Static assets
└── ...
```

### Bundle Analysis

```bash
# Analyze bundle size
npm run analyze

# Opens webpack-bundle-analyzer
```

## Testing

### Unit Tests

```bash
# Run unit tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --code-coverage

# Run tests in CI mode
npm run test:ci
```

### E2E Tests

```bash
# Run E2E tests
npm run e2e

# Run specific E2E test
npm run e2e -- --specs=src/e2e/menu.e2e.ts
```

### Test Coverage

```bash
# Generate coverage report
npm run test:ci

# Coverage report location: coverage/
# Open in browser: coverage/index.html
```

## Code Quality

### Linting

```bash
# Run ESLint
npm run lint

# Fix linting issues
npm run lint:fix

# Lint specific file
ng lint --files=src/app/app.component.ts
```

### Code Formatting

```bash
# Format code
npm run format

# Check formatting
npm run format:check

# Format specific file
npx prettier --write src/app/app.component.ts
```

### Type Checking

```bash
# Run TypeScript compiler
npx tsc --noEmit

# Check specific file
npx tsc src/app/app.component.ts --noEmit
```

## Docker Setup

### Build Docker Image

```bash
# Build image
npm run docker:build

# Or manually
docker build -t bella-restaurant .
```

### Run Docker Container

```bash
# Run container
npm run docker:run

# Or manually
docker run -p 80:80 bella-restaurant
```

### Docker Compose

```bash
# Start services
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f
```

## Git Setup

### Configure Git

```bash
# Set user name
git config user.name "Your Name"

# Set user email
git config user.email "m.ssaid356@gmail.com"

# Set default branch
git config --global init.defaultBranch main
```

### Create Feature Branch

```bash
# Create and checkout feature branch
git checkout -b feature/your-feature-name

# Push branch to remote
git push -u origin feature/your-feature-name
```

## IDE Setup

### Visual Studio Code

#### Recommended Extensions

1. **Angular Language Service**
   - Provides Angular template intellisense

2. **ESLint**
   - Real-time linting

3. **Prettier**
   - Code formatting

4. **Thunder Client**
   - API testing

5. **GitLens**
   - Git integration

#### VS Code Settings

Create `.vscode/settings.json`:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

#### VS Code Launch Configuration

Create `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "ng serve",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:4200",
      "webRoot": "${workspaceFolder}",
      "sourceMapPathOverride": {
        "webpack:///src/*": "${webspaceFolder}/src/*"
      }
    }
  ]
}
```

## Troubleshooting

### Common Issues

#### 1. Node Modules Issues

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

#### 2. Port Already in Use

```bash
# Use different port
ng serve --port 4300

# Or kill process using port 4200
# Windows: netstat -ano | findstr :4200
# macOS/Linux: lsof -i :4200
```

#### 3. Build Failures

```bash
# Clear Angular cache
rm -rf .angular/cache

# Rebuild
npm run build:prod
```

#### 4. TypeScript Errors

```bash
# Check TypeScript version
npx tsc --version

# Reinstall TypeScript
npm install --save-dev typescript@latest
```

#### 5. ESLint Errors

```bash
# Fix all ESLint issues
npm run lint:fix

# Clear ESLint cache
npx eslint --cache --cache-location .eslintcache --fix src/
```

### Getting Help

1. Check existing issues: https://github.com/Mostafa-SAID7/Bella/issues
2. Review documentation: `/docs`
3. Check Angular docs: https://angular.io/docs
4. Ask in discussions: https://github.com/Mostafa-SAID7/Bella/discussions
5. View live demo: https://bella-flax.vercel.app/
6. Visit portfolio: https://m-said-portfolio.netlify.app/

## Next Steps

1. **Start Development Server**: `npm start`
2. **Read Architecture Guide**: See `docs/architecture.md`
3. **Review Contributing Guide**: See `docs/CONTRIBUTING.md`
4. **Explore Project Structure**: See [the architecture guide](architecture.md)
5. **Check Features**: See `docs/FEATURES.md`

## Additional Resources

- [Angular Documentation](https://angular.io/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [NgRx Documentation](https://ngrx.io/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [PrimeNG Components](https://primeng.org/)

---

Last updated: March 2026
