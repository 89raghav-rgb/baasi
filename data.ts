export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  badge: string;
  image: string;
  size: string;
  soakTime: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'p_alphonso',
    title: '01 / The Alphonso & Cardamom Soak',
    description: 'Real ratnagiri mango pulp folded into coconut-soaked oats, cracked cardamom, and toasted melon seeds.',
    price: 249,
    badge: 'NO ADDED SUGAR',
    image: 'https://images.unsplash.com/photo-1621236166418-8f85f1c50355?auto=format&fit=crop&q=80&w=800&ar=4:5',
    size: '300g Glass Jar',
    soakTime: '10-Hour Soak',
  },
  {
    id: 'p_cacao',
    title: '02 / Roasted Cacao & Hazelnut',
    description: 'Dark roasted cacao nibs infused in oat milk, topped with crushed hazelnuts and a pinch of sea salt.',
    price: 299,
    badge: '14G PROTEIN',
    image: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&q=80&w=800&ar=4:5',
    size: '300g Glass Jar',
    soakTime: '10-Hour Soak',
  },
  {
    id: 'p_berry',
    title: '03 / Wild Berry & Chia',
    description: 'Jammy wild berries smashed into creamy almond milk oats, fortified with expanding chia seeds.',
    price: 279,
    badge: 'HIGH FIBER',
    image: 'https://images.unsplash.com/photo-1490474418585-ba9f527d29dd?auto=format&fit=crop&q=80&w=800&ar=4:5',
    size: '300g Glass Jar',
    soakTime: '10-Hour Soak',
  },
  {
    id: 'p_pistachio',
    title: '04 / Saffron & Pistachio',
    description: 'A luxurious blend of pure saffron steeped overnight, topped with crushed Iranian pistachios.',
    price: 349,
    badge: 'ANTIOXIDANT RICH',
    image: 'https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&q=80&w=800&ar=4:5',
    size: '300g Glass Jar',
    soakTime: '10-Hour Soak',
  },
];
