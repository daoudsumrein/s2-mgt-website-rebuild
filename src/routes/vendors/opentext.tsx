import { createFileRoute } from "@tanstack/react-router";
import OpenTextPage from "@/pages/vendors/OpenText";

export const Route = createFileRoute("/vendors/opentext")({ component: OpenTextPage });