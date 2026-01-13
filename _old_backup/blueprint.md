# Blueprint for the Perfect Theoretical Quantum Optics Portfolio Website

## 1. High-Level Design Philosophy

**"Modern Academic Minimalism"**

The goal is to bridge the gap between the information-dense, utilitarian nature of traditional academic sites (e.g., arXiv, old faculty pages) and the visual engagement of modern tech portfolios.

*   **Visual Identity:**
    *   **Typography:** Serif headings (e.g., *Playfair Display*, *Lora*, or *Computer Modern* for that LaTeX feel) paired with clean Sans-Serif body text (e.g., *Inter*, *Roboto*, or *Open Sans*).
    *   **Color Palette:** Deep, serious academic colors.
        *   *Primary:* Midnight Blue (`#0a192f`) or Deep Burgundy (`#4a0404`).
        *   *Accent:* Gold/Brass (`#c5a059`) or Muted Teal (`#64ffda`) for links and highlights.
        *   *Background:* Off-white/Cream (`#fcfcfc`) for readability, avoiding harsh pure white.
    *   **Whitespace:** Generous margins to allow complex equations and diagrams to breathe.

*   **User Experience (UX):**
    *   **Navigation:** Sticky top navigation bar. Always visible.
    *   **Responsiveness:** Mobile-first design is mandatory. Students read papers on phones.
    *   **Speed:** Static site generation (Hugo, Jekyll, Next.js) for instant load times. No heavy client-side frameworks unless necessary for interactive simulations.

---

## 2. Page-by-Page Structure

### A. Homepage (`/`)
*The "Hook" - Immediate understanding of what the group does.*

*   **Hero Section:**
    *   **Headline:** "Theoretical Quantum Optics at [University Name]"
    *   **Sub-headline:** One sentence summarizing the mission (e.g., "Exploring many-body physics with atoms and photons.")
    *   **Visual:** A high-quality, abstract render of a key concept (e.g., Bloch sphere, optical lattice, cavity QED schematic). *Avoid generic stock photos of optical tables.*
*   **News Ticker/Highlights:** A small section showing the 3 most recent updates (New paper, Award, New member).
*   **Research Pillars:** 3-4 clickable cards summarizing main research lines.

### B. Research (`/research`)
*The "Core" - Where the science lives.*

*   **Structure:** Do not just list papers. Organize by **Research Themes**.
*   **Theme Block:**
    *   **Title:** e.g., "Rydberg Atom Arrays"
    *   **Visual:** A dedicated schematic or key plot from a top paper.
    *   **Summary:** 1-2 paragraphs explaining the physics, the challenge, and the group's contribution.
    *   **Key Publications:** A subset of 3-5 representative papers for this theme.

### C. People (`/people`)
*The "Engine" - Highlighting the team.*

*   **Hierarchy:**
    1.  **Principal Investigator (PI):** Photo, Short Bio, CV Link, Contact.
    2.  **Postdoctoral Fellows:** Larger cards with research focus.
    3.  **PhD Students:** *Critical Section (see below).*
    4.  **Alumni:** List with "Current Position" (shows group success).
*   **PhD Student Emphasis:**
    *   Each student gets a **Profile Card**.
    *   **Content:** Photo, "Project: [Title]", Email, Link to Personal Website/Google Scholar.
    *   **Project Showcase:** A 1-sentence summary of what they are solving.

### D. Publications (`/publications`)
*The "Archive" - Searchable and accessible.*

*   **Format:** Reverse chronological order.
*   **Filters:** By Year, By Topic (Tag system).
*   **Entry Elements:**
    *   Title (Bold).
    *   Authors (Highlight group members).
    *   Journal Reference (e.g., *Phys. Rev. Lett. **123**, 456789 (2025)*).
    *   **Links:** [PDF] (Local or ArXiv), [Journal], [Code] (if applicable).
    *   **Abstract Toggle:** A small "Show Abstract" button to keep the list clean.

### E. Teaching & Outreach (`/teaching`)
*The "Service" - Educational value.*

*   **Courses:** List of courses taught by PI.
    *   **Resources:** *Crucial for theory groups.* Provide Lecture Notes (PDFs) and Problem Sets. This drives huge traffic and builds reputation.
*   **Outreach:** Public talks, popular science articles, demos.

### F. Contact (`/contact`)
*The "Door" - How to join.*

*   **Prospective Students:** Clear instructions for PhD/Postdoc applications.
*   **Visitor Info:** Map, office numbers, admin assistant contact.

---

## 3. Recommended Content Blocks & Examples

### The "Research Highlight" Block
*Used on Homepage and Research Page.*

| Element | Description |
| :--- | :--- |
| **Container** | Card with subtle shadow, hover lift effect. |
| **Image** | Top 40% of card. High-contrast schematic (e.g., atoms in a lattice). |
| **Title** | "Many-Body Localization" (H3 tag). |
| **Text** | "Investigating ergodicity breaking in isolated quantum systems..." |
| **Action** | "Read More →" link to specific research section. |

### The "Student Project" Spotlight
*Used on People Page.*

> **Jane Doe** (PhD Candidate)
> *   **Project:** *Sub-radiance in Chiral Waveguides*
> *   **Focus:** Developing Green's function methods for non-reciprocal decay.
> *   **Recent Highlight:** [PRX Quantum 2024]

---

## 4. Guidelines for Scientific Illustrations

*   **Style:** Flat design, vector graphics (SVG). Avoid 3D unless high-quality ray-tracing (Blender) is used.
*   **Color Consistency:** Use the website's palette for diagrams. If the site is Blue/Gold, the atoms should be Blue, the photons Gold.
*   **Tools:**
    *   *Schematics:* Inkscape or Adobe Illustrator.
    *   *Plots:* Python (Matplotlib/Seaborn) with a custom `matplotlibrc` file to match site fonts and colors.
*   **Resolution:** SVG for schematics (infinite scaling). PNG @ 2x density for complex plots.

---

## 5. Implementation Checklist

### Phase 1: Content Gathering
- [ ] **PI Bio & CV:** Updated and ready.
- [ ] **Research Themes:** Define 3-4 distinct areas. Write 150-word summaries for each.
- [ ] **Publication List:** Export BibTeX from Zotero/Mendeley.
- [ ] **Images:** Create 1 high-quality "Hero" image and 1 schematic per research theme.
- [ ] **Team Info:** Collect headshots and "1-liner project descriptions" from all students.

### Phase 2: Design & Structure
- [ ] **Choose Tech Stack:** Recommended: **Hugo** (Academic theme) or **Next.js** (Custom).
- [ ] **Set Global Styles:** Define CSS variables for colors and fonts.
- [ ] **Create Layouts:**
    -   `layouts/index.html` (Home)
    -   `layouts/research/single.html` (Research Detail)
    -   `layouts/people/list.html` (Team Grid)

### Phase 3: Development
- [ ] **Implement Navigation:** Ensure sticky header works on mobile.
- [ ] **Build Research Blocks:** Create the reusable CSS component for highlights.
- [ ] **Populate Publications:** Write a script to parse BibTeX to HTML/Markdown.
- [ ] **Add Student Sections:** Build the grid layout for the People page.

### Phase 4: Review & Launch
- [ ] **Mobile Check:** Verify menu and font sizes on phone.
- [ ] **Broken Link Check:** Ensure all PDF/DOI links work.
- [ ] **SEO:** Add meta tags (Title, Description) for "Quantum Optics [University]".

---

## 6. Common Pitfalls to Avoid

1.  **"Under Construction" Signs:** Never publish a page that isn't ready. Hide it instead.
2.  **PDF-Only Content:** Don't lock important info (like research summaries) inside PDFs. Put it in HTML.
3.  **Inconsistent Imagery:** Don't mix pixelated MS Paint diagrams with high-res plots. Redraw old diagrams.
4.  **Hidden Students:** Don't bury students in a text list. Give them faces and project titles.
5.  **Outdated News:** If you can't update news monthly, remove the dates or the section entirely. Old news looks abandoned.
