"use client"

import { track } from "@vercel/analytics"
import { forwardRef, type AnchorHTMLAttributes } from "react"

type AnalyticsLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName: string
  eventProperties?: Record<string, string | number | boolean | null>
}

const AnalyticsLink = forwardRef<HTMLAnchorElement, AnalyticsLinkProps>(
  ({ eventName, eventProperties, onClick, ...props }, ref) => {
    return (
      <a
        ref={ref}
        {...props}
        onClick={(event) => {
          track(eventName, eventProperties)
          onClick?.(event)
        }}
      />
    )
  }
)

AnalyticsLink.displayName = "AnalyticsLink"

export default AnalyticsLink
