import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/page'));
const ServicesPage = lazy(() => import('../pages/services/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const WhyUsPage = lazy(() => import('../pages/why-us/page'));
const ContactPage = lazy(() => import('../pages/contact/page'));
const NotFound = lazy(() => import('../pages/NotFound'));

// Service detail pages
const WorkshopsTrainingPage = lazy(() => import('../pages/services/workshops-training/page'));
const SeminarsConferencesPage = lazy(() => import('../pages/services/seminars-conferences/page'));
const GrantWritingPage = lazy(() => import('../pages/services/grant-writing/page'));
const CapacityBuildingPage = lazy(() => import('../pages/services/capacity-building/page'));
const CoachingLifeSkillsPage = lazy(() => import('../pages/services/coaching-life-skills/page'));
const StrategicPlanningPage = lazy(() => import('../pages/services/strategic-planning/page'));
const JobSearchPage = lazy(() => import('../pages/services/job-search/page'));
const BusinessAnalysisPage = lazy(() => import('../pages/services/business-analysis/page'));
const SalesMarketingPage = lazy(() => import('../pages/services/sales-marketing/page'));
const RacialSocialEquityPage = lazy(() => import('../pages/services/racial-social-equity/page'));
const BusinessRegistrationPage = lazy(() => import('../pages/services/business-registration/page'));
const TranslationPage = lazy(() => import('../pages/services/translation/page'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/services',
    element: <ServicesPage />,
  },
  {
    path: '/services/workshops-training',
    element: <WorkshopsTrainingPage />,
  },
  {
    path: '/services/seminars-conferences',
    element: <SeminarsConferencesPage />,
  },
  {
    path: '/services/grant-writing',
    element: <GrantWritingPage />,
  },
  {
    path: '/services/capacity-building',
    element: <CapacityBuildingPage />,
  },
  {
    path: '/services/coaching-life-skills',
    element: <CoachingLifeSkillsPage />,
  },
  {
    path: '/services/strategic-planning',
    element: <StrategicPlanningPage />,
  },
  {
    path: '/services/job-search',
    element: <JobSearchPage />,
  },
  {
    path: '/services/business-analysis',
    element: <BusinessAnalysisPage />,
  },
  {
    path: '/services/sales-marketing',
    element: <SalesMarketingPage />,
  },
  {
    path: '/services/racial-social-equity',
    element: <RacialSocialEquityPage />,
  },
  {
    path: '/services/business-registration',
    element: <BusinessRegistrationPage />,
  },
  {
    path: '/services/translation',
    element: <TranslationPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/why-us',
    element: <WhyUsPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
