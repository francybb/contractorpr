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
  nav_jobs:           { es: 'Ver Trabajos',        en: 'View Jobs' },
  nav_signup:         { es: 'Registrarse',         en: 'Sign up' },
  nav_login:          { es: 'Iniciar sesión',      en: 'Log in' },
  nav_dashboard:      { es: 'Panel',              en: 'Dashboard' },
  nav_logout:         { es: 'Cerrar sesión',       en: 'Log out' },
  nav_account:        { es: 'Mi cuenta',           en: 'My account' },
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
  pay_escrow:         { es: '💳 Pagar de forma segura',        en: '💳 Pay securely' },
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
  payment_title:      { es: 'Pago protegido',       en: 'Protected payment' },
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
  footer_escrow:      { es: 'Pagos protegidos',              en: 'Protected payments' },
  footer_pr:          { es: 'Solo Puerto Rico',               en: 'Puerto Rico only' },
  sobre_ti:           { es: 'Sobre ti',                       en: 'About you' },
  licencia_ciapr:     { es: 'Licencia CIAPR',                 en: 'CIAPR License' },
  opcional:           { es: 'opcional',                       en: 'optional' },

  // Dashboard keys (legacy key names used in dashboards)
  typeClient:         { es: 'Soy Cliente',          en: 'I am a Client' },
  typeClientSub:      { es: 'Publicar trabajos',    en: 'Post jobs' },
  typeContractor:     { es: 'Soy Contratista',       en: 'I am a Contractor' },
  typeContractorSub:  { es: 'Encontrar trabajo',     en: 'Find work' },
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
  payEscrow:          { es: '💳 Pagar de forma segura',        en: '💳 Pay securely' },
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
    let key = el.dataset.i18n;
    let val = CPR.t(key);
    if (val) el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    let key = el.dataset.i18nPh;
    let val = CPR.t(key);
    if (val) el.placeholder = val;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    let key = el.dataset.i18nHtml;
    let val = CPR.t(key);
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
  // Reload page so all dynamic content re-renders in new language
  window.location.reload();
};

// ── Auth System ──────────────────────────────────────────────────

var SUPABASE_URL = 'https://shdsvylhtzuuleaicehe.supabase.co';
var SUPABASE_PK = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNoZHN2eWxodHp1dWxlYWljZWhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAyNDc3MTQsImV4cCI6MjA5NTgyMzcxNH0.ZVuC49Fz8f5dDzYRutq07YpnpSxmrewQQ8UHn49cWC0';

CPR.SUPABASE_URL = SUPABASE_URL;
CPR.SUPABASE_PK = SUPABASE_PK;

// Google Maps loader — fetches the referrer-restricted key from the
// maps-config function, then loads the JS SDK (+ places lib) once.
// Returns a promise that resolves to window.google.maps.
CPR._mapsPromise = null;
CPR.loadMaps = function() {
  if (window.google && window.google.maps) return Promise.resolve(window.google.maps);
  if (CPR._mapsPromise) return CPR._mapsPromise;
  CPR._mapsPromise = fetch('/.netlify/functions/maps-config')
    .then(function(r) { return r.json(); })
    .then(function(cfg) {
      if (!cfg || !cfg.key) throw new Error('Maps key unavailable');
      return new Promise(function(resolve, reject) {
        window.__cprMapsReady = function() { resolve(window.google.maps); };
        var s = document.createElement('script');
        s.src = 'https://maps.googleapis.com/maps/api/js?key=' + encodeURIComponent(cfg.key) + '&libraries=places&loading=async&callback=__cprMapsReady';
        s.async = true;
        s.onerror = function() { reject(new Error('Maps SDK failed to load')); };
        document.head.appendChild(s);
      });
    });
  return CPR._mapsPromise;
};

// Reusable "Uber-style" location picker: a map with a fixed center pin.
// You drag the map; the pin (a CSS overlay supplied by the caller) marks the
// map's center. Includes a roadmap/satellite (hybrid) toggle and optional
// Places search box. Reverse-geocodes after each drag.
// opts: { center:{lat,lng}|null, search:<input>|null, onChange:fn(latlng, addressComponents|null) }
// returns { map, getLatLng(), setCenter({lat,lng}, zoom), resize() }
CPR.mapPicker = async function(mapEl, opts) {
  opts = opts || {};
  var maps = await CPR.loadMaps();
  var hasCenter = !!opts.center;
  var map = new maps.Map(mapEl, {
    center: opts.center || { lat: 18.2208, lng: -66.4 },
    zoom: hasCenter ? 17 : 9,
    mapTypeId: 'hybrid',
    mapTypeControl: true,
    mapTypeControlOptions: { mapTypeIds: ['roadmap', 'hybrid'] },
    streetViewControl: false,
    fullscreenControl: false,
    clickableIcons: false,
    gestureHandling: 'greedy'
  });
  var geocoder = new maps.Geocoder();
  var current = opts.center || null;
  var dragging = false;
  function reverse() {
    var c = map.getCenter();
    current = { lat: c.lat(), lng: c.lng() };
    if (opts.onChange) {
      geocoder.geocode({ location: current }, function(res, st) {
        opts.onChange(current, (st === 'OK' && res && res[0]) ? res[0].address_components : null);
      });
    }
  }
  map.addListener('dragstart', function() { dragging = true; });
  map.addListener('idle', function() { if (dragging) { dragging = false; reverse(); } });
  if (opts.search) {
    var auto = new maps.places.Autocomplete(opts.search, { fields: ['geometry', 'address_components'], componentRestrictions: { country: 'pr' } });
    auto.addListener('place_changed', function() {
      var place = auto.getPlace();
      if (place && place.geometry && place.geometry.location) {
        var ll = place.geometry.location;
        map.setCenter(ll); map.setZoom(18);
        current = { lat: ll.lat(), lng: ll.lng() };
        if (opts.onChange) opts.onChange(current, place.address_components || null);
      }
    });
  }
  return {
    map: map,
    getLatLng: function() { return current; },
    setCenter: function(ll, z) { map.setCenter(ll); if (z) map.setZoom(z); current = ll; },
    resize: function() { maps.event.trigger(map, 'resize'); if (current) map.setCenter(current); }
  };
};

// Get current Supabase session
CPR.getSession = async function() {
  try {
    // Try localStorage first (fastest, no network)
    for (let i = 0; i < localStorage.length; i++) {
      let k = localStorage.key(i);
      if (k && k.includes('supabase') && k.includes('auth')) {
        try {
          let v = JSON.parse(localStorage.getItem(k));
          if (v?.access_token) return v;
          if (v?.session?.access_token) return v.session;
        } catch(e) {}
      }
    }
    // Fall back to reusing existing sb client
    if (window._sb) {
      let { data } = await window._sb.auth.getSession();
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

// Supabase query helper - routes through Netlify proxy to bypass host restrictions
CPR.db = async function(path) {
  try {
    // Split path into table and query string
    const qIdx = path.indexOf('?');
    let table = qIdx === -1 ? path : path.substring(0, qIdx);
    const query = qIdx === -1 ? '' : path.substring(qIdx + 1);
    const proxyUrl = '/.netlify/functions/supabase-proxy?table=' + encodeURIComponent(table) + (query ? '&query=' + encodeURIComponent(query) : '');
    const res = await fetch(proxyUrl);
    return res.json();
  } catch(e) {
    console.error('CPR.db error:', e);
    return [];
  }
};

// Write helpers (through the proxy)
CPR.dbInsert = async function(table, obj){
  var url = '/.netlify/functions/supabase-proxy?table=' + encodeURIComponent(table) + '&prefer=' + encodeURIComponent('return=representation');
  var res = await fetch(url, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(obj) });
  if(!res.ok) throw new Error('insert ' + res.status);
  return res.json();
};
CPR.dbPatch = async function(table, query, obj){
  var url = '/.netlify/functions/supabase-proxy?table=' + encodeURIComponent(table) + '&query=' + encodeURIComponent(query) + '&prefer=' + encodeURIComponent('return=minimal');
  var res = await fetch(url, { method:'PATCH', headers:{'Content-Type':'application/json'}, body: JSON.stringify(obj) });
  if(!res.ok) throw new Error('patch ' + res.status);
  return true;
};

// Trade label — translates a stored trade value ("Plomería" or "Plomería / Plumbing") to the current language
CPR.TRADES = [['Plomería','Plumbing'],['Electricidad','Electrical'],['Carpintería','Carpentry'],['Pintura','Painting'],['Techado','Roofing'],['Albañilería','Masonry'],['Aire acondicionado','HVAC'],['Demolición','Demolition'],['Soldadura','Welding'],['Jardinería','Landscaping'],['Limpieza','Cleaning'],['Mudanza','Moving'],['Otro','Other']];
CPR.tradeLabel = function(v){
  if(!v) return '';
  var en = CPR.lang === 'en';
  if(v.indexOf(' / ') >= 0){ var p = v.split(' / '); return en ? (p[1]||p[0]) : p[0]; }
  for(var i=0;i<CPR.TRADES.length;i++){ var tr=CPR.TRADES[i]; if(tr[0]===v || tr[1]===v) return en ? tr[1] : tr[0]; }
  return v; // custom / unknown trade — show as-is
};

// Default cover art by kind: complex→building, commercial→storefront, else house.
CPR._coverCss = false;
CPR.coverArt = function(type, category){
  var kind = (type==='complex') ? 'building' : (category==='commercial' ? 'store' : 'house');
  if(!CPR._coverCss){
    var st=document.createElement('style');
    st.textContent='.cpr-cover-art{position:absolute;inset:0;display:grid;place-items:center}'+
      '.cpr-cover-art svg{width:34%;max-width:130px;height:auto;color:#fff;opacity:.92}'+
      '.cca-house{background:linear-gradient(135deg,#F3B97E 0%,#E8906B 100%)}'+
      '.cca-building{background:linear-gradient(135deg,#7E9AC0 0%,#4E6B96 100%)}'+
      '.cca-store{background:linear-gradient(135deg,#5FB89F 0%,#3E8E78 100%)}';
    document.head.appendChild(st); CPR._coverCss=true;
  }
  var icons={
    house:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5L12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9.5 21v-6h5v6"/></svg>',
    building:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2.5" width="14" height="19" rx="1"/><line x1="9" y1="6.5" x2="9.4" y2="6.5"/><line x1="14.6" y1="6.5" x2="15" y2="6.5"/><line x1="9" y1="10.5" x2="9.4" y2="10.5"/><line x1="14.6" y1="10.5" x2="15" y2="10.5"/><line x1="9" y1="14.5" x2="9.4" y2="14.5"/><line x1="14.6" y1="14.5" x2="15" y2="14.5"/><path d="M10 21.5v-4h4v4"/></svg>',
    store:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5h16l-1.2-5H5.2z"/><path d="M4.5 9.5V20a1 1 0 001 1h13a1 1 0 001-1V9.5"/><path d="M9 21v-5.5h6V21"/></svg>'
  };
  return '<div class="cpr-cover-art cca-'+kind+'">'+icons[kind]+'</div>';
};

// Identity verification badge (Airbnb-style trust seal). Returns '' when not verified.
CPR.verifiedBadge = function(verified, size){
  if(!verified) return '';
  var s = size || 15;
  var title = CPR.lang === 'en' ? 'Identity verified' : 'Identidad verificada';
  return '<span class="cpr-vbadge" title="' + title + '" aria-label="' + title + '" style="display:inline-flex;vertical-align:middle;margin-left:5px">' +
    '<svg width="' + s + '" height="' + s + '" viewBox="0 0 24 24" fill="none"><path d="M12 1l2.39 1.79 2.98.08 1.03 2.8 2.42 1.74-.92 2.84.92 2.84-2.42 1.74-1.03 2.8-2.98.08L12 23l-2.39-1.79-2.98-.08-1.03-2.8L3.18 16.6l.92-2.84-.92-2.84 2.42-1.74 1.03-2.8 2.98-.08L12 1z" fill="#1A56DB"/><path d="M10.55 14.7l-2.07-2.07-1.13 1.13 3.2 3.2 5.3-5.3-1.13-1.12-4.17 4.16z" fill="#fff"/></svg></span>';
};

// ── Dual-confirm scheduling card (shared by client + contractor) ──
CPR._schedCss = false;
CPR.scheduleCard = function(box, job, side, onSaved){
  if(!box) return;
  var lang = CPR.lang;
  var L = {
    title:{es:'Programación',en:'Scheduling'},
    none:{es:'Aún no hay fecha. Propón una y la otra parte la confirma.',en:'No date yet. Propose one and the other party confirms.'},
    propose:{es:'Proponer fecha',en:'Propose date'},confirm:{es:'Confirmar',en:'Confirm'},proposeOther:{es:'Proponer otra',en:'Propose another'},reschedule:{es:'Reprogramar',en:'Reschedule'},
    confirmed:{es:'Confirmado',en:'Confirmed'},
    waiting:{es:'Propuesto — esperando que {who} confirme',en:'Proposed — waiting for {who} to confirm'},
    theyProposed:{es:'{who} propuso esta fecha — confírmala o propón otra',en:'{who} proposed this date — confirm it or propose another'},
    client:{es:'el cliente',en:'the client'},contractor:{es:'el contratista',en:'the contractor'},
    needBoth:{es:'Elige fecha y hora.',en:'Pick a date and time.'}
  };
  function lt(k,sub){ var s=(L[k]&&(L[k][lang]||L[k].es))||k; if(sub){ Object.keys(sub).forEach(function(x){ s=s.replace('{'+x+'}',sub[x]); }); } return s; }
  if(!CPR._schedCss){
    var st=document.createElement('style');
    st.textContent='.sch-card{background:#fff;border:1px solid #E6E9EF;border-radius:14px;padding:18px 20px;box-shadow:0 1px 2px rgba(11,31,51,.05)}'+
      '.sch-h{font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#6B7A8D;margin-bottom:13px;display:flex;align-items:center;gap:7px}.sch-h svg{width:15px;height:15px;color:#1A56DB}'+
      '.sch-when{font-family:Fraunces,serif;font-size:17px;color:#0B1F33;margin-bottom:10px}'+
      '.sch-status{font-size:13.5px;font-weight:600;display:flex;align-items:center;gap:8px;margin-bottom:12px}.sch-status .dot{width:9px;height:9px;border-radius:50%;flex-shrink:0}'+
      '.sch-status.confirmed{color:#0E9F6E}.sch-status.confirmed .dot{background:#0E9F6E}.sch-status.pending{color:#E08A00}.sch-status.pending .dot{background:#E08A00}'+
      '.sch-empty{font-size:13.5px;color:#6B7A8D;margin-bottom:13px}'+
      '.sch-form{display:flex;gap:8px;flex-wrap:wrap;align-items:center}.sch-form input{border:1px solid #E6E9EF;border-radius:9px;padding:9px 11px;font-family:inherit;font-size:14px;color:#0B1F33}'+
      '.sch-actions{display:flex;gap:9px;flex-wrap:wrap;align-items:center}'+
      '.sch-btn{background:#1A56DB;color:#fff;border:none;padding:9px 16px;border-radius:9px;font-weight:600;font-size:13.5px;cursor:pointer;font-family:inherit}.sch-btn:hover{background:#103FA8}'+
      '.sch-link{background:none;border:none;color:#1A56DB;font-weight:600;font-size:13px;cursor:pointer;font-family:inherit;padding:6px 2px}';
    document.head.appendChild(st); CPR._schedCss=true;
  }
  var myC = side==='client' ? 'sched_confirmed_client' : 'sched_confirmed_contractor';
  var otherC = side==='client' ? 'sched_confirmed_contractor' : 'sched_confirmed_client';
  var otherWho = lt(side==='client'?'contractor':'client');
  var calSvg='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>';
  function fmtWhen(){
    if(!job.scheduled_date) return '';
    var d=new Date(job.scheduled_date+'T00:00:00');
    return d.toLocaleDateString(lang==='en'?'en-US':'es-ES',{weekday:'long',month:'long',day:'numeric',year:'numeric'}) + (job.scheduled_time? ' · '+job.scheduled_time : '');
  }
  function formHtml(){
    return '<div class="sch-form"><input type="date" class="sch-date" required value="'+(job.scheduled_date||'')+'"><input type="time" class="sch-time" required value="'+(job.scheduled_time||'')+'"><button class="sch-btn js-propose">'+lt('propose')+'</button></div><div class="sch-err" style="display:none;color:#D6336C;font-size:12.5px;margin-top:7px;font-weight:500"></div>';
  }
  function render(){
    var has=!!job.scheduled_date;
    var both=job.sched_confirmed_client && job.sched_confirmed_contractor;
    var iC=!!job[myC], theyC=!!job[otherC];
    var h='<div class="sch-card"><div class="sch-h">'+calSvg+lt('title')+'</div>';
    if(!has){ h+='<div class="sch-empty">'+lt('none')+'</div>'+formHtml(); }
    else {
      h+='<div class="sch-when">'+fmtWhen()+'</div>';
      if(both){ h+='<div class="sch-status confirmed"><span class="dot"></span>'+lt('confirmed')+'</div><button class="sch-link js-show">'+lt('reschedule')+'</button>'; }
      else if(iC && !theyC){ h+='<div class="sch-status pending"><span class="dot"></span>'+lt('waiting',{who:otherWho})+'</div><button class="sch-link js-show">'+lt('reschedule')+'</button>'; }
      else { h+='<div class="sch-status pending"><span class="dot"></span>'+lt('theyProposed',{who:otherWho})+'</div><div class="sch-actions"><button class="sch-btn js-confirm">'+lt('confirm')+'</button><button class="sch-link js-show">'+lt('proposeOther')+'</button></div>'; }
      h+='<div class="js-form" style="display:none;margin-top:12px">'+formHtml()+'</div>';
    }
    h+='</div>';
    box.innerHTML=h;
    var pb=box.querySelector('.js-propose'); if(pb) pb.addEventListener('click', propose);
    var cb=box.querySelector('.js-confirm'); if(cb) cb.addEventListener('click', doConfirm);
    var sb=box.querySelector('.js-show'); if(sb) sb.addEventListener('click', function(){ var f=box.querySelector('.js-form'); if(f) f.style.display='block'; });
  }
  async function propose(){
    var de=box.querySelector('.sch-date'), te=box.querySelector('.sch-time');
    var d=de?de.value:'', tm=te?te.value:'';
    if(!d || !tm){ var errEl=box.querySelector('.sch-err'); if(errEl){ errEl.textContent=lt('needBoth'); errEl.style.display='block'; } return; }
    var patch={scheduled_date:d, scheduled_time:tm, scheduled_by:side}; patch[myC]=true; patch[otherC]=false;
    try{ await CPR.dbPatch('jobs','id=eq.'+encodeURIComponent(job.id), patch); for(var k in patch) job[k]=patch[k]; render(); if(onSaved) onSaved(job); }catch(e){}
  }
  async function doConfirm(){
    var patch={}; patch[myC]=true;
    try{ await CPR.dbPatch('jobs','id=eq.'+encodeURIComponent(job.id), patch); job[myC]=true; render(); if(onSaved) onSaved(job); }catch(e){}
  }
  render();
};

// ── Two-way review card (reusable) ───────────────────────────────
// cfg: { job, direction:'client_to_contractor'|'contractor_to_client',
//        contractor_id, homeowner_id, subjectName, contractor_email?, onSaved? }
CPR._reviewCss = false;
CPR.reviewCard = function(box, cfg){
  if(!box || !cfg) return;
  var lang = CPR.lang, dir = cfg.direction;
  function esc(s){return (s==null?'':String(s)).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
  var L={
    titleC:{es:'Califica al contratista',en:'Rate the contractor'},
    titleK:{es:'Califica al cliente',en:'Rate the client'},
    yours:{es:'Tu reseña',en:'Your review'},
    placeholder:{es:'Comparte cómo fue tu experiencia (opcional)',en:'Share how it went (optional)'},
    submit:{es:'Publicar reseña',en:'Post review'},sending:{es:'Publicando…',en:'Posting…'},
    pick:{es:'Selecciona una calificación',en:'Pick a rating'},err:{es:'No se pudo publicar. Intenta de nuevo.',en:'Could not post. Try again.'}
  };
  function lt(k){return (L[k]&&(L[k][lang]||L[k].es))||k;}
  if(!CPR._reviewCss){
    var st=document.createElement('style');
    st.textContent='.rv-card{background:#fff;border:1px solid #E6E9EF;border-radius:14px;padding:18px 20px;box-shadow:0 1px 2px rgba(11,31,51,.05)}'+
      '.rv-h{font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#6B7A8D;margin-bottom:12px;display:flex;align-items:center;gap:7px}.rv-h svg{width:15px;height:15px;color:#F5A623}'+
      '.rv-stars{display:flex;gap:3px;margin-bottom:12px}'+
      '.rv-star{background:none;border:none;font-size:28px;line-height:1;color:#D8DEE6;cursor:pointer;padding:0 1px;font-family:inherit;transition:color .1s}.rv-star.on{color:#F5A623}.rv-star[disabled]{cursor:default}.rv-star[data-v]:hover{color:#F5A623}'+
      '.rv-text{width:100%;border:1px solid #E6E9EF;border-radius:10px;padding:10px 12px;font-family:inherit;font-size:14px;color:#0B1F33;resize:vertical;min-height:70px;line-height:1.5;margin-bottom:12px}.rv-text:focus{outline:none;border-color:#1A56DB}'+
      '.rv-submit{background:#1A56DB;color:#fff;border:none;padding:10px 20px;border-radius:10px;font-weight:600;font-size:13.5px;cursor:pointer;font-family:inherit}.rv-submit:hover{background:#103FA8}.rv-submit:disabled{opacity:.6;cursor:default}'+
      '.rv-comment{font-size:14px;color:#3A4A5C;font-style:italic;line-height:1.5}'+
      '.rv-msg{font-size:13px;margin-top:9px;color:#D6336C;font-weight:500}.rv-msg.err{color:#D6336C}';
    document.head.appendChild(st); CPR._reviewCss=true;
  }
  var starSvg='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.8 5.9 21.4l1.4-6.8L2.2 9.9l6.9-.8z"/></svg>';
  var existing=null, rating=0, busy=false;
  function starsHtml(n,interactive){ var h=''; for(var i=1;i<=5;i++){ h+='<button class="rv-star'+(i<=n?' on':'')+'" type="button"'+(interactive?' data-v="'+i+'"':' disabled')+'>★</button>'; } return h; }
  function render(){
    if(existing){
      box.innerHTML='<div class="rv-card"><div class="rv-h">'+starSvg+lt('yours')+'</div><div class="rv-stars">'+starsHtml(existing.rating,false)+'</div>'+(existing.comment?'<div class="rv-comment">"'+esc(existing.comment)+'"</div>':'')+'</div>';
      return;
    }
    var title=(dir==='client_to_contractor'?lt('titleC'):lt('titleK'))+(cfg.subjectName?' · '+esc(cfg.subjectName):'');
    box.innerHTML='<div class="rv-card"><div class="rv-h">'+starSvg+title+'</div>'+
      '<div class="rv-stars">'+starsHtml(rating,true)+'</div>'+
      '<textarea class="rv-text" placeholder="'+esc(lt('placeholder'))+'"></textarea>'+
      '<button class="rv-submit" type="button">'+lt('submit')+'</button><div class="rv-msg" style="display:none"></div></div>';
    box.querySelectorAll('.rv-star[data-v]').forEach(function(b){ b.addEventListener('click',function(){ rating=parseInt(b.getAttribute('data-v'),10); box.querySelectorAll('.rv-star[data-v]').forEach(function(s){ s.classList.toggle('on', parseInt(s.getAttribute('data-v'),10)<=rating); }); }); });
    var sb=box.querySelector('.rv-submit'); if(sb) sb.addEventListener('click', submit);
  }
  async function submit(){
    if(busy) return;
    var msgEl=box.querySelector('.rv-msg');
    if(!rating){ if(msgEl){ msgEl.textContent=lt('pick'); msgEl.className='rv-msg err'; msgEl.style.display='block'; } return; }
    var comment=(box.querySelector('.rv-text').value||'').trim();
    busy=true; var sb=box.querySelector('.rv-submit'); if(sb){ sb.disabled=true; sb.textContent=lt('sending'); }
    try{
      await CPR.dbInsert('reviews',{ job_id:cfg.job.id, contractor_id:cfg.contractor_id, homeowner_id:cfg.homeowner_id, rating:rating, comment:comment||null, direction:dir });
      if(dir==='client_to_contractor'){
        try{ var all=await CPR.db('reviews?contractor_id=eq.'+encodeURIComponent(cfg.contractor_id)+'&direction=eq.client_to_contractor&select=rating'); if(Array.isArray(all)&&all.length){ var avg=all.reduce(function(s,x){return s+(x.rating||0);},0)/all.length; await CPR.dbPatch('contractors','id=eq.'+encodeURIComponent(cfg.contractor_id), {rating:Math.round(avg*10)/10}); } }catch(_e){}
        if(cfg.contractor_email){ try{ fetch('/.netlify/functions/send-email',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({type:'review_received',data:{contractor_email:cfg.contractor_email,job_title:cfg.job.title,rating:rating,comment:comment}})}); }catch(_e){} }
      }
      existing={rating:rating,comment:comment}; render(); if(cfg.onSaved) cfg.onSaved();
    }catch(e){ busy=false; if(sb){ sb.disabled=false; sb.textContent=lt('submit'); } if(msgEl){ msgEl.textContent=lt('err'); msgEl.className='rv-msg err'; msgEl.style.display='block'; } }
  }
  (async function(){
    try{ var r=await CPR.db('reviews?job_id=eq.'+encodeURIComponent(cfg.job.id)+'&direction=eq.'+dir+'&select=*'); existing=(Array.isArray(r)&&r[0])?r[0]:null; }catch(e){ existing=null; }
    render();
  })();
};

// ── Dual-confirm completion card (both parties must agree to close) ──
// side: 'client' | 'contractor'. opts.onBothConfirmed(job) fires once both confirm.
CPR._completeCss = false;
CPR.completeCard = function(box, job, side, opts){
  if(!box) return; opts = opts || {};
  var lang = CPR.lang;
  var L = {
    title:{es:'Completar y liberar pago',en:'Complete & release payment'},
    prompt:{es:'¿El trabajo está terminado? Ambas partes deben confirmar. Al confirmar ambas, el trabajo se cierra y los fondos se liberan al contratista.',en:'Is the work done? Both parties must confirm. Once both do, the job closes and funds are released to the contractor.'},
    mark:{es:'Marcar como completado',en:'Mark as completed'},
    confirm:{es:'Confirmar y liberar pago',en:'Confirm & release payment'},
    waiting:{es:'Marcaste el trabajo como completado — esperando que {who} confirme.',en:'You marked it complete — waiting for {who} to confirm.'},
    theyMarked:{es:'{who} marcó el trabajo como completado. Confirma para cerrar y liberar el pago.',en:'{who} marked the job complete. Confirm to close and release payment.'},
    done:{es:'Trabajo completado · pago liberado',en:'Job completed · payment released'},
    client:{es:'el cliente',en:'the client'},contractor:{es:'el contratista',en:'the contractor'}
  };
  function lt(k,sub){ var s=(L[k]&&(L[k][lang]||L[k].es))||k; if(sub){ Object.keys(sub).forEach(function(x){ s=s.replace('{'+x+'}',sub[x]); }); } return s; }
  if(!CPR._completeCss){
    var st=document.createElement('style');
    st.textContent='.cmp-card{background:#fff;border:1px solid #E6E9EF;border-radius:14px;padding:18px 20px;box-shadow:0 1px 2px rgba(11,31,51,.05)}'+
      '.cmp-card.done{background:#E3F5EE;border-color:#BFE6D4}'+
      '.cmp-h{font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#6B7A8D;margin-bottom:12px;display:flex;align-items:center;gap:7px}.cmp-card.done .cmp-h{color:#0E9F6E;margin-bottom:0}.cmp-h svg{width:15px;height:15px;color:#0E9F6E}'+
      '.cmp-empty{font-size:13.5px;color:#3A4A5C;margin-bottom:13px}'+
      '.cmp-status{font-size:13.5px;font-weight:600;margin-bottom:13px}.cmp-status.pending{color:#E08A00}.cmp-status.they{color:#1A56DB}'+
      '.cmp-btn{background:#0E9F6E;color:#fff;border:none;padding:10px 18px;border-radius:10px;font-weight:600;font-size:14px;cursor:pointer;font-family:inherit}.cmp-btn:hover{filter:brightness(.95)}.cmp-btn:disabled{opacity:.6;cursor:default}';
    document.head.appendChild(st); CPR._completeCss=true;
  }
  var myC = side==='client' ? 'complete_confirmed_client' : 'complete_confirmed_contractor';
  var otherC = side==='client' ? 'complete_confirmed_contractor' : 'complete_confirmed_client';
  var otherWho = lt(side==='client'?'contractor':'client');
  var check='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>';
  var finalizing=false;
  async function finalizeBoth(){
    if(finalizing) return; finalizing=true;
    try{
      if(job.status!=='completed'){
        await CPR.dbPatch('jobs','id=eq.'+encodeURIComponent(job.id), {status:'completed', payment_released:true, released_at:new Date().toISOString()});
        job.status='completed'; job.payment_released=true;
      }
      if(opts.onBothConfirmed) opts.onBothConfirmed(job);
    }catch(e){ finalizing=false; }
  }
  function render(){
    var both = job.complete_confirmed_client && job.complete_confirmed_contractor;
    if(both && job.status!=='completed'){ box.innerHTML='<div class="cmp-card done"><div class="cmp-h">'+check+lt('done')+'</div></div>'; finalizeBoth(); return; }
    if(job.status==='completed'){ box.innerHTML='<div class="cmp-card done"><div class="cmp-h">'+check+lt('done')+'</div></div>'; return; }
    var iC=!!job[myC], theyC=!!job[otherC];
    var h='<div class="cmp-card"><div class="cmp-h">'+check+lt('title')+'</div>';
    if(iC && !theyC){ h+='<div class="cmp-status pending">'+lt('waiting',{who:otherWho})+'</div>'; }
    else if(theyC && !iC){ h+='<div class="cmp-status they">'+lt('theyMarked',{who:otherWho})+'</div><button class="cmp-btn js-go">'+lt('confirm')+'</button>'; }
    else { h+='<div class="cmp-empty">'+lt('prompt')+'</div><button class="cmp-btn js-go">'+lt('mark')+'</button>'; }
    h+='</div>'; box.innerHTML=h;
    var b=box.querySelector('.js-go'); if(b) b.addEventListener('click', go);
  }
  async function go(){
    var btn=box.querySelector('.js-go'); if(btn) btn.disabled=true;
    try{
      var patch={}; patch[myC]=true;
      await CPR.dbPatch('jobs','id=eq.'+encodeURIComponent(job.id), patch);
      job[myC]=true;
      // authoritative re-read of both flags — avoids the stale-data race where
      // the second confirmer thinks they're first and the job never finalizes
      try{ var fr=await CPR.db('jobs?id=eq.'+encodeURIComponent(job.id)+'&select=complete_confirmed_client,complete_confirmed_contractor,status'); var f=(Array.isArray(fr)&&fr[0])?fr[0]:null; if(f){ job.complete_confirmed_client=f.complete_confirmed_client; job.complete_confirmed_contractor=f.complete_confirmed_contractor; job.status=f.status; } }catch(_e){}
      render(); // finalizes if both are now true
      if(!(job.complete_confirmed_client && job.complete_confirmed_contractor) && opts.onChange) opts.onChange(job);
    }catch(e){ if(btn) btn.disabled=false; }
  }
  render();
};

// ── Two-way chat thread (per proposal) ───────────────────────────
// cfg: { proposalId, meType:'homeowner'|'contractor', meId, onSent? }
CPR._chatCss = false;
CPR.chatThread = function(box, cfg){
  if(!box || !cfg || !cfg.proposalId) return;
  var lang = CPR.lang;
  function esc(s){ return (s==null?'':String(s)).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
  var L={ ph:{es:'Escribe un mensaje…',en:'Write a message…'}, send:{es:'Enviar',en:'Send'}, empty:{es:'Aún no hay mensajes. Coordina los detalles aquí.',en:'No messages yet. Coordinate the details here.'},
    orig:{es:'Ver original',en:'See original'}, trd:{es:'Ver traducción',en:'See translation'}, byTr:{es:'traducido',en:'translated'}, attach:{es:'Adjuntar foto o archivo',en:'Attach photo or file'} };
  function lt(k){ return (L[k]&&(L[k][lang]||L[k].es))||k; }
  if(!CPR._chatCss){
    var st=document.createElement('style');
    st.textContent='.cht-msgs{display:flex;flex-direction:column;gap:8px;max-height:340px;overflow-y:auto;padding:6px 2px 10px}'+
      '.cht-empty{text-align:center;color:#6B7A8D;font-size:13.5px;padding:28px 10px}'+
      '.cht-row{display:flex}.cht-row.me{justify-content:flex-end}'+
      '.cht-bub{max-width:78%;padding:9px 13px;border-radius:14px;font-size:14px;line-height:1.4}'+
      '.cht-row.them .cht-bub{background:#EFF1F5;color:#0B1F33;border-bottom-left-radius:4px}'+
      '.cht-row.me .cht-bub{background:#1A56DB;color:#fff;border-bottom-right-radius:4px}'+
      '.cht-time{font-size:10.5px;opacity:.65}'+
      '.cht-input{display:flex;gap:8px;align-items:flex-end;border-top:1px solid #EFF1F5;padding-top:12px;margin-top:8px}'+
      '.cht-ta{flex:1;border:1px solid #E6E9EF;border-radius:12px;padding:10px 13px;font-family:inherit;font-size:14px;resize:none;max-height:120px;line-height:1.4;color:#0B1F33}'+
      '.cht-ta:focus{outline:none;border-color:#1A56DB}'+
      '.cht-send{background:#1A56DB;color:#fff;border:none;border-radius:11px;padding:10px 18px;font-weight:600;font-size:14px;cursor:pointer;font-family:inherit;white-space:nowrap}.cht-send:hover{background:#103FA8}.cht-send:disabled{opacity:.6}'+
      '.cht-meta{display:flex;align-items:center;gap:8px;margin-top:5px;flex-wrap:wrap}.cht-row.me .cht-meta{justify-content:flex-end}'+
      '.cht-tr{background:none;border:none;font-size:11px;font-weight:600;cursor:pointer;padding:0;font-family:inherit;text-decoration:underline;color:#1A56DB}'+
      '.cht-row.me .cht-tr{color:rgba(255,255,255,.9)}.cht-trd{font-size:10.5px;opacity:.6}'+
      '.cht-img{max-width:200px;max-height:220px;border-radius:10px;display:block;cursor:pointer}.cht-imglink{display:block}'+
      '.cht-txt{margin-top:6px}.cht-bub:has(.cht-img) .cht-txt,.cht-bub:has(.cht-file) .cht-txt{margin-top:8px}'+
      '.cht-file{display:inline-flex;align-items:center;gap:8px;text-decoration:underline;color:inherit;font-size:13.5px;font-weight:600}.cht-file svg{width:18px;height:18px;flex-shrink:0}'+
      '.cht-attach{background:none;border:none;color:#6B7A8D;cursor:pointer;padding:8px;border-radius:9px;flex-shrink:0}.cht-attach:hover{color:#1A56DB;background:#EFF1F5}.cht-attach svg{width:19px;height:19px;display:block}.cht-attach:disabled{opacity:.5}';
    document.head.appendChild(st); CPR._chatCss=true;
  }
  var msgs=[], sending=false;
  function fmtT(ts){ try{ var d=new Date((''+ts).indexOf('Z')<0?ts+'Z':ts); return d.toLocaleString(lang==='en'?'en-US':'es-ES',{month:'short',day:'numeric',hour:'numeric',minute:'2-digit'}); }catch(e){ return ''; } }
  function isImg(u,n){ var s=((n||'')+' '+(u||'')).toLowerCase(); return /\.(png|jpe?g|gif|webp|heic|bmp)(\?|$|\s)/.test(s); }
  function fileChip(m){
    if(isImg(m.file_url, m.file_name)) return '<a class="cht-imglink" href="'+esc(m.file_url)+'" target="_blank" rel="noopener"><img class="cht-img" src="'+esc(m.file_url)+'" alt=""></a>';
    return '<a class="cht-file" href="'+esc(m.file_url)+'" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg><span>'+esc(m.file_name||'file')+'</span></a>';
  }
  function msgText(m){
    var html='';
    if(m.file_url) html += fileChip(m);
    if(m.content && m.content.trim()){
      var hasTr = m.sender_type!==cfg.meType && m._tr && m._tr!==m.content;
      var show = (hasTr && !m._showOrig) ? m._tr : m.content;
      html += '<div class="cht-txt">'+esc(show).replace(/\n/g,'<br>')+'</div>';
    }
    return html;
  }
  function msgMeta(m){
    var hasTr = m.sender_type!==cfg.meType && m.content && m.content.trim() && m._tr && m._tr!==m.content;
    var link = hasTr ? '<button class="cht-tr" data-id="'+m.id+'">'+(m._showOrig?lt('trd'):lt('orig'))+'</button>'+(!m._showOrig?'<span class="cht-trd">· '+lt('byTr')+'</span>':'') : '';
    return '<span class="cht-time">'+fmtT(m.created_at)+'</span>'+link;
  }
  function render(){
    var rows = msgs.length ? msgs.map(function(m){ var mine=(m.sender_type===cfg.meType); return '<div class="cht-row '+(mine?'me':'them')+'"><div class="cht-bub">'+msgText(m)+'<div class="cht-meta">'+msgMeta(m)+'</div></div></div>'; }).join('') : '<div class="cht-empty">'+lt('empty')+'</div>';
    box.innerHTML='<div class="cht-msgs">'+rows+'</div><div class="cht-input"><button class="cht-attach" type="button" title="'+esc(lt('attach'))+'"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/></svg></button><input type="file" class="cht-file-in" accept="image/*,.pdf,.doc,.docx,.heic" style="display:none"><textarea class="cht-ta" rows="1" placeholder="'+esc(lt('ph'))+'"></textarea><button class="cht-send" type="button">'+lt('send')+'</button></div>';
    var ms=box.querySelector('.cht-msgs'); if(ms) ms.scrollTop=ms.scrollHeight;
    var sb=box.querySelector('.cht-send'); if(sb) sb.addEventListener('click', send);
    var ta=box.querySelector('.cht-ta'); if(ta) ta.addEventListener('keydown', function(e){ if(e.key==='Enter' && !e.shiftKey){ e.preventDefault(); send(); } });
    var at=box.querySelector('.cht-attach'); var fi=box.querySelector('.cht-file-in');
    if(at && fi){ at.addEventListener('click', function(){ fi.click(); }); fi.addEventListener('change', function(){ if(fi.files && fi.files[0]) sendFile(fi.files[0]); }); }
    box.querySelectorAll('.cht-tr').forEach(function(b){ b.addEventListener('click', function(){ var id=b.getAttribute('data-id'); var mm=msgs.filter(function(x){return ''+x.id===''+id;})[0]; if(mm){ mm._showOrig=!mm._showOrig; render(); } }); });
  }
  async function sendFile(file){
    if(sending) return;
    if(file.size > 15*1024*1024){ alert(lang==='en'?'File too large (max 15MB).':'Archivo muy grande (máx 15MB).'); return; }
    if(!window._sb || !window._sb.storage){ return; }
    sending=true; var at=box.querySelector('.cht-attach'); if(at) at.disabled=true;
    try{
      var ext=(file.name.split('.').pop()||'bin').toLowerCase().replace(/[^a-z0-9]/g,'');
      var path='chat/'+cfg.proposalId+'/'+(new Date().getTime())+'-'+Math.random().toString(36).slice(2,7)+'.'+ext;
      var up=await window._sb.storage.from('property-media').upload(path, file, {upsert:false, cacheControl:'3600'});
      if(up.error) throw up.error;
      var pub=window._sb.storage.from('property-media').getPublicUrl(path).data.publicUrl;
      await CPR.dbInsert('messages',{ proposal_id:cfg.proposalId, sender_type:cfg.meType, sender_id:cfg.meId, content:'', file_url:pub, file_name:file.name });
      await load(); if(cfg.onSent) cfg.onSent();
    }catch(e){ alert(lang==='en'?'Upload failed. Try again.':'No se pudo subir. Intenta de nuevo.'); }
    sending=false; var at2=box.querySelector('.cht-attach'); if(at2) at2.disabled=false;
  }
  async function translatePending(){
    var pend=msgs.filter(function(m){ return m.sender_type!==cfg.meType && m._tr===undefined && m.content && m.content.trim(); });
    if(!pend.length) return;
    pend.forEach(function(m){ m._tr=null; });
    // one clean call per message — avoids batch ID misalignment
    await Promise.all(pend.map(function(m){
      return fetch('/.netlify/functions/translate',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({text:m.content, targetLang:CPR.lang, plain:true})})
        .then(function(r){ return r.json(); })
        .then(function(d){ var tr=d&&d.translated; m._tr=(tr&&tr.trim())?tr.trim():m.content; })
        .catch(function(){ m._tr=m.content; });
    }));
    render();
  }
  async function load(){
    try{
      var r=await CPR.db('messages?proposal_id=eq.'+encodeURIComponent(cfg.proposalId)+'&order=created_at.asc&select=*');
      var n=Array.isArray(r)?r:[];
      if(n.length!==msgs.length){
        var byId={}; msgs.forEach(function(m){ byId[m.id]=m; });
        n.forEach(function(m){ var old=byId[m.id]; if(old){ m._tr=old._tr; m._showOrig=old._showOrig; } });
        var ta0=box.querySelector('.cht-ta'); var draft=ta0?ta0.value:''; var hadFocus=(document.activeElement===ta0);
        msgs=n; render();
        if(draft){ var ta1=box.querySelector('.cht-ta'); if(ta1){ ta1.value=draft; if(hadFocus){ ta1.focus(); ta1.selectionStart=ta1.value.length; } } }
        translatePending();
      }
    }catch(e){}
  }
  async function send(){
    var ta=box.querySelector('.cht-ta'); if(!ta) return; var txt=(ta.value||'').trim(); if(!txt||sending) return;
    sending=true; var sb=box.querySelector('.cht-send'); if(sb) sb.disabled=true;
    try{
      await CPR.dbInsert('messages',{ proposal_id:cfg.proposalId, sender_type:cfg.meType, sender_id:cfg.meId, content:txt });
      ta.value=''; await load(); if(cfg.onSent) cfg.onSent();
    }catch(e){}
    sending=false; var sb2=box.querySelector('.cht-send'); if(sb2) sb2.disabled=false; var ta2=box.querySelector('.cht-ta'); if(ta2) ta2.focus();
  }
  if(box._cpoll){ clearInterval(box._cpoll); }
  render();          // show empty state + input immediately (don't wait on the fetch)
  load();            // then fetch; re-renders only if there are messages
  box._cpoll=setInterval(load, 10000);
};

CPR.dbDelete = async function(table, query){
  var url = '/.netlify/functions/supabase-proxy?table=' + encodeURIComponent(table) + '&query=' + encodeURIComponent(query) + '&prefer=' + encodeURIComponent('return=minimal');
  var res = await fetch(url, { method:'DELETE' });
  if(!res.ok) throw new Error('delete ' + res.status);
  return true;
};

// ── Job files / photos (before-after, docs) — shared by client + contractor ──
// cfg: { jobId, propertyId }
CPR._jfCss = false;
CPR.jobFiles = function(box, cfg){
  if(!box || !cfg || !cfg.jobId) return;
  var lang = CPR.lang;
  function esc(s){ return (s==null?'':String(s)).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
  var L={ title:{es:'Fotos y archivos',en:'Photos & files'}, sub:{es:'Fotos de antes/después, recibos, documentos. Ambas partes pueden añadir.',en:'Before/after photos, receipts, documents. Both parties can add.'},
    upload:{es:'Añadir',en:'Add'}, empty:{es:'Aún no hay archivos.',en:'No files yet.'}, del:{es:'¿Eliminar este archivo?',en:'Delete this file?'} };
  function lt(k){ return (L[k]&&(L[k][lang]||L[k].es))||k; }
  if(!CPR._jfCss){
    var st=document.createElement('style');
    st.textContent='.jf-head{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:14px}'+
      '.jf-t{font-family:Fraunces,serif;font-size:18px;font-weight:500}'+
      '.jf-up{display:inline-flex;align-items:center;gap:7px;background:#EBF1FE;color:#1A56DB;border:none;border-radius:10px;padding:9px 15px;font-weight:600;font-size:13.5px;cursor:pointer;font-family:inherit;white-space:nowrap}.jf-up:hover{background:#1A56DB;color:#fff}.jf-up:disabled{opacity:.6}.jf-up svg{width:15px;height:15px}'+
      '.jf-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(96px,1fr));gap:10px}'+
      '.jf-item{position:relative;border-radius:11px;overflow:hidden;border:1px solid #E6E9EF;aspect-ratio:1;background:#F6F7F9}'+
      '.jf-item img{width:100%;height:100%;object-fit:cover;display:block}'+
      '.jf-file{display:flex;align-items:center;justify-content:center;flex-direction:column;gap:6px;padding:10px;text-align:center}.jf-file a{display:flex;flex-direction:column;align-items:center;gap:6px;text-decoration:none;color:#3A4A5C;font-size:11px;font-weight:600;word-break:break-word}.jf-file svg{width:26px;height:26px;color:#6B7A8D}'+
      '.jf-x{position:absolute;top:5px;right:5px;width:22px;height:22px;border-radius:50%;border:none;background:rgba(11,31,51,.6);color:#fff;font-size:14px;line-height:1;cursor:pointer;display:grid;place-items:center}.jf-x:hover{background:#D6336C}'+
      '.jf-empty{font-size:13.5px;color:#6B7A8D;padding:18px 4px}';
    document.head.appendChild(st); CPR._jfCss=true;
  }
  var docs=[], busy=false;
  var fileSvg='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>';
  var camSvg='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>';
  function isImg(d){ var u=(d.file_url||'').toLowerCase(); return d.type==='photo' || /\.(png|jpe?g|gif|webp|heic|bmp)(\?|$)/.test(u); }
  function render(){
    var grid = docs.length ? docs.map(function(d){
      var inner = isImg(d) ? '<a href="'+esc(d.file_url)+'" target="_blank" rel="noopener"><img src="'+esc(d.file_url)+'" alt=""></a>'
        : '<a href="'+esc(d.file_url)+'" target="_blank" rel="noopener">'+fileSvg+'<span>'+esc(d.label||'file')+'</span></a>';
      var cls = isImg(d) ? 'jf-item' : 'jf-item jf-file';
      return '<div class="'+cls+'">'+inner+'<button class="jf-x" data-id="'+d.id+'" title="'+esc(lt('del'))+'">×</button></div>';
    }).join('') : '<div class="jf-empty">'+lt('empty')+'</div>';
    box.innerHTML='<div class="jf-head"><div class="jf-t">'+lt('title')+'</div>'+
      '<button class="jf-up" type="button">'+camSvg+lt('upload')+'</button><input type="file" class="jf-in" accept="image/*,.pdf,.doc,.docx,.heic" style="display:none"></div>'+
      '<div class="jf-grid">'+grid+'</div>';
    var up=box.querySelector('.jf-up'), fi=box.querySelector('.jf-in');
    if(up&&fi){ up.addEventListener('click', function(){ fi.click(); }); fi.addEventListener('change', function(){ if(fi.files&&fi.files[0]) upload(fi.files[0]); }); }
    box.querySelectorAll('.jf-x').forEach(function(b){ b.addEventListener('click', function(){ del(b.getAttribute('data-id')); }); });
  }
  async function load(){
    try{ var r=await CPR.db('property_documents?job_id=eq.'+encodeURIComponent(cfg.jobId)+'&order=uploaded_at.desc&select=*'); docs=Array.isArray(r)?r:[]; }catch(e){ docs=[]; }
    render();
  }
  async function upload(file){
    if(busy) return;
    if(file.size > 15*1024*1024){ alert(lang==='en'?'File too large (max 15MB).':'Archivo muy grande (máx 15MB).'); return; }
    if(!window._sb || !window._sb.storage){ return; }
    busy=true; var up=box.querySelector('.jf-up'); if(up) up.disabled=true;
    try{
      var ext=(file.name.split('.').pop()||'bin').toLowerCase().replace(/[^a-z0-9]/g,'');
      var isImage=/(png|jpe?g|gif|webp|heic|bmp)/.test(ext);
      var path='jobs/'+cfg.jobId+'/'+(new Date().getTime())+'-'+Math.random().toString(36).slice(2,7)+'.'+ext;
      var u=await window._sb.storage.from('property-media').upload(path, file, {upsert:false, cacheControl:'3600'});
      if(u.error) throw u.error;
      var pub=window._sb.storage.from('property-media').getPublicUrl(path).data.publicUrl;
      await CPR.dbInsert('property_documents', { property_id:cfg.propertyId||null, job_id:cfg.jobId, type:(isImage?'photo':'other'), label:file.name, file_url:pub });
      await load();
    }catch(e){ alert(lang==='en'?'Upload failed. Try again.':'No se pudo subir. Intenta de nuevo.'); }
    busy=false; var up2=box.querySelector('.jf-up'); if(up2) up2.disabled=false;
  }
  async function del(id){
    if(!window.confirm(lt('del'))) return;
    var d=docs.filter(function(x){return ''+x.id===''+id;})[0];
    try{
      if(d && d.file_url){ var parts=d.file_url.split('/property-media/'); if(parts[1]){ try{ await window._sb.storage.from('property-media').remove([decodeURIComponent(parts[1])]); }catch(_e){} } }
      await CPR.dbDelete('property_documents','id=eq.'+encodeURIComponent(id));
      await load();
    }catch(e){}
  }
  load();
};

// Logout
CPR.logout = async function() {
  // Sign out from Supabase Auth using existing client
  if (window._sb) {
    await window._sb.auth.signOut();
  } else if (window.supabase) {
    let { createClient } = supabase;
    let _sb2 = createClient(SUPABASE_URL, SUPABASE_PK);
    await _sb2.auth.signOut();
  }
  // Clear all session data from both storage types
  ['homeowner_id','homeowner_data','contractor_id','contractor_data','contractor_name'].forEach(k => {
    sessionStorage.removeItem(k);
    localStorage.removeItem(k);
  });
  localStorage.removeItem('cpr_user_type');
  sessionStorage.clear();
  window.location.href = 'index.html';
};

// Check if logged in and get user type + data
CPR.getCurrentUser = async function() {
  let email = await CPR.getSessionEmail();
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

CPR.buildNav = async function(activePage, knownUser) {
  let user = knownUser || await CPR.getCurrentUser();
  let lang = CPR.lang;

  const logoHtml = '<a href="index.html" class="cpr-logo"><div class="cpr-logo-box">C</div>ContractingPR</a>';

  // Use stored type from localStorage as reliable fallback (no async failure risk)
  const storedType = localStorage.getItem('cpr_user_type');
  const isLoggedIn = !!(user || storedType);
  const dashUrl = user
    ? (user.type === 'homeowner' ? 'properties.html' : 'contractor-home.html')
    : storedType === 'contractor' ? 'contractor-home.html'
    : storedType === 'homeowner' ? 'properties.html'
    : 'properties.html';

  const langDropdown = '<select id="lang-dropdown" class="cpr-lang-select" onchange="CPR.setLang(this.value)"><option value="es">Español</option><option value="en">English</option></select>';

  // Use storedType as fallback so nav shows correct state even if DB query is slow/fails
  const authLink = isLoggedIn
    ? '<button onclick="CPR.logout()" class="cpr-nav-btn-ghost">' + CPR.t('nav_logout') + '</button>'
    : '<a href="properties.html" class="cpr-nav-btn">' + CPR.t('nav_login') + '</a>';

  const facelessAv = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5z"/></svg>';
  let acctLink = '';
  if (user) {
    const avInner = user.avatar_url ? '<img src="' + user.avatar_url + '" alt="">' : facelessAv;
    const acctName = user.first_name || user.name || CPR.t('nav_account');
    const acctHref = user.type === 'contractor' ? 'contractor-account.html' : 'profile.html';
    acctLink = '<a href="' + acctHref + '" class="cpr-acct"><span class="cpr-av">' + avInner + '</span><span class="cpr-acct-name">' + acctName + '</span></a>';
  } else if (isLoggedIn) {
    const acctHref2 = storedType === 'contractor' ? 'contractor-account.html' : 'profile.html';
    acctLink = '<a href="' + acctHref2 + '" class="cpr-nav-link">' + CPR.t('nav_account') + '</a>';
  }

  const navHtml = '<nav class="cpr-nav"><div class="cpr-nav-inner">' +
    logoHtml +
    '<div class="cpr-nav-right">' +
      acctLink +
      authLink +
      langDropdown +
    '</div>' +
    '</div></nav>';

  const navCss = `
    <style>
    .cpr-nav{position:sticky;top:0;z-index:100;background:rgba(255,255,255,0.97);backdrop-filter:blur(12px);border-bottom:1px solid #E2E8F0;font-family:'Inter',sans-serif}
    .cpr-nav-inner{max-width:1200px;margin:0 auto;padding:0 24px;height:64px;display:flex;align-items:center;justify-content:space-between}
    .cpr-nav-right{display:flex;align-items:center;gap:20px}
    .cpr-logo{display:flex;align-items:center;gap:10px;font-size:20px;font-weight:800;color:#0066CC;text-decoration:none}
    .cpr-logo-box{width:34px;height:34px;background:#0066CC;border-radius:8px;display:grid;place-items:center;color:white;font-weight:800;font-size:16px;flex-shrink:0}
    .cpr-nav-link{font-size:14px;font-weight:500;color:#475569;text-decoration:none;transition:color 0.2s}
    .cpr-nav-link:hover{color:#0066CC}
    .cpr-acct{display:flex;align-items:center;gap:9px;text-decoration:none;color:#0B1F33;font-weight:600;font-size:14px}
    .cpr-acct:hover .cpr-acct-name{color:#0066CC}
    .cpr-av{width:32px;height:32px;border-radius:50%;overflow:hidden;background:#EFF1F5;display:grid;place-items:center;flex-shrink:0;color:#B6C0CC;border:1px solid #E2E8F0}
    .cpr-av img{width:100%;height:100%;object-fit:cover}.cpr-av svg{width:20px;height:20px}
    .cpr-acct-name{max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
    @media(max-width:640px){.cpr-acct-name{display:none}}
    .cpr-nav-btn{background:#0066CC;color:white;padding:9px 18px;border-radius:8px;font-size:14px;font-weight:600;text-decoration:none;transition:background 0.2s}
    .cpr-nav-btn:hover{background:#004C99}
    .cpr-nav-btn-ghost{background:#0066CC;border:none;padding:9px 18px;border-radius:8px;font-size:14px;font-weight:600;color:white;cursor:pointer;font-family:'Inter',sans-serif;transition:all 0.2s}
    .cpr-nav-btn-ghost:hover{background:#004C99}
    .cpr-lang-select{background:none;border:1px solid #E2E8F0;padding:6px 10px;border-radius:6px;font-size:13px;cursor:pointer;font-family:'Inter',sans-serif;color:#475569;outline:none}
    .cpr-lang-select:hover{border-color:#0066CC}
    @media(max-width:640px){.cpr-nav-right .cpr-nav-link{display:none}.cpr-nav-inner{padding:0 16px}}
    </style>
  `;

  return navCss + navHtml;
};

// Inject nav into element with id="cpr-nav-placeholder"
CPR.injectNav = async function(activePage, knownUser) {
  const placeholder = document.getElementById('cpr-nav-placeholder');
  if (!placeholder) {
    // Nav already injected - just update auth button state
    const user = await CPR.getCurrentUser();
    const navRight = document.querySelector('.cpr-nav-right');
    if (navRight) {
      const authBtn = navRight.querySelector('.cpr-nav-btn, .cpr-nav-btn-ghost');
      if (authBtn) {
        if (user) {
          authBtn.className = 'cpr-nav-btn-ghost';
          authBtn.textContent = CPR.t('nav_logout');
          authBtn.setAttribute('onclick', 'CPR.logout()');
          authBtn.removeAttribute('href');
          authBtn.tagName === 'A' && authBtn.outerHTML.replace('<a ', '<button ');
        } else {
          authBtn.textContent = CPR.t('nav_login');
        }
      }
    }
    const dd = document.getElementById('lang-dropdown');
    if (dd) dd.value = CPR.lang;
    return;
  }
  placeholder.outerHTML = await CPR.buildNav(activePage, knownUser);
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

  let lang = CPR.lang;
  const isContractor = preferredType === 'contractor';

  let overlay = document.createElement('div');
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
  let email = document.getElementById('cpr-login-email').value.trim();
  let password = document.getElementById('cpr-login-password').value;
  let btn = document.getElementById('cpr-login-btn');
  let errorEl = document.getElementById('cpr-login-error');
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
    let sb = createClient(CPR.SUPABASE_URL, CPR.SUPABASE_PK);
    const { error } = await sb.auth.signInWithPassword({ email, password });
    if (error) throw new Error(error.message);
    CPR.hideAuthModal();
    // Small delay to let Supabase store the session
    await new Promise(r => setTimeout(r, 500));
    // Run pending action
    let user = await CPR.getCurrentUser();
    if (user && CPR._pendingAction) {
      let action = CPR._pendingAction.fn;
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
  let name = document.getElementById('cpr-signup-name').value.trim();
  let email = document.getElementById('cpr-signup-email').value.trim();
  let password = document.getElementById('cpr-signup-password').value;
  let btn = document.getElementById('cpr-signup-btn');
  let errorEl = document.getElementById('cpr-signup-error');
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
    let sb = createClient(CPR.SUPABASE_URL, CPR.SUPABASE_PK);
    const { error: authErr } = await sb.auth.signUp({ email, password });
    if (authErr) throw new Error(authErr.message);
    let table = CPR._signupType === 'contractor' ? 'contractors' : 'homeowners';
    const body = CPR._signupType === 'contractor'
      ? { name, email, status: 'active' }
      : { name, email };
    await fetch(CPR.SUPABASE_URL + '/rest/v1/' + table, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'apikey': CPR.SUPABASE_PK, 'Authorization': 'Bearer ' + CPR.SUPABASE_PK, 'Prefer': 'return=minimal' },
      body: JSON.stringify(body)
    });
    CPR.hideAuthModal();
    await new Promise(r => setTimeout(r, 500));
    let user = await CPR.getCurrentUser();
    if (user && CPR._pendingAction) {
      let action = CPR._pendingAction.fn;
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
