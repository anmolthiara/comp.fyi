# Compensation Calculator

A comprehensive compensation calculator for RSU (Restricted Stock Units) and ISO (Incentive Stock Options) with dark mode support, progressive tax calculations, and detailed breakdowns.

## Features

### RSU Calculator
- **Cash Compensation**: Base salary with optional 3% annual raises, bonus %, sign-on bonus
- **RSU Grants**: Initial grant with front-loaded or even vesting schedules
- **Annual Refreshers**: Optional Year 2-4 refresher grants
- **Stock Price Modeling**: Per-year pricing with auto-growth calculator
- **Tax Withholding**: Progressive 2026 tax brackets by filing status, state tax, FICA
- **Visualizations**: Stacked bar chart and line chart showing total comp
- **Detailed Table**: Year-by-year breakdown of all components

### ISO Calculator
- **Cash Compensation**: Base salary with optional 3% annual raises, bonus %, sign-on bonus
- **ISO Basics**: Number of options, strike price, assumed future share price
- **Vesting Schedule**: 1-year cliff option, configurable vesting period
- **State-Based Tax Profiles**: Dynamic tax profiles for 18+ states
- **Exercise Scenarios**: At Vest or At Exit timing options
- **Summary Cards**: Exercise cost, gross upside, taxes, net upside, ROI multiple
- **Scenario Analysis**: Interactive slider to model different share price scenarios
- **Detailed Table**: Year-by-year breakdown with ISO upside

### General Features
- 🌙 **Dark Mode**: Default dark mode with toggle
- 💾 **localStorage**: All inputs persisted across sessions
- 📊 **Interactive Charts**: Click to copy charts as PNG
- 📋 **Copy Values**: Click any summary card value to copy
- 📱 **Mobile Responsive**: Works on all screen sizes
- 🎨 **Clean Design**: IBM Plex Mono font, cyan/orange color scheme

## Setup

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Development mode (with hot reload):**
   ```bash
   npm run dev
   ```
   This watches for changes in `input.css` and rebuilds `output.css` automatically.

3. **Production build:**
   ```bash
   npm run build
   ```
   This creates a minified `output.css` file for production.

4. **Open in browser:**
   - Simply open `index.html` in your browser
   - Or use a local server like `npx serve` or Python's `python -m http.server`

## File Structure

```
.
├── index.html              # Main HTML file
├── input.css              # Tailwind input CSS
├── output.css             # Generated Tailwind CSS (gitignored)
├── tailwind.config.js     # Tailwind configuration
├── package.json           # NPM configuration
├── manifest.webmanifest   # PWA manifest
└── README.md             # This file
```

## Deployment

### Static Hosting (Vercel, Netlify, GitHub Pages)

1. **Build the CSS:**
   ```bash
   npm run build
   ```

2. **Deploy these files:**
   - `index.html`
   - `output.css`
   - `manifest.webmanifest`

### Environment Variables
None required - everything runs client-side.

## Configuration

### Tailwind Config
Edit `tailwind.config.js` to customize:
- Colors
- Fonts
- Breakpoints
- Additional utilities

### Custom Styles
Add custom styles to `input.css` in the `@layer components` or `@layer utilities` sections.

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Technologies Used
- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first styling
- **Vanilla JavaScript**: No framework dependencies
- **Chart.js**: Data visualizations
- **Select2**: Enhanced dropdowns
- **localStorage API**: Data persistence

## Features Deep Dive

### Tax Calculation (RSU)
- Uses 2026 federal tax brackets
- Supports Single, Married Filing Jointly, and Head of Household
- Configurable state tax rate
- FICA tax (Social Security + Medicare)
- Progressive bracket calculation for accurate withholding

### Tax Profiles (ISO)
- Pre-configured for 18 US states
- Includes high-tax states (CA, NY, NJ) and no-income-tax states (TX, FL, WA)
- Estimates federal + state marginal rate on ISO gains
- Custom option for manual entry

### Vesting Schedules
- **Front-loaded**: 40/30/20/10 (typical for initial grants)
- **Even**: 25/25/25/25 (typical for refreshers)
- Accounts for multi-year vesting of refresher grants

## License
MIT License - See LICENSE file for details

## Author
Anmol Thiara

## Contributing
Contributions welcome! Please open an issue or pull request.

## Support
For issues or questions, please open a GitHub issue.
