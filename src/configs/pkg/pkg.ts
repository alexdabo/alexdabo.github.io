import { name, repository, displayName, version } from '../../../package.json'

/**
 * Represents basic metadata about the current package.
 *
 * This interface defines the structure for accessing core
 */
interface PKG {
  /**
   * The name of the package (usually used as an internal identifier).
   */
  name: string

  /**
   * A human-readable display name for the package.
   */
  displayName: string

  /**
   * The repository URL or identifier for the source code of the package.
   */
  repository: string

  /**
   * The current version of the package, following Semantic Versioning.
   */
  version: string
}

/**
 * Basic package metadata extracted from `package.json`.
 *
 * Useful for displaying version info, repository links, or other package
 * metadata in UI components, CLI outputs, or build tools.
 */
export const Pkg: PKG = {
  name,
  version,
  displayName,
  repository: repository.url
}
