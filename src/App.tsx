import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { ScrollManager } from '@/components/layout/ScrollManager';
import { Header } from '@/components/layout/Header';
import { Cursor } from '@/components/ui/Cursor';
import { Home } from '@/pages/Home';
import { ProductDetail } from '@/pages/ProductDetail';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <SmoothScroll>
        <ScrollManager />
        <Cursor />
        <div className="noise-overlay" />
        <Header />

        <main className="relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </SmoothScroll>
    </BrowserRouter>
  );
}

export default App;
