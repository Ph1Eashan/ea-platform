import type { ReactNode } from "react";

type StackLayoutProps = {
  children: ReactNode[];
};

/**
 * StackLayout renders children vertically.
 * No styling yet — structure only.
 */
export function StackLayout({ children }: StackLayoutProps) {
  return (
    <div>
      {children.map((child, index) => (
        <div key={index}>{child}</div>
      ))}
    </div>
  );
}
