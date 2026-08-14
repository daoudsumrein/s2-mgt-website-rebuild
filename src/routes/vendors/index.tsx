import { createFileRoute } from "@tanstack/react-router";
import Vendors from "@/pages/Vendors";

export const Route = createFileRoute("/vendors/")({ component: Vendors });