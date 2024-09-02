// components/NaviButton.tsx

import ClientNaviButton from "@/components/ui/ClientNaviButton";
import Link from "next/link";

interface NaviButtonProps {
  label: string;
  href: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  prefetch?: boolean;
}

export default function NaviButton({ label, href, variant = "default", prefetch = true }: NaviButtonProps) {
  return (
    <ClientNaviButton href={href} variant={variant}>
      {label}
    </ClientNaviButton>
  );
}
