
// ---------- inline icon set (self-contained, no external icon package needed) ----------
const { useState, useEffect, useMemo } = React;

function makeIcon(paths, defaultStrokeWidth) {
  return function Icon({ size = 16, strokeWidth, className = '', style = {} }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth={strokeWidth || defaultStrokeWidth || 2} strokeLinecap="round" strokeLinejoin="round"
        className={className} style={{ display: 'block', flexShrink: 0, ...style }}
      >
        {paths}
      </svg>
    );
  };
}

const Clock = makeIcon(<><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>);
const Users = makeIcon(<><circle cx="9" cy="8" r="3.2" /><circle cx="17" cy="9.5" r="2.4" /><path d="M3 20.5c0-3.3 2.7-5.7 6-5.7s6 2.4 6 5.7" /><path d="M15.2 15.3c2.4.3 4 2.3 4 5.2" /></>);
const Calendar = makeIcon(<><rect x="3" y="5" width="18" height="16" rx="2" /><line x1="3" y1="10" x2="21" y2="10" /><line x1="8" y1="3" x2="8" y2="7" /><line x1="16" y1="3" x2="16" y2="7" /></>);
const FileSpreadsheet = makeIcon(<><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><path d="M14 3v6h6" /><line x1="8" y1="13" x2="16" y2="13" /><line x1="8" y1="17" x2="16" y2="17" /><line x1="12" y1="13" x2="12" y2="21" /></>);
const SettingsIcon = makeIcon(<><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1 1.55V21a2 2 0 0 1-4 0v-.09A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.55-1H3a2 2 0 0 1 0-4h.09A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.55V3a2 2 0 0 1 4 0v.09a1.7 1.7 0 0 0 1 1.55 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9a1.7 1.7 0 0 0 1.55 1H21a2 2 0 0 1 0 4h-.09a1.7 1.7 0 0 0-1.55 1z" /></>);
const Plus = makeIcon(<><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></>);
const Trash2 = makeIcon(<><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" /></>);
const Search = makeIcon(<><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></>);
const Check = makeIcon(<polyline points="20 6 9 17 4 12" />);
const X = makeIcon(<><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>);
const TrendingUp = makeIcon(<><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></>);
const Edit2 = makeIcon(<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />);
const ChevronLeft = makeIcon(<polyline points="15 18 9 12 15 6" />);
const ChevronRight = makeIcon(<polyline points="9 18 15 12 9 6" />);
const AlertTriangle = makeIcon(<><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></>);
const Stamp = makeIcon(<><rect x="4" y="13" width="16" height="6" rx="1" /><path d="M8 13V9a4 4 0 0 1 8 0v4" /><line x1="3" y1="21" x2="21" y2="21" /></>);
const Fingerprint = makeIcon(<>
  <path d="M12 4a7 7 0 0 0-7 7c0 2.8.8 4.6 1.3 6.4" />
  <path d="M12 4a7 7 0 0 1 7 7c0 1.6-.2 3.2-.7 4.6" />
  <path d="M9 9.2a3 3 0 0 1 6 0c0 4.3 1.4 6.6 2.1 8.8" />
  <path d="M8.4 12.6c0 3.2.9 5.4 2.1 7.6" />
  <path d="M12 9.2a2 2 0 0 1 2 2c0 3.8 1 5.9 2.3 8.2" />
  <path d="M6.3 10.4a9 9 0 0 0-.4 2.8c0 3.2.9 5.9 2.2 8.2" />
</>, 1.6);
const Upload = makeIcon(<><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></>);
const Download = makeIcon(<><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></>);
const Lock = makeIcon(<><rect x="4.5" y="10.5" width="15" height="9.5" rx="1.8" /><path d="M7.5 10.5V7.5a4.5 4.5 0 0 1 9 0v3" /><circle cx="12" cy="14.8" r="1.4" /></>);
const IndianRupee = function IndianRupee({ size = 16, style = {} }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" style={{ display: 'block', flexShrink: 0, ...style }}>
      <text x="12" y="17" textAnchor="middle" fontSize="17" fontWeight="700" fill="currentColor" fontFamily="sans-serif">₹</text>
    </svg>
  );
};


// ---------- localStorage-backed storage shim (replaces the claude.ai artifact storage API) ----------
window.storage = {
  async get(key, shared) {
    try {
      const raw = localStorage.getItem('timeledger:' + key);
      if (raw === null) return null;
      return { key, value: raw, shared: !!shared };
    } catch (err) { throw err; }
  },
  async set(key, value, shared) {
    localStorage.setItem('timeledger:' + key, value);
    return { key, value, shared: !!shared };
  },
  async delete(key, shared) {
    localStorage.removeItem('timeledger:' + key);
    return { key, deleted: true, shared: !!shared };
  },
  async list(prefix, shared) {
    const p = 'timeledger:' + (prefix || '');
    const keys = Object.keys(localStorage).filter(k => k.startsWith(p)).map(k => k.slice('timeledger:'.length));
    return { keys, prefix, shared: !!shared };
  },
};


// ---------- design tokens ----------
// "Ledger" identity: a working paper-ledger for a small business —
// deep forest ink, cream stock, a mono "typewriter" figure face,
// and a perforated tear-line where the header meets the page.
const C = {
  bg: '#F5F1E6',
  bgDot: '#EAE5D6',
  card: '#FFFFFF',
  cardAlt: '#FBF9F2',
  ink: '#1A1D23',
  inkSoft: '#6B7076',
  inkFaint: '#9AA0A6',
  border: '#E4E1D6',
  borderStrong: '#D8D3C3',
  headerBg: '#0F332C',
  headerBgLight: '#1D5C4F',
  brand: '#1F6F63',
  brandDark: '#154F46',
  brandSoft: '#E7F5EC',
  stamp: '#A8442E',
  gold: '#AD8A3D',
  onTime: '#2E8B57',
  late: '#C8891F',
  absent: '#C1453B',
  ot: '#3068C7',
  leave: '#7B5CB0',
};
const MONO = "'IBM Plex Mono', monospace";
const DISPLAY = "'Space Grotesk', sans-serif";

// ---------- helpers ----------
const pad = n => String(n).padStart(2, '0');
const todayISO = () => { const d = new Date(); return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`; };
const toMinutes = (hhmm) => {
  if (!hhmm) return null;
  const parts = hhmm.split(':');
  if (parts.length < 2) return null;
  const h = Number(parts[0]), m = Number(parts[1]);
  if (Number.isNaN(h) || Number.isNaN(m)) return null;
  return h * 60 + m;
};
const fmtINR = (n) => '₹' + Math.round(n || 0).toLocaleString('en-IN');
const monthKey = (dateStr) => dateStr.slice(0, 7);
const monthLabel = (ym) => {
  const [y, m] = ym.split('-').map(Number);
  return new Date(y, m - 1, 1).toLocaleDateString('en-IN', { month: 'long', year: 'numeric' });
};
const daysInMonth = (ym, basis) => {
  const [y, m] = ym.split('-').map(Number);
  if (basis === 'fixed30') return 30;
  if (basis === 'fixed26') return 26;
  return new Date(y, m, 0).getDate();
};
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 8);

// Age from a YYYY-MM-DD date of birth, accounting for whether the birthday has passed this year.
const calcAge = (dob) => {
  if (!dob) return null;
  const b = new Date(dob);
  if (Number.isNaN(b.getTime())) return null;
  const t = new Date();
  let age = t.getFullYear() - b.getFullYear();
  const beforeBirthday = t.getMonth() < b.getMonth() || (t.getMonth() === b.getMonth() && t.getDate() < b.getDate());
  if (beforeBirthday) age--;
  return age >= 0 ? age : null;
};
const fmtDOB = (dob) => {
  if (!dob) return '';
  const d = new Date(dob);
  if (Number.isNaN(d.getTime())) return dob;
  return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
};

// Reads an uploaded photo and downsizes it to a small square-ish JPEG data URL so
// staff photos don't blow up localStorage / backup file size.
function resizeImageFile(file, maxSize = 240) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        let { width, height } = img;
        if (width > height && width > maxSize) { height = Math.round(height * (maxSize / width)); width = maxSize; }
        else if (height >= width && height > maxSize) { width = Math.round(width * (maxSize / height)); height = maxSize; }
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', 0.82));
      };
      img.onerror = () => reject(new Error('Could not read that image.'));
      img.src = reader.result;
    };
    reader.onerror = () => reject(new Error('Could not read that file.'));
    reader.readAsDataURL(file);
  });
}

const DEFAULT_SETTINGS = { officeStart: '10:00', officeEnd: '18:00', otMultiplier: 1, daysBasis: 'calendar' };
const EMPTY_STAFF_DETAILS = { fatherName: '', address: '', dob: '', bankName: '', ifsc: '', accountNo: '', photo: '' };

// An employee can override the shop-wide office hours with their own shift.
// Falls back to the global default whenever a value isn't set.
function employeeHours(employee, settings) {
  return {
    start: (employee && employee.officeStart) || settings.officeStart,
    end: (employee && employee.officeEnd) || settings.officeEnd,
  };
}
const hasCustomHours = (employee) => !!(employee && employee.officeStart && employee.officeEnd);

// day-level pay calculation — deduction & OT computed per minute of the day's salary
function calcDay(record, employee, settings) {
  const ym = monthKey(record.date);
  const totalDays = daysInMonth(ym, settings.daysBasis);
  const perDaySalary = (employee.monthlySalary || 0) / totalDays;
  const hrs = employeeHours(employee, settings);
  const startMin = toMinutes(hrs.start);
  const endMin = toMinutes(hrs.end);
  const shiftMin = Math.max(1, endMin - startMin);
  const perMinRate = perDaySalary / shiftMin;

  if (record.status === 'absent') {
    return { lateMin: 0, earlyMin: 0, otMin: 0, deduction: perDaySalary, otPay: 0, dayPay: 0, perDaySalary, incomplete: false };
  }
  if (record.status === 'leave') {
    return { lateMin: 0, earlyMin: 0, otMin: 0, deduction: 0, otPay: 0, dayPay: perDaySalary, perDaySalary, incomplete: false };
  }
  const inMin = toMinutes(record.timeIn);
  const outMin = toMinutes(record.timeOut);
  if (inMin == null || outMin == null || outMin <= inMin) {
    return { lateMin: 0, earlyMin: 0, otMin: 0, deduction: perDaySalary, otPay: 0, dayPay: 0, perDaySalary, incomplete: true };
  }
  const lateMin = Math.max(0, inMin - startMin);
  const earlyMin = Math.max(0, endMin - outMin);
  const otMin = Math.max(0, outMin - endMin);
  const deduction = (lateMin + earlyMin) * perMinRate;
  const otPay = otMin * perMinRate * settings.otMultiplier;
  const dayPay = Math.max(0, perDaySalary - deduction) + otPay;
  return { lateMin, earlyMin, otMin, deduction, otPay, dayPay, perDaySalary, incomplete: false };
}

function dayStatusInfo(record, calc) {
  if (!record) return { text: 'Not marked', color: C.inkSoft, bg: '#EFEDE5', border: C.border };
  if (record.status === 'absent') return { text: 'Absent', color: C.absent, bg: '#FBEAE8', border: '#F2CFC9' };
  if (record.status === 'leave') return { text: 'Paid leave', color: C.leave, bg: '#F1ECFA', border: '#DED0F2' };
  if (calc.incomplete) return { text: 'Time missing', color: C.inkSoft, bg: '#EFEDE5', border: C.border };
  const bits = [];
  if (calc.lateMin > 0) bits.push(`Late ${calc.lateMin}m`);
  if (calc.earlyMin > 0) bits.push(`Left early ${calc.earlyMin}m`);
  if (calc.otMin > 0) bits.push(`OT ${calc.otMin}m`);
  if (bits.length === 0) return { text: 'On time', color: C.onTime, bg: '#E7F5EC', border: '#C8E8D3' };
  const color = calc.otMin > 0 && calc.lateMin === 0 && calc.earlyMin === 0 ? C.ot : C.late;
  return { text: bits.join(' · '), color, bg: color === C.ot ? '#EAF1FC' : '#FBF1E1', border: color === C.ot ? '#CFDFF7' : '#F0DDB0' };
}

// ---------- shared style bits ----------
const cardShadow = '0 1px 2px rgba(15,51,44,0.05), 0 1px 1px rgba(15,51,44,0.04)';
const btnBase = {
  fontFamily: "'Inter', sans-serif",
  transition: 'transform 120ms ease, background 120ms ease, box-shadow 120ms ease, border-color 120ms ease',
};

function IconBadge({ icon: Icon, color, bg, size = 30 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: 9999, background: bg, color,
      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
    }}>
      <Icon size={Math.round(size * 0.52)} strokeWidth={2.25} />
    </div>
  );
}

// Ink-stamp badge — the page's one signature motif, used wherever a day's
// status is reported (today card, ledger rows).
function StampChip({ text, color, bg, border, compact }) {
  return (
    <span
      className="inline-flex items-center gap-1 font-semibold"
      style={{
        color, background: bg, border: `1px solid ${border}`,
        borderRadius: 9999, letterSpacing: '0.02em',
        padding: compact ? '3px 9px' : '4px 11px',
        fontSize: compact ? 11 : 12,
        fontFamily: "'Inter', sans-serif",
        whiteSpace: 'nowrap',
      }}
    >
      {text}
    </span>
  );
}

function PrimaryButton({ children, onClick, disabled, icon: Icon, type = 'button', full }) {
  return (
    <button type={type} onClick={onClick} disabled={disabled}
      className={`px-4 py-2.5 rounded-lg text-sm font-semibold text-white flex items-center justify-center gap-1.5 disabled:opacity-40 disabled:cursor-not-allowed ${full ? 'w-full' : ''}`}
      style={{ ...btnBase, background: C.brand, boxShadow: disabled ? 'none' : '0 1px 2px rgba(21,79,70,0.35)' }}
      onMouseDown={e => { if (!disabled) e.currentTarget.style.transform = 'scale(0.97)'; }}
      onMouseUp={e => { e.currentTarget.style.transform = 'scale(1)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
    >
      {Icon && <Icon size={15} />}
      {children}
    </button>
  );
}

function SecondaryButton({ children, onClick, icon: Icon, color }) {
  return (
    <button type="button" onClick={onClick}
      className="px-3.5 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 bg-white"
      style={{ ...btnBase, border: `1px solid ${color ? color + '55' : C.border}`, color: color || C.inkSoft }}
    >
      {Icon && <Icon size={13} />}
      {children}
    </button>
  );
}

// ---------- small presentational bits ----------
function LiveClock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => { const t = setInterval(() => setNow(new Date()), 1000); return () => clearInterval(t); }, []);
  const time = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
  const date = now.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  return (
    <div>
      <div style={{ fontFamily: MONO, letterSpacing: '0.02em' }} className="text-4xl sm:text-5xl font-semibold text-white tabular-nums">{time}</div>
      <div className="text-sm text-white mt-1" style={{ opacity: 0.72 }}>{date}</div>
    </div>
  );
}

function EmptyState({ icon: Icon, text, sub }) {
  return (
    <div className="text-center py-14 rounded-xl" style={{ border: `1.5px dashed ${C.borderStrong}`, background: C.cardAlt }}>
      <div className="mx-auto mb-3 flex items-center justify-center" style={{
        width: 48, height: 48, borderRadius: 9999, border: `1.5px dashed ${C.borderStrong}`, color: C.inkFaint,
      }}>
        <Icon size={20} />
      </div>
      <div className="text-sm font-semibold" style={{ color: C.ink, fontFamily: DISPLAY }}>{text}</div>
      {sub && <div className="text-xs mt-1.5 max-w-xs mx-auto leading-relaxed" style={{ color: C.inkSoft }}>{sub}</div>}
    </div>
  );
}

// A simple PIN gate — used to keep History locked until the correct
// password is entered. Nobody can view or edit past records without it.
const HISTORY_PASSWORD = '3415';
function PasswordGate({ onUnlock, title, sub }) {
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);
  const inputRef = React.useRef(null);

  const submit = (e) => {
    if (e) e.preventDefault();
    if (pin === HISTORY_PASSWORD) { setError(false); onUnlock(); }
    else { setError(true); setPin(''); if (inputRef.current) inputRef.current.focus(); }
  };

  return (
    <div className="text-center py-14 rounded-xl" style={{ border: `1.5px dashed ${C.borderStrong}`, background: C.cardAlt }}>
      <div className="mx-auto mb-3 flex items-center justify-center" style={{
        width: 48, height: 48, borderRadius: 9999, border: `1.5px dashed ${C.borderStrong}`, color: C.inkFaint,
      }}>
        <Lock size={20} />
      </div>
      <div className="text-sm font-semibold" style={{ color: C.ink, fontFamily: DISPLAY }}>{title || 'This section is locked'}</div>
      {sub && <div className="text-xs mt-1.5 max-w-xs mx-auto leading-relaxed" style={{ color: C.inkSoft }}>{sub}</div>}
      <form onSubmit={submit} className="mt-4 flex items-center justify-center gap-2">
        <input
          ref={inputRef}
          type="password"
          inputMode="numeric"
          autoComplete="off"
          value={pin}
          onChange={e => { setPin(e.target.value.replace(/\D/g, '').slice(0, 8)); setError(false); }}
          placeholder="Enter password"
          className="border rounded-lg px-3 py-2 text-sm text-center bg-white w-40"
          style={{ borderColor: error ? C.absent : C.border, fontFamily: MONO, letterSpacing: '0.15em' }}
        />
        <PrimaryButton type="submit" icon={Lock}>Unlock</PrimaryButton>
      </form>
      {error && <div className="text-xs mt-2 font-medium" style={{ color: C.absent }}>Incorrect password. Try again.</div>}
    </div>
  );
}

function MiniStat({ label, value, color }) {
  return (
    <div>
      <div className="text-base font-semibold tabular-nums" style={{ fontFamily: MONO, color }}>{value}</div>
      <div className="text-[10px] uppercase font-medium mt-0.5" style={{ color: C.inkFaint, letterSpacing: '0.06em' }}>{label}</div>
    </div>
  );
}

function Toast({ toast }) {
  if (!toast) return null;
  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 px-4 py-2.5 rounded-lg text-sm text-white z-50 flex items-center gap-2"
      style={{ background: toast.type === 'error' ? C.absent : C.headerBg, boxShadow: '0 8px 20px rgba(15,51,44,0.35)' }}>
      {toast.type !== 'error' && <Check size={14} />}
      {toast.msg}
    </div>
  );
}

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="mb-1">
      {eyebrow && <div className="text-[10px] uppercase font-semibold mb-0.5" style={{ color: C.gold, letterSpacing: '0.09em' }}>{eyebrow}</div>}
      {title && <div className="text-base font-semibold" style={{ fontFamily: DISPLAY, color: C.ink }}>{title}</div>}
    </div>
  );
}

// ---------- Today tab ----------
function TodayCard({ employee, record, date, settings, onUpdate }) {
  const rec = record || { status: null, timeIn: '', timeOut: '' };
  const calc = calcDay({ ...rec, date, status: rec.status || 'present' }, employee, settings);
  const info = dayStatusInfo(record, calc);
  const isPresent = rec.status === 'present' || rec.status === null;
  const hrs = employeeHours(employee, settings);
  const custom = hasCustomHours(employee);

  const setField = (field, value) => onUpdate(employee.id, { [field]: value, status: 'present' });
  const setStatus = (status) => {
    if (status === 'present' && !rec.timeIn && !rec.timeOut) {
      onUpdate(employee.id, { status, timeIn: hrs.start, timeOut: hrs.end });
    } else {
      onUpdate(employee.id, { status });
    }
  };
  const stampNow = (field) => { const d = new Date(); setField(field, `${pad(d.getHours())}:${pad(d.getMinutes())}`); };

  const initials = employee.name.trim().split(/\s+/).slice(0, 2).map(w => w[0]?.toUpperCase()).join('');

  return (
    <div className="bg-white rounded-xl overflow-hidden" style={{ border: `1px solid ${C.border}`, borderLeft: `4px solid ${info.color}`, boxShadow: cardShadow }}>
      <div className="p-4">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-3 min-w-0">
            <div style={{
              width: 36, height: 36, borderRadius: 9999, background: C.brandSoft, color: C.brandDark,
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700,
              fontFamily: DISPLAY, flexShrink: 0,
            }}>{initials}</div>
            <div className="min-w-0">
              <div className="font-semibold text-sm truncate" style={{ color: C.ink, fontFamily: DISPLAY }}>{employee.name}</div>
              <div className="text-xs tabular-nums flex items-center gap-1.5 flex-wrap" style={{ fontFamily: MONO, color: C.inkSoft }}>
                <span>{fmtINR(employee.monthlySalary)}/mo</span>
                <span style={{ color: C.inkFaint }}>·</span>
                <span style={{ color: custom ? C.gold : C.inkSoft }}>{hrs.start}–{hrs.end}{custom ? ' (custom)' : ''}</span>
              </div>
            </div>
          </div>
          <StampChip text={info.text} color={info.color} bg={info.bg} border={info.border} />
        </div>

        <div className="flex gap-1.5 mt-3.5 p-1 rounded-lg" style={{ background: C.cardAlt, border: `1px solid ${C.border}` }}>
          {[['present', 'Present'], ['absent', 'Absent'], ['leave', 'Leave']].map(([s, label]) => (
            <button key={s} onClick={() => setStatus(s)}
              className="text-xs px-2.5 py-1.5 rounded-md font-semibold flex-1"
              style={{ ...btnBase, background: rec.status === s ? C.brand : 'transparent', color: rec.status === s ? '#fff' : C.inkSoft }}>
              {label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 mt-3.5" style={{ opacity: isPresent ? 1 : 0.4, pointerEvents: isPresent ? 'auto' : 'none' }}>
          <div>
            <label className="text-[10px] uppercase font-medium" style={{ color: C.inkFaint, letterSpacing: '0.06em' }}>Time in</label>
            <div className="flex gap-1.5 mt-1">
              <input type="time" value={rec.timeIn || ''} onChange={e => setField('timeIn', e.target.value)}
                style={{ fontFamily: MONO, borderColor: C.border }}
                className="border rounded-lg px-2 py-1.5 text-sm flex-1 min-w-0 bg-white" />
              <button onClick={() => stampNow('timeIn')} className="text-xs px-2.5 rounded-lg font-semibold whitespace-nowrap"
                style={{ ...btnBase, border: `1px solid ${C.brand}55`, color: C.brand }}>Now</button>
            </div>
          </div>
          <div>
            <label className="text-[10px] uppercase font-medium" style={{ color: C.inkFaint, letterSpacing: '0.06em' }}>Time out</label>
            <div className="flex gap-1.5 mt-1">
              <input type="time" value={rec.timeOut || ''} onChange={e => setField('timeOut', e.target.value)}
                style={{ fontFamily: MONO, borderColor: C.border }}
                className="border rounded-lg px-2 py-1.5 text-sm flex-1 min-w-0 bg-white" />
              <button onClick={() => stampNow('timeOut')} className="text-xs px-2.5 rounded-lg font-semibold whitespace-nowrap"
                style={{ ...btnBase, border: `1px solid ${C.brand}55`, color: C.brand }}>Now</button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-3.5 pt-3.5" style={{ borderTop: `1px dashed ${C.border}` }}>
          <span className="text-xs font-medium" style={{ color: C.inkSoft }}>Day pay</span>
          <span className="text-sm font-bold tabular-nums" style={{ fontFamily: MONO, color: C.brandDark }}>{fmtINR(calc.dayPay)}</span>
        </div>
      </div>
    </div>
  );
}

function TodayTab({ date, setDate, employees, attendance, settings, upsertAttendance, unlocked, setUnlocked }) {
  const [query, setQuery] = useState('');
  const records = useMemo(() => {
    const map = {};
    attendance.filter(a => a.date === date).forEach(a => { map[a.employeeId] = a; });
    return map;
  }, [attendance, date]);

  const filtered = employees.filter(e => e.name.toLowerCase().includes(query.toLowerCase()));

  const totals = useMemo(() => {
    let present = 0, absent = 0, leave = 0, unmarked = 0;
    employees.forEach(e => {
      const r = records[e.id];
      if (!r) unmarked++;
      else if (r.status === 'present') present++;
      else if (r.status === 'absent') absent++;
      else if (r.status === 'leave') leave++;
    });
    return { present, absent, leave, unmarked };
  }, [employees, records]);

  const changeDate = (delta) => {
    const d = new Date(date + 'T00:00:00');
    d.setDate(d.getDate() + delta);
    setDate(`${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`);
  };

  const onUpdate = (employeeId, patch) => upsertAttendance(employeeId, date, patch);

  if (!unlocked) {
    return (
      <PasswordGate
        onUnlock={() => setUnlocked(true)}
        title="Today is locked"
        sub="Enter the password to view or mark today's attendance."
      />
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2">
        <button onClick={() => changeDate(-1)} className="p-2.5 rounded-lg bg-white" style={{ ...btnBase, border: `1px solid ${C.border}`, boxShadow: cardShadow }}><ChevronLeft size={16} /></button>
        <div className="flex items-center gap-2">
          <input type="date" value={date} onChange={e => setDate(e.target.value)}
            style={{ fontFamily: MONO, borderColor: C.border }}
            className="border rounded-lg px-2.5 py-2 text-sm text-center bg-white" />
          {date === todayISO() && <StampChip text="Today" color={C.onTime} bg="#E7F5EC" border="#C8E8D3" compact />}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => changeDate(1)} className="p-2.5 rounded-lg bg-white" style={{ ...btnBase, border: `1px solid ${C.border}`, boxShadow: cardShadow }}><ChevronRight size={16} /></button>
          <button onClick={() => setUnlocked(false)} title="Lock Today again"
            className="p-2.5 rounded-lg bg-white" style={{ ...btnBase, border: `1px solid ${C.border}`, boxShadow: cardShadow, color: C.inkFaint }}>
            <Lock size={15} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 text-center">
        {[['Present', totals.present, C.onTime], ['Absent', totals.absent, C.absent], ['Leave', totals.leave, C.leave], ['Unmarked', totals.unmarked, C.inkSoft]].map(([label, val, color]) => (
          <div key={label} className="bg-white rounded-lg py-2.5" style={{ border: `1px solid ${C.border}`, boxShadow: cardShadow }}>
            <div className="text-lg font-bold tabular-nums" style={{ fontFamily: MONO, color }}>{val}</div>
            <div className="text-[10px] uppercase font-medium mt-0.5" style={{ color: C.inkFaint, letterSpacing: '0.05em' }}>{label}</div>
          </div>
        ))}
      </div>

      {employees.length > 3 && (
        <div className="relative">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: C.inkFaint }} />
          <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search staff…"
            className="w-full border rounded-lg pl-9 pr-3 py-2.5 text-sm bg-white" style={{ borderColor: C.border }} />
        </div>
      )}

      {employees.length === 0 ? (
        <EmptyState icon={Users} text="No staff added yet" sub="Go to the Staff tab to add your first team member." />
      ) : (
        <div className="space-y-3">
          {filtered.map(e => <TodayCard key={e.id} employee={e} record={records[e.id]} date={date} settings={settings} onUpdate={onUpdate} />)}
        </div>
      )}
    </div>
  );
}

// ---------- Punch tab (thumb-impression clock in / clock out) ----------
// There's no real fingerprint sensor available to a web page, so this
// simulates the kiosk experience: staff tap their name's scan pad, hold
// for a moment while it "reads" the print, then it's stamped with the
// exact time — first tap of the day clocks in, the next clocks out.
function punchState(rec) {
  if (!rec || (!rec.timeIn && !rec.timeOut)) return 'out';
  if (rec.timeIn && !rec.timeOut) return 'in';
  if (rec.timeIn && rec.timeOut) return 'done';
  return 'out';
}

function PunchPad({ employee, record, scanning, onPunch }) {
  const state = punchState(record);
  const initials = employee.name.trim().split(/\s+/).slice(0, 2).map(w => w[0]?.toUpperCase()).join('');
  const info = state === 'in'
    ? { text: `Clocked in ${record.timeIn}`, color: C.onTime, bg: '#E7F5EC', border: '#C8E8D3' }
    : state === 'done'
      ? { text: <><Check size={11} strokeWidth={3} style={{ marginRight: 3, verticalAlign: -1 }} />Done · {record.timeIn}–{record.timeOut}</>, color: C.ot, bg: '#EAF1FC', border: '#CFDFF7' }
      : { text: 'Not clocked in', color: C.inkFaint, bg: '#EFEDE5', border: C.border };
  const actionLabel = state === 'in' ? 'Tap to clock out' : state === 'done' ? 'Finished for today' : 'Tap to clock in';

  return (
    <div className="bg-white rounded-xl p-4 flex items-center gap-3.5" style={{ border: `1px solid ${C.border}`, boxShadow: cardShadow }}>
      <div style={{
        width: 38, height: 38, borderRadius: 9999, background: C.brandSoft, color: C.brandDark,
        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700,
        fontFamily: DISPLAY, flexShrink: 0, overflow: 'hidden',
      }}>
        {employee.photo ? <img src={employee.photo} alt={employee.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : initials}
      </div>

      <div className="flex-1 min-w-0">
        <div className="font-semibold text-sm truncate" style={{ color: C.ink, fontFamily: DISPLAY }}>{employee.name}</div>
        <div className="mt-1 flex items-center gap-1.5">
          {state === 'in' && (
            <span style={{ position: 'relative', width: 6, height: 6, flexShrink: 0 }}>
              <span style={{ position: 'absolute', inset: 0, borderRadius: 9999, background: C.onTime }} />
              <span style={{ position: 'absolute', inset: 0, borderRadius: 9999, background: C.onTime, animation: 'livePulse 1.7s ease-out infinite' }} />
            </span>
          )}
          <StampChip text={info.text} color={info.color} bg={info.bg} border={info.border} compact />
        </div>
      </div>

      <button
        onClick={() => onPunch(employee)}
        disabled={state === 'done' || !!scanning}
        aria-label={actionLabel}
        title={actionLabel}
        className="relative flex items-center justify-center disabled:cursor-not-allowed"
        style={{
          ...btnBase, width: 56, height: 56, borderRadius: 9999, flexShrink: 0,
          background: state === 'done' ? '#EAF1FC' : (state === 'in' ? '#FBF1E1' : C.brandSoft),
          border: `1.5px solid ${state === 'done' ? '#CFDFF7' : (state === 'in' ? '#F0DDB0' : C.brand + '55')}`,
          color: state === 'done' ? C.ot : (state === 'in' ? C.late : C.brandDark),
          animation: state === 'in' && !scanning ? 'idlePulse 2.4s ease-in-out infinite' : 'none',
        }}
      >
        {scanning && (
          <span style={{
            position: 'absolute', inset: -4, borderRadius: 9999,
            border: `2px solid ${state === 'in' ? C.late : C.brand}`,
            animation: 'punchPulse 1s ease-out infinite',
          }} />
        )}
        {state === 'done'
          ? <Check size={22} strokeWidth={2.2} style={{ animation: 'checkPop 0.4s ease-out' }} />
          : (scanning ? <Fingerprint size={22} strokeWidth={1.6} style={{ animation: 'punchGlow 0.9s ease-in-out infinite' }} /> : <Fingerprint size={22} strokeWidth={1.6} />)}
      </button>
    </div>
  );
}

function PunchTab({ employees, attendance, date, upsertAttendance, showToast }) {
  const [scanningId, setScanningId] = useState(null);
  const [query, setQuery] = useState('');

  const records = useMemo(() => {
    const map = {};
    attendance.filter(a => a.date === date).forEach(a => { map[a.employeeId] = a; });
    return map;
  }, [attendance, date]);

  const filtered = employees.filter(e => e.name.toLowerCase().includes(query.toLowerCase()));

  const counts = useMemo(() => {
    let clockedIn = 0, done = 0, notYet = 0;
    employees.forEach(e => {
      const s = punchState(records[e.id]);
      if (s === 'in') clockedIn++; else if (s === 'done') done++; else notYet++;
    });
    return { clockedIn, done, notYet };
  }, [employees, records]);

  const handlePunch = (employee) => {
    if (scanningId) return;
    const state = punchState(records[employee.id]);
    if (state === 'done') return;
    setScanningId(employee.id);
    setTimeout(() => {
      const d = new Date();
      const hhmm = `${pad(d.getHours())}:${pad(d.getMinutes())}`;
      if (state === 'out') {
        upsertAttendance(employee.id, date, { status: 'present', timeIn: hhmm, timeOut: '' });
        showToast(`${employee.name} clocked in at ${hhmm}`);
      } else {
        upsertAttendance(employee.id, date, { timeOut: hhmm });
        showToast(`${employee.name} clocked out at ${hhmm}`);
      }
      setScanningId(null);
    }, 950);
  };

  return (
    <div className="space-y-4">
      <div className="rounded-xl p-4 text-white flex items-center gap-3.5" style={{
        background: `linear-gradient(135deg, ${C.headerBg}, ${C.headerBgLight})`,
        backgroundImage: `radial-gradient(circle at 7px 7px, rgba(255,255,255,0.05) 1.4px, transparent 1.6px), linear-gradient(135deg, ${C.headerBg}, ${C.headerBgLight})`,
        backgroundSize: '16px 16px, 100% 100%',
      }}>
        <IconBadge icon={Fingerprint} color="#fff" bg="rgba(255,255,255,0.14)" size={40} />
        <div className="flex-1">
          <div className="text-sm font-semibold" style={{ fontFamily: DISPLAY }}>Thumb impression</div>
          <div className="text-xs mt-0.5" style={{ opacity: 0.75 }}>Staff tap their pad below to clock in, tap again to clock out.</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center">
        {[['Clocked in', counts.clockedIn, C.onTime], ['Finished', counts.done, C.ot], ['Not yet', counts.notYet, C.late]].map(([label, val, color]) => (
          <div key={label} className="bg-white rounded-lg py-2.5" style={{ border: `1px solid ${C.border}`, boxShadow: cardShadow }}>
            <div className="text-lg font-bold tabular-nums" style={{ fontFamily: MONO, color }}>{val}</div>
            <div className="text-[10px] uppercase font-medium mt-0.5" style={{ color: C.inkFaint, letterSpacing: '0.05em' }}>{label}</div>
          </div>
        ))}
      </div>

      {employees.length > 4 && (
        <div className="relative">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: C.inkFaint }} />
          <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search staff…"
            className="w-full border rounded-lg pl-9 pr-3 py-2.5 text-sm bg-white" style={{ borderColor: C.border }} />
        </div>
      )}

      {employees.length === 0 ? (
        <EmptyState icon={Fingerprint} text="No staff added yet" sub="Go to the Staff tab to add your first team member, then they can punch in here." />
      ) : (
        <div className="space-y-2.5">
          {filtered.map(e => (
            <PunchPad key={e.id} employee={e} record={records[e.id]} scanning={scanningId === e.id} onPunch={handlePunch} />
          ))}
        </div>
      )}
    </div>
  );
}

// ---------- Staff tab ----------
function HoursFields({ useCustom, setUseCustom, start, setStart, end, setEnd, defaultHrs }) {
  return (
    <div className="rounded-lg p-3" style={{ background: C.cardAlt, border: `1px solid ${C.border}` }}>
      <label className="flex items-center gap-2 text-xs font-semibold cursor-pointer" style={{ color: C.ink }}>
        <input type="checkbox" checked={useCustom} onChange={e => setUseCustom(e.target.checked)}
          style={{ width: 15, height: 15, accentColor: C.brand }} />
        Custom office hours for this employee
      </label>
      {useCustom ? (
        <div className="grid grid-cols-2 gap-3 mt-2.5">
          <div>
            <label className="text-[10px] uppercase font-medium" style={{ color: C.inkFaint, letterSpacing: '0.06em' }}>Start</label>
            <input type="time" value={start} onChange={e => setStart(e.target.value)} className="border rounded-lg px-2 py-1.5 text-sm block w-full mt-1 bg-white" style={{ borderColor: C.border, fontFamily: MONO }} />
          </div>
          <div>
            <label className="text-[10px] uppercase font-medium" style={{ color: C.inkFaint, letterSpacing: '0.06em' }}>End</label>
            <input type="time" value={end} onChange={e => setEnd(e.target.value)} className="border rounded-lg px-2 py-1.5 text-sm block w-full mt-1 bg-white" style={{ borderColor: C.border, fontFamily: MONO }} />
          </div>
        </div>
      ) : (
        <div className="text-xs mt-1.5" style={{ color: C.inkSoft }}>Uses the shop default — {defaultHrs.start}–{defaultHrs.end}. Change this in Settings, or check the box to set a shift just for this person.</div>
      )}
    </div>
  );
}

function PhotoUpload({ photo, onChange }) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const inputRef = React.useRef(null);

  const handleFile = async (e) => {
    const file = e.target.files && e.target.files[0];
    e.target.value = '';
    if (!file) return;
    if (!file.type.startsWith('image/')) { setError('Please choose an image file.'); return; }
    setBusy(true); setError('');
    try { onChange(await resizeImageFile(file)); }
    catch (err) { setError(err.message || 'Could not use that photo.'); }
    finally { setBusy(false); }
  };

  return (
    <div className="flex items-center gap-3">
      <div style={{
        width: 52, height: 52, borderRadius: 9999, flexShrink: 0, overflow: 'hidden',
        background: C.brandSoft, display: 'flex', alignItems: 'center', justifyContent: 'center',
        border: `1px solid ${C.border}`,
      }}>
        {photo ? <img src={photo} alt="Staff" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <Users size={20} style={{ color: C.brandDark }} />}
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex gap-2">
          <button type="button" onClick={() => inputRef.current && inputRef.current.click()} disabled={busy}
            className="px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 disabled:opacity-40"
            style={{ ...btnBase, border: `1px solid ${C.border}`, color: C.ink, background: C.card }}>
            <Upload size={12} /> {busy ? 'Uploading…' : photo ? 'Change photo' : 'Upload photo'}
          </button>
          {photo && (
            <button type="button" onClick={() => onChange('')} className="px-2.5 py-1.5 rounded-lg text-xs font-semibold" style={{ ...btnBase, border: `1px solid ${C.absent}55`, color: C.absent }}>
              Remove
            </button>
          )}
        </div>
        <div className="text-[10px]" style={{ color: C.inkFaint }}>Optional · JPG/PNG</div>
        {error && <div className="text-xs" style={{ color: C.absent }}>{error}</div>}
      </div>
      <input ref={inputRef} type="file" accept="image/*" onChange={handleFile} style={{ display: 'none' }} />
    </div>
  );
}

// Optional staff record: father's name, address, DOB (shows computed age), and bank details.
// Kept collapsed by default since none of it is required to add a staff member.
function StaffDetailsFields({ open, setOpen, values, setValues }) {
  const age = calcAge(values.dob);
  return (
    <div className="rounded-lg p-3" style={{ background: C.cardAlt, border: `1px solid ${C.border}` }}>
      <label className="flex items-center gap-2 text-xs font-semibold cursor-pointer" style={{ color: C.ink }}>
        <input type="checkbox" checked={open} onChange={e => setOpen(e.target.checked)}
          style={{ width: 15, height: 15, accentColor: C.brand }} />
        Add more details (optional) — address, father's name, DOB, bank, photo
      </label>
      {open && (
        <div className="space-y-2.5 mt-3">
          <PhotoUpload photo={values.photo} onChange={photo => setValues({ photo })} />

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-[10px] uppercase font-medium" style={{ color: C.inkFaint, letterSpacing: '0.06em' }}>Father's name</label>
              <input value={values.fatherName} onChange={e => setValues({ fatherName: e.target.value })} placeholder="Optional"
                className="border rounded-lg px-2 py-1.5 text-sm block w-full mt-1 bg-white" style={{ borderColor: C.border }} />
            </div>
            <div>
              <label className="text-[10px] uppercase font-medium" style={{ color: C.inkFaint, letterSpacing: '0.06em' }}>Date of birth</label>
              <input type="date" value={values.dob} onChange={e => setValues({ dob: e.target.value })}
                className="border rounded-lg px-2 py-1.5 text-sm block w-full mt-1 bg-white" style={{ borderColor: C.border, fontFamily: MONO }} />
              {age != null && <div className="text-[10px] mt-1" style={{ color: C.inkSoft }}>Age {age}</div>}
            </div>
          </div>

          <div>
            <label className="text-[10px] uppercase font-medium" style={{ color: C.inkFaint, letterSpacing: '0.06em' }}>Address</label>
            <textarea value={values.address} onChange={e => setValues({ address: e.target.value })} placeholder="Optional" rows={2}
              className="border rounded-lg px-2 py-1.5 text-sm block w-full mt-1 bg-white" style={{ borderColor: C.border, resize: 'vertical' }} />
          </div>

          <div className="text-[10px] uppercase font-semibold mt-1" style={{ color: C.gold, letterSpacing: '0.08em' }}>Bank details</div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-[10px] uppercase font-medium" style={{ color: C.inkFaint, letterSpacing: '0.06em' }}>Bank name</label>
              <input value={values.bankName} onChange={e => setValues({ bankName: e.target.value })} placeholder="Optional"
                className="border rounded-lg px-2 py-1.5 text-sm block w-full mt-1 bg-white" style={{ borderColor: C.border }} />
            </div>
            <div>
              <label className="text-[10px] uppercase font-medium" style={{ color: C.inkFaint, letterSpacing: '0.06em' }}>IFSC code</label>
              <input value={values.ifsc} onChange={e => setValues({ ifsc: e.target.value.toUpperCase() })} placeholder="Optional"
                className="border rounded-lg px-2 py-1.5 text-sm block w-full mt-1 bg-white" style={{ borderColor: C.border, fontFamily: MONO }} />
            </div>
          </div>
          <div>
            <label className="text-[10px] uppercase font-medium" style={{ color: C.inkFaint, letterSpacing: '0.06em' }}>Account number</label>
            <input value={values.accountNo} onChange={e => setValues({ accountNo: e.target.value.replace(/[^0-9]/g, '') })} placeholder="Optional" inputMode="numeric"
              className="border rounded-lg px-2 py-1.5 text-sm block w-full mt-1 bg-white" style={{ borderColor: C.border, fontFamily: MONO }} />
          </div>
        </div>
      )}
    </div>
  );
}

function EmployeesTab({ employees, settings, addEmployee, updateEmployee, deleteEmployee, unlocked, setUnlocked }) {
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');
  const [useCustom, setUseCustom] = useState(false);
  const [custStart, setCustStart] = useState(settings.officeStart);
  const [custEnd, setCustEnd] = useState(settings.officeEnd);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [details, setDetailsState] = useState(EMPTY_STAFF_DETAILS);
  const setDetails = (patch) => setDetailsState(d => ({ ...d, ...patch }));

  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editSalary, setEditSalary] = useState('');
  const [editUseCustom, setEditUseCustom] = useState(false);
  const [editStart, setEditStart] = useState(settings.officeStart);
  const [editEnd, setEditEnd] = useState(settings.officeEnd);
  const [editDetailsOpen, setEditDetailsOpen] = useState(false);
  const [editDetails, setEditDetailsState] = useState(EMPTY_STAFF_DETAILS);
  const setEditDetails = (patch) => setEditDetailsState(d => ({ ...d, ...patch }));

  const [confirmDelete, setConfirmDelete] = useState(null);
  const [expandedId, setExpandedId] = useState(null);

  const submit = () => {
    if (!name.trim() || !salary || Number(salary) <= 0) return;
    if (useCustom && toMinutes(custEnd) <= toMinutes(custStart)) return;
    addEmployee(name, salary, useCustom ? { officeStart: custStart, officeEnd: custEnd } : {}, details);
    setName(''); setSalary(''); setUseCustom(false); setCustStart(settings.officeStart); setCustEnd(settings.officeEnd);
    setDetailsOpen(false); setDetailsState(EMPTY_STAFF_DETAILS);
  };
  const startEdit = (emp) => {
    setEditingId(emp.id); setEditName(emp.name); setEditSalary(String(emp.monthlySalary));
    setEditUseCustom(hasCustomHours(emp));
    setEditStart(emp.officeStart || settings.officeStart);
    setEditEnd(emp.officeEnd || settings.officeEnd);
    const emptyDetails = {
      fatherName: emp.fatherName || '', address: emp.address || '', dob: emp.dob || '',
      bankName: emp.bankName || '', ifsc: emp.ifsc || '', accountNo: emp.accountNo || '', photo: emp.photo || '',
    };
    setEditDetailsState(emptyDetails);
    setEditDetailsOpen(Object.values(emptyDetails).some(v => v));
  };
  const saveEdit = () => {
    if (editUseCustom && toMinutes(editEnd) <= toMinutes(editStart)) return;
    updateEmployee(editingId, {
      name: editName.trim(), monthlySalary: Number(editSalary),
      officeStart: editUseCustom ? editStart : '', officeEnd: editUseCustom ? editEnd : '',
      ...editDetails,
    });
    setEditingId(null);
  };

  if (!unlocked) {
    return (
      <PasswordGate
        onUnlock={() => setUnlocked(true)}
        title="Staff is locked"
        sub="Enter the password to view or edit staff details."
      />
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <button onClick={() => setUnlocked(false)} title="Lock Staff again"
          className="p-2.5 rounded-lg bg-white" style={{ ...btnBase, border: `1px solid ${C.border}`, boxShadow: cardShadow, color: C.inkFaint }}>
          <Lock size={15} />
        </button>
      </div>
      <div className="bg-white rounded-xl p-4 space-y-3" style={{ border: `1px solid ${C.border}`, boxShadow: cardShadow }}>
        <SectionHeading eyebrow="New entry" title="Add staff member" />
        <div className="flex gap-2 flex-wrap">
          <input value={name} onChange={e => setName(e.target.value)} placeholder="Full name"
            className="border rounded-lg px-3 py-2.5 text-sm flex-1" style={{ borderColor: C.border }} />
          <input value={salary} onChange={e => setSalary(e.target.value)} type="number" min="0" placeholder="Monthly salary ₹"
            style={{ fontFamily: MONO, borderColor: C.border }}
            className="border rounded-lg px-3 py-2.5 text-sm w-40" />
        </div>
        <HoursFields useCustom={useCustom} setUseCustom={setUseCustom} start={custStart} setStart={setCustStart} end={custEnd} setEnd={setCustEnd} defaultHrs={{ start: settings.officeStart, end: settings.officeEnd }} />
        <StaffDetailsFields open={detailsOpen} setOpen={setDetailsOpen} values={details} setValues={setDetails} />
        <PrimaryButton onClick={submit} icon={Plus} full>Add staff member</PrimaryButton>
      </div>

      {employees.length === 0 ? (
        <EmptyState icon={Users} text="No staff yet" sub="Add your first team member above." />
      ) : (
        <div className="space-y-2">
          {employees.map(emp => {
            const initials = emp.name.trim().split(/\s+/).slice(0, 2).map(w => w[0]?.toUpperCase()).join('');
            const custom = hasCustomHours(emp);
            return (
              <div key={emp.id} className="bg-white rounded-xl p-3.5" style={{ border: `1px solid ${C.border}`, boxShadow: cardShadow }}>
                {editingId === emp.id ? (
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <input value={editName} onChange={e => setEditName(e.target.value)} className="border rounded-lg px-2 py-1.5 text-sm flex-1" style={{ borderColor: C.border }} />
                      <input value={editSalary} onChange={e => setEditSalary(e.target.value)} type="number" style={{ fontFamily: MONO, borderColor: C.border }} className="border rounded-lg px-2 py-1.5 text-sm w-28" />
                    </div>
                    <HoursFields useCustom={editUseCustom} setUseCustom={setEditUseCustom} start={editStart} setStart={setEditStart} end={editEnd} setEnd={setEditEnd} defaultHrs={{ start: settings.officeStart, end: settings.officeEnd }} />
                    <StaffDetailsFields open={editDetailsOpen} setOpen={setEditDetailsOpen} values={editDetails} setValues={setEditDetails} />
                    <div className="flex gap-2 justify-end">
                      <button onClick={() => setEditingId(null)} className="px-3 py-1.5 rounded-lg text-xs font-semibold" style={{ ...btnBase, border: `1px solid ${C.border}` }}>Cancel</button>
                      <button onClick={saveEdit} className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white flex items-center gap-1" style={{ ...btnBase, background: C.brand }}><Check size={13} /> Save</button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center gap-3">
                      <div style={{
                        width: 34, height: 34, borderRadius: 9999, background: C.brandSoft, color: C.brandDark,
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700,
                        fontFamily: DISPLAY, flexShrink: 0, overflow: 'hidden',
                      }}>
                        {emp.photo ? <img src={emp.photo} alt={emp.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : initials}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm truncate" style={{ color: C.ink, fontFamily: DISPLAY }}>{emp.name}</div>
                        <div className="text-xs tabular-nums flex items-center gap-1.5 flex-wrap" style={{ fontFamily: MONO, color: C.inkSoft }}>
                          <span>{fmtINR(emp.monthlySalary)}/month</span>
                          <span style={{ color: C.inkFaint }}>·</span>
                          <span style={{ color: custom ? C.gold : C.inkSoft }}>{emp.officeStart || settings.officeStart}–{emp.officeEnd || settings.officeEnd}{custom ? ' (custom)' : ''}</span>
                          {emp.dob && calcAge(emp.dob) != null && <><span style={{ color: C.inkFaint }}>·</span><span>Age {calcAge(emp.dob)}</span></>}
                        </div>
                      </div>
                      <button onClick={() => startEdit(emp)} className="p-2 rounded-lg" style={{ ...btnBase, border: `1px solid ${C.border}`, color: C.inkSoft }}><Edit2 size={14} /></button>
                      {confirmDelete === emp.id ? (
                        <button onClick={() => { deleteEmployee(emp.id); setConfirmDelete(null); }} className="px-2.5 py-1.5 rounded-lg text-xs font-semibold text-white whitespace-nowrap" style={{ ...btnBase, background: C.absent }}>Confirm</button>
                      ) : (
                        <button onClick={() => setConfirmDelete(emp.id)} className="p-2 rounded-lg" style={{ ...btnBase, border: `1px solid ${C.absent}55`, color: C.absent }}><Trash2 size={14} /></button>
                      )}
                    </div>
                    {(emp.fatherName || emp.address || emp.dob || emp.bankName || emp.ifsc || emp.accountNo) && (
                      <button onClick={() => setExpandedId(expandedId === emp.id ? null : emp.id)}
                        className="text-[10px] uppercase font-semibold mt-2" style={{ ...btnBase, color: C.brand, letterSpacing: '0.06em' }}>
                        {expandedId === emp.id ? 'Hide details' : 'View details'}
                      </button>
                    )}
                    {expandedId === emp.id && (
                      <div className="text-xs mt-2 pt-2.5 space-y-1" style={{ borderTop: `1px dashed ${C.border}`, color: C.inkSoft }}>
                        {emp.fatherName && <div><span style={{ color: C.inkFaint }}>Father's name:</span> {emp.fatherName}</div>}
                        {emp.dob && <div><span style={{ color: C.inkFaint }}>Date of birth:</span> {fmtDOB(emp.dob)}</div>}
                        {emp.address && <div><span style={{ color: C.inkFaint }}>Address:</span> {emp.address}</div>}
                        {emp.bankName && <div><span style={{ color: C.inkFaint }}>Bank:</span> {emp.bankName}</div>}
                        {emp.ifsc && <div><span style={{ color: C.inkFaint }}>IFSC:</span> <span style={{ fontFamily: MONO }}>{emp.ifsc}</span></div>}
                        {emp.accountNo && <div><span style={{ color: C.inkFaint }}>Account no.:</span> <span style={{ fontFamily: MONO }}>{emp.accountNo}</span></div>}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ---------- History tab ----------
function HistoryRow({ record, empName, calc, onSave, onDelete, zebra }) {
  return (
    <tr style={{ borderBottom: `1px solid ${C.border}`, background: zebra ? C.cardAlt : 'transparent' }}>
      <td className="px-3 py-2.5 whitespace-nowrap tabular-nums" style={{ fontFamily: MONO, color: C.inkSoft }}>{record.date}</td>
      <td className="px-3 py-2.5 whitespace-nowrap font-medium" style={{ color: C.ink }}>{empName}</td>
      <td className="px-3 py-2.5">
        <input type="time" value={record.timeIn || ''} onChange={e => onSave({ timeIn: e.target.value })} disabled={record.status !== 'present'}
          style={{ fontFamily: MONO }} className="border rounded px-1.5 py-1 text-xs w-24 disabled:opacity-40 bg-white" />
      </td>
      <td className="px-3 py-2.5">
        <input type="time" value={record.timeOut || ''} onChange={e => onSave({ timeOut: e.target.value })} disabled={record.status !== 'present'}
          style={{ fontFamily: MONO }} className="border rounded px-1.5 py-1 text-xs w-24 disabled:opacity-40 bg-white" />
      </td>
      <td className="px-3 py-2.5">
        <select value={record.status} onChange={e => onSave({ status: e.target.value })} className="border rounded px-1.5 py-1 text-xs bg-white">
          <option value="present">Present</option>
          <option value="absent">Absent</option>
          <option value="leave">Paid leave</option>
        </select>
      </td>
      <td className="px-3 py-2.5 whitespace-nowrap tabular-nums font-medium" style={{ fontFamily: MONO, color: calc.lateMin > 0 ? C.late : C.inkFaint }}>{calc.lateMin > 0 ? `${calc.lateMin}m` : '—'}</td>
      <td className="px-3 py-2.5 whitespace-nowrap tabular-nums font-medium" style={{ fontFamily: MONO, color: calc.otMin > 0 ? C.ot : C.inkFaint }}>{calc.otMin > 0 ? `${calc.otMin}m` : '—'}</td>
      <td className="px-3 py-2.5 whitespace-nowrap tabular-nums font-bold" style={{ fontFamily: MONO, color: C.brandDark }}>{fmtINR(calc.dayPay)}</td>
      <td className="px-3 py-2.5"><button onClick={onDelete} style={{ ...btnBase, color: C.absent }}><Trash2 size={14} /></button></td>
    </tr>
  );
}

function AddPastEntry({ employees, settings, onAdd }) {
  const [employeeId, setEmployeeId] = useState(employees[0]?.id || '');
  const [date, setDate] = useState(todayISO());
  const selectedEmp = employees.find(e => e.id === employeeId);
  const defaultHrs = employeeHours(selectedEmp, settings);
  const [timeIn, setTimeIn] = useState(defaultHrs.start);
  const [timeOut, setTimeOut] = useState(defaultHrs.end);
  const [status, setStatus] = useState('present');

  const onEmployeeChange = (id) => {
    setEmployeeId(id);
    const hrs = employeeHours(employees.find(e => e.id === id), settings);
    setTimeIn(hrs.start); setTimeOut(hrs.end);
  };
  if (employees.length === 0) return null;

  return (
    <div className="bg-white rounded-xl p-4 flex flex-wrap gap-2 items-end" style={{ border: `1px solid ${C.border}`, boxShadow: cardShadow }}>
      <div>
        <label className="text-[10px] uppercase font-medium" style={{ color: C.inkFaint, letterSpacing: '0.06em' }}>Staff</label>
        <select value={employeeId} onChange={e => onEmployeeChange(e.target.value)} className="border rounded-lg px-2 py-1.5 text-sm block" style={{ borderColor: C.border }}>
          {employees.map(e => <option key={e.id} value={e.id}>{e.name}</option>)}
        </select>
      </div>
      <div>
        <label className="text-[10px] uppercase font-medium" style={{ color: C.inkFaint, letterSpacing: '0.06em' }}>Date</label>
        <input type="date" value={date} onChange={e => setDate(e.target.value)} className="border rounded-lg px-2 py-1.5 text-sm block" style={{ borderColor: C.border, fontFamily: MONO }} />
      </div>
      <div>
        <label className="text-[10px] uppercase font-medium" style={{ color: C.inkFaint, letterSpacing: '0.06em' }}>Status</label>
        <select value={status} onChange={e => setStatus(e.target.value)} className="border rounded-lg px-2 py-1.5 text-sm block" style={{ borderColor: C.border }}>
          <option value="present">Present</option><option value="absent">Absent</option><option value="leave">Paid leave</option>
        </select>
      </div>
      {status === 'present' && <>
        <div><label className="text-[10px] uppercase font-medium" style={{ color: C.inkFaint, letterSpacing: '0.06em' }}>In</label><input type="time" value={timeIn} onChange={e => setTimeIn(e.target.value)} className="border rounded-lg px-2 py-1.5 text-sm block" style={{ borderColor: C.border, fontFamily: MONO }} /></div>
        <div><label className="text-[10px] uppercase font-medium" style={{ color: C.inkFaint, letterSpacing: '0.06em' }}>Out</label><input type="time" value={timeOut} onChange={e => setTimeOut(e.target.value)} className="border rounded-lg px-2 py-1.5 text-sm block" style={{ borderColor: C.border, fontFamily: MONO }} /></div>
      </>}
      <PrimaryButton onClick={() => onAdd(employeeId, date, { status, timeIn, timeOut })}>Save entry</PrimaryButton>
    </div>
  );
}

function HistoryTab({ employees, attendance, settings, month, setMonth, upsertAttendance, deleteAttendance, unlocked, setUnlocked }) {
  const [filterEmp, setFilterEmp] = useState('all');
  const [showAddForm, setShowAddForm] = useState(false);

  const monthRecords = useMemo(() => attendance
    .filter(a => monthKey(a.date) === month && (filterEmp === 'all' || a.employeeId === filterEmp))
    .sort((a, b) => b.date.localeCompare(a.date)), [attendance, month, filterEmp]);

  const changeMonth = (delta) => {
    const [y, m] = month.split('-').map(Number);
    const d = new Date(y, m - 1 + delta, 1);
    setMonth(`${d.getFullYear()}-${pad(d.getMonth() + 1)}`);
  };
  const empName = (id) => employees.find(e => e.id === id)?.name || 'Unknown';

  if (!unlocked) {
    return (
      <PasswordGate
        onUnlock={() => setUnlocked(true)}
        title="History is locked"
        sub="Enter the password to view or edit past attendance records."
      />
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-2">
          <button onClick={() => changeMonth(-1)} className="p-2.5 rounded-lg bg-white" style={{ ...btnBase, border: `1px solid ${C.border}`, boxShadow: cardShadow }}><ChevronLeft size={16} /></button>
          <div className="text-sm font-semibold px-2" style={{ fontFamily: DISPLAY, color: C.ink }}>{monthLabel(month)}</div>
          <button onClick={() => changeMonth(1)} className="p-2.5 rounded-lg bg-white" style={{ ...btnBase, border: `1px solid ${C.border}`, boxShadow: cardShadow }}><ChevronRight size={16} /></button>
        </div>
        <div className="flex items-center gap-2">
          <select value={filterEmp} onChange={e => setFilterEmp(e.target.value)} className="border rounded-lg px-2.5 py-2 text-sm bg-white" style={{ borderColor: C.border }}>
            <option value="all">All staff</option>
            {employees.map(e => <option key={e.id} value={e.id}>{e.name}</option>)}
          </select>
          <button onClick={() => setUnlocked(false)} title="Lock History again"
            className="p-2.5 rounded-lg bg-white" style={{ ...btnBase, border: `1px solid ${C.border}`, boxShadow: cardShadow, color: C.inkFaint }}>
            <Lock size={15} />
          </button>
        </div>
      </div>

      {monthRecords.length === 0 ? (
        <EmptyState icon={Calendar} text="No records this month" sub="Mark attendance from the Today tab, or add a past entry." />
      ) : (
        <div className="bg-white rounded-xl overflow-x-auto" style={{ border: `1px solid ${C.border}`, boxShadow: cardShadow }}>
          <table className="w-full text-sm" style={{ minWidth: 620 }}>
            <thead>
              <tr style={{ borderBottom: `1px solid ${C.border}`, background: C.cardAlt }}>
                {['Date', 'Staff', 'In', 'Out', 'Status', 'Late', 'OT', 'Day pay', ''].map(h => (
                  <th key={h} className="px-3 py-2.5 text-left text-[10px] uppercase font-semibold" style={{ color: C.inkFaint, letterSpacing: '0.06em' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {monthRecords.map((r, i) => {
                const emp = employees.find(e => e.id === r.employeeId);
                const calc = calcDay(r, emp || { monthlySalary: 0 }, settings);
                return (
                  <HistoryRow key={r.id} record={r} empName={empName(r.employeeId)} calc={calc} zebra={i % 2 === 1}
                    onSave={(patch) => upsertAttendance(r.employeeId, r.date, patch)}
                    onDelete={() => deleteAttendance(r.id)} />
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      <button onClick={() => setShowAddForm(v => !v)} className="text-sm font-semibold flex items-center gap-1.5" style={{ ...btnBase, color: C.brand }}>
        <Plus size={15} /> Add past entry
      </button>
      {showAddForm && <AddPastEntry employees={employees} settings={settings} onAdd={(employeeId, date, patch) => { upsertAttendance(employeeId, date, patch); setShowAddForm(false); }} />}
    </div>
  );
}

// ---------- Report tab ----------
function ReportTab({ employees, attendance, settings, month, setMonth, onExport, onExportAll, onExportStaff }) {
  const changeMonth = (delta) => {
    const [y, m] = month.split('-').map(Number);
    const d = new Date(y, m - 1 + delta, 1);
    setMonth(`${d.getFullYear()}-${pad(d.getMonth() + 1)}`);
  };

  const rows = useMemo(() => employees.map(emp => {
    const recs = attendance.filter(a => a.employeeId === emp.id && monthKey(a.date) === month);
    let present = 0, absent = 0, leave = 0, lateDays = 0, otMin = 0, deduction = 0, otPay = 0, net = 0;
    recs.forEach(r => {
      const c = calcDay(r, emp, settings);
      net += c.dayPay; deduction += c.deduction; otPay += c.otPay;
      if (r.status === 'present') { present++; if (c.lateMin > 0) lateDays++; otMin += c.otMin; }
      else if (r.status === 'absent') absent++;
      else if (r.status === 'leave') leave++;
    });
    return { emp, present, absent, leave, lateDays, otMin, deduction, otPay, net };
  }), [employees, attendance, month, settings]);

  const totalPayout = rows.reduce((s, r) => s + r.net, 0);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-2">
          <button onClick={() => changeMonth(-1)} className="p-2.5 rounded-lg bg-white" style={{ ...btnBase, border: `1px solid ${C.border}`, boxShadow: cardShadow }}><ChevronLeft size={16} /></button>
          <div className="text-sm font-semibold px-2" style={{ fontFamily: DISPLAY, color: C.ink }}>{monthLabel(month)}</div>
          <button onClick={() => changeMonth(1)} className="p-2.5 rounded-lg bg-white" style={{ ...btnBase, border: `1px solid ${C.border}`, boxShadow: cardShadow }}><ChevronRight size={16} /></button>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <PrimaryButton onClick={() => onExport(month)} disabled={employees.length === 0} icon={FileSpreadsheet}>Export Excel</PrimaryButton>
          <button onClick={onExportAll} disabled={employees.length === 0}
            className="px-3 py-2.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 disabled:cursor-not-allowed disabled:opacity-40"
            style={{ ...btnBase, border: `1px solid ${C.border}`, background: C.card, color: C.ink, boxShadow: cardShadow }}>
            <Download size={14} /> Export All (Date-wise)
          </button>
          <button onClick={onExportStaff} disabled={employees.length === 0}
            className="px-3 py-2.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 disabled:cursor-not-allowed disabled:opacity-40"
            style={{ ...btnBase, border: `1px solid ${C.border}`, background: C.card, color: C.ink, boxShadow: cardShadow }}>
            <Users size={14} /> Export Staff Directory
          </button>
        </div>
      </div>

      <div className="rounded-xl p-5 text-white flex items-center justify-between relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${C.headerBg}, ${C.headerBgLight})`,
          backgroundImage: `radial-gradient(circle at 7px 7px, rgba(255,255,255,0.05) 1.4px, transparent 1.6px), linear-gradient(135deg, ${C.headerBg}, ${C.headerBgLight})`,
          backgroundSize: '16px 16px, 100% 100%',
        }}>
        <div>
          <div className="text-[10px] uppercase font-semibold" style={{ opacity: 0.65, letterSpacing: '0.08em' }}>Total payout · {monthLabel(month)}</div>
          <div className="text-3xl font-bold mt-1 tabular-nums" style={{ fontFamily: MONO }}>{fmtINR(totalPayout)}</div>
        </div>
        <IconBadge icon={TrendingUp} color="#fff" bg="rgba(255,255,255,0.14)" size={44} />
      </div>

      {employees.length === 0 ? (
        <EmptyState icon={FileSpreadsheet} text="Nothing to report yet" sub="Add staff and mark attendance first." />
      ) : (
        <div className="space-y-2">
          {rows.map(r => (
            <div key={r.emp.id} className="bg-white rounded-xl p-4" style={{ border: `1px solid ${C.border}`, boxShadow: cardShadow }}>
              <div className="flex items-center justify-between">
                <div className="font-semibold text-sm" style={{ color: C.ink, fontFamily: DISPLAY }}>{r.emp.name}</div>
                <div className="font-bold tabular-nums" style={{ fontFamily: MONO, color: C.brandDark }}>{fmtINR(r.net)}</div>
              </div>
              <div className="grid grid-cols-4 gap-2 mt-3.5 text-center">
                <MiniStat label="Present" value={r.present} color={C.onTime} />
                <MiniStat label="Absent" value={r.absent} color={C.absent} />
                <MiniStat label="Leave" value={r.leave} color={C.leave} />
                <MiniStat label="Late days" value={r.lateDays} color={C.late} />
              </div>
              <div className="flex justify-between text-xs mt-3.5 pt-3.5" style={{ borderTop: `1px dashed ${C.border}`, color: C.inkSoft }}>
                <span>Deduction: <b style={{ color: C.absent, fontFamily: MONO }}>-{fmtINR(r.deduction)}</b></span>
                <span>Overtime: <b style={{ color: C.ot, fontFamily: MONO }}>+{fmtINR(r.otPay)}</b></span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ---------- Settings tab ----------
function SettingsTab({ settings, updateSettings, onClearAll, onExportBackup, onImportBackup }) {
  const [local, setLocal] = useState(settings);
  const [error, setError] = useState('');
  const [confirmClear, setConfirmClear] = useState(false);
  const [importing, setImporting] = useState(false);
  const fileInputRef = React.useRef(null);

  const handleFileChosen = async (e) => {
    const file = e.target.files && e.target.files[0];
    e.target.value = '';
    if (!file) return;
    setImporting(true);
    try { await onImportBackup(file); }
    finally { setImporting(false); }
  };
  useEffect(() => { setLocal(settings); }, [settings]);

  const save = () => {
    if (toMinutes(local.officeEnd) <= toMinutes(local.officeStart)) { setError('Office end time must be after start time.'); return; }
    setError('');
    updateSettings(local);
  };

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-xl p-4 space-y-4" style={{ border: `1px solid ${C.border}`, boxShadow: cardShadow }}>
        <SectionHeading eyebrow="Configuration" title="Office hours" />
        <div className="text-xs -mt-2" style={{ color: C.inkSoft }}>This is the shop-wide default. Individual staff with a different shift can be given their own hours from the Staff tab.</div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-[10px] uppercase font-medium" style={{ color: C.inkFaint, letterSpacing: '0.06em' }}>Start time</label>
            <input type="time" value={local.officeStart} onChange={e => setLocal({ ...local, officeStart: e.target.value })} className="border rounded-lg px-2 py-1.5 text-sm block w-full mt-1" style={{ borderColor: C.border, fontFamily: MONO }} />
          </div>
          <div>
            <label className="text-[10px] uppercase font-medium" style={{ color: C.inkFaint, letterSpacing: '0.06em' }}>End time</label>
            <input type="time" value={local.officeEnd} onChange={e => setLocal({ ...local, officeEnd: e.target.value })} className="border rounded-lg px-2 py-1.5 text-sm block w-full mt-1" style={{ borderColor: C.border, fontFamily: MONO }} />
          </div>
        </div>
        <div>
          <label className="text-[10px] uppercase font-medium" style={{ color: C.inkFaint, letterSpacing: '0.06em' }}>Overtime multiplier</label>
          <input type="number" step="0.1" min="1" value={local.otMultiplier} onChange={e => setLocal({ ...local, otMultiplier: Number(e.target.value) })} className="border rounded-lg px-2 py-1.5 text-sm block w-full mt-1" style={{ borderColor: C.border, fontFamily: MONO }} />
          <div className="text-xs mt-1" style={{ color: C.inkSoft }}>1 = normal rate, 1.5 = time-and-a-half, 2 = double</div>
        </div>
        <div>
          <label className="text-[10px] uppercase font-medium" style={{ color: C.inkFaint, letterSpacing: '0.06em' }}>Days per month (for daily rate)</label>
          <select value={local.daysBasis} onChange={e => setLocal({ ...local, daysBasis: e.target.value })} className="border rounded-lg px-2 py-1.5 text-sm block w-full mt-1" style={{ borderColor: C.border }}>
            <option value="calendar">Actual calendar days in month</option>
            <option value="fixed30">Fixed 30 days</option>
            <option value="fixed26">Fixed 26 days</option>
          </select>
        </div>
        {error && <div className="text-xs flex items-center gap-1.5 rounded-lg px-3 py-2" style={{ color: C.absent, background: '#FBEAE8' }}><AlertTriangle size={13} />{error}</div>}
        <PrimaryButton onClick={save}>Save settings</PrimaryButton>
      </div>

      <div className="bg-white rounded-xl p-4 text-xs leading-relaxed flex gap-3" style={{ border: `1px solid ${C.border}`, boxShadow: cardShadow, color: C.inkSoft }}>
        <IconBadge icon={IndianRupee} color={C.brandDark} bg={C.brandSoft} size={30} />
        <div>
          <div className="font-semibold mb-1" style={{ color: C.ink, fontFamily: DISPLAY }}>How pay is calculated</div>
          Daily rate = monthly salary ÷ days in month. Per-minute rate = daily rate ÷ shift minutes.
          Arriving late or leaving early deducts the per-minute rate × minutes missed.
          Staying past office hours pays the per-minute rate × OT multiplier × extra minutes.
          Staff with custom hours (set in the Staff tab) use their own shift instead of the default above.
        </div>
      </div>

      <div className="bg-white rounded-xl p-4" style={{ border: `1px solid ${C.border}`, boxShadow: cardShadow }}>
        <div className="text-sm font-semibold mb-1.5 flex items-center gap-1.5" style={{ color: C.ink, fontFamily: DISPLAY }}><Download size={15} /> Backup &amp; restore</div>
        <div className="text-xs mb-3" style={{ color: C.inkSoft }}>
          Save a full backup file so your staff and attendance records carry over safely to a newer version — nothing is lost.
        </div>
        <div className="flex gap-2 flex-wrap">
          <button onClick={onExportBackup}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5"
            style={{ ...btnBase, border: `1px solid ${C.border}`, color: C.ink }}>
            <Download size={14} /> Export backup
          </button>
          <button onClick={() => fileInputRef.current && fileInputRef.current.click()} disabled={importing}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 disabled:cursor-not-allowed disabled:opacity-40"
            style={{ ...btnBase, border: `1px solid ${C.brand}`, color: C.brand }}>
            <Upload size={14} /> {importing ? 'Importing…' : 'Import backup'}
          </button>
          <input ref={fileInputRef} type="file" accept="application/json,.json" onChange={handleFileChosen} style={{ display: 'none' }} />
        </div>
      </div>

      <div className="bg-white rounded-xl p-4" style={{ border: `1px solid ${C.absent}33`, boxShadow: cardShadow }}>
        <div className="text-sm font-semibold mb-1.5 flex items-center gap-1.5" style={{ color: C.absent, fontFamily: DISPLAY }}><AlertTriangle size={15} /> Danger zone</div>
        <div className="text-xs mb-3" style={{ color: C.inkSoft }}>Permanently erase all staff and attendance records.</div>
        {confirmClear ? (
          <div className="flex gap-2">
            <button onClick={() => { onClearAll(); setConfirmClear(false); }} className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white" style={{ ...btnBase, background: C.absent }}>Yes, erase everything</button>
            <button onClick={() => setConfirmClear(false)} className="px-3 py-1.5 rounded-lg text-xs font-semibold" style={{ ...btnBase, border: `1px solid ${C.border}` }}>Cancel</button>
          </div>
        ) : (
          <button onClick={() => setConfirmClear(true)} className="px-3 py-1.5 rounded-lg text-xs font-semibold" style={{ ...btnBase, border: `1px solid ${C.absent}`, color: C.absent }}>Clear all data</button>
        )}
      </div>
    </div>
  );
}

// ---------- excel export ----------
function exportExcel(ym, employees, attendance, settings) {
  const summaryRows = employees.map(emp => {
    const recs = attendance.filter(a => a.employeeId === emp.id && monthKey(a.date) === ym);
    let present = 0, absent = 0, leave = 0, lateDays = 0, totalLateMin = 0, totalOtMin = 0, deduction = 0, otPay = 0, netPay = 0;
    recs.forEach(r => {
      const c = calcDay(r, emp, settings);
      netPay += c.dayPay; deduction += c.deduction; otPay += c.otPay;
      if (r.status === 'present') { present++; if (c.lateMin > 0) { lateDays++; totalLateMin += c.lateMin; } totalOtMin += c.otMin; }
      else if (r.status === 'absent') absent++;
      else if (r.status === 'leave') leave++;
    });
    return {
      'Employee': emp.name,
      'Monthly Salary': emp.monthlySalary,
      'Present Days': present,
      'Absent Days': absent,
      'Paid Leave Days': leave,
      'Late Days': lateDays,
      'Total Late (min)': totalLateMin,
      'Total OT (min)': totalOtMin,
      'Deduction (Rs)': Math.round(deduction),
      'OT Pay (Rs)': Math.round(otPay),
      'Net Salary (Rs)': Math.round(netPay),
    };
  });

  const logRows = attendance.filter(a => monthKey(a.date) === ym).sort((a, b) => a.date.localeCompare(b.date)).map(r => {
    const emp = employees.find(e => e.id === r.employeeId);
    const c = calcDay(r, emp || { monthlySalary: 0 }, settings);
    return {
      'Date': r.date,
      'Employee': emp ? emp.name : 'Unknown',
      'Time In': r.timeIn || '-',
      'Time Out': r.timeOut || '-',
      'Status': r.status,
      'Late (min)': c.lateMin,
      'Early (min)': c.earlyMin,
      'OT (min)': c.otMin,
      'Day Pay (Rs)': Math.round(c.dayPay),
    };
  });

  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(summaryRows), 'Salary Summary');
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(logRows), 'Attendance Log');
  const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
  const blob = new Blob([wbout], { type: 'application/octet-stream' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = `Salary_${ym}.xlsx`;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// ---------- excel export: full, date-wise, all employees, all history ----------
function exportExcelDateWise(employees, attendance, settings) {
  const empById = Object.fromEntries(employees.map(e => [e.id, e]));

  // One row per attendance record, sorted by date first (then by employee name) —
  // this is the "date-wise" view across every employee and every month on record.
  const dateWiseRows = [...attendance]
    .sort((a, b) => {
      if (a.date !== b.date) return a.date.localeCompare(b.date);
      const na = empById[a.employeeId]?.name || '';
      const nb = empById[b.employeeId]?.name || '';
      return na.localeCompare(nb);
    })
    .map(r => {
      const emp = empById[r.employeeId];
      const c = calcDay(r, emp || { monthlySalary: 0 }, settings);
      return {
        'Date': r.date,
        'Employee': emp ? emp.name : 'Unknown',
        'Time In': r.timeIn || '-',
        'Time Out': r.timeOut || '-',
        'Status': r.status,
        'Late (min)': c.lateMin,
        'Early (min)': c.earlyMin,
        'OT (min)': c.otMin,
        'Deduction (Rs)': Math.round(c.deduction),
        'OT Pay (Rs)': Math.round(c.otPay),
        'Day Pay (Rs)': Math.round(c.dayPay),
      };
    });

  // Overall per-employee summary across all recorded months (not just one).
  const months = [...new Set(attendance.map(a => monthKey(a.date)))].sort();
  const overallRows = employees.map(emp => {
    const recs = attendance.filter(a => a.employeeId === emp.id);
    let present = 0, absent = 0, leave = 0, lateDays = 0, totalLateMin = 0, totalOtMin = 0, deduction = 0, otPay = 0, netPay = 0;
    recs.forEach(r => {
      const c = calcDay(r, emp, settings);
      netPay += c.dayPay; deduction += c.deduction; otPay += c.otPay;
      if (r.status === 'present') { present++; if (c.lateMin > 0) { lateDays++; totalLateMin += c.lateMin; } totalOtMin += c.otMin; }
      else if (r.status === 'absent') absent++;
      else if (r.status === 'leave') leave++;
    });
    return {
      'Employee': emp.name,
      'Monthly Salary': emp.monthlySalary,
      'Days Recorded': recs.length,
      'Present Days': present,
      'Absent Days': absent,
      'Paid Leave Days': leave,
      'Late Days': lateDays,
      'Total Late (min)': totalLateMin,
      'Total OT (min)': totalOtMin,
      'Deduction (Rs)': Math.round(deduction),
      'OT Pay (Rs)': Math.round(otPay),
      'Net Pay (Rs)': Math.round(netPay),
    };
  });

  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(dateWiseRows), 'Date-wise Log');
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(overallRows), 'Overall Summary');
  const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
  const blob = new Blob([wbout], { type: 'application/octet-stream' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const stamp = months.length ? `${months[0]}_to_${months[months.length - 1]}` : todayISO();
  a.href = url; a.download = `Attendance_DateWise_${stamp}.xlsx`;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// ---------- excel export: staff directory (name, family/address, DOB+age, bank details) ----------
function exportStaffExcel(employees, settings) {
  const rows = employees.map(emp => ({
    'Employee Name': emp.name,
    "Father's Name": emp.fatherName || '',
    'Date of Birth': emp.dob ? fmtDOB(emp.dob) : '',
    'Age': emp.dob && calcAge(emp.dob) != null ? calcAge(emp.dob) : '',
    'Address': emp.address || '',
    'Monthly Salary': emp.monthlySalary,
    'Office Hours': `${emp.officeStart || settings.officeStart}-${emp.officeEnd || settings.officeEnd}${hasCustomHours(emp) ? ' (custom)' : ''}`,
    'Bank Name': emp.bankName || '',
    'IFSC Code': emp.ifsc || '',
    'Account Number': emp.accountNo || '',
    'Photo Uploaded': emp.photo ? 'Yes' : 'No',
  }));
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(rows), 'Staff Directory');
  const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
  const blob = new Blob([wbout], { type: 'application/octet-stream' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = `Staff_Directory_${todayISO()}.xlsx`;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// ---------- full backup (JSON) export/import — carries every record forward across versions ----------
function exportBackupJSON(employees, attendance, settings) {
  const payload = {
    app: 'time-ledger',
    backupVersion: 1,
    exportedAt: new Date().toISOString(),
    employees, attendance, settings,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = `TimeLedger_Backup_${todayISO()}.json`;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function parseBackupFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result);
        if (!data || !Array.isArray(data.employees) || !Array.isArray(data.attendance)) {
          reject(new Error('This file does not look like a Time Ledger backup.'));
          return;
        }
        resolve(data);
      } catch (err) { reject(new Error('Could not read that file as JSON.')); }
    };
    reader.onerror = () => reject(new Error('Could not read the file.'));
    reader.readAsText(file);
  });
}

// ---------- app ----------
function App() {
  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
  const [tab, setTab] = useState('punch');
  const [todayDate, setTodayDate] = useState(todayISO());
  const [histMonth, setHistMonth] = useState(todayISO().slice(0, 7));
  const [reportMonth, setReportMonth] = useState(todayISO().slice(0, 7));
  const [historyUnlocked, setHistoryUnlocked] = useState(false);
  const [todayUnlocked, setTodayUnlocked] = useState(false);
  const [staffUnlocked, setStaffUnlocked] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (msg, type = 'ok') => { setToast({ msg, type }); setTimeout(() => setToast(null), 2500); };

  useEffect(() => {
    (async () => {
      try {
        const [e, a, s] = await Promise.allSettled([
          window.storage.get('employees', false),
          window.storage.get('attendance', false),
          window.storage.get('settings', false),
        ]);
        if (e.status === 'fulfilled' && e.value) setEmployees(JSON.parse(e.value.value));
        if (a.status === 'fulfilled' && a.value) setAttendance(JSON.parse(a.value.value));
        if (s.status === 'fulfilled' && s.value) setSettings({ ...DEFAULT_SETTINGS, ...JSON.parse(s.value.value) });
      } catch (err) { console.error(err); }
      setLoading(false);
    })();
  }, []);

  const persist = async (key, value) => {
    try { await window.storage.set(key, JSON.stringify(value), false); }
    catch (err) { console.error(err); showToast('Could not save — changes may not persist', 'error'); }
  };

  const addEmployee = (name, salary, hours, details) => {
    const d = { ...EMPTY_STAFF_DETAILS, ...(details || {}) };
    const next = [...employees, {
      id: uid(), name: name.trim(), monthlySalary: Number(salary),
      officeStart: (hours && hours.officeStart) || '', officeEnd: (hours && hours.officeEnd) || '',
      fatherName: d.fatherName, address: d.address, dob: d.dob,
      bankName: d.bankName, ifsc: d.ifsc, accountNo: d.accountNo, photo: d.photo,
    }];
    setEmployees(next); persist('employees', next); showToast('Staff added');
  };
  const updateEmployee = (id, patch) => {
    const next = employees.map(e => e.id === id ? { ...e, ...patch } : e);
    setEmployees(next); persist('employees', next); showToast('Saved');
  };
  const deleteEmployee = (id) => {
    const nextEmp = employees.filter(e => e.id !== id);
    setEmployees(nextEmp); persist('employees', nextEmp);
    const nextAtt = attendance.filter(a => a.employeeId !== id);
    setAttendance(nextAtt); persist('attendance', nextAtt);
    showToast('Staff removed');
  };

  const upsertAttendance = (employeeId, date, patch) => {
    setAttendance(prev => {
      const idx = prev.findIndex(a => a.employeeId === employeeId && a.date === date);
      let next;
      if (idx >= 0) { next = [...prev]; next[idx] = { ...next[idx], ...patch }; }
      else { next = [...prev, { id: uid(), employeeId, date, timeIn: '', timeOut: '', status: 'present', ...patch }]; }
      persist('attendance', next);
      return next;
    });
  };
  const deleteAttendance = (id) => {
    setAttendance(prev => { const next = prev.filter(a => a.id !== id); persist('attendance', next); return next; });
  };
  const updateSettings = (patch) => {
    const next = { ...settings, ...patch };
    setSettings(next); persist('settings', next); showToast('Settings saved');
  };
  const onClearAll = () => {
    setEmployees([]); setAttendance([]); setSettings(DEFAULT_SETTINGS);
    persist('employees', []); persist('attendance', []); persist('settings', DEFAULT_SETTINGS);
    showToast('All data cleared');
  };

  const handleExport = (ym) => { exportExcel(ym, employees, attendance, settings); showToast('Excel file downloading…'); };
  const handleExportAll = () => { exportExcelDateWise(employees, attendance, settings); showToast('Date-wise Excel file downloading…'); };
  const handleExportStaff = () => { exportStaffExcel(employees, settings); showToast('Staff directory Excel downloading…'); };
  const handleExportBackup = () => { exportBackupJSON(employees, attendance, settings); showToast('Backup file downloading…'); };
  const handleImportBackup = async (file) => {
    try {
      const data = await parseBackupFile(file);
      const importedEmployees = data.employees;
      const importedAttendance = data.attendance;
      const importedSettings = { ...DEFAULT_SETTINGS, ...(data.settings || {}) };
      setEmployees(importedEmployees); await persist('employees', importedEmployees);
      setAttendance(importedAttendance); await persist('attendance', importedAttendance);
      setSettings(importedSettings); await persist('settings', importedSettings);
      showToast(`Imported ${importedEmployees.length} staff, ${importedAttendance.length} records`);
    } catch (err) {
      console.error(err);
      showToast(err.message || 'Import failed', 'error');
    }
  };

  const TABS = [
    { id: 'punch', label: 'Punch', icon: Fingerprint },
    { id: 'today', label: 'Today', icon: Clock },
    { id: 'staff', label: 'Staff', icon: Users },
    { id: 'history', label: 'History', icon: Calendar },
    { id: 'report', label: 'Report', icon: FileSpreadsheet },
    { id: 'settings', label: 'Settings', icon: SettingsIcon },
  ];

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center" style={{ background: C.bg }}>
      <div className="text-sm flex items-center gap-2" style={{ color: C.inkSoft }}>
        <div style={{ width: 14, height: 14, borderRadius: 9999, border: `2px solid ${C.border}`, borderTopColor: C.brand, animation: 'spin 0.8s linear infinite' }} />
        Loading…
      </div>
    </div>;
  }

  return (
    <div className="min-h-screen" style={{ background: C.bg }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600;700&display=swap');
        * { font-family: 'Inter', sans-serif; }
        input:focus, select:focus, button:focus-visible { outline: 2px solid ${C.brand}; outline-offset: 1px; }
        input[type="time"]::-webkit-calendar-picker-indicator, input[type="date"]::-webkit-calendar-picker-indicator { opacity: 0.55; cursor: pointer; }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes punchPulse { 0% { transform: scale(0.9); opacity: 0.9; } 100% { transform: scale(1.35); opacity: 0; } }
        @keyframes punchGlow { 0%, 100% { opacity: 0.55; } 50% { opacity: 1; } }
        @keyframes livePulse { 0% { transform: scale(1); opacity: 0.6; } 100% { transform: scale(2.8); opacity: 0; } }
        @keyframes idlePulse { 0%, 100% { box-shadow: 0 0 0 0 rgba(200,137,31,0.32); } 50% { box-shadow: 0 0 0 7px rgba(200,137,31,0); } }
        @keyframes checkPop { 0% { transform: scale(0.4); opacity: 0; } 65% { transform: scale(1.15); opacity: 1; } 100% { transform: scale(1); opacity: 1; } }
        @media (prefers-reduced-motion: reduce) { * { transition: none !important; animation: none !important; } }
      `}</style>

      <div style={{
        background: `linear-gradient(135deg, ${C.headerBg}, ${C.headerBgLight})`,
        backgroundImage: `radial-gradient(circle at 7px 7px, rgba(255,255,255,0.045) 1.4px, transparent 1.6px), linear-gradient(135deg, ${C.headerBg}, ${C.headerBgLight})`,
        backgroundSize: '16px 16px, 100% 100%',
      }} className="px-5 pt-6 pb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div style={{
              width: 34, height: 34, borderRadius: 9999, border: '1.5px solid rgba(255,255,255,0.4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0,
            }}>
              <Stamp size={16} strokeWidth={2} />
            </div>
            <div>
              <div className="text-white text-[10px] uppercase font-semibold" style={{ opacity: 0.6, letterSpacing: '0.09em' }}>Attendance &amp; payroll</div>
              <div className="text-white text-lg font-bold" style={{ fontFamily: DISPLAY, letterSpacing: '-0.01em' }}>Time Ledger</div>
            </div>
          </div>
          <div className="text-white text-xs text-right tabular-nums" style={{ opacity: 0.65, fontFamily: MONO }}>
            {settings.officeStart}–{settings.officeEnd}
          </div>
        </div>
        {(tab === 'today' || tab === 'punch') && <div className="mt-5"><LiveClock /></div>}
      </div>

      {/* perforated tear-line — the page's signature seam */}
      <div style={{
        height: 13, marginTop: -1,
        backgroundColor: C.headerBgLight,
        backgroundImage: `radial-gradient(circle at 7px 6.5px, ${C.bg} 3.4px, transparent 3.6px)`,
        backgroundSize: '14px 13px',
      }} />

      <div className="px-3 -mt-4">
        <div className="bg-white rounded-xl flex overflow-x-auto" style={{ border: `1px solid ${C.border}`, boxShadow: '0 4px 14px rgba(15,51,44,0.10)' }}>
          {TABS.map(t => {
            const Icon = t.icon; const active = tab === t.id;
            return (
              <button key={t.id} onClick={() => setTab(t.id)}
                className="flex-1 min-w-0 flex flex-col items-center gap-1 py-2.5 text-xs font-semibold relative"
                style={{ ...btnBase, color: active ? C.brand : C.inkFaint }}>
                <div style={{
                  width: 24, height: 24, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: active ? C.brandSoft : 'transparent',
                }}>
                  <Icon size={15} />
                </div>
                {t.label}
                {active && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full" style={{ background: C.brand }} />}
              </button>
            );
          })}
        </div>
      </div>

      <div className="p-4 max-w-2xl mx-auto">
        {tab === 'punch' && <PunchTab employees={employees} attendance={attendance} date={todayDate} upsertAttendance={upsertAttendance} showToast={showToast} />}
        {tab === 'today' && <TodayTab date={todayDate} setDate={setTodayDate} employees={employees} attendance={attendance} settings={settings} upsertAttendance={upsertAttendance} unlocked={todayUnlocked} setUnlocked={setTodayUnlocked} />}
        {tab === 'staff' && <EmployeesTab employees={employees} settings={settings} addEmployee={addEmployee} updateEmployee={updateEmployee} deleteEmployee={deleteEmployee} unlocked={staffUnlocked} setUnlocked={setStaffUnlocked} />}
        {tab === 'history' && <HistoryTab employees={employees} attendance={attendance} settings={settings} month={histMonth} setMonth={setHistMonth} upsertAttendance={upsertAttendance} deleteAttendance={deleteAttendance} unlocked={historyUnlocked} setUnlocked={setHistoryUnlocked} />}
        {tab === 'report' && <ReportTab employees={employees} attendance={attendance} settings={settings} month={reportMonth} setMonth={setReportMonth} onExport={handleExport} onExportAll={handleExportAll} onExportStaff={handleExportStaff} />}
        {tab === 'settings' && <SettingsTab settings={settings} updateSettings={updateSettings} onClearAll={onClearAll} onExportBackup={handleExportBackup} onImportBackup={handleImportBackup} />}
      </div>

      <Toast toast={toast} />
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

