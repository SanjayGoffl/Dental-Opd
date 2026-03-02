// ============================================
// DENTAL OPD — Clinical Examination Page
// ============================================

function renderClinicalExam() {
    return `
    <div class="page-header">
      <div>
        <h1>Clinical Examination</h1>
        <p class="text-secondary" style="margin-bottom:0;">Extra-oral and intra-oral examination findings</p>
      </div>
      <div class="page-header-actions">
        <button class="btn btn-secondary">Save Draft</button>
        <button class="btn btn-primary"><i data-lucide="send" style="width:16px;height:16px;"></i> Submit</button>
      </div>
    </div>

    <!-- Patient Banner -->
    <div style="display:flex;align-items:center;gap:var(--sp-4);padding:var(--sp-3) var(--sp-4);background:var(--primary-bg);border-radius:var(--radius);margin-bottom:var(--sp-5);border:1px solid var(--primary-100);">
      <div class="avatar">R</div>
      <div><b>Ramesh Kumar</b> • UHID-2024-001 • 45/M</div>
    </div>

    <!-- General Examination -->
    <div class="form-section">
      <div class="form-section-title"><i data-lucide="eye" style="width:18px;height:18px;color:var(--primary);"></i> General Examination</div>
      <div class="form-row" style="grid-template-columns:repeat(3, 1fr);">
        <div class="form-group">
          <label class="form-label">Build</label>
          <select class="form-select"><option>Average</option><option>Thin</option><option>Obese</option></select>
        </div>
        <div class="form-group">
          <label class="form-label">Gait</label>
          <select class="form-select"><option selected>Normal</option><option>Abnormal</option></select>
        </div>
        <div class="form-group">
          <label class="form-label">Nourishment</label>
          <select class="form-select"><option selected>Well Nourished</option><option>Moderately</option><option>Malnourished</option></select>
        </div>
      </div>
    </div>

    <!-- Extra-Oral Examination -->
    <div class="form-section">
      <div class="form-section-title"><i data-lucide="scan-face" style="width:18px;height:18px;color:var(--accent);"></i> Extra-Oral Examination</div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Facial Symmetry</label>
          <select class="form-select"><option selected>Symmetrical</option><option>Asymmetrical</option></select>
        </div>
        <div class="form-group">
          <label class="form-label">Facial Profile</label>
          <select class="form-select"><option>Convex</option><option selected>Straight</option><option>Concave</option></select>
        </div>
        <div class="form-group">
          <label class="form-label">Lip Competency</label>
          <select class="form-select"><option selected>Competent</option><option>Incompetent</option></select>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">TMJ</label>
          <select class="form-select"><option selected>Normal</option><option>Click</option><option>Crepitus</option><option>Tenderness</option><option>Limited Opening</option></select>
        </div>
        <div class="form-group">
          <label class="form-label">Lymph Nodes</label>
          <select class="form-select"><option selected>Non-palpable</option><option>Palpable — Non-tender</option><option>Palpable — Tender</option></select>
        </div>
        <div class="form-group">
          <label class="form-label">Mouth Opening</label>
          <div style="display:flex;gap:var(--sp-2);align-items:center;">
            <input type="text" class="form-input" style="width:80px;" value="42" placeholder="mm">
            <span class="fs-sm text-muted">mm</span>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Extra-Oral Swelling</label>
        <textarea class="form-textarea" rows="2" placeholder="Describe any swelling...">No extra-oral swelling observed.</textarea>
      </div>
    </div>

    <!-- Intra-Oral Examination -->
    <div class="form-section">
      <div class="form-section-title"><i data-lucide="search" style="width:18px;height:18px;color:var(--info);"></i> Intra-Oral Examination</div>

      <!-- Soft Tissue -->
      <h4 class="mb-3 mt-2">Soft Tissue Examination</h4>
      <div class="form-row" style="grid-template-columns:repeat(2, 1fr);">
        ${[
            { label: 'Lips & Labial Mucosa', value: 'Normal' },
            { label: 'Buccal Mucosa', value: 'Normal' },
            { label: 'Tongue', value: 'Normal' },
            { label: 'Floor of Mouth', value: 'Normal' },
            { label: 'Palate (Hard & Soft)', value: 'Normal' },
            { label: 'Gingiva', value: 'Generalized mild inflammation' },
            { label: 'Tonsils & Pharynx', value: 'Normal' },
            { label: 'Vestibule', value: 'Normal' }
        ].map(t => `
          <div class="form-group">
            <label class="form-label">${t.label}</label>
            <input type="text" class="form-input" value="${t.value}">
          </div>
        `).join('')}
      </div>

      <!-- Hard Tissue -->
      <h4 class="mb-3 mt-6">Hard Tissue / Tooth Examination</h4>
      <div class="form-group">
        <label class="form-label">Teeth Present</label>
        <input type="text" class="form-input" value="Complete permanent dentition (28 teeth)" placeholder="List teeth present">
      </div>
      <div class="form-group">
        <label class="form-label">Tooth Under Examination</label>
        <div class="form-row" style="grid-template-columns:repeat(3, 1fr);">
          <div class="form-group">
            <label class="form-label">Tooth Number</label>
            <input type="text" class="form-input" value="46" placeholder="FDI notation">
          </div>
          <div class="form-group">
            <label class="form-label">Inspection</label>
            <input type="text" class="form-input" value="Deep carious lesion, discolored" placeholder="Visual findings">
          </div>
          <div class="form-group">
            <label class="form-label">Percussion</label>
            <select class="form-select"><option>Non-tender</option><option selected>Tender</option></select>
          </div>
        </div>
        <div class="form-row" style="grid-template-columns:repeat(3, 1fr);">
          <div class="form-group">
            <label class="form-label">Palpation</label>
            <select class="form-select"><option selected>Non-tender</option><option>Tender</option></select>
          </div>
          <div class="form-group">
            <label class="form-label">Mobility</label>
            <select class="form-select"><option selected>Grade 0</option><option>Grade I</option><option>Grade II</option><option>Grade III</option></select>
          </div>
          <div class="form-group">
            <label class="form-label">Vitality Test</label>
            <select class="form-select"><option>Positive (normal)</option><option>Positive (exaggerated)</option><option selected>Negative</option></select>
          </div>
        </div>
      </div>

      <!-- Periodontal -->
      <h4 class="mb-3 mt-6">Periodontal Assessment</h4>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Oral Hygiene Status</label>
          <select class="form-select"><option>Good</option><option selected>Fair</option><option>Poor</option></select>
        </div>
        <div class="form-group">
          <label class="form-label">Calculus</label>
          <select class="form-select"><option>None</option><option selected>Mild</option><option>Moderate</option><option>Severe</option></select>
        </div>
        <div class="form-group">
          <label class="form-label">Gingival Bleeding</label>
          <select class="form-select"><option>Absent</option><option selected>On probing</option><option>Spontaneous</option></select>
        </div>
      </div>
    </div>

    <!-- Additional Findings -->
    <div class="form-section">
      <div class="form-section-title"><i data-lucide="notepad-text" style="width:18px;height:18px;color:var(--text-muted);"></i> Additional Notes</div>
      <div class="form-group">
        <label class="form-label">Clinical Notes</label>
        <textarea class="form-textarea" rows="3" placeholder="Additional clinical observations...">Deep carious lesion on #46 with negative vitality. Tenderness on percussion. Suggestive of irreversible pulpitis with periapical involvement. Recommend IOPA radiograph for further evaluation.</textarea>
      </div>
    </div>

    <div style="display:flex;justify-content:space-between;margin-top:var(--sp-4);">
      <button class="btn btn-ghost" onclick="navigateTo('case-history')">← Case History</button>
      <div style="display:flex;gap:var(--sp-3);">
        <button class="btn btn-secondary">Save Draft</button>
        <button class="btn btn-primary btn-lg" onclick="navigateTo('dental-chart')"><i data-lucide="arrow-right" style="width:16px;height:16px;"></i> Dental Chart</button>
      </div>
    </div>`;
}
