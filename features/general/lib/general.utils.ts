import { PeriodT } from "./general.types";

export const getPeriodValue =
  (period: PeriodT): { word: string; period: string } => {
    switch (period) {
      case "daily": {
        return {
          word: "Day",
          period: "Daily"
        }
      }

      case "weekly": {
        return {
          word: "Week",
          period: "Weekly"
        }
      }

      case "monthly": {
        return {
          word: "Month",
          period: "Monthly"
        }
      }

      case "annual": {
        return {
          word: "Year",
          period: "Annual"
        }
      }

      default: {
        return {
          word: "",
          period: ""
        }
      }
    }
  }

// Date ⬇️

export const getCurrentMonth = () => {
  return new Date().toString().split(" ")[1];
}

export const getCurrentDay = (date?: string) => {
  return new Date(date || new Date()).toString().split(" ").slice(0, 3).join(" ");
}

export const getFutureDateByDate = (dayCount: number) => {
  return new Date(new Date().getTime() + dayCount * 86400000);
}

export const getRangeDateByDay = (dayCount: number) => {
  return `${getCurrentDay()} - ${getCurrentDay(getFutureDateByDate(dayCount).toString())}`;
}

export const getCurrentWeek = () => {
  let weekCount = 1;

  const day = new Date().getDate();

  if (day > 7) {
    if (day <= 14) {
      weekCount = 2;
    }

    if (day > 14 && day <= 21) {
      weekCount = 3;
    }

    if (day > 21) {
      weekCount = 4;
    }
  }

  return `${getCurrentMonth()}, Week ${weekCount}`
}

export const getCurrentYear = () => {
  return new Date().getFullYear();
}

export const getDetailDate = (date: string) => {
  return `${getCurrentDay(date)}, ${new Date(date).getHours().toString().padStart(2, "0")}:${new Date(date).getMinutes().toString().padStart(2, "0")}`
}