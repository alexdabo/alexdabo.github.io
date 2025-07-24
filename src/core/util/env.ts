/**
 * Determines if the current environment is set to production.
 *
 * This function checks the Vite-specific `import.meta.env.MODE` variable
 * to determine whether the app is running in a production environment.
 *
 * @returns {boolean} `true` if the current environment is "production", otherwise `false`.
 */
export function isProd(): boolean {
  return import.meta.env.MODE === 'production'
}

/**
 * Returns a value based on the current Vite environment mode.
 *
 * If the mode is "production", it returns the `prod` value.
 * Otherwise (e.g., in development or test), it returns the `env` value.
 *
 * @template T - The type of the values to choose from.
 * @param env - The value to use in non-production environments (e.g., development).
 * @param prod - The value to use in production.
 * @returns The appropriate value based on the current environment mode.
 *
 * @example
 * const apiUrl = chooseByMode("http://localhost:3000", "https://api.example.com");
 */
export function chooseByMode<T>(env: T, prod: T) {
  if (import.meta.env.MODE === 'production') {
    return prod
  }

  return env
}

/**
 * Constructs a full site URL by concatenating the domain with the provided path.
 *
 * In development mode (`import.meta.env.DEV` is `true`), the domain defaults to
 * `'http://localhost:4321'`. Otherwise, it uses the value of `import.meta.env.SITE`.
 *
 * @param path - The path to append to the domain (should start with a slash `/`).
 * @returns The full URL string combining the domain and the given path.
 *
 * @example
 * // In development mode
 * site('/about') // returns 'http://localhost:4321/about'
 *
 * // In production mode (assuming SITE = 'https://example.com')
 * site('/about') // returns 'https://example.com/about'
 */
export function site(path: string): string {
  let domain = import.meta.env.SITE

  if (import.meta.env.DEV) {
    domain = 'http://localhost:4321'
  }

  return `${domain}${path}`
}
