# Ruck Intelligence - AI Contractor Portal Demo

## Project Overview

Build a single-page demo application showcasing the "Ruck Intelligence" AI-powered contractor portal. This is for hackathon presentation screenshots - visual fidelity is paramount, actual backend functionality is not required. The demo should look production-ready and match Ruck's existing design system exactly.

## Design System Specifications

### Color Palette

**Primary Colors:**

- Ruck Orange (Primary): `#FFA500` (used for buttons, highlights, active states)
- Ruck Orange Hover: `#FF9500`
- Ruck Orange Light: `#FFF4E5` (backgrounds for notifications/alerts)

**Neutral Colors:**

- Background White: `#FFFFFF`
- Background Gray: `#F8F9FA`
- Border Gray: `#E5E7EB`
- Text Primary: `#1F2937`
- Text Secondary: `#6B7280`
- Text Muted: `#9CA3AF`

**Status Colors:**

- Success Green: `#10B981`
- Warning Amber: `#F59E0B`
- Error Red: `#EF4444`
- Info Blue: `#3B82F6`

### Typography

**Font Family:** Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif

**Font Sizes:**

- Hero Heading: 48px / 3rem, font-weight: 700
- H1: 36px / 2.25rem, font-weight: 700
- H2: 30px / 1.875rem, font-weight: 600
- H3: 24px / 1.5rem, font-weight: 600
- H4: 20px / 1.25rem, font-weight: 600
- Body Large: 18px / 1.125rem, font-weight: 400
- Body: 16px / 1rem, font-weight: 400
- Body Small: 14px / 0.875rem, font-weight: 400
- Caption: 12px / 0.75rem, font-weight: 400

**Line Heights:**

- Headings: 1.2
- Body: 1.5
- Caption: 1.4

### Spacing System

Use 8px base unit (0.5rem):

- xs: 4px / 0.25rem
- sm: 8px / 0.5rem
- md: 16px / 1rem
- lg: 24px / 1.5rem
- xl: 32px / 2rem
- 2xl: 48px / 3rem
- 3xl: 64px / 4rem

### Component Styles

#### Buttons

**Primary Button:**

- Background: `#FFA500`
- Color: `#FFFFFF`
- Padding: 12px 24px
- Border-radius: 8px
- Font-size: 16px
- Font-weight: 600
- Hover: background `#FF9500`, slight shadow
- Active: slightly darker orange

**Secondary Button:**

- Background: `#FFFFFF`
- Border: 2px solid `#E5E7EB`
- Color: `#1F2937`
- Same padding/radius as primary
- Hover: background `#F8F9FA`

**Icon Button:**

- Square or circular
- Padding: 8px
- Hover: background `#F8F9FA`

#### Cards

- Background: `#FFFFFF`
- Border: 1px solid `#E5E7EB`
- Border-radius: 12px
- Padding: 24px
- Box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1)
- Hover (if interactive): box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1)

#### Input Fields

- Border: 1px solid `#E5E7EB`
- Border-radius: 8px
- Padding: 12px 16px
- Font-size: 16px
- Focus: border-color `#FFA500`, outline 2px `#FFF4E5`
- Placeholder: color `#9CA3AF`

#### Navigation Bar

- Background: `#FFA500`
- Height: 64px
- Padding: 0 24px
- Logo: White Ruck icon + "RUCK" text (bold, 24px)
- Nav items: White text, 16px, font-weight: 500
- Hover: White text with opacity 0.8

#### Badges/Tags

- Border-radius: 9999px (pill shape)
- Padding: 4px 12px
- Font-size: 12px
- Font-weight: 600
- Success: background `#D1FAE5`, color `#065F46`
- Warning: background `#FEF3C7`, color `#92400E`
- Info: background `#DBEAFE`, color `#1E40AF`

## Application Structure

### Single Page Layout (No Routing Needed)

The demo should be a single scrollable page with these sections in order:

1. **Navigation Bar** (Fixed top)
2. **Dashboard Overview** (Hero section)
3. **Active Projects Grid**
4. **AI Prediction Details** (Expanded project view)
5. **Inventory Tracking Section**
6. **Mobile Preview Section**

---

## Section 1: Navigation Bar (Fixed)

### Layout

- Fixed position at top of page
- Background: `#FFA500`
- Height: 64px
- Box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1)
- Z-index: 1000

### Left Side

**Logo:**

- Ruck house icon (white) - use a simple SVG house icon with chimney
- Text "RUCK" next to it (white, bold, 24px, letter-spacing: 0.5px)
- Gap between icon and text: 12px

### Center

**Navigation Items:**

- "Suppliers" | "Pros" | "Drivers" (separated by |)
- Color: White with 0.9 opacity
- Font-size: 16px
- Font-weight: 500
- Hover: opacity 1.0
- Spacing between items: 32px

### Right Side

**Action Buttons:**

- "Intelligence" badge (new feature indicator)
  - Background: White
  - Color: `#FFA500`
  - Padding: 6px 16px
  - Border-radius: 20px
  - Font-weight: 600
  - Small "NEW" badge in top-right corner (green dot)
- User icon button (circular, white border, 32px diameter)

---

## Section 2: Dashboard Overview

### Layout

- Padding: 48px 24px
- Max-width: 1280px
- Margin: 0 auto
- Background: `#F8F9FA`

### Welcome Section

**Header:**

- "Welcome back, Sarah" (H1, `#1F2937`)
- Subtext: "You have 3 active projects with 5 pending predictions" (Body, `#6B7280`)
- Margin-bottom: 32px

### Stats Grid (4 columns)

**Card 1 - Active Projects:**

- Icon: 📊 (or folder icon)
- Number: "3" (48px, bold, `#1F2937`)
- Label: "Active Projects" (14px, `#6B7280`)
- Background: White card
- Border-left: 4px solid `#3B82F6`

**Card 2 - AI Predictions:**

- Icon: 🤖 (or brain/chip icon)
- Number: "5" (48px, bold, `#1F2937`)
- Label: "Pending Predictions" (14px, `#6B7280`)
- Background: White card
- Border-left: 4px solid `#FFA500`

**Card 3 - Orders This Month:**

- Icon: 📦 (or truck icon)
- Number: "24" (48px, bold, `#1F2937`)
- Label: "Orders This Month" (14px, `#6B7280`)
- Background: White card
- Border-left: 4px solid `#10B981`

**Card 4 - Money Saved:**

- Icon: 💰 (or dollar sign icon)
- Number: "$3,247" (48px, bold, `#10B981`)
- Label: "Saved This Month" (14px, `#6B7280`)
- Background: White card
- Border-left: 4px solid `#10B981`

**Each stat card:**

- Padding: 24px
- Border-radius: 12px
- Box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1)
- Gap between cards: 16px

---

## Section 3: Active Projects Grid

### Section Header

- "Active Projects" (H2, `#1F2937`)
- "Create New Project" button (Primary orange button)
- Margin-bottom: 24px

### Projects Grid (3 columns on desktop)

**Project Card 1 - Oak Street Townhomes:**

- Status badge: "IN PROGRESS" (green background)
- Project name: "Oak Street Townhomes" (H3, `#1F2937`)
- Location: "📍 Tempe, AZ" (14px, `#6B7280`)
- Progress bar: 68% complete (green fill)
- Budget: "$847,000" | Spent: "$576,000" (labels with amounts)
- Timeline: "Started: Jan 15, 2025 | Est. End: May 30, 2025"
- Phase: "Framing & Drywall" badge (orange)
- Bottom section:
  - "2 predictions ready" (orange badge with notification dot)
  - "View Details" button (Secondary)
  - "Order Materials" button (Primary orange)

**Project Card 2 - Desert Ridge Commercial:**

- Status badge: "PLANNING" (blue background)
- Project name: "Desert Ridge Commercial" (H3, `#1F2937`)
- Location: "📍 Phoenix, AZ" (14px, `#6B7280`)
- Progress bar: 23% complete (blue fill)
- Budget: "$1,200,000" | Spent: "$276,000"
- Timeline: "Started: Feb 1, 2025 | Est. End: Aug 15, 2025"
- Phase: "Foundation" badge (blue)
- Bottom section:
  - "AI analyzing blueprints..." (gray badge with spinner)
  - "View Details" button (Secondary)
  - "Upload Documents" button (Secondary)

**Project Card 3 - Scottsdale Renovation:**

- Status badge: "COMPLETING" (amber background)
- Project name: "Scottsdale Renovation" (H3, `#1F2937`)
- Location: "📍 Scottsdale, AZ" (14px, `#6B7280`)
- Progress bar: 92% complete (amber fill)
- Budget: "$340,000" | Spent: "$318,000"
- Timeline: "Started: Nov 10, 2024 | Est. End: Mar 5, 2025"
- Phase: "Final Finishes" badge (amber)
- Bottom section:
  - "1 prediction ready" (orange badge)
  - "View Details" button (Secondary)
  - "Order Materials" button (Primary orange)

**Each project card:**

- Background: White
- Padding: 24px
- Border-radius: 12px
- Border: 1px solid `#E5E7EB`
- Box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1)
- Hover: slight shadow increase

---

## Section 4: AI Prediction Details (Expanded View)

### Section Header

- "AI Material Predictions - Oak Street Townhomes" (H2)
- "Based on your project timeline and historical data" (subtext, gray)
- Margin-bottom: 32px

### Timeline Visualization

**Timeline Bar:**

- Horizontal scrollable timeline showing weeks
- Current week highlighted in orange
- Past weeks in gray, future weeks in light gray
- Week labels: "Week 1", "Week 2", etc.
- Current indicator: "Current Week" with arrow pointing down

### Predictions Grid (This Week)

**Table/Card Hybrid Layout:**

Headers: Material | Quantity | Confidence | Needed By | Est. Cost | Action

**Row 1 - Drywall:**

- Icon: 📋 (or drywall icon)
- Material: "Standard Drywall 4x8 Sheets" (16px, bold)
- Quantity: "180 sheets" (16px)
- Confidence: Progress bar 94% with "94%" label (green)
- Needed By: "Thursday, Nov 26" (with calendar icon)
- Est. Cost: "$2,340" (with 3 supplier options shown as dropdown)
- Action: "Order via Ruck" button (Primary orange)
- Reasoning (collapsible): "Based on square footage and your last 4 similar framing projects"

**Row 2 - Studs:**

- Icon: 📏 (or wood icon)
- Material: "2x4x8 Studs (Premium Grade)" (16px, bold)
- Quantity: "420 pieces" (16px)
- Confidence: Progress bar 89% with "89%" label (green)
- Needed By: "Friday, Nov 27"
- Est. Cost: "$1,680" (with 3 supplier options)
- Action: "Order via Ruck" button (Primary orange)
- Reasoning: "Phase analysis indicates framing completion next week"

**Row 3 - Electrical Wire:**

- Icon: ⚡ (or wire spool icon)
- Material: "12/2 NM-B Wire (250ft rolls)" (16px, bold)
- Quantity: "6 rolls" (16px)
- Confidence: Progress bar 78% with "78%" label (amber)
- Needed By: "Monday, Dec 1"
- Est. Cost: "$840"
- Action: "Order via Ruck" button (Primary orange)
- Reasoning: "Electrical rough-in scheduled to begin Dec 2"

**Row 4 - Insulation:**

- Icon: 🏠 (or insulation icon)
- Material: "R-19 Fiberglass Batts" (16px, bold)
- Quantity: "48 bags" (16px)
- Confidence: Progress bar 85% with "85%" label (green)
- Needed By: "Wednesday, Dec 3"
- Est. Cost: "$1,920"
- Action: "Order via Ruck" button (Primary orange)
- Reasoning: "Typical insulation timing after electrical rough-in"

**Styling:**

- Alternate row backgrounds: White and `#F8F9FA`
- Hover: Light gray background on row
- Padding per cell: 16px
- Border-bottom: 1px solid `#E5E7EB`

### Supplier Comparison Dropdown (Mockup for Drywall)

When clicking on Est. Cost, show dropdown:

**Supplier 1 - Home Depot:**

- Logo icon
- Price: "$2,340"
- In Stock: ✓ (green checkmark)
- Delivery: "2 hours via Ruck"
- Rating: ⭐⭐⭐⭐⭐ 4.8

**Supplier 2 - Lowe's:**

- Logo icon
- Price: "$2,415"
- In Stock: ✓
- Delivery: "Same day via Ruck"
- Rating: ⭐⭐⭐⭐☆ 4.6

**Supplier 3 - Local Drywall Supply:**

- Logo icon
- Price: "$2,190" (BEST PRICE badge)
- In Stock: ✓
- Delivery: "Next day via Ruck"
- Rating: ⭐⭐⭐⭐⭐ 5.0

---

## Section 5: Current Inventory Tracking

### Section Header

- "Current Inventory - Oak Street Townhomes" (H2)
- Filter buttons: "All Materials" | "On Site" | "In Transit" | "Low Stock"
- Margin-bottom: 24px

### Inventory Grid (4 columns)

**Card 1 - Lumber:**

- Icon: 🪵 (wood icon)
- Material: "2x4 Studs" (bold)
- On Site: "180 pieces" (green badge)
- Status: "Adequate" (green text)
- Last Updated: "2 hours ago" (small gray text)
- Action: "View Details" link

**Card 2 - Cement:**

- Icon: 🏗️ (cement mixer icon)
- Material: "Portland Cement" (bold)
- On Site: "12 bags" (amber badge)
- Status: "Low - Order Soon" (amber text with warning icon)
- Last Updated: "1 day ago"
- Action: "Auto-order" toggle switch (ON state, green)

**Card 3 - Electrical:**

- Icon: ⚡ (lightning icon)
- Material: "Wire & Conduit" (bold)
- In Transit: "Arriving Thursday" (blue badge)
- Status: "Ruck Delivery #47291" (blue text)
- Track: GPS icon + "Track Driver" link
- Last Updated: "15 mins ago"

**Card 4 - Plumbing:**

- Icon: 🚰 (pipe icon)
- Material: "PVC Pipes & Fittings" (bold)
- On Site: "Mixed inventory" (gray badge)
- Status: "Adequate" (green text)
- Last Updated: "3 days ago"
- Action: "Scan QR Code" button (to update inventory)

**Each inventory card:**

- White background
- Padding: 20px
- Border-radius: 12px
- Border: 1px solid `#E5E7EB`
- Hover: slight shadow

### Quick Stats Bar Below Inventory

- Total Items Tracked: "47"
- Total Value: "$18,340"
- Low Stock Alerts: "2"
- In Transit: "1 Ruck delivery"
- Background: Light gray bar, padding 16px

---

## Section 6: Mobile Preview

### Section Header

- "Mobile Experience" (H2)
- Subtext: "Contractors use Ruck Intelligence on-the-go" (gray)
- Margin-bottom: 32px

### Two-Column Layout

**Left Column - Text Content:**
**Features List:**

- ✓ Scan QR codes to update inventory
- ✓ Photo upload for delivery confirmation
- ✓ Voice notes for quick updates
- ✓ Push notifications for predictions
- ✓ Offline mode with sync

Each feature in 18px font with checkmark icon

**Right Column - Phone Mockup:**

Create an iPhone-style mockup (rounded corners, notch):

- Device dimensions: 375px wide × 812px tall (scaled to fit)
- Screen showing simplified mobile view:
  - Orange header: "Ruck Intelligence"
  - Project: "Oak Street Townhomes"
  - Large notification card:
    - "🤖 New Prediction Ready"
    - "Drywall needed by Thursday"
    - "Order Now" button (orange)
  - Bottom navigation: Home | Projects | Scan | Orders | Profile
- Drop shadow around phone

---

## Additional UI Elements & Interactions

### Notification Toast (Top-right)

Show a sample notification:

- Background: White
- Border-left: 4px solid green
- Icon: ✓ checkmark
- Text: "Prediction accuracy improved to 94%"
- Close button (X)
- Auto-dismiss timer indicator

### Confidence Score Visualization

Use progress bars with color coding:

- 90-100%: Green (`#10B981`)
- 75-89%: Amber (`#F59E0B`)
- Below 75%: Blue (`#3B82F6`) with "Learning" badge

### Empty States (if needed)

- Icon (gray)
- "No [items] yet" heading
- Helpful description
- Primary action button

---

## Responsive Behavior

**Desktop (1280px+):**

- 4-column stat grid
- 3-column project grid
- Full table for predictions

**Tablet (768px - 1279px):**

- 2-column stat grid
- 2-column project grid
- Scrollable predictions table

**Mobile (< 768px):**

- Single column everything
- Stacked stats
- Single project cards
- Card-based predictions (not table)

---

## Mock Data Guidelines

### Project Names

Use realistic construction project names:

- "Oak Street Townhomes"
- "Desert Ridge Commercial"
- "Scottsdale Renovation"
- "Mesa Multi-Family"

### Material Types

Use real construction materials:

- Drywall, studs, lumber, cement
- Electrical wire, conduit, boxes
- Plumbing pipes, fittings
- Insulation, roofing materials

### Dates

Use realistic near-future dates:

- Current date: November 22, 2025
- Predictions: Next 1-2 weeks
- Project timelines: 3-9 months

### Pricing

Use realistic construction material pricing:

- Drywall: $10-15 per sheet
- Studs: $3-5 each
- Wire: $120-150 per roll
- Keep totals in thousands

### Suppliers

Use real suppliers contractors know:

- Home Depot
- Lowe's
- Local lumber yards
- Specialty suppliers

---

## Technical Implementation Notes

### Technology Stack Recommendation

- **Framework:** React with Vite (fast development)
- **Styling:** Tailwind CSS (matches design system easily)
- **Icons:** Lucide React or Heroicons
- **No backend needed** - all mock data hardcoded
- **Package Manager:** yarn ONLY

### File Structure

```
src/
  components/
    NavBar.jsx
    DashboardStats.jsx
    ProjectCard.jsx
    ProjectsGrid.jsx
    PredictionsTable.jsx
    InventoryGrid.jsx
    MobilePreview.jsx
  data/
    mockProjects.js
    mockPredictions.js
    mockInventory.js
  App.jsx
  main.jsx
  index.css
```

### Key Implementation Details

**1. No Authentication:**

- Skip login completely
- Show "Sarah" as hardcoded user

**2. No Backend API Calls:**

- All data in JavaScript objects
- No loading states needed (can fake with setTimeout if desired)

**3. No Form Submissions:**

- Buttons can show toast notifications
- No actual data changes

**4. Screenshots-First:**

- Make everything look pixel-perfect
- Use real-looking data
- Show interesting states (not all empty or all complete)

**5. Animations (Optional but Nice):**

- Smooth hover effects
- Button click animations
- Progress bar fills
- Card entrance animations (fade-in)

**6. Fonts:**

- Use Google Fonts for Inter
- Fallback to system fonts

**7. Icons:**

- Use consistent icon library
- Keep icon sizes uniform (20px or 24px typically)
- Match Ruck's style (simple, clean)

---

## Screenshot Capture Zones

Design with these screenshot areas in mind:

**Screenshot 1: Dashboard Overview**

- Capture: Nav bar + Welcome section + Stats grid
- Use case: Show AI dashboard at a glance

**Screenshot 2: Active Projects**

- Capture: Projects grid showing all 3 cards
- Use case: Multi-project management

**Screenshot 3: AI Predictions**

- Capture: Predictions table with 4 materials
- Use case: AI prediction accuracy and reasoning

**Screenshot 4: Supplier Comparison**

- Capture: Expanded supplier dropdown
- Use case: Price intelligence integration

**Screenshot 5: Mobile View**

- Capture: Phone mockup with notification
- Use case: Mobile-first contractor experience

**Screenshot 6: Inventory Tracking**

- Capture: Inventory grid with status indicators
- Use case: Real-time material tracking

---

## Final Quality Checklist

Before considering complete, verify:

✅ Colors exactly match Ruck orange (#FFA500)
✅ Typography uses Inter font consistently
✅ All cards have proper shadows and borders
✅ Buttons have hover states
✅ Data looks realistic (no "lorem ipsum" or "test123")
✅ Progress bars are properly styled
✅ Icons are consistent in size and style
✅ Spacing follows 8px grid system
✅ Navigation bar is fixed and styled correctly
✅ Mobile preview shows iPhone-style mockup
✅ No console errors
✅ Responsive on desktop (1280px+)
✅ Professional appearance suitable for investor presentation

---

## Success Criteria

The demo is successful if:

1. **Looks production-ready** - Could pass as a real SaaS product
2. **Matches Ruck branding** - Orange color and style are consistent
3. **Shows AI value** - Predictions are prominent and compelling
4. **Demonstrates integration** - Shows connection between AI and Ruck delivery
5. **Tells a story** - Sarah's projects show realistic construction timeline
6. **Impresses visually** - Clean, modern, professional design
7. **Screenshots well** - Each section stands alone as presentation material

---

## Development Approach

**Phase 1: Structure** (30 min)

- Set up React + Vite + Tailwind
- Create component structure
- Add mock data files

**Phase 2: Navigation & Dashboard** (45 min)

- Build fixed nav bar
- Create welcome section
- Build stats grid with cards

**Phase 3: Projects & Predictions** (60 min)

- Build project cards component
- Create predictions table
- Add supplier comparison

**Phase 4: Inventory & Mobile** (45 min)

- Build inventory grid
- Create mobile phone mockup
- Add notification toast

**Phase 5: Polish** (30 min)

- Refine colors and spacing
- Add hover effects
- Test responsiveness
- Fix any visual inconsistencies

**Total estimated time: 3-4 hours**

---

## Notes on Realism

To make this feel like a real product:

1. **Use specific numbers** - Not "123" but "847,000"
2. **Use real addresses** - "Oak Street, Tempe AZ" not "123 Main St"
3. **Use realistic dates** - Near-future dates that make sense
4. **Show variation** - Different project stages, different confidence scores
5. **Include imperfections** - One low-stock alert, one delayed delivery
6. **Show learning** - Some predictions at 78% (still learning), others at 94%
7. **Use industry terms** - "Rough-in", "Framing", "Drywall", not generic terms
8. **Show ROI** - "$3,247 saved this month" makes it tangible

---

## Final Note

This demo is for **visual presentation only**. Focus on making it look exceptional in screenshots. The goal is to help Sarah (the user) win the hackathon by showing what Ruck Intelligence could look like as a real product. Every pixel should communicate "professional, production-ready, game-changing technology."

Make it look so good that investors see it in the presentation and think, "Why doesn't this exist yet? We should fund this."

Good luck! 🚀
