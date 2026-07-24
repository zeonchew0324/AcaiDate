// inline CSS string -> React style object, so page markup keeps the exact
// same style values as the original static HTML (guarantees identical look)
export const css = (s) =>
  Object.fromEntries(
    s
      .split(";")
      .map((r) => r.trim())
      .filter(Boolean)
      .map((r) => {
        const i = r.indexOf(":");
        const key = r
          .slice(0, i)
          .trim()
          .replace(/-([a-z])/g, (_, c) => c.toUpperCase());
        return [key, r.slice(i + 1).trim()];
      }),
  );
