# Alfie Leave Management App
A modern, Apple-inspired leave management system designed for enterprise use.

## Project Overview
Alfie is being redesigned with a focus on user experience and modern design principles. The application helps teams manage their leave requests, coordinate time off, and maintain clear oversight of team availability.

## Key Features
- Smart Calendar Integration
- Region-Aware (UK/US) Holiday System
- Team Synchronization
- Real-time Updates
- Intelligent Leave Planning

## Project Structure
```
alfie-leave-app/
├── design-system/
│   ├── tokens/
│   │   └── design-tokens.json
│   └── components/
│       ├── Base/
│       │   ├── Button.jsx
│       │   ├── Card.jsx
│       │   ├── Input.jsx
│       │   └── Header.jsx
│       ├── Calendar/
│       │   ├── Calendar.jsx
│       │   └── DatePicker.jsx
│       └── LeaveManagement/
│           ├── index.jsx
│           ├── RequestFlow.jsx
│           ├── StatusTracker.jsx
│           ├── Approval.jsx
│           ├── Notifications.jsx
│           └── Balance.jsx
└── docs/
    └── components/
        └── index.html
```

## Implementation Status

### Phase 1 - Completed ✓
- Project Setup
- Design Token Implementation
- Base Component Development
- Calendar Integration

### Phase 2 - In Progress
- Leave Request Flow ✓
- Team Management Interface ✓
- Status Tracking System ✓
- Approval Workflow ✓
- Balance Visualization ✓

## Getting Started
1. Clone the repository:
```bash
git clone https://github.com/your-username/alfie-leave-app.git
```

2. Navigate to project:
```bash
cd alfie-leave-app
```

3. Review components:
- Base components in `design-system/components/Base`
- Calendar system in `design-system/components/Calendar`
- Leave management in `design-system/components/LeaveManagement`

## Design System
- Color Palette
  - Primary Background: #F5F5F7
  - Primary Accent: #5E5CE6
  - System Grays: #98989D, #636366, #48484A
  - Semantic Colors: Success (#34C759), Warning (#FF9F0A), Error (#FF3B30)

- Typography
  - Primary Fonts: SF Pro Display (iOS), Inter (Web)
  - Heading Scale: 40/32/24/20/18/16
  - Body Scale: 16/14/13/12

## Accessibility
- WCAG 2.1 AA compliant
- Minimum contrast ratio: 4.5:1
- Focus indicators
- Screen reader support
- Keyboard navigation
- Reduced motion support

## Contributing
- Follow established design system
- Test accessibility compliance
- Maintain consistent spacing and typography
- Follow Apple-inspired guidelines
