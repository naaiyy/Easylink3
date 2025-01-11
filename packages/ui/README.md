# @easylink/ui

Modern, accessible UI components built with shadcn/ui and Tailwind CSS.

## Structure

```
src/
├── components/           # UI Components
│   ├── core/            # Basic elements (Button, Input, etc.)
│   ├── data-display/    # Tables, Lists, Cards
│   ├── forms/           # Form-specific components
│   ├── layout/          # Layout components
│   ├── navigation/      # Navigation components
│   └── feedback/        # Alerts, Toasts, Progress
├── hooks/               # Custom React hooks
│   ├── forms/           # Form-related hooks
│   └── animation/       # Animation hooks
├── themes/              # Theme configuration
│   ├── tokens/          # Design tokens
│   └── presets/         # Theme presets
├── styles/              # Global styles
└── lib/                 # Utilities
```

## Key Features

- Built on shadcn/ui principles
- Full Tailwind CSS integration
- Dark mode support
- Responsive by default
- Accessibility-first
- Type-safe props

## Installation

```bash
# In your application
pnpm add @easylink/ui
```

## Basic Usage

1. **Setup in Next.js/React Application**

```typescript
// app/layout.tsx or similar
import '@easylink/ui/styles/globals.css';
```

2. **Using Components**

```typescript
import { Button, Card, Input } from '@easylink/ui';

// Basic usage
<Button variant="primary">Click me</Button>

// With all props
<Button
  variant="primary"
  size="lg"
  loading={false}
  disabled={false}
  onClick={() => {}}
>
  Click me
</Button>

// Form elements
<Input
  type="text"
  placeholder="Enter value"
  error="This field is required"
/>
```

3. **Using Hooks**

```typescript
import { useForm, useToast } from '@easylink/ui/hooks';

// Form handling
const { register, handleSubmit } = useForm();

// Notifications
const { toast } = useToast();
toast.success('Operation completed');
```

4. **Theming**

```typescript
// Customize theme
import { ThemeProvider } from '@easylink/ui';

<ThemeProvider
  theme={{
    colors: {
      primary: '#007AFF',
      // ...
    }
  }}
>
  <App />
</ThemeProvider>
```

## Component Categories

### Core Components

- Button
- Input
- Select
- Checkbox
- Radio
- Switch

### Data Display

- Table
- Card
- List
- Badge
- Avatar

### Forms

- Form
- FormField
- InputGroup
- FileUpload

### Layout

- Container
- Grid
- Stack
- Divider

### Navigation

- Tabs
- Breadcrumb
- Pagination
- Menu

### Feedback

- Alert
- Toast
- Progress
- Spinner

## Development

```bash
# Install dependencies
pnpm install

# Development mode
pnpm dev

# Build package
pnpm build

# Run tests
pnpm test

# Type checking
pnpm type-check
```

## Guidelines

1. Component Creation:

   - Use shadcn/ui CLI for new components
   - Follow accessibility guidelines
   - Include proper TypeScript types
   - Add comprehensive tests

2. Styling:

   - Use Tailwind CSS classes
   - Follow design token system
   - Support dark mode
   - Ensure responsive design

3. Documentation:
   - Document all props
   - Include usage examples
   - Add accessibility notes
   - Provide customization options
