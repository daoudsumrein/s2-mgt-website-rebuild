import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { SITE_URL, solutions } from "../data";

export default defineTool({
  name: "list_solutions",
  title: "List solutions",
  description: "List S2 Management Solutions' data protection and cybersecurity solutions, with descriptions and page URLs.",
  inputSchema: {
    category: z
      .enum(["Data Protection", "Cybersecurity", "All"])
      .default("All")
      .describe("Filter solutions by category."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category }) => {
    const rows = solutions
      .filter((s) => category === "All" || s.category === category)
      .map((s) => ({ ...s, url: SITE_URL + s.path }));
    return {
      content: [{ type: "text", text: JSON.stringify(rows, null, 2) }],
      structuredContent: { solutions: rows },
    };
  },
});
