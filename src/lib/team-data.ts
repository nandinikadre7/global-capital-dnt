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
];
