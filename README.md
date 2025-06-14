# Zendo CDN

A simple CDN server for the Zendo website, built using Cloudflare Workers. This project serves static assets and handles custom routes, such as `/robots.txt`, with a JSON-based response format.

## Features

- **Cloudflare Worker**: Deploys as a serverless function on Cloudflare's edge network.
- **Static Asset Serving**: Serves files from the `public/` directory via the `ASSETS` binding.
- **Custom Route Handling**: Responds to `/robots.txt` with a custom message.
- **Consistent JSON Responses**: All responses, including errors, are returned in a JSON format.
- **ESLint & Prettier**: Code style and linting enforced via ESLint and Prettier.

## Project Structure

```
index.js           # Main worker script
utils.js           # Utility functions (e.g., JSON response helper)
wrangler.toml      # Cloudflare Worker configuration
public/            # Directory for static assets (images, icons, etc.)
package.json       # Project metadata and dependencies
```

## Usage

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Cloudflare Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)

### Local Development

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the worker locally:
   ```sh
   npx wrangler dev
   ```

### Deployment

Deploy to Cloudflare Workers.

## Custom Endpoints

- `GET /robots.txt` — Returns a JSON response with a `Disallow: /` directive.
- Static assets (e.g., `/favicon.ico`, `/discord-logo.png`) are served from the `public/` directory.

## Configuration

Configuration is managed via `wrangler.toml`:

- `main`: Entry point for the worker (`index.js`).
- `assets.directory`: Path to static assets (`public/`).
- `assets.binding`: Name of the binding for asset serving (`ASSETS`).

## License

MIT License. See [LICENSE](./LICENSE) for details.
