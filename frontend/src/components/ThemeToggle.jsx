import { useTheme } from '../theme'

// Fixed top-right toggle. Pass `style` to reposition if you drop it elsewhere.
export default function ThemeToggle({ style }) {
  const { theme: t, dark, toggle } = useTheme()

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      style={{
        position: 'absolute',
        top: 20,
        right: 16,
        width: 40,
        height: 40,
        borderRadius: 12,
        background: t.surface,
        border: `1px solid ${t.border}`,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        transition: 'background .15s, border-color .15s',
        ...style,
      }}
    >
      {dark ? (
        <span
          style={{
            width: 15,
            height: 15,
            borderRadius: '50%',
            background: t.icon,
            boxShadow: `0 0 0 3px ${t.surface}, 0 0 0 4px ${t.icon}`,
          }}
        />
      ) : (
        <span style={{ position: 'relative', width: 17, height: 17 }}>
          <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: t.icon }} />
          <span style={{ position: 'absolute', top: -3, right: -4, width: 15, height: 15, borderRadius: '50%', background: t.surface }} />
        </span>
      )}
    </button>
  )
}
