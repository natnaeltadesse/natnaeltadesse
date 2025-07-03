"use client"

import { AddButton } from "@/components/ui/add-button"
import { useState } from "react"

export default function Home() {
  const [loading, setLoading] = useState(false)

  const handleClick = (action: string) => {
    console.log(`${action} clicked`)
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">AddButton Component Demo</h1>
        <p className="text-xl text-muted-foreground">
          A reusable, type-safe AddButton component for Next.js projects using shadcn/ui
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
        {/* Default variant examples */}
        <div className="space-y-4 p-6 border rounded-lg">
          <h3 className="text-lg font-semibold">Default Variant</h3>
          <div className="space-y-3">
            <AddButton 
              title="Add Item" 
              onClick={() => handleClick('Add Item')}
            />
            <AddButton 
              title="Create New" 
              size="sm"
              onClick={() => handleClick('Create New')}
            />
            <AddButton 
              title="Large Button" 
              size="lg"
              onClick={() => handleClick('Large Button')}
            />
          </div>
        </div>

        {/* Outline variant examples */}
        <div className="space-y-4 p-6 border rounded-lg">
          <h3 className="text-lg font-semibold">Outline Variant</h3>
          <div className="space-y-3">
            <AddButton 
              title="Add Task" 
              variant="outline"
              onClick={() => handleClick('Add Task')}
            />
            <AddButton 
              title="Create Project" 
              variant="outline"
              size="sm"
              onClick={() => handleClick('Create Project')}
            />
            <AddButton 
              title="New Document" 
              variant="outline"
              size="lg"
              onClick={() => handleClick('New Document')}
            />
          </div>
        </div>

        {/* Secondary variant examples */}
        <div className="space-y-4 p-6 border rounded-lg">
          <h3 className="text-lg font-semibold">Secondary Variant</h3>
          <div className="space-y-3">
            <AddButton 
              title="Add User" 
              variant="secondary"
              onClick={() => handleClick('Add User')}
            />
            <AddButton 
              title="Create Group" 
              variant="secondary"
              size="sm"
              onClick={() => handleClick('Create Group')}
            />
            <AddButton 
              title="New Category" 
              variant="secondary"
              size="lg"
              onClick={() => handleClick('New Category')}
            />
          </div>
        </div>

        {/* Ghost variant examples */}
        <div className="space-y-4 p-6 border rounded-lg">
          <h3 className="text-lg font-semibold">Ghost Variant</h3>
          <div className="space-y-3">
            <AddButton 
              title="Quick Add" 
              variant="ghost"
              onClick={() => handleClick('Quick Add')}
            />
            <AddButton 
              title="Add Comment" 
              variant="ghost"
              size="sm"
              onClick={() => handleClick('Add Comment')}
            />
            <AddButton 
              title="Create Section" 
              variant="ghost"
              size="lg"
              onClick={() => handleClick('Create Section')}
            />
          </div>
        </div>

        {/* State examples */}
        <div className="space-y-4 p-6 border rounded-lg">
          <h3 className="text-lg font-semibold">States</h3>
          <div className="space-y-3">
            <AddButton 
              title="Loading State" 
              disabled={loading}
              onClick={() => handleClick('Loading State')}
            />
            <AddButton 
              title="Disabled Button" 
              disabled
              onClick={() => handleClick('Disabled Button')}
            />
            <AddButton 
              title="Custom Class" 
              className="bg-green-600 hover:bg-green-700"
              onClick={() => handleClick('Custom Class')}
            />
          </div>
        </div>

        {/* Usage example */}
        <div className="space-y-4 p-6 border rounded-lg">
          <h3 className="text-lg font-semibold">Mixed Examples</h3>
          <div className="space-y-3">
            <AddButton 
              title="Add to Cart" 
              variant="outline"
              size="sm"
              onClick={() => handleClick('Add to Cart')}
            />
            <AddButton 
              title="Create Account" 
              variant="default"
              onClick={() => handleClick('Create Account')}
            />
            <AddButton 
              title="New Workspace" 
              variant="secondary"
              size="lg"
              onClick={() => handleClick('New Workspace')}
            />
          </div>
        </div>
      </div>

      <div className="text-center space-y-2 max-w-2xl">
        <h3 className="text-lg font-semibold">Component Features</h3>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>✅ Extends shadcn Button component with all props</li>
          <li>✅ Required title prop for button text</li>
          <li>✅ PlusCircle icon from lucide-react</li>
          <li>✅ Subtle vertical separator between icon and text</li>
          <li>✅ Full TypeScript type safety</li>
          <li>✅ Responsive design with all button variants</li>
          <li>✅ Proper React.forwardRef implementation</li>
          <li>✅ className merging with cn utility</li>
        </ul>
      </div>
    </main>
  )
}