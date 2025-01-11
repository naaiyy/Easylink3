# @easylink/backend

> NestJS-based backend service for the Easylink platform.

## Overview

This package serves as the main API server for Easylink, handling core business logic, data persistence, and integration with external services.

## 📦 Package Structure

```
backend/
├── src/
│   ├── config/         # Environment and app configuration
│   ├── modules/        # Feature modules (users, jobs, etc.)
│   ├── shared/         # Shared utilities, filters, interceptors
│   │   ├── filters/    # Exception filters
│   │   └── interceptors/ # Response transformers
│   └── types/          # TypeScript type definitions
├── test/              # End-to-end tests
└── package.json       # Package configuration
```

## 🔧 Configuration

- **TypeScript**: Strict mode enabled with path aliases
- **ESLint**: Extended from root config with NestJS-specific rules
- **Prettier**: Code formatting rules
- **Jest**: Unit and integration testing setup
- **NestJS CLI**: Development and build tooling

## 🛠 Development Scripts

```bash
# Development
pnpm start         # Start the server
pnpm start:dev     # Start with hot-reload
pnpm start:debug   # Start with debugging

# Building
pnpm build         # Production build
pnpm build:watch   # Watch mode build

# Testing
pnpm test          # Run unit tests
pnpm test:watch    # Watch mode testing
pnpm test:cov      # Test coverage
pnpm test:debug    # Debug tests
pnpm test:e2e      # End-to-end tests

# Utilities
pnpm clean         # Clean build outputs
pnpm format        # Format code
pnpm lint          # Lint code
```

## 🔐 Error Handling

The backend implements a robust error handling system:

- HTTP Exception Filter for standardized error responses
- Transform Interceptor for consistent response formatting

## 🔄 CI/CD Integration

The package is integrated with the project's CI/CD pipeline:

- Automated testing in GitHub Actions
- Type checking in release workflow
- Version management via semantic-release

## 📚 Dependencies

Core dependencies:

- `@nestjs/common`: ^10.0.0
- `@nestjs/core`: ^10.0.0
- `@nestjs/platform-express`: ^10.0.0
- `reflect-metadata`: ^0.1.13
- `rxjs`: ^7.8.1

Dev dependencies are managed at the workspace level for consistency.

## 🤝 Contributing

1. Follow the TypeScript guidelines in `tsconfig.json`
2. Ensure tests pass: `pnpm test`
3. Format code: `pnpm format`
4. Submit a PR following the project's guidelines

## 📝 License

See the root package's LICENSE file.
