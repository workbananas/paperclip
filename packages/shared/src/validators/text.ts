import { z } from "zod";

/**
 * Preserve text exactly as it arrived from the JSON parser.
 *
 * JSON decoding has already converted JSON escape sequences such as `\\n`
 * into real line breaks. A second unescape pass would corrupt a literal
 * backslash followed by `n`, `t`, or `r` in patches, source code, and other
 * markdown content. Keep this helper as an identity function for compatibility
 * with callers that import it directly.
 */
export function normalizeEscapedLineBreaks(value: string): string {
  return value;
}

export const multilineTextSchema = z.string().transform(normalizeEscapedLineBreaks);
