"use client";

import { useRouter } from "next/router";
import { ButtonHTMLAttributes } from "react";
import { Button } from "./ui/button";

type Props = {
  title: string;
  className?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function BackButton({
  title,
  className,
  variant,
  ...props
}: Props) {
  const router = useRouter();
  return (
    <Button
      title={title}
      className={className}
      onClick={() => router.back()}
      variant={variant}
      {...props}
    >
      {title}
    </Button>
  );
}
