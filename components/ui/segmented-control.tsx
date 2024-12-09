"use client"

import { For, SegmentGroup } from "@chakra-ui/react"
import * as React from "react"

interface Item {
  value: string
  label: React.ReactNode
  disabled?: boolean
}

export interface SegmentedControlProps extends SegmentGroup.RootProps {
  items: Array<string | Item>
  backgroundColor?: string
  indicatorColor?: string
}

function normalize(items: Array<string | Item>): Item[] {
  return items.map((item) => {
    if (typeof item === "string") return { value: item, label: item }
    return item
  })
}

export const SegmentedControl = React.forwardRef<
  HTMLDivElement,
  SegmentedControlProps
>(function SegmentedControl(props, ref) {
  const { items, backgroundColor, indicatorColor, ...rest } = props
  const data = React.useMemo(() => normalize(items), [items])

  console.log(data)

  return (
    <SegmentGroup.Root ref={ref} {...rest}>
      <SegmentGroup.Indicator background={indicatorColor} className={'!text-black'} />
      <For each={data}>
        {(item) => (
          <SegmentGroup.Item
            key={item.value}
            value={item.value}
            disabled={item.disabled}
            colorPalette={'yellow'}
            backgroundColor={backgroundColor}
          >
            <SegmentGroup.ItemText>{item.label}</SegmentGroup.ItemText>
            <SegmentGroup.ItemHiddenInput />
          </SegmentGroup.Item>
        )}
      </For>
    </SegmentGroup.Root>
  )
})
