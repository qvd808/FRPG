import { useState } from 'react'

// Tiny helper so hover styles can be theme-aware (inline styles can't do :hover).
// Usage: const [hovered, hoverBind] = useHover(); <button {...hoverBind} />
export function useHover() {
  const [hovered, setHovered] = useState(false)
  const bind = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
  }
  return [hovered, bind]
}
