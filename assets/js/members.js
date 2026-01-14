const membersData = [
    {
        "id": "member-01",
        "name": "Dr. Pradyumna Kumar Pathak",
        "title": "Principal Investigator",
        "role": "Faculty",
        "photo": "assets/images/members/pathak.jpg",
        "url": "members/member1.html",
        "email": "ppathak@iitmandi.ac.in",
        "contact": {
            "email": "ppathak@iitmandi.ac.in",
            "phone": "01905-237981",
            "office": "School of Basic Sciences, IIT Mandi",
            "socials": {
                "scholar": "https://scholar.google.com/citations?user=dUTvmV8AAAAJ&hl=en",
                "researchgate": "#",
                "linkedin": "#"
            }
        },
        "bio": "Dr. Pathak is a faculty member at IIT Mandi, specializing in Quantum Optics and Information. His research explores light-matter interactions, open quantum systems, and nanophotonics.",
        "education": [
            { "degree": "PhD", "institution": "Physical Research Laboratory, Ahmedabad, India", "year": "2004" },
            { "degree": "MSc (Physics)", "institution": "Agra University, Agra, India", "year": "1998" }
        ],
        "experience": [
            { "role": "Postdoctoral Fellow", "institution": "Queen’s University, Kingston, Ontario, Canada", "period": "07/2008-12/2010" },
            { "role": "Postdoctoral Fellow", "institution": "Chonnam National University, Gwangju, South-Korea", "period": "06/2007–07/2008" },
            { "role": "Postdoctoral Fellow", "institution": "Physical Research Laboratory, Ahmedabad, Gujarat, India", "period": "12/2006-06/2007" },
            { "role": "Research-Associate", "institution": "Oklahoma State University, Stillwater, Oklahoma, USA", "period": "09/2004–12/2006" }
        ],
        "research_areas": [
            "Quantum Optics",
            "Quantum Information",
            "Nanophotonics",
            "Mesoscopic Physics"
        ],
        "selected_publications": [
            "Pathak, P. K., et al. 'Coherent Control in Quantum Dots...', Phys. Rev. B, 2024.",
            "Author, A., Pathak, P. K. 'Another Great Paper', Optics Letters, 2023."
        ],
        // Fallback for list view
        "interests": ["Quantum Optics", "Quantum Information", "Nanophotonics"]
    },
    {
        "id": "member-02",
        "name": "Dinesh Katoch",
        "title": "PhD Scholar",
        "role": "Student",
        "photo": "assets/images/members/member-2.jpg",
        "url": "members/member2.html",
        "tagline": "Exploring Light-Matter Interactions",
        "email": "d24109@students.iitmandi.ac.in",
        "bio": "<p style='margin-bottom: 16px;'>I am a second-year PhD student working on light–matter interaction in cavity-QED platforms. My research involves developing theoretical models and performing numerical simulations to study driven–dissipative quantum dynamics, primarily using Python and QuTiP.</p>",
        "interests": [
            "Open Quantum Systems",
            "Microlasing",
            "Quantum Entanglement"
        ],
        "education": [
            "MSc in Physics (Minor: Mathematics) - HPU, Shimla",
            "BSc in Physics - HPU, Shimla"
        ]
    },
    {
        "id": "member-03",
        "name": "Akshay Kumar",
        "title": "PhD Scholar",
        "role": "Student",
        "photo": "assets/images/members/member2.png",
        "url": "members/member3.html",
        "email": "",
        "bio": "Biography to be updated.",
        "interests": [
            "To be updated"
        ],
        "education": [
            "To be updated"
        ]
    },
    {
        "id": "member-04",
        "name": "Dibyajyoti Mech",
        "title": "PhD Scholar",
        "role": "Student",
        "photo": "assets/images/members/profile-mech.JPG",
        "url": "members/member4.html",
        "email": "d25084@students.iitmandi.ac.in",
        "bio": "I am a first-year PhD student from Majuli, Assam. Working on Cavity QED systems, measurement problem, and decoherence phenomena.",
        "interests": [
            "Open Quantum Systems",
            "Quantum Thermodynamics",
            "Measurement Problem"
        ],
        "education": [
            "BS-MS in Physical Sciences - IISER Kolkata (2020 - 2025)"
        ]
    },
    {
        "id": "member-05",
        "name": "Tathagata Mandal",
        "title": "Integrated PhD Scholar",
        "role": "Student",
        "photo": "assets/images/members/profile-member5.png",
        "url": "members/member5.html",
        "email": "di2410@students.iitmandi.ac.in",
        "bio": "Integrated Ph.D student from West Bengal. Interests in literature, philosophy, political science, sketching, and painting.",
        "interests": [
            "Quantum Optics",
            "Quantum Dots",
            "Quantum Entanglement"
        ],
        "education": [
            "Integrated PhD in Physics - IIT Mandi (Ongoing)"
        ]
    },
    // Project Students
    // {
    //     "id": "member-project-01",
    //     "name": "Project Student 1",
    //     "title": "Project Student",
    //     "role": "Student",
    //     "photo": "assets/images/placeholder.jpg",
    //     "email": "project1@iitmandi.ac.in"
    // },
    // {
    //     "id": "member-project-02",
    //     "name": "Project Student 2",
    //     "title": "Intern",
    //     "role": "Student",
    //     "photo": "assets/images/placeholder.jpg",
    //     "email": "project2@iitmandi.ac.in"
    // },
    // // Past Members
    // {
    //     "id": "member-past-01",
    //     "name": "Past Member 1",
    //     "title": "Former PhD",
    //     "status": "Alumni",
    //     "photo": "assets/images/placeholder.jpg",
    //     "email": "alumni1@example.com"
    // },
    // {
    //     "id": "member-past-02",
    //     "name": "Past Member 2",
    //     "title": "Alumni",
    //     "status": "Alumni",
    //     "photo": "assets/images/placeholder.jpg",
    //     "email": "alumni2@example.com"
    // }
];

document.addEventListener('DOMContentLoaded', () => {
    loadMembers();
});

function loadMembers() {
    const grids = {
        pi: document.getElementById('pi-grid'),
        phd: document.getElementById('phd-grid'),
        project: document.getElementById('project-grid'),
        alumni: document.getElementById('alumni-grid')
    };

    const containers = {
        pi: document.getElementById('pi-section'),
        phd: document.getElementById('phd-section'),
        project: document.getElementById('project-section'),
        alumni: document.getElementById('alumni-section')
    };

    // Return if any grid is missing (safety check)
    if (!grids.pi || !grids.phd || !grids.project || !grids.alumni) return;

    // Clear all grids
    Object.values(grids).forEach(grid => grid.innerHTML = '');

    let counts = { pi: 0, phd: 0, project: 0, alumni: 0 };

    membersData.forEach(member => {
        let card;
        let targetGrid = null;
        let type = '';

        if (member.title === 'Principal Investigator') {
            targetGrid = grids.pi;
            type = 'pi';
            card = createMemberCard(member);
        } else if (member.status === 'Alumni' || member.role === 'Alumni') {
            targetGrid = grids.alumni;
            type = 'alumni';
            card = createCompactMemberCard(member);
        } else if (member.title.includes('PhD') || member.title.includes('Postdoc') || member.title.includes('Research Associate')) {
            targetGrid = grids.phd;
            type = 'phd';
            card = createMemberCard(member);
        } else {
            // Default to Project Students for others (M.Sc, B.Tech, Interns)
            targetGrid = grids.project;
            type = 'project';
            card = createCompactMemberCard(member);
        }

        if (targetGrid) {
            targetGrid.appendChild(card);
            counts[type]++;
        }
    });

    // Hide empty sections
    Object.keys(counts).forEach(key => {
        if (counts[key] === 0 && containers[key]) {
            containers[key].style.display = 'none';
        } else if (containers[key]) {
            containers[key].style.display = 'block';
        }
    });
}

function createMemberCard(member) {
    const card = document.createElement('article');
    card.className = 'card member-card';
    card.style.cursor = 'pointer';

    // Generate initials or use placeholder if no image (though we have a path)
    const imgPath = member.photo || 'assets/images/placeholder.jpg';
    // Fallback for members using research_areas instead of interests
    const displayInterests = member.interests || member.research_areas || [];

    // Default to query param if no explicit URL is provided (backward compatibility)
    const profileUrl = member.url || `member.html?id=${member.id}`;

    card.innerHTML = `
        <div style="height: 250px; overflow: hidden;">
            <img src="${imgPath}" alt="${member.name}" class="card__image" style="height: 100%; object-fit: cover; object-position: top center;" onerror="this.src='https://via.placeholder.com/300x300?text=${member.name[0]}'">
        </div>
        <div class="card__content">
            <h2 class="card__title" style="margin-bottom: 4px;">${member.name}</h2>
            <div class="card__subtitle">${member.title}</div>
            <p class="card__text" style="margin-bottom: 12px;">${displayInterests.slice(0, 3).join(' • ')}</p>
            <a href="${profileUrl}" class="btn btn-outline" style="font-size: 12px; padding: 6px 12px; margin-top: 8px;">View Profile</a>
        </div>
    `;

    // Make the whole card clickable
    card.addEventListener('click', (e) => {
        if (!e.target.closest('a')) {
            window.location.href = profileUrl;
        }
    });

    return card;
}

function createCompactMemberCard(member) {
    const card = document.createElement('div');
    card.className = 'member-card-compact';

    // Image path
    const imgPath = member.photo || 'assets/images/placeholder.jpg';

    card.innerHTML = `
        <img src="${imgPath}" alt="${member.name}" class="member-card-img" onerror="this.src='https://via.placeholder.com/600x60?text=${member.name[0]}'">
        <div class="member-card-content">
            <h3 class="member-card-name">${member.name}</h3>
            <p class="member-card-role">${member.title}</p>
        </div>
    `;

    return card;
}
