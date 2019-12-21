type Saga = import('redux-saga').Saga;
type PayloadAction = import('@reduxjs/toolkit').PayloadAction;

declare function mockComponent(componentName: string): (props: any) => JSX.Element;

type Dispatched = Array<PayloadAction<any>>;
type Emit = (action: PayloadAction<any>) => void;
declare function recordSaga(saga: Saga, initialAction?: PayloadAction<any>): Promise<{dispatched: Dispatched; emit: Emit}>;
