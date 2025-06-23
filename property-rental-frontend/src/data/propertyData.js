import project1 from '../assets/project_img_1.jpg';
import project2 from '../assets/project_img_2.jpg';
import project3 from '../assets/project_img_3.jpg';

export const propertyData = [
  {
    id: 'apt1',
    name: 'Luxury Apartment',
    type: 'Apartment',
    location: 'Mumbai Central',
    price: 15000,
    bedrooms: 3,
    bathrooms: 2,
    amenities: ['Swimming Pool', 'Gym', 'Parking', '24/7 Security'],
    description: 'Modern luxury apartment with stunning city views. Features high-end finishes, spacious living areas, and premium amenities.',
    maxGuests: 6,
    images: [
      project1,
      project2,
      project3
    ],
    features: [
      'Floor-to-ceiling windows',
      'Modern kitchen with premium appliances',
      'Master suite with walk-in closet',
      'Large balcony with city views',
      'Smart home features'
    ],
    area: '1800 sq ft',
    furnished: 'Fully Furnished',
    availability: 'Immediate'
  },
  {
    id: 'villa1',
    name: 'Beachfront Villa',
    type: 'Villa',
    location: 'Goa',
    price: 25000,
    bedrooms: 4,
    bathrooms: 3,
    amenities: ['Private Beach', 'Garden', 'BBQ Area', 'Pool'],
    description: 'Stunning villa with direct beach access and panoramic ocean views.',
    maxGuests: 8,
    images: [
      project2,
      project3,
      project1
    ],
    features: [
      'Private beach access',
      'Infinity pool',
      'Outdoor kitchen',
      'Landscaped garden',
      'Entertainment area'
    ],
    area: '3500 sq ft',
    furnished: 'Fully Furnished',
    availability: 'Immediate'
  },
  {
    id: 'house1',
    name: 'Mountain Cottage',
    type: 'House',
    location: 'Shimla',
    price: 12000,
    bedrooms: 2,
    bathrooms: 2,
    amenities: ['Mountain View', 'Fireplace', 'Terrace', 'Parking'],
    description: 'Cozy cottage in the mountains with breathtaking valley views.',
    maxGuests: 4,
    images: [
      project3,
      project1,
      project2
    ],
    features: [
      'Panoramic mountain views',
      'Stone fireplace',
      'Wooden interiors',
      'Heated floors',
      'Private hiking trail access'
    ],
    area: '1200 sq ft',
    furnished: 'Fully Furnished',
    availability: 'Immediate'
  },
  {
    id: 'penthouse1',
    name: 'Luxury Penthouse',
    type: 'Penthouse',
    location: 'Delhi',
    price: 35000,
    bedrooms: 4,
    bathrooms: 4,
    amenities: ['Rooftop Pool', 'Private Elevator', 'Home Theater', 'Wine Cellar'],
    description: 'Exclusive penthouse with panoramic city views and world-class amenities.',
    maxGuests: 8,
    images: [
      project1,
      project2,
      project3
    ],
    features: [
      'Private rooftop terrace',
      'Smart home automation',
      'Gourmet kitchen',
      'Home office',
      'Staff quarters'
    ],
    area: '4000 sq ft',
    furnished: 'Ultra Luxury Furnished',
    availability: 'Available next week'
  }
];
