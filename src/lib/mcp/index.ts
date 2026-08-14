import { defineMcp } from "@lovable.dev/mcp-js";
import listSolutions from "./tools/list-solutions";
import getSolution from "./tools/get-solution";
import listVendors from "./tools/list-vendors";
import getCompanyInfo from "./tools/get-company-info";

export default defineMcp({
  name: "s2-mgt-website-rebuild",
  title: "s2-mgt-website-rebuild",
  version: "0.1.0",
  instructions:
    "Public tools for the S2 Management Solutions website. Use `list_solutions` and `get_solution` for data protection and cybersecurity offerings, `list_vendors` for technology partners, and `get_company_info` for services, offices and contact details.",
  // @ts-expect-error upstream @lovable.dev/mcp-js types outputSchema as non-optional under exactOptionalPropertyTypes; tools without outputSchema are valid at runtime
  tools: [listSolutions, getSolution, listVendors, getCompanyInfo],
});
