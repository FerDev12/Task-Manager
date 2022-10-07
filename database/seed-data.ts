import { Status } from '../interfaces';

interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description:
        'Pendiente: Proident dolor duis elit sunt qui dolor laborum veniam ea laboris qui conswquat.',
      createdAt: Date.now(),
      status: Status.pending,
    },
    {
      description:
        'En-Progreso: Proident dolor duis elit sunt qui dolor laborum veniam ea laboris qui conswquat.',
      createdAt: Date.now() - 1_000_000,
      status: Status.inProgress,
    },
    {
      description:
        'Terminada: Proident dolor duis elit sunt qui dolor laborum veniam ea laboris qui conswquat.',
      createdAt: Date.now() - 100_000,
      status: Status.finished,
    },
  ],
};
