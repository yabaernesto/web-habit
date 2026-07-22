import { Habit } from "./components/habit";

export function App() {
  return (
    <div>
      <Habit completed={2} />
      <Habit completed={3} />
      <Habit completed={6} />
      <Habit completed={10} />
    </div>
  );
}
