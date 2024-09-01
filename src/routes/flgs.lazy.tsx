import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/flgs')({
  component: () => <div>A list of friendly local board game stores in the portland area.</div>
})