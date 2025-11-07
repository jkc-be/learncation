# Learncation - Claude Code Development Guide

## Project Overview

**Learncation** is a website platform for parents to enroll their children in English learning holidays (learnolidays/learncations). The site provides information about English immersion programs and facilitates enrollment.

**Current Stack:**
- Static HTML website (WordPress-generated)
- Target URL: https://learnoliday.com

## Project Goal

Create a comprehensive web platform that allows:
- Parents to view available English learning holiday programs
- Easy enrollment process for children
- Program information display (dates, locations, activities)
- Contact and inquiry management

## Development Instructions

### Core Principles

1. **Do what has been asked; nothing more, nothing less**
2. **NEVER create files unless absolutely necessary** for achieving your goal
3. **ALWAYS prefer editing an existing file** to creating a new one
4. **Write clean, maintainable code** following best practices
5. **Test thoroughly** before committing changes

### Current State

The project currently contains:
- `learn-cation-simple.html` - Main landing page (WordPress export)

### Next Steps for Development

Potential development tasks:
1. Convert static HTML to a dynamic web application
2. Implement enrollment system with database
3. Create admin panel for managing programs
4. Add contact forms and inquiry management
5. Implement multilingual support (EN, NL, FR for Belgian market)
6. Add payment integration for enrollment fees

### Git Workflow

1. **Always create a new branch** for each feature or fix:
   ```bash
   git checkout -b [type]/task-name
   # Examples:
   # feature/enrollment-form
   # fix/contact-form-validation
   # docs/update-readme
   ```

2. Use descriptive commit messages following conventional commits:
   ```bash
   git commit -m "type: description"
   # Examples:
   # feat: add enrollment form with validation
   # fix: correct date picker behavior
   # docs: update setup instructions
   ```

3. **Never push with --no-verify**

4. Test thoroughly before committing

### Code Quality Standards

- Write semantic, accessible HTML
- Use modern CSS practices (flexbox, grid)
- Ensure responsive design for mobile devices
- Validate all user inputs
- Follow WCAG accessibility guidelines
- Optimize images and assets for web performance

### Security Checklist

- [ ] No hardcoded credentials or API keys
- [ ] Input validation on all forms
- [ ] CSRF protection for form submissions
- [ ] Sanitize user-generated content
- [ ] Secure file upload handling
- [ ] SQL injection prevention (when database is added)
- [ ] XSS protection

### Testing Requirements

Before committing:
1. Test on multiple browsers (Chrome, Firefox, Safari)
2. Verify responsive design on mobile devices
3. Check all forms and interactive elements
4. Validate HTML/CSS
5. Test accessibility with screen readers
6. Verify all links work correctly

## Technology Stack Recommendations

When expanding beyond static HTML:

**Backend Options:**
- Python: FastAPI or Django
- Node.js: Express or NestJS
- PHP: Laravel

**Frontend:**
- Modern JavaScript framework (React, Vue, or keep vanilla JS)
- Tailwind CSS or Bootstrap for styling

**Database:**
- PostgreSQL for relational data
- MySQL as alternative

**Hosting:**
- Current: WordPress hosting
- Future: VPS, AWS, or similar cloud hosting

## Contact Information

- Website: https://learn-cation.com
- GitHub: https://github.com/jkc-be/learncation

## Development Focus

Use the TodoWrite tool to plan and track all development tasks. Break complex features into manageable steps and update progress regularly.

## Important Notes

- This is a Belgian business targeting Dutch, French, and English-speaking markets
- English immersion is the core value proposition
- User experience should be parent-friendly and professional
- Child safety and program quality should be prominently featured
- Consider GDPR compliance for data handling (EU regulations)

---

Remember: Plan carefully, code thoughtfully, test thoroughly, and document clearly!