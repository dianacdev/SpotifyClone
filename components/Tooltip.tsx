'use client';

import * as RadixTooltip from '@radix-ui/react-tooltip'

interface TooltipProps{
    content: string;
    children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({content, children}) => {
    return ( 
        <RadixTooltip.Provider delayDuration={800} skipDelayDuration={500}>
        <RadixTooltip.Root>
          <RadixTooltip.Trigger asChild>
            {children}
          </RadixTooltip.Trigger>
          <RadixTooltip.Portal>
            <RadixTooltip.Content className="rounded-md py-[10px] px-[15px] " sideOffset={5}>
            {content}
            </RadixTooltip.Content>
          </RadixTooltip.Portal>
        </RadixTooltip.Root>
      </RadixTooltip.Provider>
     );
}
 
export default Tooltip;