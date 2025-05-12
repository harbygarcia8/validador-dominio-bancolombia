/**
 * Calcula la distancia de Levenshtein entre dos strings.
 * La distancia de Levenshtein es el número mínimo de ediciones de un solo carácter
 * (inserciones, eliminaciones o sustituciones) necesarias para cambiar una palabra por la otra.
 * @param s1 El primer string.
 * @param s2 El segundo string.
 * @returns La distancia de Levenshtein entre s1 y s2.
 */
export function levenshteinDistance(s1: string, s2: string): number {
    const track = Array(s2.length + 1)
      .fill(null)
      .map(() => Array(s1.length + 1).fill(null));
  
    for (let i = 0; i <= s1.length; i += 1) {
      track[0][i] = i;
    }
    for (let j = 0; j <= s2.length; j += 1) {
      track[j][0] = j;
    }
  
    for (let j = 1; j <= s2.length; j += 1) {
      for (let i = 1; i <= s1.length; i += 1) {
        const indicator = s1[i - 1] === s2[j - 1] ? 0 : 1;
        track[j][i] = Math.min(
          track[j][i - 1] + 1, // deletion
          track[j - 1][i] + 1, // insertion
          track[j - 1][i - 1] + indicator // substitution
        );
      }
    }
    return track[s2.length][s1.length];
  }