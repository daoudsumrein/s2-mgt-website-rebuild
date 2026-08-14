import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { SITE_URL, solutions } from "../data";

export default defineTool({
  name: "get_solution",
  title: "Get solution details",
  description: "Get details for one S2 Management Solutions solution by name (case-insensitive, partial match allowed).",
  inputSchema: { name: z.string().trim().min(1).describe("Solution name, e.g. 'Ransomware Protection'.") },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ name }) => {
    const q = name.toLowerCase();
    const match =
      solutions.find((s) => s.title.toLowerCase() === q) ??
      solutions.find((s) => s.title.toLowerCase().includes(q));
    if (!match) {
      throw new ToolError(
        `No solution matches "${name}". Known solutions: ${solutions.map((s) => s.title).join(", ")}.`,
      );
    }
    const result = { ...match, url: SITE_URL + match.path };
    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
      structuredContent: { solution: result },
    };
  },
});
