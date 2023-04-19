import {
  useState,
  createContext,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';

const CounterContext = createContext<
  [number, Dispatch<SetStateAction<number>>]
>([0, () => {}]);

const CounterContextProvider = ({ children }: { children: ReactNode }) => (
  <CounterContext.Provider value={useState(0)}>
    {children}
  </CounterContext.Provider>
);

const Container = () => (
  <div>
    <AddOneButton />
  </div>
);

const AddOneButton = () => {
  const [, setCounter] = useContext(CounterContext);
  return (
    <div>
      <button onClick={() => setCounter((v) => v + 1)}>Add One</button>
    </div>
  );
};

const Counter = () => {
  const [counter] = useContext(CounterContext);
  return <div>Counter: {counter}</div>;
};

function CounterUseState() {
  return (
    <CounterContextProvider>
      <Container />
      <Counter />
    </CounterContextProvider>
  );
}

export default function CounterUseStatePage() {
  return (
    <div>
      <CounterUseState />
      <CounterUseState />
      <CounterUseState />
      <CounterUseState />
    </div>
  );
}
