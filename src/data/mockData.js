export const sports = [
    { id: 'football', name: 'Football', image: 'https://via.placeholder.com/400x300/FF4C29/FFFFFF?text=Football' },
    { id: 'basketball', name: 'Basketball', image: 'https://via.placeholder.com/400x300/FFD700/000000?text=Basketball' },
    { id: 'cricket', name: 'Cricket', image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1000&auto=format&fit=crop' },
];

export const schools = [
    { id: 'elite-high', name: 'Elite High', sportId: 'football', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop' },
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

export const items = [
    {
        id: 'jd-shoes',
        playerId: 'john-doe',
        name: 'Match Worn Cleats',
        price: 250,
        image: 'https://images.unsplash.com/photo-1560769629-975e13f01b3a?q=80&w=1000&auto=format&fit=crop',
        description: 'Authentic cleats worn during the championship game.'
    },
    {
        id: 'jd-jersey',
        playerId: 'john-doe',
        name: 'Signed Jersey',
        price: 150,
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop',
        description: 'Official jersey signed by John Doe.'
    },
    {
        id: 'el-ball',
        playerId: 'emma-lee',
        name: 'Game Ball',
        price: 100,
        image: 'https://images.unsplash.com/photo-1519861531473-920026393112?q=80&w=1000&auto=format&fit=crop',
        description: 'Basketball used in the final match.'
    }
];
