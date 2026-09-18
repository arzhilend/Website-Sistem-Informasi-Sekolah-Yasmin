/**
 * Helper utility for resolving Laravel storage media URLs.
 * Handles relative storage paths, full URLs, and prefixes with VITE_API_BASE_URL.
 */

const getApiBaseUrl = () => {
  return (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '')
}

/**
 * Resolves a storage image path to a full accessible URL.
 * 
 * @param {string|null} path - Image path from API or database
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

  const baseUrl = getApiBaseUrl()

  // Starts with /storage/
  if (path.startsWith('/storage/')) {
    return baseUrl ? `${baseUrl}${path}` : path
  }

  // Starts with storage/ (no leading slash)
  if (path.startsWith('storage/')) {
    return baseUrl ? `${baseUrl}/${path}` : `/${path}`
  }

  // Relative path inside storage (e.g. "prestasi/xxx.webp" or "news/xxx.jpg")
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return baseUrl ? `${baseUrl}/storage${cleanPath}` : `/storage${cleanPath}`
}

export default {
  getStorageUrl
}
