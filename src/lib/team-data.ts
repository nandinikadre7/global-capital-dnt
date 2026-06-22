export interface TeamMember {
  name: string;
  role: string;
  company: string;
  bio: string;
  photo: string;
  email: string;
  phone: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Jawahar (Joe) Dodani",
    role: "Associate Broker",
    company: "eXp Realty",
    bio: "Licensed Associate Broker with eXp Realty and founder of Global Investor Circle. Joe brings two decades of experience in institutional real estate and cross-border capital markets, specializing in off-market placements across multifamily, solar infrastructure, and commercial development.",
    photo: "/team/joe-dodani.jpeg",
    email: "Joe@GlobalInvestorCircle.com",
    phone: "(480) 200-7127",
  },
  {
    name: "Michael R. Thompson",
    role: "Managing Partner",
    company: "Global Investor Circle",
    bio: "15+ years in institutional capital markets with a focus on equity placement and cross-border deal structuring. Has advised on transactions spanning multifamily, land banking, and infrastructure finance across the US and global markets.",
    photo: "/team/placeholder.svg",
    email: "",
    phone: "",
  },
  {
    name: "Sarah Chen",
    role: "Capital Markets Advisor",
    company: "Global Investor Circle",
    bio: "Specialist in institutional debt and equity structuring with expertise in CMBS, mezzanine finance, and private credit. Formerly with a top-tier investment bank advising on middle-market acquisitions and development capitalization.",
    photo: "/team/placeholder.svg",
    email: "",
    phone: "",
  },
  {
    name: "David A. Morrison",
    role: "Investor Relations Director",
    company: "Global Investor Circle",
    bio: "Dedicated to managing relationships with accredited investors, family offices, and institutional allocators. Oversees onboarding, pre-qualification, and ongoing communication for the platform's private investor network.",
    photo: "/team/placeholder.svg",
    email: "",
    phone: "",
  },
];
