// Sample data for team members
const teamData = [
    {
        name: "Anupam Sorabh",
        position: "Founder & Solutions Head at Machadalo",
        education: "Indian Institute of Management Mumbai",
        image: "https://media.licdn.com/dms/image/v2/C4D03AQEXV9_pMNn6Fg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516984873304?e=1737590400&v=beta&t=_Nedd8Xyh63pI6X5Uwmda-f-f3boqPi_rnt0V00VTLc",
        twitter: "https://www.twitter.com",
        facebook: "https://www.facebook.com",
        linkedin: "https://www.linkedin.com/in/anupam-sorabh-8a78b322/",
    },
    {
        name: "Jayesh Totla",
        position: "Co-Founder at Machadalo",
        education: "Indian Institute of Management Mumbai",
        image: "https://media.licdn.com/dms/image/v2/C5603AQEgDHf7VK2rqg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1635771051932?e=1737590400&v=beta&t=_lyFlVTqdPtkp00tab3e_vNfQcuIapbYGtw01TZdtkQ",
        twitter: "https://www.twitter.com",
        facebook: "https://www.facebook.com",
        linkedin: "https://www.linkedin.com/in/jayesh-totla/",
    },
    {
        name: "Vaibhav ahlawat",
        position: "Co-Founder & Sales Head at Machadalo",
        education: "Indian Institute of Management Mumbai",
        image: "",
        twitter: "https://www.twitter.com",
        facebook: "https://www.facebook.com",
        linkedin: "https://www.linkedin.com/in/vaibhav-ahlawat-a180b71a1/",
    },
    {
        name: "Vipin Prajapati",
        position: "Sr. Operations Manager at Machadalo",
        education: "SVKM's NMIM Studies",
        image: "https://media.licdn.com/dms/image/v2/C4D03AQEME_w_GwhbUw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1599556568573?e=1737590400&v=beta&t=pjcTEaDH7e-ZFp5Q-j0OtMhAUHjd0icFm5BTElbQe_w",
        twitter: "https://www.twitter.com",
        facebook: "https://www.facebook.com",
        linkedin: "https://www.linkedin.com/in/vipin-prajapati-79954573/",
    },
    {
        name: "Momi Borah",
        position: "Assistant Vice President at Machadalo",
        education: "Master's from Delhi University",
        image: "assets/img/Momi.png",
        twitter: "https://www.twitter.com",
        facebook: "https://www.facebook.com",
        linkedin: "https://www.linkedin.com/in/momi-borah-00364476/",
    },
    {
        name: "Kriti Harjika",
        position: "Senior Operations Manager at Machadalo",
        education: "Master's from Banasthali university",
        image: "https://media.licdn.com/dms/image/v2/C4E03AQFeOembctCPlw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1601134712588?e=1738800000&v=beta&t=S-DwEafxpve_zzHk4cma1FoaHF09ggDOlvaEsQk964o",
        twitter: "https://www.twitter.com",
        facebook: "https://www.facebook.com",
        linkedin: "https://www.linkedin.com/in/kriti-harjika-75657a46/",
    },
    {
        name: "Shahid Dar",
        position: "Full Stack Developer at Machadalo",
        education: "Master's from Sharda University",
        image: "https://media.licdn.com/dms/image/v2/D5603AQGz3fufh7E7GQ/profile-displayphoto-shrink_800_800/B56ZOb5_NZGgAc-/0/1733487491152?e=1739404800&v=beta&t=MMFsmccxk8BheFWZjE4dmfIkL7rEvG4TOfSu0YJALb8",
        twitter: "https://www.twitter.com",
        facebook: "https://www.facebook.com",
        linkedin: "https://www.linkedin.com/in/shahid-dar-b3aaa4159/",
    },
    {
        name: "Vivek Verma",
        position: "Product Manager at Machadalo",
        education: "National Institute of Technology Rourkela",
        image: "https://media.licdn.com/dms/image/v2/D5603AQFhqTkqfL5-5Q/profile-displayphoto-shrink_800_800/B56ZOQfgn6G4Ac-/0/1733295999983?e=1738800000&v=beta&t=DU21WVTtuOhkbxzpuSR46EbOnZyB-uAOrS_fIXD_B1s",
        twitter: "https://www.twitter.com",
        facebook: "https://www.facebook.com",
        linkedin: "https://www.linkedin.com/in/vivek-verma-product-manager/",
    },
    {
        name: "Aayush Singh",
        position: "Full Stack Developer at Machadalo",
        education: "Dr AKTU University Lucknow",
        image: "https://media.licdn.com/dms/image/v2/D5603AQFscDPrHNXA3w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1732083079242?e=1737590400&v=beta&t=WWHQ26JqdtKMHQ0diK6Q6W8623pJw4Lr0HeBwC40rII",
        twitter: "https://www.twitter.com",
        facebook: "https://www.facebook.com",
        linkedin: "https://www.linkedin.com/in/aayush-singh-82b97a209/",
    },
    {
        name: "Anand Prakash",
        position: "Associate Data Scientist at Machadalo",
        education: "Maharshi Dayanand University",
        image: "https://media.licdn.com/dms/image/v2/D4D03AQGT596_ec1jmg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1673463463255?e=1737590400&v=beta&t=0nKB7dzd5C-4qliPdZTmVqw306wcxgseoczV8NvNYlw",
        twitter: "https://www.twitter.com",
        facebook: "https://www.facebook.com",
        linkedin: "https://www.linkedin.comhttps://www.linkedin.com/in/anand-prakash-data-analyst/",
      },
    //   {
    //     name: "Yuvraj Sikarwar",
    //     position: "Market Research Analyst at Machadalo",
    //     education: "JS University",
    //     image: "https://media.licdn.com/dms/image/v2/D4D03AQHQNtacEVMhXg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719997461617?e=1737590400&v=beta&t=ksfQ7HFaRneVuO1FxVisBeXsQoI2M9WhjJPqtDG6WaI",
    //     twitter: "https://www.twitter.com",
    //     facebook: "https://www.facebook.com",
    //     linkedin: "https://www.linkedin.com",
    //   },
    //   {
    //     name: "Devansh Tyagi",
    //     position: "Market Research Analyst at Machadalo",
    //     education: "Jaypee Institute of Information Technology",
    //     image: "https://media.licdn.com/dms/image/v2/D4E03AQHTlgm7hOxgQw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1712158250305?e=1737590400&v=beta&t=juITIVK5j6miGQEGYnbgECENxFC5ACEIGdDndm3PsmY",
    //     twitter: "https://www.twitter.com",
    //     facebook: "https://www.facebook.com",
    //     linkedin: "https://www.linkedin.com",
    //   },
    //   {
    //     name: "Aditi Agrawal",
    //     position: "Market Research Analyst at Machadalo",
    //     education: "Jaypee Institute of Information Technology",
    //     image: "https://media.licdn.com/dms/image/v2/D5603AQFl3gpCiIWLZg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1711802566923?e=1737590400&v=beta&t=Uh9MpPBEdf9Jgq7Zx4tsdBPvCzkY26p9p_xDpYkLXJw",
    //     twitter: "https://www.twitter.com",
    //     facebook: "https://www.facebook.com",
    //     linkedin: "https://www.linkedin.com",
    //   }
   
];

// Function to create team cards dynamically
function renderTeam() {
    const teamContainer = document.getElementById("team-container");
    teamData.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("card-container");

        card.innerHTML = `
            <div class="card">
                <div class="team-image-wrapper">
                    <img class="team-member-image" src="${member.image}" alt="${member.name}">
                </div>
                <p class="text-blk name">${member.name}</p>
                <p class="text-blk position">${member.position}</p>
                <p class="text-blk feature-text">${member.education}</p>
                <div class="social-icons">
                    <a href="${member.twitter}" target="_blank">
                        <img class="twitter-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon.svg" alt="Twitter">
                    </a>
                    <a href="${member.facebook}" target="_blank">
                        <img class="facebook-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon-1.svg" alt="Facebook">
                    </a>
                    <a href="${member.linkedin}" target="_blank">
                        <i class="bi bi-linkedin"></i>
                    </a>
                </div>
            </div>
        `;

        teamContainer.appendChild(card);
    });
}

renderTeam();
