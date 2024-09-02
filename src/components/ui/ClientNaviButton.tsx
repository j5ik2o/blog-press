"use client";
import { Button, type ButtonProps } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
type ButtonVariant = ButtonProps["variant"];

type Props = {
  children?: React.ReactNode;
  href: string;
  variant?: ButtonVariant;
};

const ClientNaviButton = ({ href, variant, children }: Props) => {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);

  const handleClick = () => {
    if (isNavigating) return;
    setIsNavigating(true);
    console.log("click");
    router.push(href);
    setIsNavigating(false);
  };

  return (
    <Button variant={variant} onClick={handleClick} disabled={isNavigating}>
      {isNavigating ? "Navigating..." : children}
    </Button>
  );
};

export default ClientNaviButton;
