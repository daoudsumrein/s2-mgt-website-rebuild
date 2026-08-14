import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { SITE_URL, vendors } from "../data";

export default defineTool({
  name: "list_vendors",
  title: "List technology partners",
  description: "List the technology vendors and partners S2 Management Solutions works with, their focus areas and offerings.",
  inputSchema: { name: z.string().trim().optional().describe("Optional vendor name filter (partial, case-insensitive).") },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ name }) => {
    const q = name?.toLowerCase();
    const rows = vendors
      .filter((v) => !q || v.name.toLowerCase().includes(q))
      .map((v) => ({ ...v, url: v.path.startsWith("http") ? v.path : SITE_URL + v.path }));
    return {
      content: [{ type: "text", text: JSON.stringify(rows, null, 2) }],
      structuredContent: { vendors: rows },
    };
  },
});
