import { createFileRoute } from "@tanstack/react-router";
import NakivoPage from "@/pages/vendors/Nakivo";

export const Route = createFileRoute("/vendors/nakivo")({ component: NakivoPage });