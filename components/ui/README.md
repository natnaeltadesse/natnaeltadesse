# AddButton Component

A reusable, type-safe AddButton component for Next.js projects using shadcn/ui.

## Features

- ✅ **Extends shadcn Button component** - Accepts all props that the shadcn Button component accepts
- ✅ **Required title prop** - Uses a `title` prop as a required string for the button text  
- ✅ **Plus circle icon** - Displays a PlusCircle icon from lucide-react on the left side
- ✅ **Visual separator** - Includes a subtle vertical separator line between the icon and text
- ✅ **Full type safety** - Maintains complete TypeScript type safety by properly extending ButtonProps
- ✅ **Responsive design** - Works well with different button variants (default, outline, ghost, etc.) and sizes
- ✅ **Proper React.forwardRef** - Supports ref forwarding for advanced use cases
- ✅ **className merging** - Uses cn utility for proper className handling

## Installation

This component requires the following dependencies:

```bash
npm install lucide-react @radix-ui/react-slot class-variance-authority clsx tailwind-merge
```

## Usage

```tsx
import { AddButton } from "@/components/ui/add-button"

// Basic usage
<AddButton title="Add Item" onClick={() => console.log('clicked')} />

// With different variants and sizes
<AddButton 
  title="Add Task" 
  variant="outline" 
  size="sm"
  onClick={() => handleAddTask()}
/>

<AddButton 
  title="Create New" 
  variant="default"
  disabled={loading}
  className="custom-class"
/>

// With all Button props
<AddButton 
  title="Add to Cart" 
  variant="secondary"
  size="lg"
  type="button"
  disabled={isDisabled}
  onClick={handleClick}
  onMouseEnter={handleHover}
  className="my-custom-class"
/>
```

## Props

The AddButton component accepts all props from the shadcn Button component, except for `children` (which is replaced by the `title` prop).

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `title` | `string` | ✅ | The text to display on the button |
| `variant` | `"default" \| "destructive" \| "outline" \| "secondary" \| "ghost" \| "link"` | ❌ | Button style variant |
| `size` | `"default" \| "sm" \| "lg" \| "icon"` | ❌ | Button size |
| `disabled` | `boolean` | ❌ | Whether the button is disabled |
| `onClick` | `(event: MouseEvent) => void` | ❌ | Click event handler |
| `className` | `string` | ❌ | Additional CSS classes |
| `...props` | `ButtonHTMLAttributes` | ❌ | All other HTML button attributes |

## Component Structure

```
[PlusCircle Icon] | [Vertical Separator] [Title Text]
```

- **Icon**: `h-4 w-4` PlusCircle from lucide-react
- **Separator**: Subtle vertical line using border with opacity
- **Spacing**: `gap-2` between elements
- **Layout**: Inline flex with proper alignment

## TypeScript Interface

```tsx
interface AddButtonProps extends Omit<ButtonProps, 'children'> {
  title: string;
}
```

## Development

To run the demo:

```bash
npm run dev
```

Visit `http://localhost:3000` to see the component demo with all variants and states.

## License

This component is part of the shadcn/ui ecosystem and follows the same open-source principles.