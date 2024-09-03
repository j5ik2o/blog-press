import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ButtonProps } from "@/components/ui/button"
import { VariantProps } from "class-variance-authority"

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
} & VariantProps<typeof Button> & Omit<ButtonProps, 'asChild'>;

// RSC対応のshadcn/uiベースLinkボタンコンポーネント（TypeScript版）
export default function LinkButton({
                                     href,
                                     children,
                                     variant = "default",
                                     size = "default",
                                     className = '',
                                     ...props
                                   }: LinkButtonProps) {
  return (
      <Button asChild variant={variant} size={size} className={className} {...props}>
        <Link href={href}>
          {children}
        </Link>
      </Button>
  )
}