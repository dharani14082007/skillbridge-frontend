export const USER_ROLES = {
  STUDENT: 'student',
  INDUSTRY: 'industry',
  STAFF: 'staff',
} as const;

export const OPPORTUNITY_TYPES = {
  INTERNSHIP: 'internship',
  JOB: 'job',
  LIVE_PROJECT: 'live_project',
  TRAINING: 'training',
} as const;

export const SKILL_LEVELS = {
  BEGINNER: 'beginner',
  INTERMEDIATE: 'intermediate',
  ADVANCED: 'advanced',
  EXPERT: 'expert',
} as const;

export const SKILL_CATEGORIES = {
  TECHNICAL: 'technical',
  SOFT: 'soft',
} as const;

export const PROFICIENCY_COLORS = {
  beginner: 'bg-blue-100 text-blue-800',
  intermediate: 'bg-yellow-100 text-yellow-800',
  advanced: 'bg-orange-100 text-orange-800',
  expert: 'bg-green-100 text-green-800',
} as const;

export const OPPORTUNITY_TYPE_LABELS = {
  internship: 'Internship',
  job: 'Job',
  live_project: 'Live Project',
  training: 'Training Program',
} as const;

export const APPLICATION_STATUS = {
  APPLIED: 'applied',
  SHORTLISTED: 'shortlisted',
  REJECTED: 'rejected',
  ACCEPTED: 'accepted',
} as const;

export const APPLICATION_STATUS_COLORS = {
  applied: 'bg-blue-100 text-blue-800',
  shortlisted: 'bg-purple-100 text-purple-800',
  rejected: 'bg-red-100 text-red-800',
  accepted: 'bg-green-100 text-green-800',
} as const;