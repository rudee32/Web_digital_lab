import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import Home from '@/pages/Home';
import PusatKeunggulan from '@/pages/PusatKeunggulan';
import LabDetail from '@/pages/LabDetail';
import ArsipAkademik from '@/pages/ArsipAkademik';
import ResourceDetail from '@/pages/ResourceDetail';
import GaleriLab from '@/pages/GaleriLab';

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pusat-keunggulan" element={<PusatKeunggulan />} />
          <Route path="/pusat-keunggulan/:id" element={<LabDetail />} />
          <Route path="/arsip-akademik" element={<ArsipAkademik />} />
          <Route path="/arsip-akademik/:id" element={<ResourceDetail />} />
          <Route path="/galeri-lab" element={<GaleriLab />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App
