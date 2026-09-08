import api from './api';
import { StudentProfile, Skill, SkillGap, CareerPortfolio, Opportunity, OpportunityApplication } from '@/types';
import { PaginatedResponse, OpportunityFilters } from '@/types/api';

const studentService = {
  getProfile: async (): Promise<StudentProfile> => {
    return api.get('/students/profile');
  },

  updateProfile: async (data: Partial<StudentProfile>): Promise<StudentProfile> => {
    return api.put('/students/profile', data);
  },

  getSkills: async (): Promise<Skill[]> => {
    return api.get('/students/skills');
  },

  addSkill: async (skill: Skill): Promise<Skill> => {
    return api.post('/students/skills', skill);
  },

  updateSkill: async (skillId: string, skill: Partial<Skill>): Promise<Skill> => {
    return api.put(`/students/skills/${skillId}`, skill);
  },

  deleteSkill: async (skillId: string): Promise<void> => {
    return api.delete(`/students/skills/${skillId}`);
  },

  getSkillGaps: async (): Promise<SkillGap[]> => {
    return api.get('/students/skill-gaps');
  },

  getPortfolio: async (): Promise<CareerPortfolio> => {
    return api.get('/students/portfolio');
  },

  updatePortfolio: async (data: Partial<CareerPortfolio>): Promise<CareerPortfolio> => {
    return api.put('/students/portfolio', data);
  },

  searchOpportunities: async (filters: OpportunityFilters): Promise<PaginatedResponse<Opportunity>> => {
    return api.get('/students/opportunities', { params: filters });
  },

  applyOpportunity: async (opportunityId: string): Promise<OpportunityApplication> => {
    return api.post(`/students/opportunities/${opportunityId}/apply`);
  },

  getApplications: async (): Promise<OpportunityApplication[]> => {
    return api.get('/students/applications');
  },

  getApplicationById: async (applicationId: string): Promise<OpportunityApplication> => {
    return api.get(`/students/applications/${applicationId}`);
  },
};

export default studentService;