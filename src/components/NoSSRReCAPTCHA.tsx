import { forwardRef, useEffect, useState } from "react";

// SSR-safe wrapper for react-google-recaptcha
// Loads the component only on the client to avoid SSR import issues

type NoSSRReCAPTCHAProps = {
  sitekey: string;
  onChange?: (value: string | null) => void;
  onExpired?: () => void;
  theme?: "light" | "dark";
  className?: string;
};

const NoSSRReCAPTCHA = forwardRef<any, NoSSRReCAPTCHAProps>(function NoSSRReCAPTCHA(
  props,
  ref
) {
  const [ReCAPTCHAComp, setReCAPTCHAComp] = useState<any>(null);

  useEffect(() => {
    let mounted = true;
    // Dynamically import on client only
    import("react-google-recaptcha")
      .then((mod) => {
        if (!mounted) return;
        const Comp = (mod as any).default || (mod as any);
        setReCAPTCHAComp(() => Comp);
      })
      .catch(() => {
        // Silently fail; component will render null
      });
    return () => {
      mounted = false;
    };
  }, []);

  if (typeof window === "undefined") return null;
  if (!ReCAPTCHAComp) return null;

  const { className, ...rest } = props as any;
  return <ReCAPTCHAComp ref={ref} className={className} {...rest} />;
});

export default NoSSRReCAPTCHA;
