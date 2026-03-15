export type ExperienceCategoryT = {
  id: number;
  title: string;
}

export type ExperienceT = {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  description: string | null;

  category: ExperienceCategoryT;
}