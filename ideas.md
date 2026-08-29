# Design Direction — Apoorv Gupta's Sketchbook Journey

## Three Initial Approaches

### Theme Name: Field Notes in Motion
Very Brief Intro: A warm, tactile sketchbook world where a paper plane is the narrator and every portfolio section is discovered as a place along a hand-drawn route.
Probability: 0.07

### Theme Name: Archive of Small Machines
Very Brief Intro: A more editorial, archival direction that treats the portfolio as annotated research notes, with diagrams, stamps, and specimen-like artifacts.
Probability: 0.03

### Theme Name: Morning Flight Atlas
Very Brief Intro: A lighter, more airy travel-journal direction with pale sky washes, distant topography, and an optimistic sense of movement from one landmark to the next.
Probability: 0.09

## Chosen Direction: Field Notes in Motion

### Design Movement
Contemporary illustrated editorial design blended with handmade field-journal sketching: imperfect ink contours, paper grain, annotated diagrams, and a clear sense of physical place.

### Core Principles
The paper plane is the protagonist, not a decoration. The road is the navigation system, not a background graphic. Every portfolio category must become a meaningful landmark. Texture and imperfection should communicate craft without sacrificing clarity or accessibility.

### Color Philosophy
The palette uses warm parchment as the world, charcoal ink as the structure, oxidized rust as the route marker, moss green as the living environment, and washed blue as the open sky. The colors should feel found in a well-used notebook rather than selected from a corporate brand system.

### Layout Paradigm
A long, layered illustrated world with an asymmetric route. Content appears as physical interventions into the landscape—notice boards, workshop walls, laboratory sheets, school façades, pinned certificates, and a final mailbox—instead of a repeated stack of cards.

### Signature Elements
A red-rust dotted flight trail follows the paper plane. Section labels appear as hand-painted signboards and annotated paper slips. Inline SVG linework depicts the route, hills, buildings, foliage, bridges, birds, and technical diagrams with slight irregularity.

### Interaction Philosophy
Scrolling advances the plane through the world, while direct navigation moves the camera to a landmark. Landmarks respond through opacity, scale, paper unfolding, and ink-line emphasis as the plane approaches. Interactions should feel like turning a page or arriving at a roadside stop.

### Animation
Use scroll-linked transforms for plane position, trail reveal, and parallax layers. Add restrained floating, tree sway, cloud drift, sign wobble, and paper lift. Prefer soft cubic-bezier motion and opacity/transform changes. Respect reduced-motion preferences by freezing the route into a calm, readable illustrated map.

### Typography System
Use Caveat for the primary handwritten voice, Kalam for annotations and labels, and a readable system sans-serif for dense details. Display text should feel drawn; supporting text should remain crisp and easy to scan. Avoid all-caps UI except for signboards and route labels.

### Brand Essence
A portfolio you fly through: for people who want to understand Apoorv as an inventive AI/ML and full-stack builder, not merely browse a résumé. Personality: curious, tactile, quietly ambitious.

### Brand Voice
Headlines sound like notes discovered along a route. CTAs are directional and human rather than promotional. Example lines: “The work lives further down the road.” and “Follow the line; the next landmark has something to show you.”

### Wordmark & Logo
A minimal paper-plane mark drawn from two offset graphite folds, paired with a small rust route dot. The symbol should work on its own as the site favicon and as the recurring visual anchor beside the journey label.

### Signature Brand Color
Route Rust — #A1592E. It marks motion, discovery, and the moments where the plane reaches something worth opening.

## Style Decisions

- The rust dotted flight trail must visibly connect every major section, with the paper-plane/fold motif appearing at arrival moments so the journey system is always clearer than the card layout.
- Each portfolio category must have a unique landmark form and environmental context; repeated paper sheets are allowed only when they are attached to a distinct place such as a board, wall, bench, lab sheet, school, or mailbox.
- Route Rust `#A1592E` is reserved for motion, arrivals, primary actions, key numerals, and named discoveries; charcoal carries structure, while moss and washed blue are used only as environmental colors.
