<?php 
$page_title = "+2 Senior Secondary (Arts, Science, Commerce) Admissions | NIOS Career Point Berhampur";
include 'includes/header.php'; 
?>

<main id="website">
    <!-- Academic Page Hero -->
    <section class="page-hero-academic">
        <div class="container">
            <nav class="breadcrumb-nav" aria-label="Breadcrumb">
                <a href="index.php">Home</a>
                <span class="breadcrumb-sep">/</span>
                <a href="plus-two.php">Courses</a>
                <span class="breadcrumb-sep">/</span>
                <span>+2 Senior Secondary</span>
            </nav>

            <span class="eyebrow">Class 12 Senior Secondary • Arts • Science • Commerce</span>
            <h1>+2 (Senior Secondary) Board Exam for Failed &amp; Dropout Students</h1>
            <p class="lead">
                Have you failed in Class 12 or discontinued your intermediate education due to personal or financial challenges? At NIOS Career Point Berhampur, you can complete your +2 through a Government Recognized Board with full college and competitive exam validity.
            </p>

            <div class="program-meta-strip">
                <div class="meta-box">
                    <span class="meta-box-label">Streams</span>
                    <span class="meta-box-val">Arts • Science • Commerce</span>
                </div>
                <div class="meta-box">
                    <span class="meta-box-label">Eligibility</span>
                    <span class="meta-box-val">Passed 10th / Failed 12th</span>
                </div>
                <div class="meta-box">
                    <span class="meta-box-label">Recognition</span>
                    <span class="meta-box-val">Equivalent to CHSE Odisha / CBSE</span>
                </div>
                <div class="meta-box">
                    <span class="meta-box-label">Scope</span>
                    <span class="meta-box-val">NEET, JEE, Degree &amp; Govt. Jobs</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Main Course Content Split -->
    <section class="section-spacing" style="background-color: var(--color-bg-canvas);">
        <div class="container">
            <div style="display: grid; grid-template-columns: 1.35fr 0.85fr; gap: var(--space-xl); align-items: flex-start;">
                <!-- Academic Description Column -->
                <div class="course-detail-body">
                    <div style="background-color: #FFFFFF; border: 1px solid var(--border-color); padding: var(--space-lg); margin-bottom: 2rem;">
                        <span class="eyebrow">Your Education Can Continue</span>
                        <h2>A Recognized Platform to Complete Class 12</h2>
                        <p>
                            Failing in Class 12 or missing an exam cycle in CHSE Odisha, CBSE, or other state boards often feels discouraging. However, the National Institute of Open Schooling (NIOS) allows candidates to complete intermediate education without losing years through Stream-2, Stream-1, and On-Demand Examinations (ODE).
                        </p>
                        <p>
                            At NIOS Career Point Berhampur (Estd. 2011), we have guided over 2,500 students to secure genuine +2 certifications. Whether you need science subjects for medical/engineering entrances, commerce subjects for banking and accounting, or arts subjects for civil services and law, we map out the ideal subject combination for high pass rates.
                        </p>

                        <h3 style="margin-top: 2rem;">Who Can Apply?</h3>
                        <ul class="academic-checklist">
                            <li><strong>Students who failed in Class 12:</strong> Transfer passed subject marks (TOC) from CBSE/CHSE and appear only for remaining papers.</li>
                            <li><strong>Discontinued Intermediate Learners:</strong> Candidates who dropped out of college due to personal or financial reasons.</li>
                            <li><strong>Working Students:</strong> Those balancing jobs who need flexible study hours and weekend assistance.</li>
                            <li><strong>Stream Switchers:</strong> Students wishing to change from Science to Arts or Commerce with flexible subject choices.</li>
                        </ul>
                    </div>

                    <!-- Streams Interactive Selector -->
                    <div style="background-color: #FFFFFF; border: 1px solid var(--border-color); padding: var(--space-lg); margin-bottom: 2rem;">
                        <span class="eyebrow">Interactive Stream Explorer</span>
                        <h3>Explore Available +2 Streams</h3>
                        <p>Select your desired intermediate academic stream below to view syllabus subjects, career opportunities, and practical lab support.</p>
                        
                        <div class="stream-tab-pills" role="tablist">
                            <button type="button" class="stream-pill-btn active" data-stream="stream-sci">Science Stream</button>
                            <button type="button" class="stream-pill-btn" data-stream="stream-comm">Commerce Stream</button>
                            <button type="button" class="stream-pill-btn" data-stream="stream-arts">Arts / Humanities</button>
                        </div>

                        <!-- Science Content -->
                        <div id="stream-sci" class="stream-detail-content" style="display: block;">
                            <h4 style="color: var(--color-navy); margin-bottom: 0.5rem;">Science Stream (PCM / PCB / PCMB)</h4>
                            <p style="font-size: 0.95rem; color: var(--color-text-secondary); margin-bottom: 1rem;">
                                Full academic equivalence for medical, engineering, nursing, and technical professions. Includes practical manual guidance and lab record verification.
                            </p>
                            <div class="feature-checklist">
                                <div class="feature-item">
                                    <span class="feature-icon">✓</span>
                                    <div><strong>Core Subjects:</strong> Physics, Chemistry, Biology, Mathematics, English, Computer Science.</div>
                                </div>
                                <div class="feature-item">
                                    <span class="feature-icon">✓</span>
                                    <div><strong>Entrances Validated:</strong> NEET (Medical &amp; BDS), JEE Main (Engineering), NISER, Pharmacy, BSc Nursing.</div>
                                </div>
                                <div class="feature-item">
                                    <span class="feature-icon">✓</span>
                                    <div><strong>Lab Practical Support:</strong> Step-by-step assistance with mandatory lab experiments and viva prep.</div>
                                </div>
                            </div>
                        </div>

                        <!-- Commerce Content -->
                        <div id="stream-comm" class="stream-detail-content" style="display: none;">
                            <h4 style="color: var(--color-navy); margin-bottom: 0.5rem;">Commerce Stream</h4>
                            <p style="font-size: 0.95rem; color: var(--color-text-secondary); margin-bottom: 1rem;">
                                Focused on commercial accounting, corporate principles, economics, and business computing. Perfect for future finance and managerial roles.
                            </p>
                            <div class="feature-checklist">
                                <div class="feature-item">
                                    <span class="feature-icon">✓</span>
                                    <div><strong>Core Subjects:</strong> Accountancy, Business Studies, Economics, English, Data Entry Operations.</div>
                                </div>
                                <div class="feature-item">
                                    <span class="feature-icon">✓</span>
                                    <div><strong>Career Gateways:</strong> CA Foundation, CS Foundation, CMA, B.Com Honours, BBA, Banking &amp; Financial Services.</div>
                                </div>
                                <div class="feature-item">
                                    <span class="feature-icon">✓</span>
                                    <div><strong>High Pass Pacing:</strong> Practical scoring subjects that simplify exam clearance for working students.</div>
                                </div>
                            </div>
                        </div>

                        <!-- Arts Content -->
                        <div id="stream-arts" class="stream-detail-content" style="display: none;">
                            <h4 style="color: var(--color-navy); margin-bottom: 0.5rem;">Arts &amp; Humanities Stream</h4>
                            <p style="font-size: 0.95rem; color: var(--color-text-secondary); margin-bottom: 1rem;">
                                Broad, rich curriculum covering social sciences, history, governance, and regional languages. Ideal for civil services and law aspirants.
                            </p>
                            <div class="feature-checklist">
                                <div class="feature-item">
                                    <span class="feature-icon">✓</span>
                                    <div><strong>Core Subjects:</strong> History, Political Science, Economics, Odia, Hindi, English, Sociology, Geography.</div>
                                </div>
                                <div class="feature-item">
                                    <span class="feature-icon">✓</span>
                                    <div><strong>Future Aspirations:</strong> UPSC Civil Services, OPSC, LLB Law (CLAT), Journalism, B.A Degrees, Teaching (B.Ed).</div>
                                </div>
                                <div class="feature-item">
                                    <span class="feature-icon">✓</span>
                                    <div><strong>Maximum Scoring Strategy:</strong> Tailored subject selections to secure high first-division percentages.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Benefits & Validity -->
                    <div style="background-color: #FFFFFF; border: 1px solid var(--border-color); padding: var(--space-lg);">
                        <span class="eyebrow">National Recognition</span>
                        <h3>Future Opportunities After Passing +2</h3>
                        <ul class="academic-checklist">
                            <li><strong>Degree Admissions:</strong> Eligible for admission into B.A, B.Com, B.Sc, BCA, BBA at Berhampur University, Utkal University, and all universities across India.</li>
                            <li><strong>National Competitive Entrances:</strong> Fully accepted for NEET, JEE Main, CUET, NDA, and CLAT exams.</li>
                            <li><strong>Government Recruitment:</strong> Recognized for Indian Army, Navy, Air Force, SSC GD/CHSL, Odisha Police, Postal, and Railway recruitment.</li>
                            <li><strong>Higher Studies Abroad &amp; Passports:</strong> Accepted by passport offices (ECNR status) and international credential evaluators.</li>
                        </ul>
                    </div>
                </div>

                <!-- Right Column: Enquiry Form Card -->
                <div class="course-sidebar">
                    <div class="enquiry-form-card" style="margin-bottom: 2rem;">
                        <span class="eyebrow" style="color: var(--color-red);">Enrolment Inquiries</span>
                        <h3 style="margin-bottom: 0.5rem;">Enquire for +2 Admissions</h3>
                        <p style="font-size: 0.88rem; margin-bottom: 1.5rem;">Receive personalized advice on stream selection and Transfer of Credit (TOC) rules.</p>

                        <form class="enquiry-form">
                            <div class="form-group">
                                <label for="form-name">Student Full Name *</label>
                                <input type="text" id="form-name" class="form-control" placeholder="Enter full name" required>
                            </div>
                            <div class="form-group">
                                <label for="form-phone">Mobile / WhatsApp Number *</label>
                                <input type="tel" id="form-phone" class="form-control" placeholder="e.g. 9398161800" required>
                            </div>
                            <div class="form-group">
                                <label for="form-stream">Preferred +2 Stream *</label>
                                <select id="form-stream" class="form-control">
                                    <option value="arts">Arts / Humanities</option>
                                    <option value="science">Science (PCB / PCM)</option>
                                    <option value="commerce">Commerce</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="form-status">Current Status</label>
                                <select id="form-status" class="form-control">
                                    <option value="failed-12">Failed in 12th Board</option>
                                    <option value="fresh-12">Passed 10th / Fresh +2</option>
                                    <option value="dropout">Discontinued College</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="form-notes">Prior Board &amp; Questions</label>
                                <textarea id="form-notes" class="form-control" placeholder="Mention previous board (e.g. CHSE Odisha, CBSE) and failed subjects if any"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary" style="width: 100%;">Submit Consultation Request →</button>
                        </form>
                    </div>

                    <!-- Fast Helpline Box -->
                    <div style="background-color: var(--color-navy); color: #FFFFFF; padding: var(--space-md); border-top: 3px solid var(--color-gold);">
                        <h4 style="color: #FFFFFF; margin-bottom: 0.4rem;">Direct Admission Helpline</h4>
                        <p style="color: rgba(255,255,255,0.8); font-size: 0.88rem; margin-bottom: 1rem;">Speak immediately with an admission advisor in Berhampur:</p>
                        <p style="font-size: 1.15rem; font-family: var(--font-serif); color: var(--color-gold); margin-bottom: 0.5rem;">
                            📞 +91 93981 61800
                        </p>
                        <p style="font-size: 0.82rem; color: rgba(255,255,255,0.65); margin-bottom: 0;">
                            📍 Gandhi Nagar 1st Lane Extn., Back Side of Sai Complex, Berhampur - 760001
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<?php include 'includes/footer.php'; ?>
