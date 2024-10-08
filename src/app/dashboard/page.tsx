import RepoCards from "@/components/RepoList/RepoCards"
import { RepoSelector } from "@/components/RepoSelector"

export default async function Dashboard() {
  return (
    <main className="flex flex-col gap-4 h-full">
      <h2 className="text-xl font-medium">Dashboard</h2>
      <RepoSelector />
      <RepoCards />
    </main>
  )
}
