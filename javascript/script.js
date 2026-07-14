document.addEventListener('DOMContentLoaded', () => {
    // ==========================================================================
    // 🛡️ SECURITY BARRIER: REDIRECT TO LOGIN IF SESSION DOES NOT EXIST
    // ==========================================================================
    const loggedInUser = localStorage.getItem('currentUser');
    if (!loggedInUser) {
        window.location.href = 'login.html';
        return;
    }

    // 1. Student Profiles Data Store - Fixed with "../" paths to step out of the javascript folder
    const studentsData = {
        anshuman: {
            name: "Anshuman Sahay",
            dept: "Diploma in CS",
            photo: "images/kallu.png.jpeg",
            attendance: 88,
            cgpa: "8.92",
            fee: "₹45,000",
            grades: [
                { code: "CS401", subject: "Java Programming", total: 90, grade: "O" },
                { code: "CS402", subject: "Web Technologies", total: 83, grade: "A+" },
                { code: "CS403", subject: "Discrete Applied Mathematics", total: 88, grade: "A+" },
                { code: "CS404", subject: "Artificial Intelligence Foundations", total: 85, grade: "A" }
            ]
        },
        samar: {
            name: "Samar Kumar",
            dept: "BCA",
            photo: "images/raju.png.jpeg",
            attendance: 76,
            cgpa: "7.85",
            fee: "₹12,000",
            grades: [
                { code: "BCA401", subject: "Database Systems Management", total: 78, grade: "A" },
                { code: "BCA402", subject: "Advanced Software Engineering", total: 81, grade: "A+" },
                { code: "BCA403", subject: "Discrete Structures", total: 72, grade: "B+" },
                { code: "BCA404", subject: "Enterprise Operating Systems", total: 79, grade: "A" }
            ]
        },
        riya: {
            name: "Riya Kumari",
            dept: "B.Tech in CS",
            photo: "images/gol.png.jpeg",
            attendance: 94,
            cgpa: "9.45",
            fee: "₹0",
            grades: [
                { code: "CSE401", subject: "Data Structures & Algorithms", total: 95, grade: "O" },
                { code: "CSE402", subject: "Advanced Computer Networks", total: 92, grade: "O" },
                { code: "CSE403", subject: "Formal Theory of Computation", total: 89, grade: "A+" },
                { code: "CSE404", subject: "Systems Compiler Design", total: 93, grade: "O" }
            ]
        },
        mayank: {
            name: "Mayank Raj",
            dept: "BCA",
            photo: "images/mayank.png.jpeg",
            attendance: 82,
            cgpa: "8.10",
            fee: "₹25,000",
            grades: [
                { code: "BCA401", subject: "Database Systems Management", total: 85, grade: "A" },
                { code: "BCA402", subject: "Advanced Software Engineering", total: 80, grade: "A" },
                { code: "BCA403", subject: "Discrete Structures", total: 78, grade: "B+" },
                { code: "BCA404", subject: "Enterprise Operating Systems", total: 83, grade: "A+" }
            ]
        }
    };

    // 2. Academics Data Store
    const academicsData = {
        "Faculty Directory": {
            title: "<i class='fas fa-id-card-alt' style='color: #00bfff;'></i> Core Faculty & Teacher Directory",
            content: `
                <div class="modal-feature-section">
                    <p style="margin-bottom: 20px; font-size: 13.5px; line-height: 1.6;">
                        Meet our exceptional faculty members who lead the computational and engineering divisions of Bhomi University. Each professor handles distinct branches located at our dedicated administrative addresses.
                    </p>
                    <div class="faculty-grid">
                        <div class="faculty-card">
                            <div>
                                <div class="faculty-header">
                                    <div class="faculty-avatar" style="background-color: #3498db;">AG</div>
                                    <div class="faculty-meta">
                                        <h5>Prof. Aman Gupt</h5>
                                        <span>Chief of Computing Division</span>
                                    </div>
                                </div>
                                <div class="faculty-details">
                                    <p><strong>Department:</strong> Software Architecture</p>
                                    <p><strong>Specialization:</strong> Algorithmic Design & Distributed Cloud Infrastructures.</p>
                                </div>
                            </div>
                            <span class="faculty-address-badge"><i class="fas fa-map-marker-alt"></i> Address: Jamshedpur</span>
                        </div>
                        <div class="faculty-card">
                            <div>
                                <div class="faculty-header">
                                    <div class="faculty-avatar" style="background-color: #2ecc71;">SD</div>
                                    <div class="faculty-meta">
                                        <h5>Prof. Somen Das</h5>
                                        <span>Director of Environmental Computing</span>
                                    </div>
                                </div>
                                <div class="faculty-details">
                                    <p><strong>Department:</strong> Ecological Computation</p>
                                    <p><strong>Specialization:</strong> Data Analytics & Telemetry Systems Modeling.</p>
                                </div>
                            </div>
                            <span class="faculty-address-badge"><i class="fas fa-map-marker-alt"></i> Address: Lakti Tal</span>
                        </div>
                        <div class="faculty-card">
                            <div>
                                <div class="faculty-header">
                                    <div class="faculty-avatar" style="background-color: #e74c3c;">AP</div>
                                    <div class="faculty-meta">
                                        <h5>Prof. Ayan Poddar</h5>
                                        <span>Head of Technology Systems</span>
                                    </div>
                                </div>
                                <div class="faculty-details">
                                    <p><strong>Department:</strong> Network Infrastructures</p>
                                    <p><strong>Specialization:</strong> Systems Integration & Cybersecurity blueprinting.</p>
                                </div>
                            </div>
                            <span class="faculty-address-badge"><i class="fas fa-map-marker-alt"></i> Address: Bhuiyadih</span>
                        </div>
                        <div class="faculty-card">
                            <div>
                                <div class="faculty-header">
                                    <div class="faculty-avatar" style="background-color: #9b59b6;">KK</div>
                                    <div class="faculty-meta">
                                        <h5>Prof. Kashi Kalindi</h5>
                                        <span>Dean of Community Outreach</span>
                                    </div>
                                </div>
                                <div class="faculty-details">
                                    <p><strong>Department:</strong> Digital Literacy Initiatives</p>
                                    <p><strong>Specialization:</strong> Accessible Technology & Vocational Skill Development.</p>
                                </div>
                            </div>
                            <span class="faculty-address-badge"><i class="fas fa-map-marker-alt"></i> Address: Kalindi Basti</span>
                        </div>
                        <div class="faculty-card" style="grid-column: span 2;">
                            <div>
                                <div class="faculty-header">
                                    <div class="faculty-avatar" style="background-color: #f1c40f; color: #333;">KG</div>
                                    <div class="faculty-meta">
                                        <h5>Prof. Karan Godo</h5>
                                        <span>Placement Advisory Director</span>
                                    </div>
                                </div>
                                <div class="faculty-details">
                                    <p><strong>Department:</strong> Corporate Linkage & Careers</p>
                                    <p><strong>Specialization:</strong> Industrial Relations, Interview Strategy, and Placement Readiness.</p>
                                </div>
                            </div>
                            <span class="faculty-address-badge"><i class="fas fa-map-marker-alt"></i> Address: Jamshedpur Office</span>
                        </div>
                    </div>
                </div>
            `
        },
        "E-Library Resources": {
            title: "<i class='fas fa-book-reader' style='color: #00bfff;'></i> Academic E-Library System",
            content: `
                <div class="modal-feature-section">
                    <p>Unlock complete access to worldwide research networks, computational journals, and scientific blueprint indexes.</p>
                    <div class="highlight-card-info" style="margin-top: 15px;">
                        <p><strong>Available Subscriptions:</strong> IEEE Xplore Premium, ACM Digital Library, SpringerLink.</p>
                        <p><strong>Access Status:</strong> Enabled automatically while logged into Bhomi campus networks.</p>
                    </div>
                </div>
            `
        }
    };

    // 3. Complete Portal Feature Details Store
    const portalFeaturesData = {
        "Home": {
            title: "<i class='fas fa-home' style='color: #00bfff;'></i> Welcome to Bhomi University Portal",
            content: `
                <div class="modal-feature-section">
                    <p>This central administrative hub bridges students, scholars, and instructors into one unified ecosystem.</p>
                    <div class="highlight-card-info">
                        <p><strong>What you can do here:</strong> Monitor and download evaluation transcripts, choose elective credits, complete course registrations, and settle balances instantly.</p>
                    </div>
                    <p>Keep your profile updated to stay eligible for exams and placements.</p>
                </div>
            `
        },
        "Placements": {
            title: "<i class='fas fa-handshake' style='color: #00bfff;'></i> Bhomi Placement Assistance & Career Cell",
            content: `
                <div class="modal-feature-section">
                    <p>Our training and placement unit bridges top corporate partners with young tech visionaries.</p>
                    <div class="highlight-card-info">
                        <p><strong>Placement Director:</strong> Prof. Karan Godo</p>
                        <p><strong>Current Highest Package:</strong> ₹18.5 LPA</p>
                        <p><strong>Key Recruiters:</strong> TCS, Cognizant, Infosys, Tech Mahindra, local engineering hubs.</p>
                    </div>
                    <h4>Eligibility Requirements:</h4>
                    <p>Students with CGPA above 7.50 and zero unpaid fee backlogs are eligible for immediate interview pool registration.</p>
                </div>
            `
        },
        "Dashboard": {
            title: "<i class='fas fa-tachometer-alt' style='color: #00bfff;'></i> Interactive Dashboard Guidelines",
            content: `
                <div class="modal-feature-section">
                    <p>Your portal dashboard offers critical live statistics regarding your current university registration status.</p>
                    <h4>Key Panels Explained:</h4>
                    <ul style="padding-left: 20px; margin-bottom: 15px;">
                        <li><strong>Attendance:</strong> Real-time tracker. Must remain above 75% for exam eligibility.</li>
                        <li><strong>Pending Fee:</strong> Displays overdue semester balances. Payment options are linked inline.</li>
                        <li><strong>Grade Report:</strong> Summarizes semester codes, subjects, and earned evaluations.</li>
                    </ul>
                </div>
            `
        },
        "Admissions": {
            title: "<i class='fas fa-user-plus' style='color: #00bfff;'></i> Bhomi Admissions 2026",
            content: `
                <div class="modal-feature-section">
                    <p>Admissions for the upcoming engineering, science, and computer application batches are officially open.</p>
                    <div class="highlight-card-info">
                        <p><strong>Key Programs:</strong> B.Tech, BCA, Diploma in Computer Science.</p>
                        <p><strong>Registration Deadline:</strong> August 15, 2026.</p>
                    </div>
                    <p>For processing new freshman applications, scholarship inquiries, or transfers, please approach the main office block on the Jamshedpur campus.</p>
                </div>
            `
        },
        "Alumni": {
            title: "<i class='fas fa-user-graduate' style='color: #00bfff;'></i> Bhomi Alumni Association Hub",
            content: `
                <div class="modal-feature-section">
                    <p>Welcome back to the everlasting network of Bhomi graduates. Our alum base spans globally across top tech giants and research institutes.</p>
                    <div class="highlight-card-info">
                        <p><strong>Active Members:</strong> 4,200+ worldwide.</p>
                        <p><strong>Networking Forums:</strong> Join our LinkedIn and discord coordination workspaces for monthly guidance workshops.</p>
                    </div>
                </div>
            `
        }
    };

    // 4. Element Nodes Selection
    const studentPhoto = document.getElementById('studentPhoto');
    const studentName = document.getElementById('studentName');
    const studentDept = document.getElementById('studentDept');
    const attendancePct = document.getElementById('attendancePct');
    const attendanceBar = document.getElementById('attendanceBar');
    const cgpaDisplay = document.getElementById('cgpaDisplay');
    const feeDisplay = document.getElementById('feeDisplay');
    const payButton = document.getElementById('payButton');
    const gradesTableBody = document.getElementById('gradesTableBody');
    const logoutBtn = document.getElementById('logoutBtn');
    
    // Modals Nodes
    const paymentModal = document.getElementById('paymentModal');
    const academicsModal = document.getElementById('academicsModal');
    const featuresModal = document.getElementById('featuresModal');
    
    const closePaymentModalBtn = document.getElementById('closePaymentModal');
    const closeAcademicsModalBtn = document.getElementById('closeAcademicsModal');
    const closeFeaturesModalBtn = document.getElementById('closeFeaturesModal');
    
    const academicsTitle = document.getElementById('academicsTitle');
    const academicsBody = document.getElementById('academicsBody');
    const featuresModalTitle = document.getElementById('featuresModalTitle');
    const featuresModalBody = document.getElementById('featuresModalBody');
    
    const academicLinks = document.querySelectorAll('.academic-link');
    const featureLinks = document.querySelectorAll('.feature-link');

    // Registration UI elements
    const totalCreditsDisplay = document.getElementById('totalCredits');
    const courseCheckboxes = document.querySelectorAll('.course-check');
    const submitRegBtn = document.querySelector('.registration-card .btn-portal');

    // Mobile Navigation Fallback Dropdown Control
    const academicsDropdownBtn = document.getElementById('academicsDropdownBtn');
    if (academicsDropdownBtn) {
        academicsDropdownBtn.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const dropdownContent = academicsDropdownBtn.nextElementSibling;
                dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
            }
        });
    }

    // 5. Update Student Dashboard Data
    const updateStudentView = (studentKey) => {
        const student = studentsData[studentKey];
        if (!student) return;

        // Apply photo path directly
        studentPhoto.src = student.photo;
        studentPhoto.alt = `${student.name}'s Photo`;
        studentName.textContent = student.name;
        studentDept.textContent = student.dept;
        attendancePct.textContent = `${student.attendance}%`;
        
        attendanceBar.style.width = `${student.attendance}%`;
        cgpaDisplay.textContent = student.cgpa;
        feeDisplay.textContent = student.fee;
        
        if (student.fee === "₹0") {
            feeDisplay.className = "text-success";
            feeDisplay.style.color = "#2ecc71";
            if (payButton) payButton.style.display = 'none';
        } else {
            feeDisplay.className = "text-sky-blue highlighted-fee-amount";
            feeDisplay.style.color = "#d32f2f";
            if (payButton) payButton.style.display = 'inline-block';
        }

        let tableHTML = '';
        student.grades.forEach(g => {
            tableHTML += `
                <tr>
                    <td>${g.code}</td>
                    <td><strong class="subject-highlight-text" style="background:#e1f5fe; color:#01579b;">${g.subject}</strong></td>
                    <td>${g.total}</td>
                    <td>${g.grade}</td>
                </tr>`;
        });
        tableHTML += `
            <tr class="total-row">
                <td colspan="2">AVERAGE SGPA</td>
                <td colspan="2">${student.cgpa}</td>
            </tr>
        `;
        gradesTableBody.innerHTML = tableHTML;
    };

    // ==========================================================================
    // 🚪 LOGOUT UTILITY MECHANICS
    // ==========================================================================
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('currentUser');
            window.location.href = 'login.html';
        });
    }

    // 6. Fee Payment Logic
    if (payButton) {
        payButton.addEventListener('click', () => {
            document.getElementById('modalFeeAmount').textContent = feeDisplay.textContent;
            paymentModal.style.display = 'flex';
        });
    }
    if (closePaymentModalBtn) {
        closePaymentModalBtn.addEventListener('click', () => {
            paymentModal.style.display = 'none';
        });
    }

    // 7. General Feature Modals
    featureLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const featureName = link.getAttribute('data-feature') || link.textContent.trim();
            const data = portalFeaturesData[featureName];

            if (data && featuresModal) {
                featuresModalTitle.innerHTML = data.title;
                featuresModalBody.innerHTML = data.content;
                featuresModal.style.display = 'flex';
            }
        });
    });

    if (closeFeaturesModalBtn) {
        closeFeaturesModalBtn.addEventListener('click', () => {
            featuresModal.style.display = 'none';
        });
    }

    // 8. Academics Center Modal Action
    academicLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const academicKey = link.getAttribute('data-academic') || link.textContent.trim();
            const data = academicsData[academicKey];

            if (data && academicsModal) {
                academicsTitle.innerHTML = data.title;
                academicsBody.innerHTML = data.content;
                academicsModal.style.display = 'flex';
                
                if (window.innerWidth <= 768) {
                    const dropContent = link.closest('.academics-dropdown-wide');
                    if (dropContent) dropContent.style.display = 'none';
                }
            }
        });
    });

    if (closeAcademicsModalBtn) {
        closeAcademicsModalBtn.addEventListener('click', () => {
            academicsModal.style.display = 'none';
        });
    }

    window.addEventListener('click', (event) => {
        if (event.target === paymentModal) paymentModal.style.display = 'none';
        if (event.target === academicsModal) academicsModal.style.display = 'none';
        if (event.target === featuresModal) featuresModal.style.display = 'none';
    });

    // 9. Course Registration Credit Accumulator
    const updateCredits = () => {
        if (!totalCreditsDisplay) return;
        const total = Array.from(courseCheckboxes)
            .filter(box => box.checked)
            .reduce((sum, box) => sum + parseInt(box.getAttribute('data-credits') || 0, 10), 0);

        totalCreditsDisplay.textContent = total;
    };

    courseCheckboxes.forEach(box => {
        box.addEventListener('change', updateCredits);
    });

    if (submitRegBtn) {
        submitRegBtn.addEventListener('click', () => {
            const total = parseInt(totalCreditsDisplay.textContent, 10);
            if (total < 10) {
                alert("Course Registration Alert: You must select a minimum of 10 credits before submission.");
            } else {
                alert(`Success: Semester V Choice-Based Registration for ${studentName.textContent} has been locked and submitted successfully!`);
            }
        });
    }

    // ==========================================================================
    // 🔍 UNIVERSITY THEMED DYNAMIC SEARCH FILTER
    // ==========================================================================
    const searchInput = document.querySelector('.search-bar-container input');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            
            // 1. Filter Enrolled Subjects Table Rows
            const gradeRows = gradesTableBody.querySelectorAll('tr:not(.total-row)');
            let visibleGradesCount = 0;

            gradeRows.forEach(row => {
                const text = row.textContent.toLowerCase();
                if (text.includes(query)) {
                    row.style.display = '';
                    visibleGradesCount++;
                } else {
                    row.style.display = 'none';
                }
            });

            // Handle total row display
            const totalRow = gradesTableBody.querySelector('.total-row');
            if (totalRow) {
                totalRow.style.display = query === '' ? '' : 'none';
            }

            // 2. Filter Course Registration Table Rows
            const regTableBody = document.querySelector('.reg-table tbody');
            const regRows = regTableBody ? regTableBody.querySelectorAll('tr') : [];
            let visibleRegCount = 0;

            regRows.forEach(row => {
                const text = row.textContent.toLowerCase();
                if (text.includes(query)) {
                    row.style.display = '';
                    visibleRegCount++;
                } else {
                    row.style.display = 'none';
                }
            });

            // 3. UI Feedback
            removeNoResultsMessages();

            if (query !== '') {
                if (visibleGradesCount === 0 && gradeRows.length > 0) {
                    insertNoResultsMessage(gradesTableBody, 4, "No matching enrolled subjects found.");
                }
                if (visibleRegCount === 0 && regRows.length > 0) {
                    insertNoResultsMessage(regTableBody, 3, "No matching elective courses found.");
                }
            }
        });
    }

    function insertNoResultsMessage(tableBody, colSpan, message) {
        const tr = document.createElement('tr');
        tr.className = 'search-no-results-row';
        tr.innerHTML = `
            <td colspan="${colSpan}" style="text-align: center; padding: 30px; color: var(--slate-gray); background: #fafafa;">
                <i class="fas fa-search" style="color: var(--sky-blue); font-size: 20px; margin-bottom: 8px; display: block;"></i>
                <span style="font-weight: 500; font-size: 13px;">${message}</span>
            </td>
        `;
        tableBody.appendChild(tr);
    }

    function removeNoResultsMessages() {
        document.querySelectorAll('.search-no-results-row').forEach(el => el.remove());
    }

    // Initialize state dynamically using our Local Storage Session!
    updateStudentView(loggedInUser);
    updateCredits();
});