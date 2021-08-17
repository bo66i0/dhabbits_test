import React from 'react';
import FolderSystem from './components/FolderSystem';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={ queryClient }>
      <FolderSystem />
    </QueryClientProvider>
  );
}

export default App;
