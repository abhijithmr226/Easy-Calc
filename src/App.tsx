import { HistoryProvider } from './components/history/HistoryContext';
import Calculator from './components/Calculator';

function App() {
  return (
    <HistoryProvider>
      <Calculator />
    </HistoryProvider>
  );
}

export default App;