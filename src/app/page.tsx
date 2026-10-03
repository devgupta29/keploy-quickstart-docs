import { Header } from '@/components/Header'
import { TableOfContents } from '@/components/TableOfContents'
import Tutorial from '@/content/tutorial.mdx'

// Table of contents items — kept in sync with the MDX headings
const tocItems = [
  { id: 'what-we-are-building', text: 'What We Are Building', level: 2 },
  { id: 'prerequisites', text: 'Prerequisites', level: 2 },
  { id: 'step-1-get-the-go-quickstart', text: 'Step 1: Get Quickstart', level: 2 },
  { id: 'step-2-run-the-go-application', text: 'Step 2: Run Application', level: 2 },
  { id: 'step-3-verify-the-api-manually', text: 'Step 3: Verify API', level: 2 },
  { id: 'step-4-install-keploy-cli', text: 'Step 4: Install Keploy', level: 2 },
  { id: 'step-5-record-api-traffic-with-keploy', text: 'Step 5: Record Traffic', level: 2 },
  { id: 'step-6-inspect-recorded-test-cases', text: 'Step 6: Inspect Test Cases', level: 2 },
  { id: 'step-7-replay-and-verify-with-keploy', text: 'Step 7: Replay & Verify', level: 2 },
  { id: 'step-8-understand-the-result', text: 'Step 8: Test Results', level: 2 },
  { id: 'what-happened-under-the-hood', text: 'Under the Hood', level: 2 },
  { id: 'troubleshooting-common-issues', text: 'Troubleshooting', level: 2 },
  { id: 'what-to-commit-to-git', text: 'What to Commit', level: 2 },
  { id: 'integrating-with-github-actions-cicd', text: 'CI/CD Integration', level: 2 },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

      {/* Hero section */}
      <div className="bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-gray-950 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-950/50 border border-orange-200 dark:border-orange-800 mb-6 max-w-full">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse shrink-0" />
              <span className="text-xs font-medium text-orange-700 dark:text-orange-400">
                Keploy DevRel Tutorial · Go Quickstart
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
              Testing Without{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Writing Tests
              </span>
            </h1>

            <p className="text-base sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              A real-world guide to using Keploy with a Go application — automatically record real
              API calls and replay them as regression tests. Zero test code required.
            </p>

            {/* Meta info */}
            <div className="flex flex-wrap gap-3 sm:gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <span className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-xs font-semibold">Go 1.26</span>
                <span>Chi + PokéAPI</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-400 px-2 py-0.5 rounded text-xs font-semibold">Keploy v3.8</span>
                <span>Free Edition</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 px-2 py-0.5 rounded text-xs font-semibold">Verified</span>
                <span>8 Passed / 10.29s</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 px-2 py-0.5 rounded text-xs font-semibold">Platform</span>
                <span>Ubuntu 26.04 / WSL2</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-12 xl:gap-16">
          {/* Article */}
          <main className="flex-1 min-w-0 max-w-3xl" id="what-we-are-building">
            <article>
              <Tutorial />
            </article>

            {/* Footer */}
            <footer className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-sm text-gray-400 dark:text-gray-600">
                  Built for the Keploy DevRel assignment · Next.js + MDX
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://keploy.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-orange-600 dark:text-gray-600 dark:hover:text-orange-400 transition-colors"
                  >
                    keploy.io ↗
                  </a>
                  <a
                    href="https://github.com/keploy/keploy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-orange-600 dark:text-gray-600 dark:hover:text-orange-400 transition-colors"
                  >
                    GitHub ↗
                  </a>
                  <a
                    href="https://github.com/keploy/samples-go"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-orange-600 dark:text-gray-600 dark:hover:text-orange-400 transition-colors"
                  >
                    samples-go ↗
                  </a>
                </div>
              </div>
            </footer>
          </main>

          {/* Sidebar TOC — hidden on smaller screens */}
          <aside className="hidden xl:block w-56 shrink-0">
            <TableOfContents items={tocItems} />
          </aside>
        </div>
      </div>
    </div>
  )
}
