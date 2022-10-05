export interface Route {
  name: string;
  route: string;
}

export const routes: Route[] = [
  {
    name: "Home",
    route: "/home",
  },
  {
    name: "Bmi calculator",
    route: "/calculators/body-calculators/bmi",
  },
  {
    name: "Ideal weight calculator",
    route: "/calculators/body-calculators/ideal-weight",
  },
  {
    name: "Calorie intake calculator",
    route: "/calculators/body-calculators/calorie-intake",
  },
  {
    name: "Jumping rope calculator",
    route: "/calculators/activity-calculators/jumping-rope",
  },
  {
    name: "Running calculator",
    route: "/calculators/activity-calculators/running",
  },
  {
    name: "Track calories",
    route: "/track-calories",
  },
  {
    name: "My goal",
    route: "/my-goal",
  },
  {
    name: "Settings",
    route: "/settings/account",
  },
  {
    name: "Check calories",
    route: "/check-calories",
  },
  {
    name: "Security",
    route: "/settings/security",
  },
  {
    name: "Preferences",
    route: "/settings/preferences",
  },
];
