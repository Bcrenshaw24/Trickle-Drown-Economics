"use client"
import { createContext, useContext, useReducer, ReactNode } from "react";
import { initial, add_taxes, lower_taxes, infra, education, military, Article, events } from "./articles";
import { Person } from "./cards/people";

type State = {
  month: number;
  money: number[];
  popularity: number[];
  budget: {[key: string]: number}
  news: Article[], 
  events: Article[],
  team: Person[]
};



type Action =
  | { type: "ADVANCE_MONTH" }
  | { type: "APPLY_EVENT"; payload: { moneyChange: number; popularityChange: number } }
  | { type: "REMOVE_EVENT"; payload: { index: number } }
  | { type: "EDIT_BUDGET"; payload: { category: string, amount: number } }
  | { type: "ADD_TEAM"; payload: {member: Person} }
  | { type: "REMOVE_TEAM"; payload: {member: Person} };

type GameContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

function handleBudget(taxes: number, inf: number, edu: number, mil: number): Article[] { 
  const res = []
  if (taxes > 3000) { 
    res.push(add_taxes[Math.floor(Math.random() * add_taxes.length)])
  }
  if (taxes < 2000) { 
    res.push(lower_taxes[Math.floor(Math.random() * lower_taxes.length)])
  }
  if (inf > 3000) { 
    res.push(infra[Math.floor(Math.random() * infra.length)])
  }
  if (edu > 3000) { 
    res.push(education[Math.floor(Math.random() * education.length)])
  }
  if (mil > 3000) { 
    res.push(military[Math.floor(Math.random() * military.length)])
  }
  return res
}

function getRandomArticles(arr: Article[], k: number) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, k);
}

const initialState: State = {
  month: 1,
  money: [10000],
  popularity: [50],
  budget: {"Taxes": 2500, "Infra": 2500, "Edu": 2500, "Mil": 2500}, 
  news: initial,
  events: getRandomArticles(events, 3), 
  team: []
};

// --- Reducer ---
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADVANCE_MONTH":
      const res = handleBudget(state.budget.Taxes, state.budget.Infra, state.budget.Edu, state.budget.Mil)
      let currentMoney = state.money.at(-1) ?? 0;
      let currentPopularity = state.popularity.at(-1) ?? 0;
      for (let i = 0; i < res.length; i++) {
        if ("Money" in res[i].effects) { 
        currentMoney += res[i].effects["Money"]
        }
        if ("Popularity" in res[i].effects) { 
          currentPopularity += res[i].effects["Popularity"]
        }
      } 
       const newMoney = [...state.money, currentMoney];
       const newPopularity = [...state.popularity, currentPopularity]

       let todaysArticles = getRandomArticles(events, 3)

      return { ...state, month: state.month + 1, money: newMoney, popularity: newPopularity, events: [...todaysArticles], news: res, team: state.team };
    case "APPLY_EVENT":
      state.money[state.money.length - 1] = (state.money.at(-1) ?? 0) + action.payload.moneyChange
      state.popularity[state.popularity.length - 1] = (state.popularity.at(-1) ?? 0) + action.payload.popularityChange
      return {
        ...state,
      }; 
    case "REMOVE_EVENT":
    const newEvents = state.events.filter((_, idx) => idx !== action.payload.index);
    return { ...state, events: newEvents };
    case "EDIT_BUDGET":
    const {category, amount} = action.payload
    return { 
      ...state, 
      budget: { 
        ...state.budget, 
       [category]: amount
      }
    }
    case "ADD_TEAM": {
    const { member } = action.payload;
    const newMoney = [...state.money];
    const newPopularity = [...state.popularity];
    const newTeam = [...state.team];
    if (
        "Money" in member.requirements &&
        (state.money.at(-1) ?? 0) >= member.requirements["Money"] &&
        !state.team.includes(member)
    ) {
        newTeam.push(member);
        newMoney[newMoney.length - 1] -= member.requirements["Money"];
        newPopularity[newPopularity.length - 1] += member.effects["Popularity"] ?? 0;
    }

    if (
        "Popularity" in member.requirements &&
        (state.popularity.at(-1) ?? 0) >= member.requirements["Popularity"] &&
        !state.team.includes(member)
    ) {
        newTeam.push(member);
        newMoney[newMoney.length - 1] += member.effects["Money"] ?? 0;
    }

    return { ...state, money: newMoney, popularity: newPopularity, team: newTeam };
}
    case "REMOVE_TEAM": {
    const { member } = action.payload;

    const newPopularity = [...state.popularity];
    const newTeam = [...state.team];

    if (newTeam.includes(member)) {
        if ("Popularity" in member.effects) {
            newPopularity[newPopularity.length - 1] -= member.effects["Popularity"];
        }
        const index = newTeam.indexOf(member);
        newTeam.splice(index, 1);
    }

    return { ...state, popularity: newPopularity, team: newTeam };
}
    default:
      return state;
  }
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export function GameProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
}
