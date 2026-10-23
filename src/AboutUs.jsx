import { Leaf, Heart, Sun, Sprout } from 'lucide-react';

export default function AboutUs() {
  return (
    <main style={{ maxWidth: '1000px', margin: '50px auto', padding: '24px', fontFamily: 'Arial, sans-serif', color: '#24412c' }}>
      <p style={{ color: '#66885c', letterSpacing: '3px' }}>OUR STORY</p>
      <h1>Helping your world grow.</h1>
      <p>At Paradise Nursery, we believe a little greenery can transform a house into a home.</p>
      <section style={{ background: '#f0f4e9', padding: '28px', borderRadius: '12px', marginTop: '28px' }}>
        <h2>Plants for every kind of space</h2>
        <p>We make it easier to bring nature into your everyday life. From easy-care favourites to statement greenery, our collection helps beginners and experienced plant parents alike.</p>
        <p>Our goal is simple: healthy plants, helpful guidance, and a greener home, one leaf at a time.</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', marginTop: '24px' }}>
          <div><Heart /> <h3>Picked with care</h3><p>Thoughtfully selected plants.</p></div>
          <div><Sun /> <h3>Simple guidance</h3><p>Care tips for growing confidence.</p></div>
          <div><Sprout /> <h3>Grow sustainably</h3><p>Make room for a greener future.</p></div>
        </div>
      </section>
    </main>
  );
}
