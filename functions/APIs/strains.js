exports.getAllStrains = (req, res) => {
    strains = [
        {
            'id': '1',
            'name': 'OG Kush',
            'strain': 'Hybrid',
            'feelings': ['Happy', 'Relaxed', 'Euphoric', 'Uplifted']
        },
        {
            'id': '2',
            'name': 'Northern Lights',
            'strain': 'Indica',
            'feelings': ['Relaxed', 'Happy', 'Euphoric', 'Sleepy']
        },
        {
            'id': '3',
            'name': 'Jack Herer',
            'strain': 'Sativa',
            'feelings': ['Happy', 'Uplifted', 'Euphoric', 'Energetic']
        }
    ]
    return res.json(strains)
}