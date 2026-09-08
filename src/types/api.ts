import { Opportunity, Assessment, LearningResource } from './index';

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface FilterOptions {
  page?: number;
  limit?: number;
  sort?: string;
  search?: string;
  [key: string]: any;
}

export interface OpportunityFilters extends FilterOptions {
  type?: string;
  location?: string;
  minSalary?: number;
  maxSalary?: number;
  skills?: string[];
}

export interface AssessmentFilters extends FilterOptions {
  skillId?: string;
  difficulty?: string;
  category?: string;
}

export interface LearningResourceFilters extends FilterOptions {
  skillId?: string;
  type?: string;
  difficulty?: string;
}