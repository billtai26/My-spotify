// 1. Sửa lại các import từ thư viện
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'

import { cn } from '@/lib/utils'

// 2. Sửa lại tên component và các kiểu dữ liệu (Props)
function ResizablePanelGroup({
  className,
  ...props
}: React.ComponentProps<typeof PanelGroup>) {
  return (
    <PanelGroup
      className={cn(
        'flex h-full w-full data-[panel-group-direction=vertical]:flex-col',
        className
      )}
      {...props}
    />
  )
}

function ResizablePanel({ ...props }: React.ComponentProps<typeof Panel>) {
  return <Panel {...props} />
}

function ResizableHandle({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof PanelResizeHandle> & {
  withHandle?: boolean
}) {
  return (
    <PanelResizeHandle
      className={cn(
        'relative flex w-px items-center justify-center bg-border focus-visible:outline-hidden data-[panel-group-direction=horizontal]:h-full data-[panel-group-direction=horizontal]:w-px data-[panel-group-direction=horizontal]:after:left-1/2 data-[panel-group-direction=horizontal]:after:h-full data-[panel-group-direction=horizontal]:after:w-1 data-[panel-group-direction=horizontal]:after:-translate-x-1/2 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2',
        className
      )}
      {...props}
    >
      {withHandle && (
        <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
          <div className="h-2.5 w-px bg-muted-foreground" />
        </div>
      )}
    </PanelResizeHandle>
  )
}

export { ResizableHandle, ResizablePanel, ResizablePanelGroup }
