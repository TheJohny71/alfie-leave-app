# Alfie Leave Management App

A modern, Apple-inspired leave management system designed for enterprise use.

## Project Overview

Alfie is being redesigned with a focus on user experience and modern design principles. The application helps teams manage their leave requests, coordinate time off, and maintain clear oversight of team availability.

### Key Features

- Smart Calendar Integration
- Region-Aware (UK/US) Holiday System
- Team Synchronization
- Real-time Updates
- Intelligent Leave Planning

## Design System

### Color Palette

- **Primary Background**: #F5F5F7 (Apple background gray)
- **Primary Accent**: #5E5CE6 (Apple system purple)
- **System Grays**: 
  - #98989D
  - #636366
  - #48484A
- **Semantic Colors**:
  - Success: #34C759
  - Warning: #FF9F0A
  - Error: #FF3B30

### Typography

- **Primary Fonts**: 
  - iOS: SF Pro Display
  - Web: Inter
- **Heading Scale**: 40/32/24/20/18/16
- **Body Scale**: 16/14/13/12
- **Line Heights**: 
  - Body: 1.5
  - Headings: 1.2

### Spacing System

Base unit: 4px
Scale: 4/8/12/16/24/32/48/64px

## Project Structure

```
alfie-leave-app/
├── design-system/
│   ├── tokens/
│   │   └── design-tokens.json
│   └── components/
│       ├── Button.jsx
│       ├── Card.jsx
│       ├── Input.jsx
│       ├── Header.jsx
│       └── Calendar.jsx
└── README.md
```

## Component Library

The design system includes the following core components:

1. **Base Components**
   - Buttons (Primary, Secondary, Tertiary)
   - Input Fields (Text, Select, Date)
   - Cards (Feature, Info, Action)
   - Navigation Elements
   - Data Displays

2. **Calendar Components**
   - Date Picker
   - Month/Week/Day Views
   - Event Indicators
   - Selection States
   - Timeline Visualization

## Accessibility

All components are built with accessibility in mind, following WCAG 2.1 AA compliance:

- Minimum contrast ratio: 4.5:1
- Focus indicators
- Screen reader support
- Keyboard navigation
- Reduced motion support

## Phase 1 Implementation Status

- [x] Project Setup
- [x] Design Token Implementation
- [x] Base Component Development
- [ ] Calendar Integration
- [ ] Leave Request Flow
- [ ] Team Management Interface

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/alfie-leave-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd alfie-leave-app
   ```

3. Review the design system components in the `design-system` folder

## Design Principles

1. **Clarity**: Clean, readable interfaces with clear hierarchies
2. **Efficiency**: Streamlined workflows and minimal steps
3. **Consistency**: Unified design language across all interfaces
4. **Feedback**: Clear system status and user action confirmation

## Contributing

1. All new components should follow the established design system
2. Test components for accessibility compliance
3. Maintain consistent spacing and typography
4. Follow the Apple-inspired design guidelines

## Next Steps

Phase 1 development focuses on:

1. Completing the core component library
2. Implementing the calendar system
3. Building the leave request workflow
4. Creating team management interfaces

## Questions?

For any questions about:
- Design System: [Contact Design Team Lead]
- Implementation: [Contact Development Team Lead]
- Project Management: [Contact Project Manager]

---
