# Keploy Go Quickstart & Documentation Website

This repository contains a single-page technical documentation website and tutorial for running Keploy with a Go application, created as a candidate assignment for the Keploy Developer Relations (DevRel) role.

The tutorial walks through recording real HTTP API interactions and replaying them as automated regression tests without writing manual test code. It is based on a real execution of the official Keploy Go sample application.

## Project Structure

- `src/` — Next.js documentation website application.
- `src/content/tutorial.mdx` — Main tutorial written in MDX covering the step-by-step Keploy workflow.
- `src/components/` — React UI components (table of contents, code blocks with copy support, architecture diagrams, callouts).
- `samples-go/http-pokeapi/` — The Go HTTP service (Chi router) used for the quickstart.
- `samples-go/http-pokeapi/keploy/test-set-0/` — Recorded Keploy test artifacts (request/response YAML definitions and upstream PokéAPI mocks).

## Technology Stack

- Framework: Next.js 16 (App Router)
- Content: MDX (`@next/mdx`, `rehype-slug`, `remark-gfm`)
- Styling: Tailwind CSS
- Icons: Lucide React
- Target Application: Go 1.26, Chi router
- Test Engine: Keploy 3.8.58 Free Edition

## Verified Test Run

The tutorial reflects a live run in an Ubuntu 26.04 LTS (WSL2) environment:

- Target App: `samples-go/http-pokeapi` (:8080)
- Endpoints Recorded:
  - `GET /api/greet`
  - `GET /api/pokemon/pikachu`
  - `GET /api/locations`
- Verification Command: `keploy test -c "./main" --mappings`
- Result:
  - `test-set-0`: 3 passed, 0 failed
  - `test-set-1`: 5 passed, 0 failed
  - Total: 8 passed, 0 failed (10.29s)

## Running the Documentation Site Locally

### Prerequisites

- Node.js 18+ (tested with Node 20+)
- npm

### Installation

```bash
npm install
```

### Development Server

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

To verify and build the static production bundle:

```bash
npm run build
npm run start
```

## Running the Go & Keploy Sample

To reproduce the test recording and replay demonstrated in the tutorial:

1. Navigate to the sample directory:
   ```bash
   cd samples-go/http-pokeapi
   ```
2. Build the Go binary:
   ```bash
   go mod download
   go build -o main
   ```
3. Run Keploy in test mode against the recorded test cases:
   ```bash
   keploy test -c "./main" --mappings
   ```
