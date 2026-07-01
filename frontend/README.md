# FRPG — Login & Landing (React handoff)

Drop-in components for your React 18 + Vite frontend. No new dependencies — just
`react` / `react-dom`, which you already have. All styling is inline and driven
by a single theme, so there are no CSS files to manage.

## Install

Copy these into your repo (they mirror `frontend/`):

```
frontend/
├── index.html                     # adds the Google Fonts <link> (optional)
└── src/
    ├── App.jsx                     # demo shell + Login/Landing switcher
    ├── theme.jsx                   # light + dark palettes, ThemeProvider, useTheme()
    ├── hooks/
    │   └── useHover.js
    ├── data/
    │   ├── skills.js               # the 4 landing quests
    │   └── providers.js            # the OAuth providers
    ├── components/
    │   ├── BrandMark.jsx
    │   ├── TextField.jsx
    │   ├── SocialButton.jsx
    │   ├── SkillCard.jsx
    │   └── ThemeToggle.jsx
    └── pages/
        ├── Login.jsx
        └── Landing.jsx
```

Your existing `src/main.jsx` already renders `<App />`, so it works as-is.
`npm run dev` and you'll see both screens with a working light/dark toggle.

> Keep your current `App.jsx` if it has backend-health logic you still want —
> the switcher here is just a demo harness. In production, replace it with your
> router and render `<Login />` / `<Landing />` per route (both are wrapped by
> `<ThemeProvider>`).

## Wiring the backend (later)

Everything is behavior-free by design. Pass callbacks in:

```jsx
<Login
  onSubmit={({ email, password }) => api.login(email, password)}  // POST to your auth endpoint / Cognito
  onProvider={(id) => startOAuth(id)}                             // id is 'google' | 'facebook'
  onForgot={() => navigate('/forgot')}
  onSignup={() => navigate('/signup')}
/>

<Landing onSelectSkill={(skill) => navigate(`/quest/${skill.key}`)} />
```

The email/password inputs are controlled inside `Login` and handed to `onSubmit`
as `{ email, password }`.

## Changing things

- **Colors / dark mode:** edit `theme.jsx` (`lightTheme` / `darkTheme`). Every
  component reads from `useTheme()`, so one edit reskins the whole app. Dark
  preference persists in `localStorage` under `frpg-theme`.
- **Landing quests:** edit `data/skills.js` — add/rename/recolor, pick a shape
  (`circle` | `diamond` | `square` | `triangle`). The grid updates automatically.
- **Login providers:** edit `data/providers.js` — add another `{ id, label, mark }`
  and a button appears.
- **Provider logos:** `mark` is a placeholder letter. Swap the `<span>` in
  `SocialButton.jsx` for the real Google / Facebook logo when you integrate their
  SDKs (and follow their brand guidelines).

## PWA / mobile

Layout is fluid (max-width + `clamp()`), no fixed widths, so it fits phones and
desktop without media queries. The login card, skill grid, and social stack all
reflow down to small viewports.
