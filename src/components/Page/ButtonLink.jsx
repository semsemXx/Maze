import { Button } from "@/components/ui/button"
 
export function ButtonLink({ className, children }) {
    return <Button variant="link" className={className}>{children}</Button>;
  }