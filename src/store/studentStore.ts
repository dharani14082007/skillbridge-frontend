import { create } from 'zustand';
import { StudentProfile, Skill, SkillGap, CareerPortfolio } from '@/types';

interface StudentState {
  profile: StudentProfile | null;
  skills: Skill[];
  skillGaps: SkillGap[];
  portfolio: CareerPortfolio | null;
  setProfile: (profile: StudentProfile) => void;
  setSkills: (skills: Skill[]) => void;
  setSkillGaps: (gaps: SkillGap[]) => void;
  setPortfolio: (portfolio: CareerPortfolio) => void;
  addSkill: (skill: Skill) => void;
  removeSkill: (skillId: string) => void;
  updateSkill: (skill: Skill) => void;
}

export const useStudentStore = create<StudentState>((set) => ({
  profile: null,
  skills: [],
  skillGaps: [],
  portfolio: null,
  
  setProfile: (profile: StudentProfile) => {
    set({ profile });
  },
  
  setSkills: (skills: Skill[]) => {
    set({ skills });
  },
  
  setSkillGaps: (gaps: SkillGap[]) => {
    set({ skillGaps: gaps });
  },
  
  setPortfolio: (portfolio: CareerPortfolio) => {
    set({ portfolio });
  },
  
  addSkill: (skill: Skill) => {
    set((state) => ({
      skills: [...state.skills, skill],
    }));
  },
  
  removeSkill: (skillId: string) => {
    set((state) => ({
      skills: state.skills.filter((s) => s.id !== skillId),
    }));
  },
  
  updateSkill: (skill: Skill) => {
    set((state) => ({
      skills: state.skills.map((s) => (s.id === skill.id ? skill : s)),
    }));
  },
}));