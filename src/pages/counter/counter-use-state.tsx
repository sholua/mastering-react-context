import { Dispatch, ReactNode, SetStateAction, useState } from 'react';

const Container = ({ children }: { children: ReactNode }) => (
  <div>{children}</div>
);

const AddOneButton = ({
  setCounter,
}: {
  setCounter: Dispatch<SetStateAction<number>>;
}) => (
  <div>
    <button onClick={() => setCounter((v) => v + 1)}>Add One</button>
  </div>
);

const Counter = ({ counter }: { counter: number }) => (
  <div>Counter: {counter}</div>
);

export default function CounterUseState() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <Container>
        <AddOneButton setCounter={setCounter} />
      </Container>
      <Counter counter={counter} />
    </div>
  );
}
