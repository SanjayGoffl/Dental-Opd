// ============================================
// DENTAL OPD — Patient Registration Form
// ============================================

function renderPatientRegister() {
    return `
    <div class="page-header">
      <div>
        <h1>Patient Registration</h1>
        <p class="text-secondary" style="margin-bottom:0;">Register a new patient in the system</p>
      </div>
      <div class="page-header-actions">
        <button class="btn btn-secondary" onclick="navigateTo('patients')">Cancel</button>
        <button class="btn btn-primary"><i data-lucide="save" style="width:16px;height:16px;"></i> Save & Create</button>
      </div>
    </div>

    <!-- Personal Information -->
    <div class="form-section">
      <div class="form-section-title"><i data-lucide="user" style="width:18px;height:18px;color:var(--primary);"></i> Personal Information</div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Full Name <span class="required">*</span></label>
          <input type="text" class="form-input" placeholder="Enter patient's full name">
        </div>
        <div class="form-group">
          <label class="form-label">Date of Birth <span class="required">*</span></label>
          <input type="date" class="form-input">
        </div>
        <div class="form-group">
          <label class="form-label">Gender <span class="required">*</span></label>
          <select class="form-select">
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Blood Group</label>
          <select class="form-select">
            <option value="">Select</option>
            <option>A+</option><option>A-</option><option>B+</option><option>B-</option>
            <option>AB+</option><option>AB-</option><option>O+</option><option>O-</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Aadhaar Number</label>
          <input type="text" class="form-input" placeholder="XXXX XXXX XXXX">
        </div>
        <div class="form-group">
          <label class="form-label">Occupation</label>
          <input type="text" class="form-input" placeholder="Enter occupation">
        </div>
      </div>
    </div>

    <!-- Contact Information -->
    <div class="form-section">
      <div class="form-section-title"><i data-lucide="phone" style="width:18px;height:18px;color:var(--primary);"></i> Contact Information</div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Phone Number <span class="required">*</span></label>
          <input type="tel" class="form-input" placeholder="+91 XXXXX XXXXX">
        </div>
        <div class="form-group">
          <label class="form-label">Email</label>
          <input type="email" class="form-input" placeholder="email@example.com">
        </div>
        <div class="form-group">
          <label class="form-label">Emergency Contact</label>
          <input type="tel" class="form-input" placeholder="+91 XXXXX XXXXX">
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Address <span class="required">*</span></label>
        <textarea class="form-textarea" rows="2" placeholder="Enter full address"></textarea>
      </div>
    </div>

    <!-- Medical History Summary -->
    <div class="form-section">
      <div class="form-section-title"><i data-lucide="heart-pulse" style="width:18px;height:18px;color:var(--danger);"></i> Quick Medical History</div>
      <div class="form-row" style="grid-template-columns:repeat(4, 1fr);">
        <label class="form-check"><input type="checkbox"> <span>Hypertension</span></label>
        <label class="form-check"><input type="checkbox"> <span>Diabetes</span></label>
        <label class="form-check"><input type="checkbox"> <span>Cardiac Disease</span></label>
        <label class="form-check"><input type="checkbox"> <span>Bleeding Disorder</span></label>
        <label class="form-check"><input type="checkbox"> <span>Asthma</span></label>
        <label class="form-check"><input type="checkbox"> <span>Epilepsy</span></label>
        <label class="form-check"><input type="checkbox"> <span>Hepatitis</span></label>
        <label class="form-check"><input type="checkbox"> <span>HIV/AIDS</span></label>
      </div>
      <div class="form-group mt-4">
        <label class="form-label">Known Allergies</label>
        <input type="text" class="form-input" placeholder="e.g., Penicillin, Sulfa drugs (comma-separated)">
      </div>
      <div class="form-group">
        <label class="form-label">Current Medications</label>
        <input type="text" class="form-input" placeholder="List current medications">
      </div>
    </div>

    <!-- Visit Details -->
    <div class="form-section">
      <div class="form-section-title"><i data-lucide="clipboard" style="width:18px;height:18px;color:var(--accent);"></i> Visit Details</div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Chief Complaint <span class="required">*</span></label>
          <textarea class="form-textarea" rows="2" placeholder="Describe the patient's primary concern"></textarea>
        </div>
        <div class="form-group">
          <label class="form-label">Referred By</label>
          <select class="form-select">
            <option value="">Self / Walk-in</option>
            <option>Dr. Referral</option>
            <option>Another Department</option>
            <option>Emergency</option>
          </select>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Assign to Doctor</label>
          <select class="form-select">
            ${MOCK.doctors.map(d => `<option>${d.name} — ${d.role}</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Visit Type</label>
          <select class="form-select">
            <option>New Patient</option>
            <option>Follow-up</option>
            <option>Emergency</option>
            <option>Referral</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Bottom Actions -->
    <div style="display:flex;justify-content:flex-end;gap:var(--sp-3);margin-top:var(--sp-4);">
      <button class="btn btn-secondary" onclick="navigateTo('patients')">Cancel</button>
      <button class="btn btn-primary btn-lg"><i data-lucide="save" style="width:16px;height:16px;"></i> Register Patient</button>
    </div>`;
}
