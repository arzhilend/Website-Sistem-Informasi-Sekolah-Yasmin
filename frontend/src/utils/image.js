/**
 * Helper utility for resolving local/static media URLs.
 */

/**
 * Resolves a storage image path to a full accessible URL.
 *
 * @param {string|null} path - Image path
 * @param {string|null} fallback - Fallback URL if path is missing
 * @returns {string|null}
 */
export const getStorageUrl = (path, fallback = null) => {
  if (!path) {
    return fallback
  }

  // Already a full URL (http:// or https://) or data URL
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path
  }

  // Starts with /storage/
  if (path.startsWith('/storage/')) {
    return path
  }

  // Starts with storage/ (no leading slash)
  if (path.startsWith('storage/')) {
    return `/${path}`
  }

  // Relative path inside storage (e.g. "prestasi/xxx.webp" or "news/xxx.jpg")
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `/storage${cleanPath}`
}

export default {
  getStorageUrl
}
