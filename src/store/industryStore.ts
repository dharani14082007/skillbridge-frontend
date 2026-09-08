import { create } from 'zustand';
import { IndustryProfile, Opportunity, OpportunityApplication } from '@/types';

interface IndustryState {
  profile: IndustryProfile | null;
  opportunities: Opportunity[];
  applications: OpportunityApplication[];
  setProfile: (profile: IndustryProfile) => void;
  setOpportunities: (opportunities: Opportunity[]) => void;
  setApplications: (applications: OpportunityApplication[]) => void;
  addOpportunity: (opportunity: Opportunity) => void;
  updateOpportunity: (opportunity: Opportunity) => void;
  deleteOpportunity: (opportunityId: string) => void;
}

export const useIndustryStore = create<IndustryState>((set) => ({
  profile: null,
  opportunities: [],
  applications: [],
  
  setProfile: (profile: IndustryProfile) => {
    set({ profile });
  },
  
  setOpportunities: (opportunities: Opportunity[]) => {
    set({ opportunities });
  },
  
  setApplications: (applications: OpportunityApplication[]) => {
    set({ applications });
  },
  
  addOpportunity: (opportunity: Opportunity) => {
    set((state) => ({
      opportunities: [...state.opportunities, opportunity],
    }));
  },
  
  updateOpportunity: (opportunity: Opportunity) => {
    set((state) => ({
      opportunities: state.opportunities.map((o) =>
        o.id === opportunity.id ? opportunity : o
      ),
    }));
  },
  
  deleteOpportunity: (opportunityId: string) => {
    set((state) => ({
      opportunities: state.opportunities.filter((o) => o.id !== opportunityId),
    }));
  },
}));