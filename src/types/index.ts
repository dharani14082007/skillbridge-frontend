// User Types
export type UserRole = 'student' | 'industry' | 'staff';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  profileImage?: string;
  createdAt: string;
}

// Student Types
export interface StudentProfile extends User {
  role: 'student';
  college?: string;
  department?: string;
  year?: number;
  cgpa?: number;
  bio?: string;
  skills?: Skill[];
  certifications?: Certification[];
  internships?: InternshipApplication[];
}

// Industry Types
export interface IndustryProfile extends User {
  role: 'industry';
  companyName: string;
  companySize?: string;
  industry?: string;
  website?: string;
  hrName?: string;
  hrEmail?: string;
  hrPhone?: string;
}

// Staff Types
export interface StaffProfile extends User {
  role: 'staff';
  college: string;
  department: string;
  designation?: string;
}

// Skill Types
export interface Skill {
  id: string;
  name: string;
  category: 'technical' | 'soft';
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  endorsements?: number;
}

// Assessment Types
export interface Assessment {
  id: string;
  title: string;
  description: string;
  skillId: string;
  duration: number;
  totalQuestions: number;
  difficulty: 'easy' | 'medium' | 'hard';
  createdBy: string;
}

export interface AssessmentResult {
  id: string;
  studentId: string;
  assessmentId: string;
  score: number;
  maxScore: number;
  percentage: number;
  completedAt: string;
}

// Skill Gap Types
export interface SkillGap {
  id: string;
  studentId: string;
  skillId: string;
  currentLevel: number;
  requiredLevel: number;
  gap: number;
}

// Learning Resource Types
export interface LearningResource {
  id: string;
  title: string;
  description: string;
  type: 'course' | 'certification' | 'workshop' | 'training';
  provider?: string;
  skillIds: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration?: number;
  link?: string;
  createdAt: string;
}

// Certification Types
export interface Certification {
  id: string;
  name: string;
  provider: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
}

// Opportunity Types
export interface Opportunity {
  id: string;
  title: string;
  description: string;
  type: 'internship' | 'job' | 'live_project' | 'training';
  companyId: string;
  companyName: string;
  requiredSkills: string[];
  experienceLevel?: string;
  location?: string;
  duration?: string;
  stipend?: string;
  salary?: string;
  posted_at: string;
  deadline?: string;
  status: 'active' | 'closed' | 'archived';
}

// Application Types
export interface OpportunityApplication {
  id: string;
  studentId: string;
  opportunityId: string;
  appliedAt: string;
  status: 'applied' | 'shortlisted' | 'rejected' | 'accepted';
  matchScore?: number;
  skillGaps?: SkillGap[];
}

export interface InternshipApplication extends OpportunityApplication {
  startDate?: string;
  endDate?: string;
  mentor?: string;
  feedback?: string;
}

// Career Portfolio Types
export interface CareerPortfolio {
  id: string;
  studentId: string;
  bio: string;
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  certifications: Certification[];
  achievements: Achievement[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  type: 'internship' | 'job' | 'project';
  startDate: string;
  endDate?: string;
  description: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  imageUrl?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
}

// Auth Types
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  token: string;
  refreshToken?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}