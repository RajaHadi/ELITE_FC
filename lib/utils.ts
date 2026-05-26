/**
 * Returns a CSS class for stat colors based on the value.
 */
export function getStatColor(value: number, type: "text" | "bg" = "text"): string {
  if (type === "bg") {
    if (value >= 80) return "bg-accent-high";
    if (value >= 60) return "bg-accent-yellow";
    return "bg-accent-red";
  }
  
  if (value >= 80) return "text-accent-high";
  if (value >= 60) return "text-accent-yellow";
  return "text-accent-red";
}

/**
 * Formats a date string to a human-readable format.
 */
export function formatDate(dateStr: string, options: Intl.DateTimeFormatOptions = {
  day: "numeric",
  month: "short",
  year: "numeric",
}) {
  return new Date(dateStr).toLocaleDateString("en-GB", options);
}
