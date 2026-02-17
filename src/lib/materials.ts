import { Material } from '../types';

const STORAGE_KEY = 'teacherMaterials';

function getAll(): Material[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}

function saveAll(materials: Material[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(materials));
}

export const materialsStore = {
  getAll,

  getByTeacher(teacherId: string): Material[] {
    return getAll().filter((m) => m.teacherId === teacherId);
  },

  getById(id: string): Material | undefined {
    return getAll().find((m) => m.id === id);
  },

  create(material: Omit<Material, 'id' | 'createdAt' | 'updatedAt'>): Material {
    const now = new Date().toISOString();
    const newMaterial: Material = {
      ...material,
      id: `mat-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      createdAt: now,
      updatedAt: now,
    };
    const all = getAll();
    all.push(newMaterial);
    saveAll(all);
    return newMaterial;
  },

  update(id: string, updates: Partial<Omit<Material, 'id' | 'createdAt' | 'teacherId'>>): Material | null {
    const all = getAll();
    const idx = all.findIndex((m) => m.id === id);
    if (idx === -1) return null;
    all[idx] = { ...all[idx], ...updates, updatedAt: new Date().toISOString() };
    saveAll(all);
    return all[idx];
  },

  remove(id: string): boolean {
    const all = getAll();
    const filtered = all.filter((m) => m.id !== id);
    if (filtered.length === all.length) return false;
    saveAll(filtered);
    return true;
  },

  search(teacherId: string, query: string, category?: string): Material[] {
    let results = this.getByTeacher(teacherId);
    if (category) {
      results = results.filter((m) => m.category === category);
    }
    if (query.trim()) {
      const lower = query.toLowerCase();
      results = results.filter(
        (m) =>
          m.title.toLowerCase().includes(lower) ||
          m.description.toLowerCase().includes(lower)
      );
    }
    return results.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
  },
};

export const MATERIAL_CATEGORIES = [
  { value: 'math', labelKey: 'catMath' as const },
  { value: 'science', labelKey: 'catScience' as const },
  { value: 'english', labelKey: 'catEnglish' as const },
  { value: 'arabic', labelKey: 'catArabic' as const },
  { value: 'history', labelKey: 'catHistory' as const },
  { value: 'other', labelKey: 'catOther' as const },
];

export const MATERIAL_GRADES = [
  { value: 'k', labelKey: 'gradeK' as const },
  { value: '1-3', labelKey: 'grade1to3' as const },
  { value: '4-6', labelKey: 'grade4to6' as const },
  { value: '7-9', labelKey: 'grade7to9' as const },
  { value: '10-12', labelKey: 'grade10to12' as const },
];
