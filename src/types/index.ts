export type AccountType = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
};

export type SigninType = {
  email: string;
  password: string;
};

export type PorfolioType = {
  userId: number;
  title: string;
  description: string;
  gitUrl: string;
};

export type ProjectType = {
  userId: number;
  projectTitle: string;
  projectDesc: string;
  projectGit: string;
  portfolioId: number;
};
