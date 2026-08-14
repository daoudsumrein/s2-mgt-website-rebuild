import { createFileRoute } from "@tanstack/react-router";
import AppCUREVendorPage from "@/pages/vendors/AppCUREVendor";

export const Route = createFileRoute("/vendors/appcure")({ component: AppCUREVendorPage });