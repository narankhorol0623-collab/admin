import type { KpiStat, Lead, Milestone, Project } from "./types";

export const kpiStats: KpiStat[] = [
  {
    id: "revenue",
    label: "Total Revenue",
    value: 4.2,
    prefix: "₮",
    suffix: "B",
    decimals: 1,
    icon: "payments",
    accent: "primary",
    trend: "up",
    trendLabel: "+12.5% vs last month",
  },
  {
    id: "units",
    label: "Total Units",
    value: 1248,
    icon: "domain",
    accent: "secondary",
    trend: "flat",
    trendLabel: "No change",
  },
  {
    id: "sold",
    label: "Sold Units",
    value: 856,
    icon: "check_circle",
    accent: "primaryFixed",
    trend: "up",
    trendLabel: "+24 units this week",
  },
  {
    id: "inProgress",
    label: "In Progress",
    value: 12,
    icon: "construction",
    accent: "tertiary",
    trend: "flat",
    trendLabel: "3 near completion",
  },
];

export const milestones: Milestone[] = [
  {
    id: "m1",
    projectName: "Гүнд Вилла",
    stage: "Суурь тавилт",
    state: "active",
    progress: 85,
  },
  {
    id: "m2",
    projectName: "Сайхан Орон Сууц",
    stage: "Архитектур зураг",
    state: "planning",
    progress: 30,
  },
  {
    id: "m3",
    projectName: "Ирээдүй Цогцолбор",
    stage: "Зөвшөөрөл хүлээгдэж буй",
    state: "hold",
    progress: null,
  },
];

export const projects: Project[] = [
  {
    id: "p1",
    name: "Гүнд Вилла",
    category: "Premium Res",
    location: "Хан-Уул дүүрэг",
    progress: 85,
    status: "Active Selling",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAaTk5IzFW6TSZrmgs7eA1-IhN3h1LgnwpD1cQP4BibkuJqKAlFr4nm1Xq_ca-eDrNPmh9RCPlwUPzuGwvC8RK4meGR4CRkMtcTAldMYrG-sgUX7a8lWdid_0p6S5e8ex3SPGJY2x1Hp7T5hDypEdIeVoJOpr7tFc8MlUsmEJzB6mAhDfyxJOAIEGUsuVSD2Z-xqiayqJ9zTo61WR70S8WZhxX23b21zFOoYQi6MOAMRtu_-bgi7h74",
  },
  {
    id: "p2",
    name: "Сайхан Орон Сууц",
    category: "Standard Res",
    location: "Сүхбаатар дүүрэг",
    progress: 30,
    status: "Pre-sale",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBy2FkHnnaJwg2xMM2f8neXVar1MZNgKGgs_FnlNVD0k8Cajpykx9va70WSlqP3NQo9P2BMJl649JMpHvulck0HoAtviNOxZ_jMwKAS8-1obZubp_GTSlOcIT8RFUBLnIbbWDnGqyr53fHGVlLTlNYH8CAnUQwHZ8KTWuqe8cT8c7UBtW4NdopA5qLaVZ8exWHgbdkGvxDhDtRUvoV9rvITZSX1o6KnurjnCXAg0StDYZdTp0AeMQmS",
  },
  {
    id: "p3",
    name: "Ирээдүй Цогцолбор",
    category: "Mixed Use",
    location: "Баянзүрх дүүрэг",
    progress: 5,
    status: "On Hold",
  },
];

export const leads: Lead[] = [
  {
    id: "l1",
    name: "Б. Бат-Эрдэнэ",
    contact: "9911-XXXX",
    contactIcon: "call",
    project: "Гүнд Вилла",
    stage: "Contacted",
    timeAgo: "2h ago",
    isNew: true,
  },
  {
    id: "l2",
    name: "С. Номин",
    contact: "8810-XXXX",
    contactIcon: "call",
    project: "Сайхан Орон Сууц",
    stage: "Follow-up",
    timeAgo: "5h ago",
    isNew: true,
  },
  {
    id: "l3",
    name: "А. Төгөлдөр",
    contact: "tog**@mail.com",
    contactIcon: "mail",
    project: "Гүнд Вилла",
    stage: "Closed",
    timeAgo: "1d ago",
    isNew: false,
  },
];

// Хялбар шугаман chart-ийн жишээ дата (сар бүрийн харьцангуй индекс)
export const salesTrend = [
  { label: "Jan", value: 20 },
  { label: "Feb", value: 60 },
  { label: "Mar", value: 90 },
];
