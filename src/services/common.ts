import api from './api';
import { Skill, LearningResource, Opportunity } from '@/types';
import { PaginatedResponse, LearningResourceFilters } from '@/types/api';

const commonService = {
  getSkills: async (): Promise<Skill[]> => {
    return api.get('/skills');
  },

  getSkillById: async (skillId: string): Promise<Skill> => {
    return api.get(`/skills/${skillId}`);
  },

  getLearningResources: async (filters?: LearningResourceFilters): Promise<PaginatedResponse<LearningResource>> => {
    return api.get('/learning-resources', { params: filters });
  },

  getLearningResourcesBySkill: async (skillId: string): Promise<LearningResource[]> => {
    return api.get(`/skills/${skillId}/learning-resources`);
  },

  getOpportunityById: async (opportunityId: string): Promise<Opportunity> => {
    return api.get(`/opportunities/${opportunityId}`);
  },

  searchSkills: async (query: string): Promise<Skill[]> => {
    return api.get('/skills/search', { params: { q: query } });
  },
};

export default commonService;