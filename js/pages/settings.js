// ============================================
// DENTAL OPD — Settings Page
// ============================================

function renderSettings() {
    return `
    <div class="page-header">
      <div>
        <h1>Settings</h1>
        <p class="text-secondary" style="margin-bottom:0;">Application and user preferences</p>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:220px 1fr;gap:var(--sp-5);">

      <!-- Settings Sidebar -->
      <div style="display:flex;flex-direction:column;gap:var(--sp-1);">
        ${['Profile', 'Appearance', 'Notifications', 'Department', 'Users & Roles', 'System'].map((s, i) => `
          <button class="btn ${i === 0 ? 'btn-primary' : 'btn-ghost'}" style="justify-content:flex-start;text-align:left;">${s}</button>
        `).join('')}
      </div>

      <!-- Settings Content -->
      <div>
        <!-- Profile -->
        <div class="form-section">
          <div class="form-section-title"><i data-lucide="user" style="width:18px;height:18px;color:var(--primary);"></i> Profile Information</div>
          <div style="display:flex;align-items:center;gap:var(--sp-4);margin-bottom:var(--sp-4);">
            <div class="avatar" style="width:64px;height:64px;font-size:var(--fs-xl);">DC</div>
            <div>
              <div class="fw-semibold">Dr. Diva Chaitava</div>
              <div class="fs-sm text-muted">Junior Resident • Dept. of Conservative & Endodontics</div>
              <button class="btn btn-ghost btn-sm mt-2">Change Photo</button>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Full Name</label>
              <input type="text" class="form-input" value="Dr. Diva Chaitava">
            </div>
            <div class="form-group">
              <label class="form-label">Email</label>
              <input type="email" class="form-input" value="diva.chaitava@dental.edu">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Phone</label>
              <input type="text" class="form-input" value="+91 98765 43210">
            </div>
            <div class="form-group">
              <label class="form-label">Registration No.</label>
              <input type="text" class="form-input" value="DCI-2025-18273">
            </div>
          </div>
        </div>

        <!-- Appearance -->
        <div class="form-section">
          <div class="form-section-title"><i data-lucide="palette" style="width:18px;height:18px;color:var(--accent);"></i> Appearance</div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Theme</label>
              <select class="form-select"><option selected>Light</option><option>Dark</option><option>System</option></select>
            </div>
            <div class="form-group">
              <label class="form-label">Sidebar</label>
              <select class="form-select"><option selected>Expanded</option><option>Collapsed</option></select>
            </div>
            <div class="form-group">
              <label class="form-label">Font Size</label>
              <select class="form-select"><option>Small</option><option selected>Medium</option><option>Large</option></select>
            </div>
          </div>
        </div>

        <!-- Notifications -->
        <div class="form-section">
          <div class="form-section-title"><i data-lucide="bell" style="width:18px;height:18px;color:var(--info);"></i> Notification Preferences</div>
          ${[
            { label: 'Approval requests', desc: 'When a case requires your approval', checked: true },
            { label: 'Queue updates', desc: 'Patient added to your queue', checked: true },
            { label: 'Lab results', desc: 'Investigation reports ready', checked: true },
            { label: 'Appointment reminders', desc: '1 hour before scheduled appts', checked: false },
            { label: 'System announcements', desc: 'Updates, maintenance notices', checked: false },
        ].map(n => `
            <div style="display:flex;justify-content:space-between;align-items:center;padding:var(--sp-3);border-bottom:1px solid var(--border);">
              <div>
                <div class="fw-medium fs-sm">${n.label}</div>
                <div class="fs-xs text-muted">${n.desc}</div>
              </div>
              <label style="position:relative;width:44px;height:24px;">
                <input type="checkbox" ${n.checked ? 'checked' : ''} style="opacity:0;width:0;height:0;">
                <span style="position:absolute;cursor:pointer;inset:0;background:${n.checked ? 'var(--primary)' : 'var(--border-strong)'};border-radius:12px;transition:0.2s;">
                  <span style="position:absolute;width:18px;height:18px;background:white;border-radius:50%;top:3px;left:${n.checked ? '22px' : '3px'};transition:0.2s;box-shadow:0 1px 3px rgba(0,0,0,.2);"></span>
                </span>
              </label>
            </div>
          `).join('')}
        </div>

        <div style="display:flex;gap:var(--sp-3);justify-content:flex-end;margin-top:var(--sp-4);">
          <button class="btn btn-secondary">Cancel</button>
          <button class="btn btn-primary"><i data-lucide="save" style="width:16px;height:16px;"></i> Save Changes</button>
        </div>
      </div>
    </div>`;
}
