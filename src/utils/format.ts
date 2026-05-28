export function formatDate(
  date: Date,
  options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  },
): string {
  return date.toLocaleDateString("en-US", options);
}

export function slugFromId(id: string): string {
  return id.replace(/\.md$/, "");
}
