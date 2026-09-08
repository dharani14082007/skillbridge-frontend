import api from './api';
import { IndustryProfile, Opportunity, OpportunityApplication } from '@/types';
import { PaginatedResponse } from '@/types/api';

const industryService = {
  getProfile: async (): Promise<IndustryProfile> => {
    return api.get('/industry/profile');
  },

  updateProfile: async (data: Partial<IndustryProfile>): Promise<IndustryProfile> => {
    return api.put('/industry/profile', data);
  },

  createOpportunity: async (opportunity: Partial<Opportunity>): Promise<Opportunity> => {
    return api.post('/industry/opportunities', opportunity);
  },

  getOpportunities: async (): Promise<Opportunity[]> => {
    return api.get('/industry/opportunities');
  },

  updateOpportunity: async (opportunityId: string, data: Partial<Opportunity>): Promise<Opportunity> => {
    return api.put(`/industry/opportunities/${opportunityId}`, data);
  },

  deleteOpportunity: async (opportunityId: string): Promise<void> => {
    return api.delete(`/industry/opportunities/${opportunityId}`);
  },

  getApplications: async (opportunityId?: string): Promise<PaginatedResponse<OpportunityApplication>> => {
    const params = opportunityId ? { opportunityId } : {};
    return api.get('/industry/applications', { params });
  },

  getApplicationById: async (applicationId: string): Promise<OpportunityApplication> => {
    return api.get(`/industry/applications/${applicationId}`);
  },

  updateApplicationStatus: async (applicationId: string, status: string): Promise<OpportunityApplication> => {
    return api.put(`/industry/applications/${applicationId}/status`, { status });
  },

  getMatchedStudents: async (opportunityId: string): Promise<any[]> => {
    return api.get(`/industry/opportunities/${opportunityId}/matched-students`);
  },
};

export default industryService;