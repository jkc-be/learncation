# Learnoliday - Claude Code Development Guide

## Project Overview

**Learnoliday** is a website platform for parents to enroll their children in English learning holidays (learnolidays/learncations). The site provides information about English immersion programs and facilitates enrollment.

**Current Stack:**
- Minimal HTML/CSS/JavaScript setup (no frameworks)
- Target URL: https://learnoliday.com
- Goal: Clean, lightweight, fast-loading website

## Project Goal

Recreate the current landing page with a minimal setup:
- **No WordPress dependencies** - clean, standalone HTML
- **Minimal external dependencies** - keep it lightweight
- **Modern, responsive design** - mobile-first approach
- **Fast loading** - optimized assets and clean code

Core features:
- Landing page with program information
- Enrollment inquiry form
- Contact information
- Multilingual support (EN primary, with support for Chinese markets)

## Development Instructions

### Core Principles

1. **Do what has been asked; nothing more, nothing less**
2. **NEVER create files unless absolutely necessary** for achieving your goal
3. **ALWAYS prefer editing an existing file** to creating a new one
4. **Write clean, maintainable code** following best practices
5. **Test thoroughly** before committing changes

### Current State

The project currently contains:
- `learn-cation-source/` - Original website files (reference only)
- `learn-cation-simple.html` - Simplified HTML export (reference)

### Development Approach

**Phase 1: Minimal Recreation**
1. Create clean, minimal HTML structure
2. Add essential CSS (modern, lightweight)
3. Implement basic JavaScript for interactivity
4. Ensure mobile-responsive design
5. Add simple contact/inquiry form

**Phase 2: Enhancement (Future)**
1. Implement multilingual support (EN primary, Chinese for HK/China market)
2. Add dynamic content management
3. Create enrollment system with backend
4. Integrate payment processing (international gateways)

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

### GitHub Issues Workflow

**All development work should be tracked through GitHub issues.**

#### Creating Issues

1. **Before starting any work**, check existing issues or create a new one
2. Use clear, descriptive titles that explain the task
3. Add appropriate labels: `enhancement`, `bug`, `documentation`, `Phase 1`, `Phase 2`, etc.
4. Include acceptance criteria and implementation details
5. Link related issues if applicable

#### Working with Issues

1. **Assign yourself** to an issue before starting work
2. **Reference the issue** in your branch name: `feature/issue-5-enrollment-form`
3. **Reference the issue** in commit messages: `feat: add enrollment form (fixes #5)`
4. **Update the issue** with progress, questions, or blockers
5. **Close issues automatically** by using keywords in commits/PRs: `fixes #5`, `closes #5`, `resolves #5`

#### Issue Management Commands

```bash
# List all open issues
gh issue list

# View a specific issue
gh issue view [issue-number]

# Create a new issue
gh issue create --title "Title" --body "Description" --label "enhancement"

# Close an issue
gh issue close [issue-number]

# Assign an issue to yourself
gh issue edit [issue-number] --add-assignee @me
```

#### Issue Lifecycle

1. **Open** → Issue created and ready for work
2. **In Progress** → Someone is actively working on it (assign yourself)
3. **In Review** → PR submitted, awaiting review
4. **Closed** → Work completed and merged, or issue resolved

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

## Technology Stack

**Current (Minimal Setup):**
- Pure HTML5 for structure
- Vanilla CSS3 for styling (CSS Grid, Flexbox)
- Vanilla JavaScript for interactivity
- No build tools required
- No external frameworks or libraries (except essential form handling)

**Future Expansion:**
- Backend: Python FastAPI (lightweight, modern)
- Database: PostgreSQL when needed
- Keep frontend minimal unless complexity requires framework

**Hosting:**
- Static site hosting (Netlify, Vercel, GitHub Pages)
- CDN for fast global delivery
- Simple deployment process

## Contact Information

- Website: https://learnoliday.com
- GitHub: https://github.com/jkc-be/learncation

## Development Focus

**All development work is tracked through GitHub Issues.**

- Check the [Issues tab](https://github.com/jkc-be/learncation/issues) for current tasks
- Use the TodoWrite tool during active development to track sub-tasks within an issue
- Break complex features into manageable steps
- Update issue progress regularly with comments

## Important Notes

- **Target Markets:** Africa and Hong Kong/China
- English immersion is the core value proposition
- User experience should be parent-friendly and professional
- Child safety and program quality should be prominently featured
- Consider international data privacy regulations
- Design should be culturally appropriate for target markets
- Currency and payment options for international customers

---

Remember: Plan carefully, code thoughtfully, test thoroughly, and document clearly!