import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';

// Pages
import { LandingPage } from '@/pages/Landing';
import { LoginPage } from '@/pages/auth/Login';
import { RegisterPage } from '@/pages/auth/Register';

// Student Pages
import { StudentDashboard } from '@/pages/student/Dashboard';
import { StudentSkills } from '@/pages/student/Skills';
import { StudentSkillGaps } from '@/pages/student/SkillGaps';
import { StudentOpportunities } from '@/pages/student/Opportunities';
import { StudentPortfolio } from '@/pages/student/Portfolio';

// Industry Pages
import { IndustryDashboard } from '@/pages/industry/Dashboard';
import { IndustryOpportunities } from '@/pages/industry/Opportunities';
import { IndustryApplications } from '@/pages/industry/Applications';

// Staff Pages
import { StaffDashboard } from '@/pages/staff/Dashboard';
import { StaffAssessments } from '@/pages/staff/Assessments';
import { StaffLearningResources } from '@/pages/staff/LearningResources';

// ProtectedRoute Component
interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requiredRole }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (requiredRole && user?.role !== requiredRole) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

function App() {
  const { isAuthenticated } = useAuthStore();

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* Student Routes */}
            <Route
              path="/student/dashboard"
              element={
                <ProtectedRoute requiredRole="student">
                  <StudentDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/student/skills"
              element={
                <ProtectedRoute requiredRole="student">
                  <StudentSkills />
                </ProtectedRoute>
              }
            />
            <Route
              path="/student/skill-gaps"
              element={
                <ProtectedRoute requiredRole="student">
                  <StudentSkillGaps />
                </ProtectedRoute>
              }
            />
            <Route
              path="/student/opportunities"
              element={
                <ProtectedRoute requiredRole="student">
                  <StudentOpportunities />
                </ProtectedRoute>
              }
            />
            <Route
              path="/student/portfolio"
              element={
                <ProtectedRoute requiredRole="student">
                  <StudentPortfolio />
                </ProtectedRoute>
              }
            />

            {/* Industry Routes */}
            <Route
              path="/industry/dashboard"
              element={
                <ProtectedRoute requiredRole="industry">
                  <IndustryDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/industry/opportunities"
              element={
                <ProtectedRoute requiredRole="industry">
                  <IndustryOpportunities />
                </ProtectedRoute>
              }
            />
            <Route
              path="/industry/applications"
              element={
                <ProtectedRoute requiredRole="industry">
                  <IndustryApplications />
                </ProtectedRoute>
              }
            />

            {/* Staff Routes */}
            <Route
              path="/staff/dashboard"
              element={
                <ProtectedRoute requiredRole="staff">
                  <StaffDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/staff/assessments"
              element={
                <ProtectedRoute requiredRole="staff">
                  <StaffAssessments />
                </ProtectedRoute>
              }
            />
            <Route
              path="/staff/learning-resources"
              element={
                <ProtectedRoute requiredRole="staff">
                  <StaffLearningResources />
                </ProtectedRoute>
              }
            />

            {/* Catch all */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;