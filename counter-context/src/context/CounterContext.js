import { createContext } from "react";

export const CounterContext = createContext(0);

// OR - https://www.youtube.com/watch?v=JQVBGtZMqgU&t=1337s     - 50th Min

// export const CounterProvider = CounterContext.Provider(0);

// export default function useCounter() {
//     return useContext(CounterContext);
// }