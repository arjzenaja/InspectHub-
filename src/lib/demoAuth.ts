export const DEMO_USERS = {
  "admin@inspecpro.com": {
    id: "demo-admin",
    name: "Admin Demo",
    email: "admin@inspecpro.com",
    role: "admin" as const,
    password: "Admin@123",
    avatarUrl: null,
  },
  "manager@inspecpro.com": {
    id: "demo-manager",
    name: "Manager Demo",
    email: "manager@inspecpro.com",
    role: "manager" as const,
    password: "Manager@123",
    avatarUrl: null,
  },
  "bambang@inspecpro.com": {
    id: "demo-teknisi",
    name: "Bambang Teknisi",
    email: "bambang@inspecpro.com",
    role: "teknisi" as const,
    password: "Teknisi@123",
    avatarUrl: null,
  },
};

export const getDemoUser = (email?: string, password?: string) => {
  if (!email || !password) return null;
  const normalizedEmail = email.toLowerCase();
  const user = DEMO_USERS[normalizedEmail as keyof typeof DEMO_USERS];
  if (!user || user.password !== password) return null;
  return user;
};
