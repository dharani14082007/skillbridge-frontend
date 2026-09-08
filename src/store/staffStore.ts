import { create } from 'zustand';
import { StaffProfile, Assessment, LearningResource } from '@/types';

interface StaffState {
  profile: StaffProfile | null;
  assessments: Assessment[];
  learningResources: LearningResource[];
  setProfile: (profile: StaffProfile) => void;
  setAssessments: (assessments: Assessment[]) => void;
  setLearningResources: (resources: LearningResource[]) => void;
  addAssessment: (assessment: Assessment) => void;
  updateAssessment: (assessment: Assessment) => void;
  deleteAssessment: (assessmentId: string) => void;
}

export const useStaffStore = create<StaffState>((set) => ({
  profile: null,
  assessments: [],
  learningResources: [],
  
  setProfile: (profile: StaffProfile) => {
    set({ profile });
  },
  
  setAssessments: (assessments: Assessment[]) => {
    set({ assessments });
  },
  
  setLearningResources: (resources: LearningResource[]) => {
    set({ learningResources: resources });
  },
  
  addAssessment: (assessment: Assessment) => {
    set((state) => ({
      assessments: [...state.assessments, assessment],
    }));
  },
  
  updateAssessment: (assessment: Assessment) => {
    set((state) => ({
      assessments: state.assessments.map((a) =>
        a.id === assessment.id ? assessment : a
      ),
    }));
  },
  
  deleteAssessment: (assessmentId: string) => {
    set((state) => ({
      assessments: state.assessments.filter((a) => a.id !== assessmentId),
    }));
  },
}));