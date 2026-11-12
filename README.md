# Immanuel Gondwe — Personal Portfolio

A four-page personal portfolio website built with **semantic HTML5, external CSS and
vanilla JavaScript**. The design uses a sky blue and cream white palette.

> **Important:** contact and repository links in this project are clearly marked as follows
> Details (`ImmanuelPeter`, `immanuelgondwe0@gmail.com`, `Immanuel Gondwe`).

---

## 1. Site structure

```
website/
├── index.html          Home page (hero, focus areas)
├── about.html          About Me (introduction, education, skills, interests, goals, contact)
├── projects.html       Projects (three detailed project cards, GitHub CTA)
├── animations.html     Animated Concepts (three live animation demonstrations)
├── css/
│   └── style.css       Single external stylesheet (design system, layout, animation, responsive)
├── js/
│   └── script.js       Navigation, typewriter, scroll reveal, skill bars, back-to-top
├── images/
│   ├── profile.jpg     Portrait image — My profile picture
│   ├── background.jpg  Hero / page-header background picture
│   ├── project1.jpg    Web scrapping screenshot jpg
│   ├── project2.jpg    Library Management System screenshot jpg
│   └── project3.jpg    Personal Finance Tracker screenshot jpg
└── README.md
```

## 2. Running the site

No build step or dependencies are required.

1. **Quickest:** double-click `index.html`.
2. **Recommended (local server):**
   ```bash
  Then open <http://localhost:8000>.

Fonts are loaded from Google Fonts with system-font fallbacks, so the site still looks
correct offline.

## 3. Requirements coverage

| The things required | necessary in the project assignment |
| --- | --- |
| Home: name, welcome, programme, photo, CTA, animation | `index.html` hero, focus cards |
| About A — personal introduction | `about.html` `#introduction` |
| About B — educational background table | `about.html` `#education`, styled `.edu-table` |
| About C — at least five technical skills | `about.html` `#skills` (eight skills, unordered list) |
| About D — interests and hobbies | `about.html` `#interests` |
| About E — career aspirations | `about.html` `#goals` (ordered list) |
| About F — contact, clickable email | `about.html` `#contact`, `mailto:` links in every footer |
| Projects: three projects with title, description, problem, tech, image, GitHub link | `projects.html` `.project-card` blocks |
| GitHub profile + repository links | Nav/footer, `projects.html#github`, image and button links |
| Animated text | Home hero and `animations.html#text` (typewriter) |
| Hover effects | Cards, buttons, nav and images across the site (CSS transitions, focus-visible) |
| Animated background | Home hero zoom + `animations.html#background` motion stage |
| Animated skill indicators | `animations.html#skills` progress bars |
| Scroll animations | `.reveal` utility used site-wide (staggered fade & rise) |
| HTML basics (`DOCTYPE`, `html`, `head`, `title`, `meta`, `body`) | All four pages |
| Text formatting (`h1–h6`, `p`, `strong`, `em`, `u`, `br`, `hr`) | Throughout, notably `about.html` |
| Tables | Education table (`about.html`) |
| Images with `alt`, dimensions, positioning, clickable image | Hero portrait, project images wrapped in links |
| Hyperlinks: internal, in-page, external, GitHub, `mailto:` | Header/footer, in-page anchors, project cards, contact section |
| Ordered and unordered lists | Skills (ul), goals (ol), tech stacks (ul) |
| Structure: header, nav, main, section, div, footer | All pages |
| CSS: colours, backgrounds, fonts, spacing, borders/radius, Grid/Flexbox, hover, transitions, keyframes, responsive | `css/style.css` |
| Three+ animated concepts | Three implemented on `animations.html` |

## 4. Customisation checklist

### 4.1 Personal details

- [ ] **Name** — search the name `Immanuel Gondwe` if needed.
- [ ] **Email** — The Email `immanuelgondwe0@gmail.com` occurrences (7+ files) with
      My real address. Every occurrence is inside a `mailto:` link.
- [ ] **GitHub** — The link `https://github.com/ImmanuelPeter` with your profile URL.
- [ ] **WHATSAPP** — Contacts `https://wa.me/+265993470125`.
- [ ] **Location / university / dates** — update the footer, hero badge, `about.html`
      education table (`Dmi-st.john the baptist university Mangochi Campus Malawi`, `Lilongwe Malawi`,
      `Emerge Livelihoods`) and the "Details" footer column.

### 4.2 GitHub repositories

The three project repositories currently available:

- `https://github.com/ImmanuelPeter/Web-Scraper.git`
- `https://github.com/ImmanuelPeter/Library-Management-System.git`
- `https://github.com/ImmanuelPeter/Personal-Finance-Tracker.git`

The repository **My repository**: in `projects.html` the URL appears in the
project image link and the "GitHub repository" button (two occurrences per project).

My projects are public and and i have published them

### 4.3 Images

- `images/profile.jpg` is a **Manually added in the folder**.These are my photograph (size 4:5 portrait crop, ideally 1000 × 1250 px).
- `images/project1.jpg` – `project3.jpg` are manually put, the User interface. These are real screenshot of my own projects (1500 × 1000 px works well).
- `images/background.jpg` is the abstract hero picture jpg; and dimensions (720 × 1080 px).

### 4.4 Content

- My projects "problem" statements and project descriptions i have written them
- Update `about.html` skills, interests and career goals.
- My WhatsApp number in the About contact card
  (`https://wa.me/+265993470125`) My real number.
- I can Update skill percentages in `animations.html` (each row has `data-level="…"` and a
  visible percentage in `.skill-pct`).

### 4.5 Colours

The core palette is defined once in `css/style.css` under `:root`:

| Token | Value | Use |
| --- | --- | --- |
| `--sky-700` | `#1487a6` | Primary sky blue: buttons, links, icons |
| `--sky-500` | `#35b8d9` | Bright accents, charts, hover highlights |
| `--sky-300` | `#a3e3f3` | Pale sky surfaces and tints |
| `--sky-100` | `#e8f9fe` | Softest sky wash |
| `--sky-900` | `#0e4f63` | Deep sky band: footer |
| `--white` | `#fffdf7` | Cream white page surface |
| `--paper` | `#fdf8ec` | Warm cream alternating sections |
| `--ink` | `#173b48` | Headings and primary text |
| `--slate` | `#4f6a74` | Body copy and secondary text |

Changing those variables re-themes the whole site. Deep sky blue (`--sky-800`–`--sky-950`)
is used only for the footer and solid-accent panels so body content stays on
cream and white surfaces.

## 5. Technical notes

- **Responsive layout:** CSS Grid and Flexbox; breakpoints at 1080 px, 900 px and 620 px.
  The navigation collapses into an accessible mobile menu below 900 px.
- **Accessibility:** skip link, landmark elements, descriptive `alt` text, labels,
  `aria-expanded` on the menu button, visible focus styles, and a
  `prefers-reduced-motion` mode that disables animation.
- **Performance:** images are lazy-loaded below the fold (`loading="lazy"`), fonts are
  loaded with `display=swap`, and JavaScript is deferred to the end of each document.
- **No frameworks:** only Google Fonts is external; everything else is local.

## 6. Image credits

All five JPEG assets were put locally for this project using manually
the site's sky blue and cream palette — they are original artwork, not third-party
photographs. The portraits illustrated are my photograph.

---

Built as a university website personal portfolio project, 2026.
