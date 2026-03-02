// ============================================
// DENTAL OPD — Appointments Calendar
// ============================================

function renderAppointments() {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dates = [10, 11, 12, 13, 14, 15];
    const hours = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '14:00', '14:30', '15:00', '15:30', '16:00'];

    const events = [
        { day: 0, start: 1, span: 2, name: 'Ramesh K', type: 'RCT (Obturation)', color: 'var(--primary-100)', border: 'var(--primary)' },
        { day: 0, start: 6, span: 1, name: 'Priya S', type: 'Scaling', color: '#E0F2FE', border: 'var(--info)' },
        { day: 1, start: 0, span: 2, name: 'Suresh M', type: 'Extraction #38', color: '#FEE2E2', border: 'var(--danger)' },
        { day: 1, start: 4, span: 2, name: 'Lakshmi V', type: 'Crown Cementation', color: '#FEF3C7', border: 'var(--warning)' },
        { day: 2, start: 2, span: 3, name: 'Kavitha R', type: 'RCT + Post & Core', color: 'var(--primary-100)', border: 'var(--primary)' },
        { day: 3, start: 0, span: 1, name: 'Arun P', type: 'Check-up', color: '#E0F2FE', border: 'var(--info)' },
        { day: 3, start: 8, span: 2, name: 'Deepa K', type: 'Composite Filling', color: '#ECFDF5', border: 'var(--success)' },
        { day: 4, start: 3, span: 2, name: 'Gopal N', type: 'Orthodontic Review', color: '#FEF3C7', border: 'var(--warning)' },
    ];

    return `
    <div class="page-header">
      <div>
        <h1>Appointments</h1>
        <p class="text-secondary" style="margin-bottom:0;">Weekly schedule and appointment management</p>
      </div>
      <div class="page-header-actions">
        <button class="btn btn-secondary"><i data-lucide="chevron-left" style="width:16px;height:16px;"></i></button>
        <span class="fw-semibold" style="padding:0 var(--sp-3);">Feb 10 – 15, 2026</span>
        <button class="btn btn-secondary"><i data-lucide="chevron-right" style="width:16px;height:16px;"></i></button>
        <button class="btn btn-primary"><i data-lucide="plus" style="width:16px;height:16px;"></i> New Appointment</button>
      </div>
    </div>

    <div class="calendar-wrapper">
      <div class="calendar-grid" style="grid-template-columns:60px repeat(${days.length}, 1fr);">
        <!-- Header Row -->
        <div class="calendar-header-cell"></div>
        ${days.map((d, i) => `
          <div class="calendar-header-cell ${i === 4 ? 'today' : ''}">
            <span class="fs-xs text-muted">${d}</span>
            <span class="fw-bold">${dates[i]}</span>
          </div>
        `).join('')}

        <!-- Time Slots -->
        ${hours.map((t, tIdx) => `
          <div class="calendar-time">${t}</div>
          ${days.map((_, dIdx) => {
        const ev = events.find(e => e.day === dIdx && e.start === tIdx);
        if (ev) {
            return `<div class="calendar-cell">
                <div class="calendar-event" style="height:calc(${ev.span} * 36px);background:${ev.color};border-left:3px solid ${ev.border};position:relative;z-index:2;">
                  <div class="fw-medium fs-xs">${ev.name}</div>
                  <div class="text-muted" style="font-size:10px;">${ev.type}</div>
                </div>
              </div>`;
        }
        const blocked = events.find(e => e.day === dIdx && tIdx > e.start && tIdx < e.start + e.span);
        if (blocked) return `<div class="calendar-cell"></div>`;
        return `<div class="calendar-cell"></div>`;
    }).join('')}
        `).join('')}
      </div>
    </div>

    <!-- Upcoming -->
    <div class="card mt-5">
      <div class="card-header"><div class="card-title">Upcoming Today</div></div>
      ${MOCK.appointments.map(apt => `
        <div style="display:flex;align-items:center;gap:var(--sp-3);padding:var(--sp-3);border-bottom:1px solid var(--border);">
          <div style="width:50px;text-align:center;color:var(--primary);font-weight:var(--fw-bold);font-size:var(--fs-sm);">${apt.time}</div>
          <div class="avatar avatar-sm">${apt.patient.charAt(0)}</div>
          <div style="flex:1;">
            <div class="fw-medium fs-sm">${apt.patient}</div>
            <div class="text-muted fs-xs">${apt.type} • Dr. ${apt.doctor}</div>
          </div>
          <span class="badge ${apt.status === 'Waiting' ? 'badge-pending' : apt.status === 'In Progress' ? 'badge-treatment' : 'badge-completed'}">${apt.status}</span>
        </div>
      `).join('')}
    </div>`;
}
