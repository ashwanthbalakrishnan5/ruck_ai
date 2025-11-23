export const mockProjects = [
  {
    id: 1,
    name: "Oak Street Townhomes",
    location: "Tempe, AZ",
    status: "IN PROGRESS",
    statusColor: "green",
    progress: 68,
    budget: 847000,
    spent: 576000,
    startDate: "Jan 15, 2025",
    endDate: "May 30, 2025",
    phase: "Framing & Drywall",
    phaseColor: "amber",
    predictionsReady: 2,
    aiStatus: null,
    aiAccuracy: 94,
    timeSaved: 18,
    moneySaved: 4250,
  },
  {
    id: 2,
    name: "Desert Ridge Commercial",
    location: "Phoenix, AZ",
    status: "PLANNING",
    statusColor: "blue",
    progress: 23,
    budget: 1200000,
    spent: 276000,
    startDate: "Feb 1, 2025",
    endDate: "Aug 15, 2025",
    phase: "Foundation",
    phaseColor: "blue",
    predictionsReady: 0,
    aiStatus: "AI analyzing blueprints...",
    aiAccuracy: null,
    timeSaved: 0,
    moneySaved: 0,
  },
  {
    id: 3,
    name: "Scottsdale Renovation",
    location: "Scottsdale, AZ",
    status: "COMPLETING",
    statusColor: "amber",
    progress: 92,
    budget: 340000,
    spent: 318000,
    startDate: "Nov 10, 2024",
    endDate: "Mar 5, 2025",
    phase: "Final Finishes",
    phaseColor: "amber",
    predictionsReady: 1,
    aiStatus: null,
    aiAccuracy: 91,
    timeSaved: 29,
    moneySaved: 8597,
  },
];

// ROI-focused dashboard stats
export const dashboardStats = {
  // Time Metrics
  hoursSavedThisMonth: 47,
  hoursLastMonth: 38,
  hoursTrend: '+24%',

  // Money Metrics
  moneySavedThisMonth: 12847,
  moneyLastMonth: 10450,
  moneyTrend: '+23%',

  // Stockout Prevention
  stockoutsPrevented: 12,
  stockoutsLastQuarter: 8,
  stockoutsTrend: '+50%',

  // AI Accuracy
  aiAccuracy: 94,
  accuracyLastMonth: 88,
  accuracyTrend: '+6%',

  // Active Projects (secondary)
  activeProjects: 3,

  // Orders
  ordersThisMonth: 24,
  ordersDeliveredOnTime: 23,
  deliveryRate: 96,
};

// AI Learning Data
export const aiLearningData = {
  projectsAnalyzed: 47,
  blueprintsProcessed: 156,
  materialsTracked: 2340,
  accuracyOverTime: [
    { month: 'Jun', accuracy: 72 },
    { month: 'Jul', accuracy: 78 },
    { month: 'Aug', accuracy: 82 },
    { month: 'Sep', accuracy: 86 },
    { month: 'Oct', accuracy: 88 },
    { month: 'Nov', accuracy: 94 },
  ],
};
