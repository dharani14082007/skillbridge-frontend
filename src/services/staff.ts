import api from './api';
import { StaffProfile, Assessment, LearningResource, AssessmentResult } from '@/types';
import { PaginatedResponse, AssessmentFilters, LearningResourceFilters } from '@/types/api';

const staffService = {
  getProfile: async (): Promise<StaffProfile> => {
    return api.get('/staff/profile');
  },

  updateProfile: async (data: Partial<StaffProfile>): Promise<StaffProfile> => {
    return api.put('/staff/profile', data);
  },

  createAssessment: async (assessment: Partial<Assessment>): Promise<Assessment> => {
    return api.post('/staff/assessments', assessment);
  },

  getAssessments: async (filters?: AssessmentFilters): Promise<PaginatedResponse<Assessment>> => {
    return api.get('/staff/assessments', { params: filters });
  },

  updateAssessment: async (assessmentId: string, data: Partial<Assessment>): Promise<Assessment> => {
    return api.put(`/staff/assessments/${assessmentId}`, data);
  },

  deleteAssessment: async (assessmentId: string): Promise<void> => {
    return api.delete(`/staff/assessments/${assessmentId}`);
  },

  getAssessmentResults: async (assessmentId: string): Promise<AssessmentResult[]> => {
    return api.get(`/staff/assessments/${assessmentId}/results`);
  },

  createLearningResource: async (resource: Partial<LearningResource>): Promise<LearningResource> => {
    return api.post('/staff/learning-resources', resource);
  },

  getLearningResources: async (filters?: LearningResourceFilters): Promise<PaginatedResponse<LearningResource>> => {
    return api.get('/staff/learning-resources', { params: filters });
  },

  updateLearningResource: async (resourceId: string, data: Partial<LearningResource>): Promise<LearningResource> => {
    return api.put(`/staff/learning-resources/${resourceId}`, data);
  },

  deleteLearningResource: async (resourceId: string): Promise<void> => {
    return api.delete(`/staff/learning-resources/${resourceId}`);
  },
};

export default staffService;