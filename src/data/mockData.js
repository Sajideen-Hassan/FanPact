export const sports = [
    { id: 'football', name: 'Football', image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000&auto=format&fit=crop' },
    { id: 'basketball', name: 'Basketball', image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800' },
    { id: 'cricket', name: 'Cricket', image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1000&auto=format&fit=crop' },
];

export const schools = [
    { id: 'elite-high', name: 'Elite High', sportId: 'football', image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop' },
    { id: 'champion-academy', name: 'Champion Academy', sportId: 'basketball', image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop' },
];

export const teams = [
    { id: 'tigers', name: 'Tigers', schoolId: 'elite-high', logo: '🐯' },
    { id: 'hawks', name: 'Hawks', schoolId: 'champion-academy', logo: '🦅' },
    { id: 'dragons', name: 'Dragons', schoolId: 'elite-high', logo: '🐉' },
];

export const players = [
    {
        id: 'john-doe',
        name: 'John Doe',
        teamId: 'tigers',
        position: 'Quarterback',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop',
        bio: 'Star quarterback with a record-breaking season. Known for his precision passing and leadership.',
        sponsors: ['Nike', 'Gatorade'],
        routine: [
            { time: '06:00 AM', activity: 'Morning Run' },
            { time: '08:00 AM', activity: 'Gym Session' },
            { time: '02:00 PM', activity: 'Team Practice' },
            { time: '07:00 PM', activity: 'Film Study' },
        ]
    },
    {
        id: 'emma-lee',
        name: 'Emma Lee',
        teamId: 'hawks',
        position: 'Point Guard',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop',
        bio: 'Fast and agile point guard. Leads the league in assists.',
        sponsors: ['Adidas', 'Red Bull'],
        routine: [
            { time: '05:30 AM', activity: 'Yoga' },
            { time: '09:00 AM', activity: 'Shooting Drills' },
            { time: '03:00 PM', activity: 'Scrimmage' },
        ]
    }
];

export const productCategories = [
    { id: 'apparel', name: 'Apparel & Footwear', icon: '👕', image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1000' },
    { id: 'electronics', name: 'Electronics & Tech', icon: '📱', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=1000' },
    { id: 'toys', name: 'Toys & Games', icon: '🎮', image: 'https://images.unsplash.com/photo-1531644330581-38c46001847c?q=80&w=1000' },
    { id: 'home', name: 'Home & Kitchen', icon: '🏠', image: 'https://images.unsplash.com/photo-1556911220-e15224bbaf47?q=80&w=1000' },
];

export const items = [
    {
        id: 'jd-shoes',
        playerId: 'john-doe',
        categoryId: 'apparel',
        name: 'Match Worn Cleats',
        price: 250,
        image: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=1000&auto=format&fit=crop',
        description: 'Authentic cleats worn during the championship game.'
    },
    {
        id: 'jd-jersey',
        playerId: 'john-doe',
        categoryId: 'apparel',
        name: 'Signed Jersey',
        price: 150,
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop',
        description: 'Official jersey signed by John Doe.'
    },
    {
        id: 'el-ball',
        playerId: 'emma-lee',
        categoryId: 'toys',
        name: 'Game Ball',
        price: 100,
        image: 'https://images.unsplash.com/photo-1519861155730-0b5fbf0dd889?q=80&w=1000&auto=format&fit=crop',
        description: 'Basketball used in the final match.'
    },
    {
        id: 'nylon-coat',
        categoryId: 'apparel',
        name: 'Bordeaux Nylon Coat',
        price: 129,
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000',
        description: 'Premium bordeaux nylon coat, stylish and durable.'
    },
    {
        id: 'cotton-jacket',
        categoryId: 'apparel',
        name: 'Cotton Full Length Jacket',
        price: 110,
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1000',
        description: 'Comfortable full length cotton jacket for all seasons.'
    },
    {
        id: 'tech-bundle',
        categoryId: 'electronics',
        name: 'FanPact Tech Bundle',
        price: 199,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000',
        description: 'Includes premium headphones and mobile accessories.'
    }
];

