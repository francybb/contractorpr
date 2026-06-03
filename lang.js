/**
 * ContractingPR — Shared Language & Auth Library
 * Include this on every page: <script src="/lang.js"></script>
 */

// ── Language System ──────────────────────────────────────────────

window.CPR = window.CPR || {};

CPR.lang = localStorage.getItem('cpr_lang') || 'es';

CPR.translations = {
  // Navigation
  nav_home:           { es: 'Inicio',             en: 'Home' },
  nav_jobs:           { es: 'Ver trabajos',        en: 'Browse jobs' },
  nav_signup:         { es: 'Registrarse',         en: 'Sign up' },
  nav_login:          { es: 'Iniciar sesión',      en: 'Log in' },
  nav_dashboard:      { es: 'Mi dashboard',        en: 'My dashboard' },
  nav_logout:         { es: 'Cerrar sesión',       en: 'Log out' },
  nav_back_home:      { es: '← Volver al inicio',  en: '← Back to home' },
  nav_post_job:       { es: 'Publicar trabajo',    en: 'Post a job' },

  // Language toggle
  lang_es:            { es: 'Español',             en: 'Español' },
  lang_en:            { es: 'English',             en: 'English' },

  // Auth
  email_label:        { es: 'Correo electrónico',  en: 'Email address' },
  email_ph:           { es: 'tu@correo.com',       en: 'your@email.com' },
  password_label:     { es: 'Contraseña',          en: 'Password' },
  password_ph:        { es: 'Mínimo 8 caracteres', en: 'At least 8 characters' },
  password2_label:    { es: 'Confirmar contraseña',en: 'Confirm password' },
  password2_ph:       { es: 'Repite tu contraseña',en: 'Repeat your password' },
  forgot_password:    { es: '¿Olvidaste tu contraseña?', en: 'Forgot your password?' },
  login_btn:          { es: 'Entrar →',            en: 'Log in →' },
  logging_in:         { es: 'Verificando...',      en: 'Verifying...' },
  no_account:         { es: '¿No tienes cuenta?',  en: 'No account yet?' },
  signup_free:        { es: 'Regístrate gratis',   en: 'Sign up free' },
  wrong_password:     { es: 'Correo o contraseña incorrectos. Si te registraste antes de que añadiéramos contraseñas, <a href="reset-password.html" style="color:var(--red);text-decoration:underline;font-weight:600">haz clic aquí para crear una</a>.', en: 'Incorrect email or password. If you registered before we added passwords, <a href="reset-password.html" style="color:var(--red);text-decoration:underline;font-weight:600">click here to set one</a>.' },

  // Signup
  signup_contractor_tab:  { es: '🔨 Soy Contratista',   en: '🔨 I am a Contractor' },
  signup_homeowner_tab:   { es: '🏠 Necesito Trabajo',   en: '🏠 I Need Work Done' },
  full_name:              { es: 'Nombre completo',        en: 'Full name' },
  name_ph_contractor:     { es: 'Juan Rivera',            en: 'John Rivera' },
  name_ph_homeowner:      { es: 'María González',         en: 'Maria González' },
  phone_label:            { es: 'Teléfono',               en: 'Phone' },
  phone_ph:               { es: '787-555-0100',           en: '787-555-0100' },
  trade_label:            { es: 'Especialidad / Trade',   en: 'Trade / Specialty' },
  license_label:          { es: 'Número de licencia CIAPR', en: 'CIAPR License Number' },
  license_ph:             { es: 'ej. 12345',              en: 'e.g. 12345' },
  description_label:      { es: 'Descripción (opcional)', en: 'Description (optional)' },
  description_ph:         { es: 'Cuéntanos sobre tu experiencia y especialidades...', en: 'Tell us about your experience and specialties...' },
  city_label:             { es: 'Ciudad / Municipio',     en: 'City / Municipality' },
  city_select:            { es: 'Seleccionar municipio',  en: 'Select municipality' },
  terms_agree:            { es: 'He leído y acepto los',  en: 'I have read and agree to the' },
  terms_link:             { es: 'Términos de Servicio',   en: 'Terms of Service' },
  signup_contractor_btn:  { es: 'Registrarme como contratista →', en: 'Register as contractor →' },
  signup_homeowner_btn:   { es: 'Crear mi cuenta — Es gratis →',  en: 'Create my account — Free →' },
  sending:                { es: 'Enviando...',             en: 'Sending...' },
  passwords_no_match:     { es: 'Las contraseñas no coinciden.', en: 'Passwords do not match.' },
  email_taken:            { es: 'Ese correo ya está registrado.', en: 'That email is already registered.' },
  contractor_success_title: { es: '¡Solicitud enviada!',  en: 'Request sent!' },
  contractor_success_msg:   { es: 'Revisaremos tu perfil y te contactaremos en menos de 24 horas para activar tu cuenta.', en: 'We will review your profile and contact you within 24 hours to activate your account.' },
  homeowner_success_title:  { es: '¡Bienvenido a ContractingPR!', en: 'Welcome to ContractingPR!' },
  homeowner_success_msg:    { es: 'Tu cuenta está lista. Ya puedes publicar trabajos y recibir propuestas de contratistas verificados en tu área.', en: 'Your account is ready. You can now post jobs and receive proposals from verified contractors in your area.' },
  go_dashboard:             { es: 'Ir a mi dashboard →',  en: 'Go to my dashboard →' },

  // Jobs page
  jobs_title:         { es: 'Trabajos disponibles',   en: 'Available jobs' },
  jobs_subtitle:      { es: 'Encuentra tu próximo proyecto en Puerto Rico', en: 'Find your next project in Puerto Rico' },
  filter_trade:       { es: 'Todos los oficios',       en: 'All trades' },
  filter_city:        { es: 'Todos los municipios',    en: 'All municipalities' },
  no_jobs:            { es: 'No hay trabajos disponibles en este momento.', en: 'No jobs available at this time.' },
  proposals_count:    { es: 'propuestas',              en: 'proposals' },
  view_job:           { es: 'Ver trabajo →',           en: 'View job →' },
  posted_ago:         { es: 'Publicado hace',          en: 'Posted' },

  // Post job
  post_job_title:     { es: 'Publicar nuevo trabajo',  en: 'Post a new job' },
  job_title_label:    { es: 'Título del trabajo',      en: 'Job title' },
  job_title_ph:       { es: 'ej. Reparación de techo después de lluvia', en: 'e.g. Roof repair after rain' },
  trade_needed:       { es: 'Tipo de trabajo',         en: 'Type of work' },
  trade_select:       { es: 'Seleccionar',             en: 'Select' },
  job_desc_label:     { es: 'Descripción del trabajo', en: 'Job description' },
  job_desc_ph:        { es: 'Describe el trabajo: qué necesitas, cuándo, condiciones especiales...', en: 'Describe the job: what you need, when, any special conditions...' },
  publish_job_btn:    { es: 'Publicar trabajo →',      en: 'Post job →' },
  publishing:         { es: 'Publicando...',            en: 'Publishing...' },
  improving_desc:     { es: 'Mejorando tu descripción...', en: 'Improving your description...' },
  job_posted_toast:   { es: '🎉 ¡Trabajo publicado!', en: '🎉 Job posted!' },

  // Dashboard homeowner
  hi_greeting:        { es: 'Hola',                   en: 'Hi' },
  post_new_job:       { es: '+ Publicar nuevo trabajo', en: '+ Post new job' },
  open_jobs_tab:      { es: 'Trabajos abiertos',      en: 'Open jobs' },
  active_jobs_tab:    { es: 'Trabajos activos',       en: 'Active jobs' },
  completed_jobs_tab: { es: 'Completados',            en: 'Completed' },
  no_open_jobs:       { es: 'No tienes trabajos abiertos.', en: 'You have no open jobs.' },
  no_active_jobs:     { es: 'No tienes trabajos activos.', en: 'You have no active jobs.' },
  no_completed_jobs:  { es: 'No tienes trabajos completados.', en: 'You have no completed jobs.' },
  proposals_plural:   { es: 'propuestas',             en: 'proposals' },
  proposals_singular: { es: 'propuesta',              en: 'proposal' },
  new_proposals:      { es: 'nuevas',                 en: 'new' },
  accept_btn:         { es: 'Aceptar propuesta',      en: 'Accept proposal' },
  pay_escrow:         { es: '💳 Pagar escrow',        en: '💳 Pay escrow' },
  mark_complete:      { es: '✓ Marcar completado',    en: '✓ Mark complete' },
  chat_btn:           { es: '💬 Mensaje',             en: '💬 Message' },
  proposal_accepted_tag: { es: '✅ Aceptada',         en: '✅ Accepted' },
  leave_review:       { es: '⭐ Dejar Reseña',        en: '⭐ Leave Review' },
  no_proposals_yet:   { es: 'Aún no hay propuestas para este trabajo.', en: 'No proposals yet for this job.' },
  write_msg_ph:       { es: 'Escribe un mensaje...',  en: 'Write a message...' },
  send_btn:           { es: 'Enviar',                 en: 'Send' },
  chat_with:          { es: 'Chat con',               en: 'Chat with' },
  confirm_accept:     { es: '¿Aceptar esta propuesta?', en: 'Accept this proposal?' },
  confirm_complete:   { es: '¿Marcar este trabajo como completado?', en: 'Mark this job as complete?' },
  job_complete_toast: { es: '✅ Trabajo completado. Pago liberado al contratista.', en: '✅ Job completed. Payment released to contractor.' },

  // Dashboard contractor
  my_proposals_tab:   { es: 'Mis propuestas',         en: 'My proposals' },
  active_tab:         { es: 'Activos',                en: 'Active' },
  sent_tab:           { es: 'Enviadas',               en: 'Sent' },
  completed_tab:      { es: 'Completados',            en: 'Completed' },
  send_proposal_btn:  { es: 'Enviar propuesta',       en: 'Send proposal' },
  proposal_msg_ph:    { es: 'Describe por qué eres el mejor para este trabajo...', en: 'Describe why you are the best for this job...' },
  price_label:        { es: 'Tu precio ($)',          en: 'Your price ($)' },
  price_ph:           { es: '0 = por discutir',       en: '0 = to be discussed' },
  submit_proposal:    { es: 'Enviar propuesta →',     en: 'Submit proposal →' },
  waiting_price:      { es: 'Esperando precio del contratista', en: 'Waiting for contractor price' },
  pending_approval:   { es: 'Pendiente aprobación',   en: 'Pending approval' },
  no_phone:           { es: 'Sin teléfono',           en: 'No phone' },

  // Review
  review_title:       { es: '⭐ Dejar Reseña',        en: '⭐ Leave a Review' },
  review_question:    { es: '¿Cómo fue tu experiencia con este contratista?', en: 'How was your experience with this contractor?' },
  review_ph:          { es: 'Comparte tu experiencia (opcional)...', en: 'Share your experience (optional)...' },
  submit_review:      { es: 'Enviar Reseña',          en: 'Submit Review' },
  skip_review:        { es: 'Omitir',                 en: 'Skip' },
  review_submitted:   { es: '⭐ ¡Reseña enviada!',    en: '⭐ Review submitted!' },
  select_rating:      { es: 'Por favor selecciona una calificación.', en: 'Please select a rating.' },

  // Payment
  payment_title:      { es: 'Pago en custodia',       en: 'Escrow payment' },
  payment_subtitle:   { es: 'Tu pago está protegido hasta que el trabajo sea completado', en: 'Your payment is protected until the job is completed' },
  card_name_ph:       { es: 'María González',         en: 'Maria González' },
  pay_now_btn:        { es: 'Pagar ahora',            en: 'Pay now' },

  // Reset password
  reset_title:        { es: 'Restablecer contraseña', en: 'Reset password' },
  reset_subtitle:     { es: 'Ingresa tu correo y te enviaremos un enlace para crear una nueva contraseña.', en: 'Enter your email and we will send you a link to create a new password.' },
  send_link_btn:      { es: 'Enviar enlace →',        en: 'Send link →' },
  sending_link:       { es: 'Enviando...',            en: 'Sending...' },
  link_sent:          { es: '✅ Te enviamos un enlace a tu correo. Revisa tu bandeja de entrada (y la carpeta de spam).', en: '✅ We sent a link to your email. Check your inbox (and spam folder).' },
  new_password_title: { es: 'Nueva contraseña',       en: 'New password' },
  new_password_sub:   { es: 'Elige una contraseña segura para tu cuenta.', en: 'Choose a secure password for your account.' },
  new_password_label: { es: 'Nueva contraseña',       en: 'New password' },
  confirm_new_label:  { es: 'Confirmar contraseña',   en: 'Confirm password' },
  save_password_btn:  { es: 'Guardar contraseña →',   en: 'Save password →' },
  back_to_login:      { es: '← Volver al inicio de sesión', en: '← Back to login' },

  // Contractor profile
  profile_overview:   { es: 'Resumen',                en: 'Overview' },
  profile_reviews:    { es: 'Reseñas',                en: 'Reviews' },
  profile_about:      { es: 'Sobre mí',               en: 'About' },
  profile_recent_reviews: { es: 'Reseñas recientes',  en: 'Recent reviews' },
  profile_all_reviews: { es: 'Todas las reseñas',     en: 'All reviews' },
  profile_info:       { es: 'Información',            en: 'Info' },
  profile_trade:      { es: 'Especialidad',           en: 'Trade' },
  profile_location:   { es: 'Ubicación',              en: 'Location' },
  profile_license:    { es: 'Licencia CIAPR',         en: 'CIAPR License' },
  profile_member_since: { es: 'Miembro desde',        en: 'Member since' },
  profile_verified:   { es: 'Verificado',             en: 'Verified' },
  profile_no_reviews: { es: 'Aún no hay reseñas para este contratista.', en: 'No reviews yet for this contractor.' },
  profile_avg_rating: { es: 'Calificación promedio',  en: 'Avg. rating' },
  profile_total_reviews: { es: 'Reseñas',             en: 'Reviews' },
  browse_open_jobs:   { es: 'Ver trabajos disponibles →', en: 'Browse open jobs →' },

  // Status badges
  status_open:        { es: 'Abierto',                en: 'Open' },
  status_accepted:    { es: 'En progreso',            en: 'In progress' },
  status_completed:   { es: 'Completado',             en: 'Completed' },


  // Dashboard keys (legacy key names used in dashboards)
  loginTitle:         { es: 'Mi Panel',               en: 'My Dashboard' },
  loginTitleContractor: { es: 'Panel Contratista',    en: 'Contractor Dashboard' },
  loginSub:           { es: 'Ingresa tu correo para ver tus trabajos y propuestas', en: 'Enter your email to see your jobs and proposals' },
  emailLabel:         { es: 'Correo electrónico',     en: 'Email address' },
  passwordLabel:      { es: 'Contraseña',             en: 'Password' },
  loginBtn:           { es: 'Entrar →',               en: 'Log in →' },
  forgotPassword:     { es: '¿Olvidaste tu contraseña?', en: 'Forgot your password?' },
  footerNoAccount:    { es: '¿No tienes cuenta?',     en: 'No account yet?' },
  footerSignup:       { es: 'Regístrate gratis',      en: 'Sign up free' },
  footerContractor:   { es: '¿Eres contratista?',     en: 'Are you a contractor?' },
  footerContractorLink: { es: 'Panel de contratista →', en: 'Contractor dashboard →' },
  footerHomeowner:    { es: '¿Eres propietario?',     en: 'Are you a homeowner?' },
  footerHomeownerLink: { es: 'Panel de propietario →', en: 'Homeowner dashboard →' },
  postBtn:            { es: '+ Publicar nuevo trabajo', en: '+ Post new job' },
  statJobs:           { es: 'Trabajos publicados',    en: 'Jobs posted' },
  statProps:          { es: 'Propuestas recibidas',   en: 'Proposals received' },
  statAcc:            { es: 'Trabajos aceptados',     en: 'Jobs accepted' },
  statSent:           { es: 'Propuestas enviadas',    en: 'Proposals sent' },
  statPend:           { es: 'En espera de respuesta', en: 'Awaiting response' },
  browseBtn:          { es: '🔍 Ver trabajos disponibles', en: '🔍 Browse available jobs' },
  logout:             { es: 'Cerrar sesión',          en: 'Log out' },
  active:             { es: 'Activo',                 en: 'Active' },
  pendingApproval:    { es: 'Pendiente aprobación',   en: 'Pending approval' },
  noPhone:            { es: 'Sin teléfono',           en: 'No phone' },
  openStatus:         { es: 'Abierto',                en: 'Open' },
  acceptedStatus:     { es: 'En progreso',            en: 'In progress' },
  closedStatus:       { es: 'Completado',             en: 'Completed' },
  proposals:          { es: 'propuesta',              en: 'proposal' },
  proposalsPlural:    { es: 'propuestas',             en: 'proposals' },
  newProp:            { es: 'nueva',                  en: 'new' },
  newPropPlural:      { es: 'nuevas',                 en: 'new' },
  accepted:           { es: 'Aceptada',               en: 'Accepted' },
  viewArrow:          { es: 'Ver →',                  en: 'View →' },
  noProps:            { es: 'Aún no hay propuestas para este trabajo.', en: 'No proposals yet for this job.' },
  propAccepted:       { es: '✅ Propuesta aceptada',  en: '✅ Proposal accepted' },
  markDone:           { es: '✓ Marcar completado',    en: '✓ Mark complete' },
  waitingPrice:       { es: 'Esperando precio del contratista', en: 'Waiting for contractor price' },
  chatBtn:            { es: '💬 Mensaje',             en: '💬 Message' },
  chatWith:           { es: 'Chat con',               en: 'Chat with' },
  writeMsg:           { es: 'Escribe un mensaje...',  en: 'Write a message...' },
  sendBtn:            { es: 'Enviar',                 en: 'Send' },
  acceptBtn:          { es: 'Aceptar propuesta',      en: 'Accept proposal' },
  payEscrow:          { es: '💳 Pagar escrow',        en: '💳 Pay escrow' },
  tabOpen:            { es: 'Abiertos',               en: 'Open' },
  tabActive:          { es: 'Activos',                en: 'Active' },
  tabCompleted:       { es: 'Completados',            en: 'Completed' },
  tabSent:            { es: 'Enviadas',               en: 'Sent' },
  reviewTitle:        { es: '⭐ Dejar Reseña',        en: '⭐ Leave a Review' },
  reviewQuestion:     { es: '¿Cómo fue tu experiencia con este contratista?', en: 'How was your experience with this contractor?' },
  reviewPh:           { es: 'Comparte tu experiencia (opcional)...', en: 'Share your experience (optional)...' },
  submitReview:       { es: 'Enviar Reseña',          en: 'Submit Review' },
  skipReview:         { es: 'Omitir',                 en: 'Skip' },

  // Common
  loading:            { es: 'Cargando...',            en: 'Loading...' },
  error_generic:      { es: 'Algo salió mal. Intenta de nuevo.', en: 'Something went wrong. Please try again.' },
  cancel:             { es: 'Cancelar',               en: 'Cancel' },
  save:               { es: 'Guardar',                en: 'Save' },
  confirm:            { es: 'Confirmar',              en: 'Confirm' },
  close:              { es: 'Cerrar',                 en: 'Close' },
  yes:                { es: 'Sí',                     en: 'Yes' },
  no:                 { es: 'No',                     en: 'No' },
  today:              { es: 'Hoy',                    en: 'Today' },
  now:                { es: 'ahora',                  en: 'just now' },
};

// Get a translation
CPR.t = function(key) {
  const t = CPR.translations[key];
  if (!t) return key;
  return t[CPR.lang] || t['es'] || key;
};

// Apply translations to all data-i18n elements
CPR.applyLang = function() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = CPR.t(key);
    if (val) el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    const val = CPR.t(key);
    if (val) el.placeholder = val;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    const val = CPR.t(key);
    if (val) el.innerHTML = val;
  });
  // Update lang dropdown if present
  const dropdown = document.getElementById('lang-dropdown');
  if (dropdown) dropdown.value = CPR.lang;
};

// Switch language
CPR.setLang = function(lang) {
  CPR.lang = lang;
  localStorage.setItem('cpr_lang', lang);
  CPR.applyLang();
  // Dispatch event so pages can react
  window.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
};

// ── Auth System ──────────────────────────────────────────────────

const SUPABASE_URL = 'https://shdsvylhtzuuleaicehe.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNoZHN2eWxodHp1dWxlYWljZWhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAyNDc3MTQsImV4cCI6MjA5NTgyMzcxNH0.ZVuC49Fz8f5dDzYRutq07YpnpSxmrewQQ8UHn49cWC0';

CPR.SUPABASE_URL = SUPABASE_URL;
CPR.SUPABASE_KEY = SUPABASE_KEY;

// Get current Supabase session
CPR.getSession = async function() {
  try {
    const stored = localStorage.getItem('sb-shdsvylhtzuuleaicehe-auth-token');
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed?.access_token) return parsed;
    }
  } catch(e) {}
  return null;
};

// Get current user email from session
CPR.getSessionEmail = async function() {
  const session = await CPR.getSession();
  return session?.user?.email || null;
};

// Supabase query helper
CPR.db = async function(path) {
  const session = await CPR.getSession();
  const token = session?.access_token || SUPABASE_KEY;
  const res = await fetch(SUPABASE_URL + '/rest/v1/' + path, {
    headers: { 'apikey': SUPABASE_KEY, 'Authorization': 'Bearer ' + token }
  });
  return res.json();
};

// Logout
CPR.logout = async function() {
  if (window.supabase) {
    const { createClient } = supabase;
    const sb = createClient(SUPABASE_URL, SUPABASE_KEY);
    await sb.auth.signOut();
  }
  localStorage.removeItem('homeowner_id');
  localStorage.removeItem('homeowner_data');
  localStorage.removeItem('contractor_id');
  localStorage.removeItem('contractor_data');
  localStorage.removeItem('contractor_name');
  window.location.href = 'index.html';
};

// Check if logged in and get user type + data
CPR.getCurrentUser = async function() {
  const email = await CPR.getSessionEmail();
  if (!email) return null;

  // Check homeowners first
  const homeowners = await CPR.db('homeowners?email=eq.' + encodeURIComponent(email) + '&select=*');
  if (homeowners?.[0]) return { type: 'homeowner', ...homeowners[0] };

  // Check contractors
  const contractors = await CPR.db('contractors?email=eq.' + encodeURIComponent(email) + '&select=*');
  if (contractors?.[0]) return { type: 'contractor', ...contractors[0] };

  return null;
};

// ── Nav Builder ──────────────────────────────────────────────────

CPR.buildNav = async function(activePage) {
  const user = await CPR.getCurrentUser();
  const lang = CPR.lang;

  const logoHtml = '<a href="index.html" class="cpr-logo"><div class="cpr-logo-box">C</div>ContractingPR</a>';

  const langDropdown = '<select id="lang-dropdown" class="cpr-lang-select" onchange="CPR.setLang(this.value)"><option value="es">Español</option><option value="en">English</option></select>';

  let rightLinks = '';
  if (user) {
    const dashUrl = user.type === 'homeowner' ? 'dashboard-homeowner.html' : 'dashboard-contractor.html';
    rightLinks = '<a href="' + dashUrl + '" class="cpr-nav-link">' + CPR.t('nav_dashboard') + '</a>' +
                 '<button onclick="CPR.logout()" class="cpr-nav-btn-ghost">' + CPR.t('nav_logout') + '</button>';
  } else {
    rightLinks = '<a href="jobs.html" class="cpr-nav-link">' + CPR.t('nav_jobs') + '</a>' +
                 '<a href="signup.html" class="cpr-nav-link">' + CPR.t('nav_signup') + '</a>' +
                 '<a href="dashboard-homeowner.html" class="cpr-nav-btn">' + CPR.t('nav_login') + '</a>';
  }

  const navHtml = '<nav class="cpr-nav"><div class="cpr-nav-inner">' +
    logoHtml +
    '<div class="cpr-nav-right">' + langDropdown + rightLinks + '</div>' +
    '</div></nav>';

  const navCss = `
    <style>
    .cpr-nav{position:sticky;top:0;z-index:100;background:rgba(255,255,255,0.97);backdrop-filter:blur(12px);border-bottom:1px solid #E2E8F0;font-family:'Inter',sans-serif}
    .cpr-nav-inner{max-width:1200px;margin:0 auto;padding:0 24px;height:64px;display:flex;align-items:center;justify-content:space-between}
    .cpr-logo{display:flex;align-items:center;gap:10px;font-size:20px;font-weight:800;color:#0066CC;text-decoration:none}
    .cpr-logo-box{width:34px;height:34px;background:#0066CC;border-radius:8px;display:grid;place-items:center;color:white;font-weight:800;font-size:16px;flex-shrink:0}
    .cpr-nav-right{display:flex;align-items:center;gap:12px}
    .cpr-nav-link{font-size:14px;font-weight:500;color:#475569;text-decoration:none;transition:color 0.2s}
    .cpr-nav-link:hover{color:#0066CC}
    .cpr-nav-btn{background:#0066CC;color:white;padding:9px 18px;border-radius:8px;font-size:14px;font-weight:600;text-decoration:none;transition:background 0.2s}
    .cpr-nav-btn:hover{background:#004C99}
    .cpr-nav-btn-ghost{background:none;border:1px solid #E2E8F0;padding:8px 16px;border-radius:8px;font-size:14px;font-weight:500;color:#475569;cursor:pointer;font-family:'Inter',sans-serif;transition:all 0.2s}
    .cpr-nav-btn-ghost:hover{border-color:#0066CC;color:#0066CC}
    .cpr-lang-select{background:none;border:1px solid #E2E8F0;padding:6px 10px;border-radius:6px;font-size:13px;cursor:pointer;font-family:'Inter',sans-serif;color:#475569;outline:none}
    .cpr-lang-select:hover{border-color:#0066CC}
    @media(max-width:640px){.cpr-nav-link{display:none}.cpr-nav-inner{padding:0 16px}}
    </style>
  `;

  return navCss + navHtml;
};

// Inject nav into element with id="cpr-nav-placeholder"
CPR.injectNav = async function(activePage) {
  const placeholder = document.getElementById('cpr-nav-placeholder');
  if (!placeholder) return;
  placeholder.outerHTML = await CPR.buildNav(activePage);
  // Set dropdown to current lang
  const dd = document.getElementById('lang-dropdown');
  if (dd) dd.value = CPR.lang;
};

// Auto-init on DOM ready
document.addEventListener('DOMContentLoaded', function() {
  CPR.applyLang();
});
