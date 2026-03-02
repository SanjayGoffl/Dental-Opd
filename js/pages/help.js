// ============================================
// DENTAL OPD — Help & Documentation
// ============================================

function renderHelp() {
    const faqs = [
        { q: 'How do I register a new patient?', a: 'Navigate to Patients → New Patient from the sidebar. Fill in the required fields (Name, Age, Gender, Phone) and click "Register Patient". A unique UHID will be auto-generated.' },
        { q: 'How does the approval workflow work?', a: 'Junior Residents submit diagnoses, treatment plans, and prescriptions. These are routed to Senior Residents or Professors for approval based on department hierarchy. You\'ll see pending items in the Approvals section.' },
        { q: 'How do I switch between roles?', a: 'Use the role switcher dropdown in the top navigation bar. This simulates different user roles for demonstration purposes. Each role shows different sidebar menus and dashboard views.' },
        { q: 'How do I request a radiograph?', a: 'From any patient\'s clinical examination, click "Investigations" or navigate to Investigations from the sidebar. Fill in the type, tooth/region, indication, and submit. Radiology will receive the request.' },
        { q: 'Can I modify a submitted treatment plan?', a: 'Treatment plans can be modified while in "Draft" status. Once submitted for approval, you must request a revision from the approving authority. Approved plans are locked.' },
        { q: 'How is the queue managed?', a: 'OP In-charge or Reception manages the queue. Patients are added when they arrive. Doctors can "Call" waiting patients, and mark them "Complete" when done. The board auto-refreshes every 30 seconds.' },
    ];

    return `
    <div class="page-header">
      <div>
        <h1>Help & Documentation</h1>
        <p class="text-secondary" style="margin-bottom:0;">User guide and frequently asked questions</p>
      </div>
    </div>

    <!-- Quick Links -->
    <div class="grid grid-3 gap-4 mb-5">
      ${[
            { icon: 'book-open', title: 'User Guide', desc: 'Complete walkthrough of all features', color: 'var(--primary)' },
            { icon: 'video', title: 'Video Tutorials', desc: 'Step-by-step video demonstrations', color: 'var(--accent)' },
            { icon: 'life-buoy', title: 'Support', desc: 'Contact IT support for assistance', color: 'var(--info)' },
        ].map(l => `
        <div class="card" style="cursor:pointer;transition:var(--transition);border-bottom:3px solid ${l.color};" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='none'">
          <div style="display:flex;align-items:center;gap:var(--sp-3);">
            <div style="width:40px;height:40px;border-radius:var(--radius);background:${l.color}15;display:flex;align-items:center;justify-content:center;">
              <i data-lucide="${l.icon}" style="width:20px;height:20px;color:${l.color};"></i>
            </div>
            <div>
              <div class="fw-semibold fs-sm">${l.title}</div>
              <div class="fs-xs text-muted">${l.desc}</div>
            </div>
          </div>
        </div>
      `).join('')}
    </div>

    <!-- FAQ -->
    <div class="form-section">
      <div class="form-section-title"><i data-lucide="message-circle-question" style="width:18px;height:18px;color:var(--primary);"></i> Frequently Asked Questions</div>
      ${faqs.map(f => `
        <div class="accordion-item">
          <div class="accordion-header" onclick="this.parentElement.classList.toggle('open')">
            <span>${f.q}</span>
          </div>
          <div class="accordion-body">
            <p class="fs-sm" style="color:var(--text-secondary);line-height:1.6;">${f.a}</p>
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Keyboard Shortcuts -->
    <div class="card mt-4">
      <div class="card-title mb-3">⌨️ Keyboard Shortcuts</div>
      <div class="grid grid-2 gap-2">
        ${[
            ['Ctrl + K', 'Quick Search'],
            ['Ctrl + N', 'New Patient'],
            ['Ctrl + P', 'Print Current Page'],
            ['Ctrl + S', 'Save / Submit Form'],
            ['Alt + D', 'Go to Dashboard'],
            ['Alt + Q', 'Go to Queue'],
        ].map(([key, desc]) => `
          <div style="display:flex;justify-content:space-between;padding:var(--sp-2);border-bottom:1px solid var(--border);">
            <span class="fs-sm">${desc}</span>
            <kbd style="background:var(--bg);padding:2px 8px;border-radius:var(--radius-sm);font-size:var(--fs-xs);border:1px solid var(--border-strong);">${key}</kbd>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Version -->
    <div class="text-center mt-5" style="color:var(--text-muted);font-size:var(--fs-xs);">
      Dental OPD Case Sheet System v1.0.0 • Built for College of Dental Sciences & Hospital
    </div>`;
}
