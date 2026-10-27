import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: P) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const IconShield = (p: P) => (
  <Base {...p}>
    <path d="M12 3l7 2.8v5.4c0 4.4-3 8.2-7 9.8-4-1.6-7-5.4-7-9.8V5.8L12 3z" />
    <path d="M9 12l2 2 4-4.5" />
  </Base>
);

export const IconHome = (p: P) => (
  <Base {...p}>
    <path d="M3 11l9-7.5L21 11" />
    <path d="M5.5 9.5V20h13V9.5" />
    <path d="M10 20v-5.5h4V20" />
  </Base>
);

export const IconFlame = (p: P) => (
  <Base {...p}>
    <path d="M12 3c.5 3-4.5 5.5-4.5 10a4.5 4.5 0 0 0 9 0c0-1.6-.6-3-1.5-4.3C14.2 10 13 11 12.5 12.5 11.6 10 11 7 12 3z" />
  </Base>
);

export const IconLock = (p: P) => (
  <Base {...p}>
    <rect x="5" y="11" width="14" height="9.5" rx="2" />
    <path d="M8 11V7.5a4 4 0 0 1 8 0V11" />
    <path d="M12 15v2.5" />
  </Base>
);

export const IconFence = (p: P) => (
  <Base {...p}>
    <path d="M5 20V8.5L7 6l2 2.5V20" />
    <path d="M15 20V8.5L17 6l2 2.5V20" />
    <path d="M2.5 12h19" />
    <path d="M2.5 17h19" />
  </Base>
);

export const IconDroplet = (p: P) => (
  <Base {...p}>
    <path d="M12 3.5s6 6 6 10a6 6 0 0 1-12 0c0-4 6-10 6-10z" />
    <path d="M9.5 13.5a2.5 2.5 0 0 0 2 2.5" />
  </Base>
);

export const IconBuilding = (p: P) => (
  <Base {...p}>
    <path d="M5 21V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v16" />
    <path d="M3 21h18" />
    <path d="M16 9h3.5v12" />
    <path d="M8.5 7h2.5M8.5 11h2.5M8.5 15h2.5" />
  </Base>
);

export const IconClipboard = (p: P) => (
  <Base {...p}>
    <rect x="5.5" y="4.5" width="13" height="17" rx="2" />
    <path d="M9.5 4.5A2.5 2.5 0 0 1 12 3a2.5 2.5 0 0 1 2.5 1.5" />
    <path d="M9 10.5h6M9 14h6M9 17.5h3.5" />
  </Base>
);

export const IconTruck = (p: P) => (
  <Base {...p}>
    <path d="M2.5 7h11.5v9H2.5z" />
    <path d="M14 10h3.8l2.7 3.2V16H14" />
    <circle cx="6.5" cy="18" r="1.8" />
    <circle cx="16.5" cy="18" r="1.8" />
  </Base>
);

export const IconPhone = (p: P) => (
  <Base {...p}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.4a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z" />
  </Base>
);

export const IconMessage = (p: P) => (
  <Base {...p}>
    <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" />
    <path d="M8 9h8M8 12.5h5" />
  </Base>
);

export const IconCalendar = (p: P) => (
  <Base {...p}>
    <rect x="3.5" y="5" width="17" height="16" rx="2" />
    <path d="M8 3v4M16 3v4M3.5 10.5h17" />
    <path d="M8 15h2.5" />
  </Base>
);

export const IconMapPin = (p: P) => (
  <Base {...p}>
    <path d="M12 21.5S5 15.6 5 10.2a7 7 0 0 1 14 0c0 5.4-7 11.3-7 11.3z" />
    <circle cx="12" cy="10" r="2.5" />
  </Base>
);

export const IconCheck = (p: P) => (
  <Base {...p}>
    <path d="M4.5 12.5l5 5L20 6.5" />
  </Base>
);

export const IconBadge = (p: P) => (
  <Base {...p}>
    <circle cx="12" cy="9.5" r="6.5" />
    <path d="M9 9.5l2 2 4-4" />
    <path d="M8.8 15.2L7.5 21l4.5-2.7L16.5 21l-1.3-5.8" />
  </Base>
);

export const IconSearch = (p: P) => (
  <Base {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.8-4.8" />
  </Base>
);

export const IconClock = (p: P) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </Base>
);

export const IconZap = (p: P) => (
  <Base {...p}>
    <path d="M13 2.5L3.5 14H10l-1 7.5L18.5 10H12l1-7.5z" />
  </Base>
);

export const IconLeaf = (p: P) => (
  <Base {...p}>
    <path d="M4.5 19.5C4.5 10 10.5 4.5 19.5 4.5c0 9.5-6 15-15 15z" />
    <path d="M4.5 19.5c4.5-4.5 8.5-8.5 12-11.5" />
  </Base>
);

export const IconArrowRight = (p: P) => (
  <Base {...p}>
    <path d="M4 12h15M13.5 5.5L20 12l-6.5 6.5" />
  </Base>
);

export const IconAlert = (p: P) => (
  <Base {...p}>
    <path d="M12 3.5L2.5 20h19L12 3.5z" />
    <path d="M12 10v4.5" />
    <path d="M12 17.5v.1" />
  </Base>
);

export const IconStar = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12 2.5l2.9 6 6.6.9-4.8 4.5 1.2 6.5L12 17.3l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9 2.9-6z" />
  </svg>
);

/** Map of icon names used by data files */
export const iconMap = {
  shield: IconShield,
  home: IconHome,
  flame: IconFlame,
  lock: IconLock,
  fence: IconFence,
  droplet: IconDroplet,
  building: IconBuilding,
  clipboard: IconClipboard,
  truck: IconTruck,
  search: IconSearch,
} as const;

export type IconName = keyof typeof iconMap;
