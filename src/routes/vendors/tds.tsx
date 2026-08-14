import { createFileRoute } from "@tanstack/react-router";
import TDSPage from "@/pages/vendors/TDS";

export const Route = createFileRoute("/vendors/tds")({ component: TDSPage });