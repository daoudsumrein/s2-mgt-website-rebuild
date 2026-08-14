import { forwardRef, lazy, Suspense } from "react";
import { ClientOnly } from "@tanstack/react-router";
import type ReCAPTCHA from "react-google-recaptcha";
import type { ReCAPTCHAProps } from "react-google-recaptcha";

// react-google-recaptcha ships CJS; its default export resolves to a module
// namespace object during SSR, so load it lazily and render client-only.
const LazyReCAPTCHA = lazy(async () => {
  const mod: any = await import("react-google-recaptcha");
  return { default: mod.default?.default ?? mod.default ?? mod };
});

const fallback = <div style={{ minHeight: 78 }} />;

const RecaptchaField = forwardRef<ReCAPTCHA, ReCAPTCHAProps>((props, ref) => (
  <ClientOnly fallback={fallback}>
    <Suspense fallback={fallback}>
      <LazyReCAPTCHA {...props} ref={ref} />
    </Suspense>
  </ClientOnly>
));

RecaptchaField.displayName = "RecaptchaField";

export default RecaptchaField;