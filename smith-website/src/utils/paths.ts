// src/utils/paths.ts

/**
 * Resolves a path with the project's base URL (e.g. /smith-website/ on GitHub Pages).
 * Ensures correct path resolution for both static assets and internal page links.
 */
export function url(path: string = ''): string {
  if (!path) return import.meta.env.BASE_URL;

  // Do not touch external URLs, protocols, or anchors only
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('//') ||
    path.startsWith('mailto:') ||
    path.startsWith('tel:')
  ) {
    return path;
  }

  const rawBase = import.meta.env.BASE_URL || '/';
  const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;
  const baseWithoutTrailing = base.slice(0, -1);

  // Prevent double prefixing if path already includes the base URL
  if (baseWithoutTrailing && (path === baseWithoutTrailing || path.startsWith(`${baseWithoutTrailing}/`))) {
    return path;
  }

  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
}
