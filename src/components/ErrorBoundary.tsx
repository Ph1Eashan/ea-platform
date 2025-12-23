import { Component, type ReactNode } from "react";
import { ConfigValidationError } from "../core/errors";

type Props = {
  children: ReactNode;
};

type State = {
  error: Error | null;
};

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  render() {
    const { error } = this.state;

    if (!error) {
      return this.props.children;
    }

    if (error instanceof ConfigValidationError) {
      return (
        <div style={{ padding: 24, fontFamily: "monospace" }}>
          <h2>❌ Invalid Page Configuration</h2>
          <pre>{JSON.stringify(error.details, null, 2)}</pre>
        </div>
      );
    }

    return (
      <div style={{ padding: 24 }}>
        <h2>Unexpected Error</h2>
        <pre>{error.message}</pre>
      </div>
    );
  }
}
