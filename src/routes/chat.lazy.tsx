import { createLazyFileRoute } from '@tanstack/react-router'
import { DiscordTabs } from '../components/discord-tabs'

export const Route = createLazyFileRoute('/chat')({
  component: () => (
    <>
      <DiscordTabs />
    </>
  )
})