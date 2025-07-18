/**
 * Represents an image resource with its metadata and alternative text for accessibility.
 */
export interface ImageSource {
  /** Image metadata including dimensions, format, and file path */
  image: ImageMetadata

  /** Descriptive alternative text for the image (used for accessibility and SEO) */
  alt: string
}
