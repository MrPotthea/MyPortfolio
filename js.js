document.addEventListener("DOMContentLoaded", function () {
    // Define translations for all text content
    const translations = {
        "English": {
            "home": "HOME",
            "about": "ABOUT",
            "skills": "SKILLS",
            "portfolio": "PORTFOLIO",
            "contact": "CONTACT",
            "greeting": "Hello! my name is",
            "name": "PHUN POTTHEA",
            "description": "Passionate Web Developer | Tech Enthusiast",
            "follow": "Follow Me",
            "aboutMe": "About Me",
            "detailMe": "Details me",
            "education": "Education",
            "hobbies": "Hobbies",
            "languages": "Languages",
            "mycv": "View CV",
            "sendMessage": "You can send a message",
            "downloadCV": "Download CV",
            "footerText": "© 2025 Potthea007."
        },
        "Cambodia": {
            "home": "ផ្ទះ",
            "about": "អំពី",
            "skills": "ជំនាញ",
            "portfolio": "កាសែត",
            "contact": "ទំនាក់ទំនង",
            "greeting": "សួស្តី! ឈ្មោះរបស់ខ្ញុំគឺ",
            "name": "ផុន​ ពុទ្ធា",
            "description": "អ្នកអភិវឌ្ឍន៍វេបសាយដែលមានចំណាប់អារម្មណ៍ | អ្នកចូលចិត្តបច្ចេកវិទ្យា",
            "follow": "តាមដានខ្ញុំ",
            "aboutMe": "អំពីខ្ញុំ",
            "detailMe": "ព័ត៌មានអំពីខ្ញុំ",
            "education": "ការអប់រំ",
            "hobbies": "ការកម្សាន្ត",
            "languages": "ភាសា",
            "mycv": "មើល CV",
            "sendMessage": "អ្នកអាចផ្ញើសារមួយ",
            "downloadCV": "ទាញយកប្រវត្តិរូប",
            "footerText": "© ២០២៥ Potthea007."
        },
        "China": {
            "home": "首页",
            "about": "关于",
            "skills": "技能",
            "portfolio": "作品集",
            "contact": "联系",
            "greeting": "你好！我叫",
            "name": "ផុន​ ពុទ្ធា",
            "description": "热情的网页开发者 | 技术爱好者",
            "follow": "关注我",
            "aboutMe": "关于我",
            "detailMe": "我的详细信息",
            "education": "教育",
            "hobbies": "爱好",
            "languages": "语言",
            "mycv": "查看简历",
            "sendMessage": "您可以发送消息",
            "downloadCV": "下载简历",
            "footerText": "© 2025 Potthea007."
        }
    };

    // Get all elements that need to be translated
    const elementsToTranslate = {
        "home": document.querySelector('a[href="#home"]'),
        "about": document.querySelector('a[href="#about"]'),
        "skills": document.querySelector('a[href="#skills"]'),
        "portfolio": document.querySelector('a[href="#portfolio"]'),
        "contact": document.querySelector('a[href="#contact"]'),
        "greeting": document.querySelector('.home_page h1'),
        "name": document.querySelector('.home_page span'),
        "description": document.querySelector('.home_page p'),
        "follow": document.querySelector('.home_page span'),
        "aboutMe": document.querySelector('#about h1'),
        "detailMe": document.querySelector('#details h2'),
        "education": document.querySelector('#education h2'),
        "hobbies": document.querySelector('#hobbies h2'),
        "languages": document.querySelector('#languages h2'),
        "mycv": document.querySelector('#mycv h2'),
        "sendMessage": document.querySelector('.input_contact h3'),
        "downloadCV": document.querySelector('.btn-warning'),
        "footerText": document.querySelector('.footer-bottom p')
    };

    // Language dropdown functionality
    const languageSection = document.querySelector(".language section");
    const languageList = document.querySelector(".list_language");
    const languageOptions = document.querySelectorAll(".list_language div");

    // Show or hide language dropdown
    languageSection.addEventListener("click", function (event) {
        event.stopPropagation();
        languageList.style.display = (languageList.style.display === "flex") ? "none" : "flex";
    });

    // Change language on selection
    languageOptions.forEach(option => {
        option.addEventListener("click", function () {
            const selectedLanguage = this.querySelector("span").textContent;

            // Update displayed language
            languageSection.innerHTML = `<img src="${this.querySelector("img").src}" alt=""><span class="ms-2">${selectedLanguage}</span>`;

            // Update all text content based on selected language
            updateTextContent(selectedLanguage);

            // Hide dropdown after selection
            languageList.style.display = "none";
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!languageSection.contains(event.target)) {
            languageList.style.display = "none";
        }
    });

    // Function to update text content based on selected language
    function updateTextContent(selectedLanguage) {
        const texts = translations[selectedLanguage];
        for (const [key, element] of Object.entries(elementsToTranslate)) {
            if (element) {
                if (key === "greeting") {
                    element.innerHTML = `${texts[key]} <span class="text-warning">PHUN</span><span class="ms-2 text-success">POTTHEA</span>`;
                } else {
                    element.textContent = texts[key];
                }
            }
        }
    }
});

// Header scroll effect
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});

// Section switching functionality
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn");
    const sections = document.querySelectorAll(".details");

    function showSection(sectionId) {
        sections.forEach((section) => {
            if (section.id === sectionId) {
                section.classList.add("fade-in", "active");
            } else {
                section.classList.remove("fade-in", "active");
            }
        });

        buttons.forEach((btn) => btn.classList.remove("active"));
        document.querySelector(`[onclick="showSection('${sectionId}')"]`).classList.add("active");
    }

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const sectionId = this.getAttribute("onclick").match(/'([^']+)'/)[1];
            showSection(sectionId);
        });
    });
});

// Gallery functionality
const imageSources = [
    {
        img_homepage: "img/personal_web.png",
        modalImageListSources: [
            "img/personal_web.png", "img/personalabout.png", "img/personalabout1.png", "img/personalabout2.png", "img/perosonalabout3.png", "img/personalabout3.png", "img/personalskill.png", "img/perosonalskill2.png", "img/personalskill3.png", "img/personalporfolio.png", "img/personalport1.png", "img/personalconact.png"
        ]
    },
    {
        img_homepage: "img/image10.png",
        modalImageListSources: [
            "img/image10.png", "img/p1.png", "img/p2.png", "img/p3.png"
        ]
    },
    {
        img_homepage: "img/image11.png",
        modalImageListSources: [
            "img/image11.png", "img/order1.png", "img/order2.png", "img/order3.png", "img/order4.png", "img/order5.png", "img/order6.png", "img/order7.png", "img/order8.png", "img/order9.png", "img/order10.png", "img/order11.png", "img/order12.png", "img/order13.png", "img/order14.png", "img/order15.png", "img/order16.png", "img/order17.png", "img/order18.png"
        ]
    },
    {
        img_homepage: "img/image1.png",
        modalImageListSources: [
            "img/image1.png", "img/el1.png", "img/el2.png", "img/el3.png", "img/el4.png", "img/el5.png", "img/el6.png", "img/el7.png", "img/el8.png", "img/el9.png", "img/el10.png", "img/el11.png", "img/el12.png", "img/el13.png"
        ]
    },
    {
        img_homepage: "img/image12.png",
        modalImageListSources: [
            "img/image12.png", "img/skin1.png", "img/skin2.png", "img/skin3.png"
        ]
    },
    {
        img_homepage: "img/ele1.png",
        modalImageListSources: [
            "img/ele1.png", "img/ele2.png", "img/ele3.png", "img/ele4.png", "img/ele5.png", "img/ele6.png", "img/ele7.png", "img/ele8.png", "img/ele9.png", "img/ele10.png", "img/ele11.png", "img/ele12.png", "img/ele13.png"
        ]
    },
    {
        img_homepage: "img/image9.png",
        modalImageListSources: [
            "img/image9.png"
        ]
    },
    {
        img_homepage: "img/image13.png",
        modalImageListSources: [
            "img/image13.png", "img/song1.png", "img/song2.png", "img/song3.png", "img/song4.png", "img/song5.png"
        ]
    },
    {
        img_homepage: "img/image2.png",
        modalImageListSources: [
            "img/image2.png", "img/shop1.png", "img/shop2.png", "img/shop3.png", "img/shop4.png", "img/shop5.png", "img/shop6.png", "img/shop7.png", "img/8.png", "img/shop9.png", "img/shop10.png", "img/shop11.png", "img/shop12.png", "img/shop13.png", "img/shop14.png", "img/shop15.png", "img/shop16.png", "img/shop17.png", "img/shop18.png", "img/shop19.png"
        ]
    },
    {
        img_homepage: "img/image5.png",
        modalImageListSources: [
            "img/image5.png", "img/cafe1.png", "img/cafe2.png", "img/cafe3.png", "img/cafe4.png"
        ]
    },
    {
        img_homepage: "img/image6.png",
        modalImageListSources: [
            "img/image6.png"
        ]
    },
    {
        img_homepage: "img/myfri.png",
        modalImageListSources: [
            "img/myfri.png", "img/myfri1.png"
        ]
    },
    {
        img_homepage: "img/image3.png",
        modalImageListSources: [
            "img/image3.png"
        ]
    },
    {
        img_homepage: "img/image4.png",
        modalImageListSources: [
            "img/image4.png"
        ]
    },
    {
        img_homepage: " img/calculator.png",
        modalImageListSources: [
            "img/calculator.png", "img/cal1.png", "img/cal2.png", "img/cal3.png", "img/cal4.png", "img/cal5.png"
        ]
    },
    {
        img_homepage: "img/image7.png",
        modalImageListSources: [
            "img/image7.png", "img/em1.png", "img/em2.png", "img/em3.png", "img/em4.png", "img/em5.png", "img/em6.png", "img/em7.png", "img/em8.png"
        ]
    },
    {
        img_homepage: "img/image8.png",
        modalImageListSources: [
            "img/personal_web.png", "img/image10.png", "img/image11.png", "img/personal_web.png", "img/image10.png", "img/image11.png"
        ]
    },
];

const galleryContainer = document.getElementById('gallery-container');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.querySelector('.close');
const imageListContainer = document.querySelector('.list_img');

// Function to generate gallery items dynamically
function createGallery() {
    imageSources.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');

        const anchor = document.createElement('a');
        anchor.href = "#";

        const img = document.createElement('img');
        img.src = item.img_homepage;
        img.alt = "Portfolio Image";

        anchor.appendChild(img);
        galleryItem.appendChild(anchor);
        galleryContainer.appendChild(galleryItem);

        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            openModal(item.img_homepage, item.modalImageListSources);
        });
    });
}
// Function to populate images inside .list_img dynamically
function populateModalImageList(imageList) {
    imageListContainer.innerHTML = ""; // Clear previous items

    imageList.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = "Thumbnail Image";
        img.classList.add('list-thumbnail');

        img.addEventListener('click', function () {
            modalImage.src = src; // Change modal image to clicked image
        });

        imageListContainer.appendChild(img);
    });
}

// Function to open the modal
function openModal(mainImage, imageList) {
    modalImage.src = mainImage;
    modal.style.display = 'flex'; // Use flex to align properly
    populateModalImageList(imageList); // Populate image list when modal opens
}

// Close the modal when the close button is clicked
closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
});

// Close the modal when clicking outside the content
window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
// Function to enable full-screen mode
function toggleFullScreen() {
    if (!document.fullscreenElement) {
        modalImage.requestFullscreen().catch(err => {
            console.log(`Error attempting to enable full-screen mode: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
}

// Function to open the modal
function openModal(mainImage, imageList) {
    modalImage.src = mainImage;
    modal.style.display = 'flex'; // Show modal
    populateModalImageList(imageList);
}

// Add click event to modal image for full-screen effect
modalImage.addEventListener('click', toggleFullScreen);

// Close modal when clicking outside the content
window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Close full-screen mode when `Escape` key is pressed
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && document.fullscreenElement) {
        document.exitFullscreen();
    }
});

// Initialize the gallery
createGallery();

// Skills functionality
document.addEventListener("DOMContentLoaded", () => {
    const skillCategories = {
        "All skill": ["Photoshop", "Figma", "Vscode", "Visual Studio", "Apache Netben", "C", "C++", "Java", "HTML", "CSS", "Javascript", "Bootstrap", "Jquery", "ReactJs", "PHP", "Python", "MySQL", "Network", "Canva", "Microsoft Office", "Git", "Github"],
        "Design Tools": ["Photoshop", "Figma", "Canva"],
        "Programming": ["C", "C++", "Java", "HTML", "CSS", "Python", "Javascript", "PHP"],
        "Frameworks&Libraries": ["Bootstrap", "Jquery", "ReactJs"],
        "Development Tools": ["Vscode", "Visual Studio", "Apache Netben", "Git", "Github"],
        "Databases&Networking": ["MySQL", "Network"]
    };

    const skills = [
        { name: "Photoshop", img: "img/photoshop.png", percentage: 50 },
        { name: "Figma", img: "img/figma.png", percentage: 70 },
        { name: "Vscode", img: "img/vscode.png", percentage: 90 },
        { name: "Visual Studio", img: "img/vs2022.png", percentage: 80 },
        { name: "Apache Netben", img: "img/netben.png", percentage: 90 },
        { name: "C", img: "img/c.png", percentage: 90 },
        { name: "C++", img: "img/cpp.png", percentage: 90 },
        { name: "Java", img: "img/java.png", percentage: 85 },
        { name: "C#", img: "img/net.png", percentage: 85 },
        { name: "HTML", img: "img/html.png", percentage: 95 },
        { name: "CSS", img: "img/css1.png", percentage: 95 },
        { name: "Javascript", img: "img/js.png", percentage: 80 },
        { name: "Bootstrap", img: "img/bootstrap1.png", percentage: 100 },
        { name: "Jquery", img: "img/jquey.png", percentage: 70 },
        { name: "ReactJs", img: "img/rjs.png", percentage: 75 },
        { name: "PHP", img: "img/php.png", percentage: 80 },
        { name: "Python", img: "img/python.png", percentage: 60 },
        { name: "MySQL", img: "img/mysql.png", percentage: 73 },
        { name: "Network", img: "img/network.png", percentage: 65 },
        { name: "Canva", img: "img/canva.png", percentage: 95 },
        { name: "Microsoft Office", img: "img/mic.png", percentage: 90 },
        { name: "Git", img: "img/git.png", percentage: 85 },
        { name: "Github", img: "img/github.png", percentage: 95 }
    ];

    const skillsContainer = document.querySelector(".skills-container");

    // Generate skill cards dynamically
    skills.forEach(skill => {
        const skillCard = document.createElement("div");
        skillCard.classList.add("skill-card");

        skillCard.innerHTML = `
            <div class="skill-info">
                <h2>${skill.name}</h2>
                <img src="${skill.img}" alt="${skill.name}">
            </div>
            <div class="progress-bar">
                <div class="progress" data-percent="${skill.percentage}">
                    <span class="percentage">${skill.percentage}%</span>
                </div>
            </div>
        `;
        skillsContainer.appendChild(skillCard);
    });

    // Function to animate the progress bars
    function animateProgressBars() {
        const progressBars = document.querySelectorAll(".progress");

        progressBars.forEach(bar => {
            const percent = bar.getAttribute("data-percent");
            const percentageText = bar.querySelector(".percentage");

            // Set background color based on percentage
            if (percent <= 20) {
                bar.style.backgroundColor = "#f44336";
            } else if (percent <= 50) {
                bar.style.backgroundColor = "#ff9800";
            } else {
                bar.style.backgroundColor = "#4caf50";
            }

            // Initialize progress bar at 0%
            bar.style.width = "0";
            percentageText.style.left = `calc(${percent}% - 25px)`; // Center the percentage text based on width

            // Animate progress bar to reach the desired percentage
            setTimeout(() => {
                bar.style.transition = "width 1.5s ease-in-out"; // Smooth transition
                bar.style.width = `${percent}%`; // Set to desired percentage
            }, 200);
        });
    }

    // Set up IntersectionObserver to detect when the skills section is in view
    const skillsSection = document.querySelector("#skills");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Trigger progress bar animation when skills section becomes visible
                animateProgressBars();
                observer.disconnect(); // Disconnect observer after it runs once
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the section is visible
    });

    observer.observe(skillsSection); // Start observing the skills section

    // Skill category filtering
    const skillCards = document.querySelectorAll(".skill-card");

    document.querySelectorAll(".list_skill ul li").forEach(li => {
        li.addEventListener("click", function () {
            // Remove active class from all and add to clicked li
            document.querySelectorAll(".list_skill ul li").forEach(item => item.classList.remove("active"));
            this.classList.add("active");

            // Get category text
            let category = this.innerText;

            skillCards.forEach(card => {
                let skillName = card.querySelector("h2").innerText;

                if (category === "All skill" || skillCategories[category].includes(skillName)) {
                    card.style.display = "block";
                    card.style.opacity = "0";
                    card.style.transform = "translateY(20px)"; // Start from bottom
                    setTimeout(() => {
                        card.style.transition = "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";
                        card.style.opacity = "1";
                        card.style.transform = "translateY(0)";
                    }, 50);
                } else {
                    card.style.transition = "opacity 0.3s ease-in-out, transform 0.3s ease-in-out";
                    card.style.opacity = "0";
                    card.style.transform = "translateY(20px)"; // Moves down before hiding
                    setTimeout(() => {
                        card.style.display = "none";
                    }, 300);
                }
            });
        });
    });
});
document.getElementById('downloadBtn').addEventListener('click', function () {
    // Create a link element
    const link = document.createElement('a');
    // Set the href to the file you want to download
    link.href = 'img/PHUN Potthea_CV_Web Developer.pdf';  // Replace with the actual path to your file
    link.download = 'PHUN Potthea_CV_Web Developer.pdf';  // Desired file name without path
    link.click();
});
(function () {
    const sendButton = document.getElementById('send-button');
    const modal = document.getElementById('thank-you-modal');
    const closeModalButton = document.querySelector('.close-modal-_contact');
    const modalMessage = document.querySelector('.modal-content-_contact p');

    // Open Modal Function
    function openModal(message) {
        modalMessage.innerHTML = message;
        modal.style.display = 'flex';
    }

    // Close Modal Function
    function closeModal() {
        modal.style.display = 'none';
    }

    // Event Listener for the close button in the modal
    closeModalButton.addEventListener('click', closeModal);

    // Event Listener for clicking outside the modal to close it
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Email Validation Function
    function isValidGmail(email) {
        const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        return gmailRegex.test(email);
    }

    // Event Listener for send button to simulate form submission and show the modal
    sendButton.addEventListener('click', function (event) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Check if all fields are filled
        if (name && email && message) {
            if (!isValidGmail(email)) {
                openModal('Please enter a valid Gmail address.');
            } else {
                // Simulate sending the email (you can replace this with real email logic, like EmailJS)
                console.log('Message sent:', { name, email, message });

                // Show the Thank You Modal
                openModal('Thank you for your message!<i class="fa-solid fa-check ms-1 fa-xl text-primary"></i>');

                // Clear input fields after successful submission
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('message').value = '';
            }
        } else {
            let errorMessage = 'Please fill in all fields before submitting.';

            if (!name) {
                errorMessage = 'Please enter your name.';
            } else if (!email) {
                errorMessage = 'Please enter your email.';
            } else if (!message) {
                errorMessage = 'Please enter your message.';
            }

            // Show error message in the modal
            openModal(errorMessage);
        }
    });
})();
(function() {
    const menuIcon = document.querySelector('.icon_listmenu');
    const menuHide = document.querySelector('.menu_hide');
    
    // Toggle menu visibility
    menuIcon.addEventListener('click', function() {
        if (menuHide.style.display === 'none' || menuHide.style.display === '') {
            menuHide.style.display = 'flex';
        } else {
            menuHide.style.display = 'none';
        }
    });

    // Close menu if clicked outside
    window.addEventListener('click', function(event) {
        if (!menuHide.contains(event.target) && !menuIcon.contains(event.target)) {
            menuHide.style.display = 'none';
        }
    });
})();


// Initialize AOS
AOS.init();