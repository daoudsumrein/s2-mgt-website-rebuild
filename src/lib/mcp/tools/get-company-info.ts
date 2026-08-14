import { defineTool } from "@lovable.dev/mcp-js";
import { SITE_URL, contact, services } from "../data";

export default defineTool({
  name: "get_company_info",
  title: "Get company and contact info",
  description: "Get S2 Management Solutions' service capabilities, office locations and public contact details.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const info = {
      company: "S2 Management Solutions",
      summary:
        "S2 Management Solutions is a Dubai-based technology consultancy delivering data protection, disaster recovery, cloud migration and cybersecurity solutions across the Middle East.",
      website: SITE_URL,
      services,
      contact: { ...contact, contactPageUrl: SITE_URL + contact.contactPage },
    };
    return {
      content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});
