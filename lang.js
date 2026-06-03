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
  signup_homeowner_tab:   { es: '🏠 Soy Cliente',          en: '🏠 I am a Client' },
  tab1:                   { es: '🔨 Soy Contratista',   en: '🔨 I am a Contractor' },
  tab2:                   { es: '🏠 Soy Cliente',          en: '🏠 I am a Client' },
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



  // Signup page missing keys
  btnContractor:      { es: 'Registrarme como contratista →', en: 'Register as contractor →' },
  btnHomeowner:       { es: 'Crear mi cuenta — Es gratis →',  en: 'Create my account — Free →' },
  trade_select_ph:    { es: 'Seleccionar',                    en: 'Select' },
  city_select_ph:     { es: 'Seleccionar municipio',          en: 'Select municipality' },
  terms_text:         { es: 'He leído y acepto los',          en: 'I have read and agree to the' },
  terms_of_service:   { es: 'Términos de Servicio',           en: 'Terms of Service' },
  terms_platform:     { es: 'de ContractingPR, incluyendo la regla de comunicación y pagos exclusivamente a través de la plataforma. Entiendo que el incumplimiento puede resultar en la terminación de mi cuenta.', en: 'of ContractingPR, including the rule of communication and payments exclusively through the platform. I understand that non-compliance may result in account termination.' },
  footer_free:        { es: '100% gratis para propietarios',  en: '100% free for clients' },
  footer_escrow:      { es: 'Pagos en custodia',              en: 'Escrow payments' },
  footer_pr:          { es: 'Solo Puerto Rico',               en: 'Puerto Rico only' },
  sobre_ti:           { es: 'Sobre ti',                       en: 'About you' },
  licencia_ciapr:     { es: 'Licencia CIAPR',                 en: 'CIAPR License' },
  opcional:           { es: 'opcional',                       en: 'optional' },

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
  footerHomeowner:    { es: '¿Eres propietario?',     en: 'Are you a client?' },
  footerHomeownerLink: { es: 'Panel de propietario →', en: 'Client dashboard →' },
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


  // Jobs page specific
  ctaTitle:           { es: '¿Eres cliente? Publica tu trabajo gratis', en: 'Are you a client? Post your job free' },
  ctaSub:             { es: 'Recibe propuestas de contratistas verificados en horas', en: 'Get proposals from verified contractors in hours' },
  ctaBtn:             { es: 'Publicar ahora →',        en: 'Post now →' },
  filterLabel:        { es: 'Filtrar:',                en: 'Filter:' },
  emptyTitle:         { es: 'No hay trabajos disponibles', en: 'No jobs available' },
  emptySub:           { es: 'Sé el primero en publicar un trabajo.', en: 'Be the first to post a job.' },
  emptyBtn:           { es: 'Publicar trabajo →',      en: 'Post a job →' },
  loadingJobs:        { es: 'Cargando trabajos disponibles...', en: 'Loading available jobs...' },

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
    // Supabase v2 stores session under this key
    const stored = localStorage.getItem('sb-shdsvylhtzuuleaicehe-auth-token');
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed?.access_token) return parsed;
    }
    // Also try the new format
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.includes('supabase') && key.includes('auth')) {
        try {
          const val = JSON.parse(localStorage.getItem(key));
          if (val?.access_token) return val;
          if (val?.session?.access_token) return val.session;
        } catch(e) {}
      }
    }
    // Try getting from supabase client directly
    if (window.supabase) {
      const { createClient } = supabase;
      const sb = createClient(CPR.SUPABASE_URL, CPR.SUPABASE_KEY);
      const { data } = await sb.auth.getSession();
      if (data?.session) return data.session;
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
    rightLinks = '<a href="jobs.html" class="cpr-nav-link">' + CPR.t('nav_jobs') + '</a>' +
                 '<a href="' + dashUrl + '" class="cpr-nav-link">' + CPR.t('nav_dashboard') + '</a>' +
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


// ── Auth Modal ───────────────────────────────────────────────────
// Shows a sign up / log in modal when user tries to do something that requires auth
// After auth, calls the pending action automatically

CPR._pendingAction = null; // { fn, label, userType }

CPR.requireAuth = function(action, label, preferredType) {
  // If already logged in, run action immediately
  CPR.getCurrentUser().then(user => {
    if (user) {
      action(user);
    } else {
      CPR._pendingAction = { fn: action, label: label, userType: preferredType || null };
      CPR.showAuthModal(preferredType);
    }
  });
};

CPR.showAuthModal = function(preferredType) {
  // Remove existing modal if any
  const existing = document.getElementById('cpr-auth-modal-overlay');
  if (existing) existing.remove();

  const lang = CPR.lang;
  const isContractor = preferredType === 'contractor';

  const overlay = document.createElement('div');
  overlay.id = 'cpr-auth-modal-overlay';
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px;font-family:Inter,sans-serif';
  overlay.onclick = function(e) { if(e.target===overlay) CPR.hideAuthModal(); };

  overlay.innerHTML = `
    <div style="background:white;border-radius:20px;width:100%;max-width:440px;box-shadow:0 24px 64px rgba(0,0,0,0.25);overflow:hidden">
      <div style="background:#0a1628;padding:20px 24px;display:flex;justify-content:space-between;align-items:center">
        <div>
          <div style="font-size:18px;font-weight:800;color:white" id="cpr-auth-title">
            ${lang==='en' ? 'Sign in to continue' : 'Inicia sesión para continuar'}
          </div>
          <div style="font-size:13px;color:rgba(255,255,255,0.6);margin-top:2px" id="cpr-auth-subtitle">
            ${CPR._pendingAction?.label || (lang==='en' ? 'Create an account or log in' : 'Crea una cuenta o inicia sesión')}
          </div>
        </div>
        <button onclick="CPR.hideAuthModal()" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer;padding:4px 8px;line-height:1">✕</button>
      </div>
      
      <!-- Tabs -->
      <div style="display:flex;border-bottom:1px solid #E2E8F0">
        <button id="cpr-tab-login" onclick="CPR._authTab('login')" style="flex:1;padding:14px;font-size:14px;font-weight:600;background:none;border:none;border-bottom:2px solid #0066CC;color:#0066CC;cursor:pointer;font-family:Inter,sans-serif">
          ${lang==='en' ? 'Log in' : 'Iniciar sesión'}
        </button>
        <button id="cpr-tab-signup" onclick="CPR._authTab('signup')" style="flex:1;padding:14px;font-size:14px;font-weight:600;background:none;border:none;border-bottom:2px solid transparent;color:#94A3B8;cursor:pointer;font-family:Inter,sans-serif">
          ${lang==='en' ? 'Sign up' : 'Registrarse'}
        </button>
      </div>

      <div style="padding:24px">
        <!-- Login form -->
        <div id="cpr-login-form">
          <div style="margin-bottom:14px">
            <label style="display:block;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#475569;margin-bottom:6px">
              ${lang==='en' ? 'Email' : 'Correo electrónico'}
            </label>
            <input type="email" id="cpr-login-email" placeholder="${lang==='en' ? 'your@email.com' : 'tu@correo.com'}"
              style="width:100%;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:8px;padding:11px 14px;font-size:15px;font-family:Inter,sans-serif;outline:none;box-sizing:border-box"
              onfocus="this.style.borderColor='#0066CC'" onblur="this.style.borderColor='#E2E8F0'">
          </div>
          <div style="margin-bottom:16px">
            <label style="display:block;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#475569;margin-bottom:6px">
              ${lang==='en' ? 'Password' : 'Contraseña'}
            </label>
            <input type="password" id="cpr-login-password" placeholder="••••••••"
              style="width:100%;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:8px;padding:11px 14px;font-size:15px;font-family:Inter,sans-serif;outline:none;box-sizing:border-box"
              onfocus="this.style.borderColor='#0066CC'" onblur="this.style.borderColor='#E2E8F0'"
              onkeydown="if(event.key==='Enter')CPR._doLogin()">
          </div>
          <div id="cpr-login-error" style="background:#FEF2F2;border:1px solid #FECACA;border-radius:8px;padding:10px 12px;color:#DC2626;font-size:13px;margin-bottom:12px;display:none"></div>
          <button onclick="CPR._doLogin()" id="cpr-login-btn"
            style="width:100%;padding:13px;background:#0066CC;color:white;border:none;border-radius:10px;font-size:15px;font-weight:700;cursor:pointer;font-family:Inter,sans-serif;transition:background 0.2s">
            ${lang==='en' ? 'Log in →' : 'Entrar →'}
          </button>
          <div style="text-align:center;margin-top:12px">
            <a href="reset-password.html" style="font-size:13px;color:#0066CC;font-weight:500">${lang==='en' ? 'Forgot your password?' : '¿Olvidaste tu contraseña?'}</a>
          </div>
        </div>

        <!-- Signup form -->
        <div id="cpr-signup-form" style="display:none">
          <div style="display:flex;gap:10px;margin-bottom:16px">
            <button id="cpr-type-client" onclick="CPR._setSignupType('client')"
              style="flex:1;padding:10px;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;font-family:Inter,sans-serif;background:#0066CC;color:white;border:none">
              ${lang==='en' ? '🏠 Client' : '🏠 Cliente'}
            </button>
            <button id="cpr-type-contractor" onclick="CPR._setSignupType('contractor')"
              style="flex:1;padding:10px;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;font-family:Inter,sans-serif;background:#F8FAFC;color:#475569;border:1px solid #E2E8F0">
              ${lang==='en' ? '🔨 Contractor' : '🔨 Contratista'}
            </button>
          </div>
          <div style="margin-bottom:12px">
            <input type="text" id="cpr-signup-name" placeholder="${lang==='en' ? 'Full name' : 'Nombre completo'}"
              style="width:100%;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:8px;padding:11px 14px;font-size:14px;font-family:Inter,sans-serif;outline:none;box-sizing:border-box"
              onfocus="this.style.borderColor='#0066CC'" onblur="this.style.borderColor='#E2E8F0'">
          </div>
          <div style="margin-bottom:12px">
            <input type="email" id="cpr-signup-email" placeholder="${lang==='en' ? 'your@email.com' : 'tu@correo.com'}"
              style="width:100%;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:8px;padding:11px 14px;font-size:14px;font-family:Inter,sans-serif;outline:none;box-sizing:border-box"
              onfocus="this.style.borderColor='#0066CC'" onblur="this.style.borderColor='#E2E8F0'">
          </div>
          <div style="margin-bottom:16px">
            <input type="password" id="cpr-signup-password" placeholder="${lang==='en' ? 'At least 8 characters' : 'Mínimo 8 caracteres'}"
              style="width:100%;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:8px;padding:11px 14px;font-size:14px;font-family:Inter,sans-serif;outline:none;box-sizing:border-box"
              onfocus="this.style.borderColor='#0066CC'" onblur="this.style.borderColor='#E2E8F0'">
          </div>
          <div id="cpr-signup-error" style="background:#FEF2F2;border:1px solid #FECACA;border-radius:8px;padding:10px 12px;color:#DC2626;font-size:13px;margin-bottom:12px;display:none"></div>
          <button onclick="CPR._doSignup()" id="cpr-signup-btn"
            style="width:100%;padding:13px;background:#0066CC;color:white;border:none;border-radius:10px;font-size:15px;font-weight:700;cursor:pointer;font-family:Inter,sans-serif">
            ${lang==='en' ? 'Create account →' : 'Crear cuenta →'}
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';

  // Set preferred type
  if (isContractor && document.getElementById('cpr-tab-signup')) {
    CPR._authTab('signup');
    CPR._setSignupType('contractor');
  }
};

CPR.hideAuthModal = function() {
  const overlay = document.getElementById('cpr-auth-modal-overlay');
  if (overlay) overlay.remove();
  document.body.style.overflow = '';
};

CPR._authTab = function(tab) {
  document.getElementById('cpr-login-form').style.display = tab === 'login' ? 'block' : 'none';
  document.getElementById('cpr-signup-form').style.display = tab === 'signup' ? 'block' : 'none';
  const loginTab = document.getElementById('cpr-tab-login');
  const signupTab = document.getElementById('cpr-tab-signup');
  if (loginTab) {
    loginTab.style.borderBottomColor = tab === 'login' ? '#0066CC' : 'transparent';
    loginTab.style.color = tab === 'login' ? '#0066CC' : '#94A3B8';
  }
  if (signupTab) {
    signupTab.style.borderBottomColor = tab === 'signup' ? '#0066CC' : 'transparent';
    signupTab.style.color = tab === 'signup' ? '#0066CC' : '#94A3B8';
  }
};

CPR._signupType = 'client';
CPR._setSignupType = function(type) {
  CPR._signupType = type;
  const clientBtn = document.getElementById('cpr-type-client');
  const contractorBtn = document.getElementById('cpr-type-contractor');
  if (clientBtn) {
    clientBtn.style.background = type === 'client' ? '#0066CC' : '#F8FAFC';
    clientBtn.style.color = type === 'client' ? 'white' : '#475569';
    clientBtn.style.border = type === 'client' ? 'none' : '1px solid #E2E8F0';
  }
  if (contractorBtn) {
    contractorBtn.style.background = type === 'contractor' ? '#0066CC' : '#F8FAFC';
    contractorBtn.style.color = type === 'contractor' ? 'white' : '#475569';
    contractorBtn.style.border = type === 'contractor' ? 'none' : '1px solid #E2E8F0';
  }
};

CPR._doLogin = async function() {
  const email = document.getElementById('cpr-login-email').value.trim();
  const password = document.getElementById('cpr-login-password').value;
  const btn = document.getElementById('cpr-login-btn');
  const errorEl = document.getElementById('cpr-login-error');
  errorEl.style.display = 'none';
  if (!email || !password) {
    errorEl.textContent = CPR.lang === 'en' ? 'Enter your email and password.' : 'Ingresa tu correo y contraseña.';
    errorEl.style.display = 'block';
    return;
  }
  btn.disabled = true;
  btn.textContent = CPR.lang === 'en' ? 'Logging in...' : 'Entrando...';
  try {
    const { createClient } = supabase;
    const sb = createClient(CPR.SUPABASE_URL, CPR.SUPABASE_KEY);
    const { error } = await sb.auth.signInWithPassword({ email, password });
    if (error) throw new Error(error.message);
    CPR.hideAuthModal();
    // Small delay to let Supabase store the session
    await new Promise(r => setTimeout(r, 500));
    // Run pending action
    const user = await CPR.getCurrentUser();
    if (user && CPR._pendingAction) {
      const action = CPR._pendingAction.fn;
      CPR._pendingAction = null;
      action(user);
    } else if (user) {
      // Refresh nav to show logged-in state
      await CPR.injectNav();
    }
  } catch(err) {
    errorEl.innerHTML = CPR.lang === 'en'
      ? 'Incorrect email or password. <a href="reset-password.html" style="color:#DC2626;text-decoration:underline">Forgot password?</a>'
      : 'Correo o contraseña incorrectos. <a href="reset-password.html" style="color:#DC2626;text-decoration:underline">¿Olvidaste tu contraseña?</a>';
    errorEl.style.display = 'block';
    btn.disabled = false;
    btn.textContent = CPR.lang === 'en' ? 'Log in →' : 'Entrar →';
  }
};

CPR._doSignup = async function() {
  const name = document.getElementById('cpr-signup-name').value.trim();
  const email = document.getElementById('cpr-signup-email').value.trim();
  const password = document.getElementById('cpr-signup-password').value;
  const btn = document.getElementById('cpr-signup-btn');
  const errorEl = document.getElementById('cpr-signup-error');
  errorEl.style.display = 'none';
  if (!name || !email || !password) {
    errorEl.textContent = CPR.lang === 'en' ? 'Please fill in all fields.' : 'Por favor completa todos los campos.';
    errorEl.style.display = 'block';
    return;
  }
  if (password.length < 8) {
    errorEl.textContent = CPR.lang === 'en' ? 'Password must be at least 8 characters.' : 'La contraseña debe tener al menos 8 caracteres.';
    errorEl.style.display = 'block';
    return;
  }
  btn.disabled = true;
  btn.textContent = CPR.lang === 'en' ? 'Creating account...' : 'Creando cuenta...';
  try {
    const { createClient } = supabase;
    const sb = createClient(CPR.SUPABASE_URL, CPR.SUPABASE_KEY);
    const { error: authErr } = await sb.auth.signUp({ email, password });
    if (authErr) throw new Error(authErr.message);
    const table = CPR._signupType === 'contractor' ? 'contractors' : 'homeowners';
    const body = CPR._signupType === 'contractor'
      ? { name, email, status: 'active' }
      : { name, email };
    await fetch(CPR.SUPABASE_URL + '/rest/v1/' + table, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'apikey': CPR.SUPABASE_KEY, 'Authorization': 'Bearer ' + CPR.SUPABASE_KEY, 'Prefer': 'return=minimal' },
      body: JSON.stringify(body)
    });
    CPR.hideAuthModal();
    await new Promise(r => setTimeout(r, 500));
    const user = await CPR.getCurrentUser();
    if (user && CPR._pendingAction) {
      const action = CPR._pendingAction.fn;
      CPR._pendingAction = null;
      action(user);
    } else if (user) {
      await CPR.injectNav();
    }
  } catch(err) {
    const msg = err.message.includes('already registered') ? (CPR.lang === 'en' ? 'That email is already registered.' : 'Ese correo ya está registrado.') : err.message;
    errorEl.textContent = msg;
    errorEl.style.display = 'block';
    btn.disabled = false;
    btn.textContent = CPR.lang === 'en' ? 'Create account →' : 'Crear cuenta →';
  }
};


// Auto-init on DOM ready
document.addEventListener('DOMContentLoaded', function() {
  CPR.applyLang();
});
