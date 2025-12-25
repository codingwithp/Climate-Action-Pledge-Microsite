# Climate Action Pledge Microsite

A responsive single-page website for taking climate action pledges, generating digital certificates, and displaying public pledge data in real time.

## Live Demo
[Click here to view the live website](https://your-live-link.com)

## Features

- Hero section with call-to-action
- Dynamic KPIs:
  - Target pledges: 1,000,000
  - Achieved pledges: updates dynamically
  - Filtered counts: Students, Working Professionals, Workshops
- Pledge Form:
  - Name, Email, Mobile Number (required)
  - State and Profile Type
  - Multiple selectable commitment themes
- Certificate Generator:
  - Personalized certificate with name, "Cool Enough to Care!" statement
  - Hearts rating based on number of commitments
- Public Pledge Wall:
  - Shows Pledge ID, Name, Date, State, Profile, Love for Planet rating
  - Email & Mobile are never displayed publicly
- Privacy Notice:
  - Clearly shows that Mobile & Email are required for validation but not shown publicly

## Technical Details

- Frontend: HTML, CSS, JavaScript (or React/Next.js if used)
- Backend simulation: Google Sheets or JSON mock data
- Certificate generation: `dom-to-image-more` + `jsPDF`
- Responsive design for mobile and desktop
- Optional enhancements: smooth scrolling, animations, shareable certificate

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/pledge-microsite.git
