
// Mock user data
export const userData = {
  id: "user-123",
  name: "Alex Johnson",
  email: "alex@example.com",
  age: 32,
  weight: 68, // kg
  height: 172, // cm
  dietPreferences: ["Plant-based", "Low sugar"],
  allergies: ["Peanuts", "Shellfish"],
  goals: ["Improve gut health", "Increase energy", "Better sleep"],
  memberSince: "2023-09-01",
  profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
};

// Mock wearable data
export const wearableData = {
  sleep: {
    avgDuration: 7.2, // hours
    qualityScore: 82, // percentage
    deepSleepPercentage: 28,
    remSleepPercentage: 22,
    lightSleepPercentage: 50,
    weeklyData: [6.8, 7.3, 7.5, 6.9, 7.8, 7.1, 7.2], // Last 7 days, in hours
  },
  activity: {
    dailySteps: 8742,
    activeMinutes: 48,
    caloriesBurned: 2340,
    weeklySteps: [9200, 8350, 7500, 10200, 6800, 9100, 8742], // Last 7 days
  },
  heartRate: {
    current: 72, // bpm
    resting: 62, // bpm
    max: 142, // bpm
    min: 58, // bpm
    hourlyData: [68, 72, 75, 79, 82, 78, 74, 72, 70, 68, 66, 64, 62, 63, 68, 73, 76, 78, 75, 72, 70, 67, 65, 64], // 24 hours
  },
  stress: {
    dailyScore: 32, // 1-100 where lower is better
    weeklyScores: [28, 35, 42, 30, 25, 29, 32], // Last 7 days
  }
};

// Mock microbiome data
export const microbiomeData = {
  diversity: 72, // percentage, gut microbiome diversity score
  keyBacteria: [
    { name: "Bifidobacterium", percentage: 12, status: "optimal", description: "Important for digestive health" },
    { name: "Lactobacillus", percentage: 8, status: "optimal", description: "Supports immune function" },
    { name: "Akkermansia", percentage: 3, status: "low", description: "Associated with metabolic health" },
    { name: "Bacteroides", percentage: 26, status: "high", description: "Common in Western diets" },
    { name: "Prevotella", percentage: 15, status: "optimal", description: "Associated with plant-rich diets" }
  ],
  recommendations: [
    { food: "Fermented foods", reason: "Increase Lactobacillus populations" },
    { food: "Prebiotic fiber", reason: "Support Bifidobacterium growth" },
    { food: "Polyphenol-rich foods", reason: "Enhance Akkermansia abundance" }
  ],
  lastUpdated: "2023-11-15"
};

// Mock meal plans
export const mealPlans = {
  today: {
    breakfast: {
      meal: "Greek yogurt with berries and flaxseeds",
      nutritionalValue: {
        calories: 320,
        protein: 22,
        carbs: 30,
        fat: 14,
        fiber: 8
      },
      benefits: ["Supports gut diversity", "Rich in probiotics", "Anti-inflammatory"]
    },
    lunch: {
      meal: "Quinoa bowl with roasted vegetables and chickpeas",
      nutritionalValue: {
        calories: 450,
        protein: 18,
        carbs: 65,
        fat: 15,
        fiber: 14
      },
      benefits: ["Prebiotic fiber-rich", "Supports microbiome diversity", "Balanced macronutrients"]
    },
    dinner: {
      meal: "Grilled salmon with sweet potato and sautéed greens",
      nutritionalValue: {
        calories: 520,
        protein: 38,
        carbs: 42,
        fat: 22,
        fiber: 9
      },
      benefits: ["Omega-3 fatty acids", "Anti-inflammatory", "Supports metabolic health"]
    },
    snacks: [
      {
        name: "Apple with almond butter",
        benefits: ["Prebiotic fiber", "Healthy fats"]
      },
      {
        name: "Kefir drink",
        benefits: ["Probiotic-rich", "Supports gut lining"]
      }
    ]
  },
  weeklyPlan: [
    // Array of daily meal plans for the week
    // (similar structure to 'today', but simplified for brevity)
    { day: "Monday", completed: true, complianceScore: 90 },
    { day: "Tuesday", completed: true, complianceScore: 85 },
    { day: "Wednesday", completed: true, complianceScore: 95 },
    { day: "Thursday", completed: false, complianceScore: 0 },
    { day: "Friday", completed: false, complianceScore: 0 },
    { day: "Saturday", completed: false, complianceScore: 0 },
    { day: "Sunday", completed: false, complianceScore: 0 }
  ]
};

// Progress data
export const progressData = {
  gutHealth: {
    scores: [65, 67, 70, 72, 75, 74, 78, 82], // Weeks
    dates: ["Oct 1", "Oct 8", "Oct 15", "Oct 22", "Oct 29", "Nov 5", "Nov 12", "Nov 19"]
  },
  energy: {
    scores: [50, 55, 58, 62, 65, 70, 72, 75], // Weeks
    dates: ["Oct 1", "Oct 8", "Oct 15", "Oct 22", "Oct 29", "Nov 5", "Nov 12", "Nov 19"]
  },
  sleep: {
    scores: [60, 62, 65, 68, 72, 75, 78, 80], // Weeks
    dates: ["Oct 1", "Oct 8", "Oct 15", "Oct 22", "Oct 29", "Nov 5", "Nov 12", "Nov 19"]
  },
  weight: {
    data: [70.2, 70.0, 69.5, 69.2, 68.8, 68.5, 68.2, 68.0], // Weeks (in kg)
    dates: ["Oct 1", "Oct 8", "Oct 15", "Oct 22", "Oct 29", "Nov 5", "Nov 12", "Nov 19"]
  }
};

// Health metrics
export const healthMetrics = {
  currentStatus: [
    { name: "Gut Health Score", value: 82, change: "+4", status: "improving" },
    { name: "Energy Level", value: 75, change: "+3", status: "improving" },
    { name: "Sleep Quality", value: 80, change: "+2", status: "improving" },
    { name: "Stress Level", value: 32, change: "-5", status: "improving" }
  ],
  recommendations: [
    "Increase fermented food intake",
    "Add 15 minutes of morning sunlight exposure",
    "Consider supplementing with magnesium before sleep",
    "Add more prebiotic-rich foods like garlic and onions"
  ]
};
