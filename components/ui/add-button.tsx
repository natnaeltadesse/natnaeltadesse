import * as React from "react"
import { PlusCircle } from "lucide-react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/**
 * AddButton component interface extending ButtonProps but omitting 'children'
 * since we use the 'title' prop instead for the button text.
 */
export interface AddButtonProps extends Omit<ButtonProps, 'children'> {
  /** Required title text to display on the button */
  title: string;
}

/**
 * AddButton - A reusable, type-safe button component with a plus icon and title text.
 * 
 * Features:
 * - Extends shadcn Button component with all its variants and props
 * - Displays a PlusCircle icon on the left side
 * - Includes a subtle vertical separator between icon and text
 * - Fully type-safe with TypeScript
 * - Responsive design that works with all Button variants
 * 
 * @example
 * ```tsx
 * <AddButton 
 *   title="Add Item" 
 *   variant="outline" 
 *   size="sm"
 *   onClick={() => console.log('clicked')}
 * />
 * 
 * <AddButton 
 *   title="Create New" 
 *   variant="default"
 *   disabled={loading}
 *   className="custom-class"
 * />
 * ```
 */
const AddButton = React.forwardRef<HTMLButtonElement, AddButtonProps>(
  ({ title, className, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn("gap-2", className)}
        {...props}
      >
        <PlusCircle className="h-4 w-4" />
        <div className="h-4 w-px bg-current opacity-30" />
        {title}
      </Button>
    )
  }
)

AddButton.displayName = "AddButton"

export { AddButton }
export default AddButton