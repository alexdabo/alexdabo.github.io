/**
 * Generates a safe, lowercase filename from a given name string.
 * Trims whitespace, replaces spaces with dashes, removes special characters,
 * and appends a file suffix (default: "").
 *
 * @param name - The base name to use (e.g., a user's full name).
 * @param suffix - Optional suffix to append to the filename (default: '').
 * @returns A sanitized filename string (e.g., "juan-perez-cv.pdf").
 * @throws If the name is empty or undefined.
 */
export function filename(name: string, suffix: string = ""): string {
  if (!name) throw new Error("Name is required");

  const safeName = name
    .normalize("NFD") // Normalize accented characters
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with dashes
    .replace(/[^a-zA-Z0-9\-]/g, "") // Remove special characters
    .toLowerCase();

  return `${safeName}${suffix}`;
}
