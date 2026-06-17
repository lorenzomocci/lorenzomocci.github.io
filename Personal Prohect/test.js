  (function() {
    const s = new URLSearchParams(window.location.search).get('slide');
    if (s === 'from-left')  document.write('<style>.page-content{transform:translateX(-120%)}</style>');
    if (s === 'from-right') document.write('<style>.page-content{transform:translateX(120%)}</style>');
  })();
/* ── Navigation ── */
function slideBack() {
  const c = document.getElementById('pageContent');
  c.style.transition = 'transform 0.4s cubic-bezier(0.1,0.76,0.55,0.94)';
  c.style.transform  = 'translateX(120%)';
  requestAnimationFrame(() => { window.location.href = 'event-card.html?slide=from-right'; });
}

/* ── Like ── */
let liked = false;
function toggleLike() {
  liked = !liked;
  const btn = document.getElementById('likeBtn');
  btn.querySelector('i').className = liked ? 'ph-fill ph-heart' : 'ph ph-heart';
  btn.querySelector('i').style.color = liked ? 'var(--primary-700)' : '';
}

/* ── Follow ── */
let following = false;
function toggleFollow() {
  following = !following;
  const btn = document.getElementById('followBtn');
  btn.classList.toggle('following', following);
  btn.textContent = following ? 'Seguito ✓' : 'Segui';
}

/* ── RSVP ── */
let going = false;
function handleRSVP() {
  going = !going;
  const btn = document.getElementById('ctaBtn');
  if (going) {
    btn.innerHTML = '<i class="ph-fill ph-check-circle"></i> Sei dentro!';
    btn.style.background = 'rgba(52,211,153,0.20)';
    btn.style.borderColor = 'rgba(52,211,153,0.40)';
    btn.style.color = '#34d399';
    btn.style.boxShadow = '0 4px 24px rgba(52,211,153,0.12)';
  } else {
    btn.innerHTML = '<i class="ph ph-check-circle"></i> Partecipa';
    btn.style.cssText = '';
  }
}

/* ── Share ── */
function handleShare() {
  if (navigator.share) navigator.share({ title: "Marco's House Party", url: window.location.href }).catch(() => {});
}

/* ── Maps ── */
function openMaps() {
  window.open('https://maps.google.com/?q=Via+Corsico+14+Milano', '_blank');
}

/* ── Description expand ── */
let descExpanded = false;
function toggleDesc() {
  descExpanded = !descExpanded;
  document.getElementById('descText').classList.toggle('clamped', !descExpanded);
  document.getElementById('descToggle').textContent = descExpanded ? 'Leggi meno' : 'Leggi di più';
}

/* ── Spotify ── */
const SPOTIFY_CLIENT_ID     = '73090658f4914dfd8d3ea4fd79fcbdfd';
const HARDCODED_PLAYLIST    = '37i9dQZEVXbMDoHDwVN2tF';

let audio = null;
let playingRow = null;

function fmtMs(ms) {
  const s = Math.round(ms / 1000);
  return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
}

async function getSpotifyToken() {
  return localStorage.getItem('spotify_token');
}

async function spotifyGet(path) {
  const token = await getSpotifyToken();
  if (!token) return null;
  const r = await fetch('https://api.spotify.com/v1' + path, {
    headers: { Authorization: 'Bearer ' + token },
  });
  if (r.status === 401) {
    localStorage.removeItem('spotify_token');
    return null;
  }
  if (!r.ok) return null;
  return r.json();
}

function playPreview(row, url, numEl) {
  if (playingRow === row) {
    audio.paused ? audio.play() : audio.pause();
    numEl.innerHTML = audio.paused ? row.dataset.num : '<i class="ph-fill ph-pause" style="font-size:13px"></i>';
    row.classList.toggle('playing', !audio.paused);
    return;
  }
  if (audio) { audio.pause(); }
  if (playingRow) {
    playingRow.classList.remove('playing');
    playingRow.querySelector('.track-num').textContent = playingRow.dataset.num;
  }
  audio = new Audio(url);
  audio.volume = 0.8;
  audio.play();
  playingRow = row;
  row.classList.add('playing');
  numEl.innerHTML = '<i class="ph-fill ph-pause" style="font-size:13px"></i>';
  audio.addEventListener('ended', () => {
    row.classList.remove('playing');
    numEl.textContent = row.dataset.num;
    playingRow = null;
  });
}

const DEMO_TRACKS = [
  {name:'Starboy',            artists:'The Weeknd, Daft Punk',   dur:'3:50', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'},
  {name:'One Dance',          artists:'Drake, Wizkid, Kyla',     dur:'3:54', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'},
  {name:'Blinding Lights',    artists:'The Weeknd',              dur:'3:20', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'},
  {name:'SICKO MODE',         artists:'Travis Scott',            dur:'5:12', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'},
  {name:'God\'s Plan',        artists:'Drake',                   dur:'3:18', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3'},
  {name:'HUMBLE.',            artists:'Kendrick Lamar',          dur:'2:57', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3'},
  {name:'Bad Guy',            artists:'Billie Eilish',           dur:'3:14', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3'},
  {name:'Levitating',         artists:'Dua Lipa, DaBaby',        dur:'3:23', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3'},
  {name:'Save Your Tears',    artists:'The Weeknd',              dur:'3:35', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3'},
  {name:'Industry Baby',      artists:'Lil Nas X, Jack Harlow',  dur:'3:32', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3'},
];

function renderDemoTracks() {
  const list = document.getElementById('trackList');
  list.innerHTML = '';
  DEMO_TRACKS.forEach((t, i) => {
    const idx = i + 1;
    const row = document.createElement('div');
    row.className = 'track-row' + (t.url ? '' : ' no-preview');
    row.dataset.num = idx;
    row.innerHTML = `<span class="track-num">${idx}</span><div class="track-meta"><div class="track-title">${t.name}</div><div class="track-artist">${t.artists}</div></div><span class="track-dur">${t.dur}</span>`;
    
    if (t.url) {
      const numEl = row.querySelector('.track-num');
      row.addEventListener('click', () => playPreview(row, t.url, numEl));
    }
    list.appendChild(row);
  });
}

function renderConnectButton() {
  document.getElementById('trackList').innerHTML = `
    <div class="service-card spotify" role="button" tabindex="0" onclick="connectSpotify()" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();this.click()}">
      <div class="service-logo"><img src="immagini/spotify.png" alt="Spotify"></div>
      <span class="svc-name">Connetti Spotify per ascoltare</span>
    </div>`;
}

async function loadSpotifyPlaylist() {
  const plId   = localStorage.getItem('create_event_playlist_id') || HARDCODED_PLAYLIST;
  const plName = localStorage.getItem('create_event_playlist_name');
  const plAuth = localStorage.getItem('create_event_playlist_author');
  const token  = localStorage.getItem('spotify_token');

  document.getElementById('plName').textContent = plName || 'Late Night Moods';
  document.getElementById('plSub').textContent  = plAuth ? 'di ' + plAuth : 'di Alex Rossi';

  if (!token) {
    renderConnectButton();
    return;
  }

  const [data, pl] = await Promise.all([
    spotifyGet('/playlists/' + plId + '/tracks?limit=50&fields=items(track(name,artists,duration_ms,preview_url))'),
    spotifyGet('/playlists/' + plId + '?fields=name,images,tracks.total,owner.display_name'),
  ]);

  if (!data) {
    // Errore nel caricamento (es. playlist privata o non trovata)
    // Mostriamo i demo track invece di finire in un loop di login!
    renderDemoTracks();
    return;
  }

  // Update header with real playlist metadata
  if (pl) {
    if (pl.name)  document.getElementById('plName').textContent = pl.name;
    const owner = pl.owner?.display_name;
    const total = pl.tracks?.total;
    document.getElementById('plSub').textContent =
      (owner ? 'di ' + owner : '') + (total ? ' · ' + total + ' brani' : '');
    if (pl.images?.[0]?.url) {
      const artEl = document.getElementById('plArt');
      artEl.innerHTML = '';
      const img = document.createElement('img');
      img.src = pl.images[0].url;
      img.style.cssText = 'width:40px;height:40px;border-radius:8px;object-fit:cover';
      artEl.appendChild(img);
    }
  }

  if (!data.items?.length) { renderDemoTracks(); return; }

  const list = document.getElementById('trackList');
  list.innerHTML = '';
  let idx = 0;
  data.items.forEach(item => {
    const t = item?.track;
    if (!t) return;
    idx++;
    const artists = t.artists.map(a => a.name).join(', ');
    const row = document.createElement('div');
    row.className = 'track-row' + (t.preview_url ? '' : ' no-preview');
    row.dataset.num = idx;
    row.innerHTML = `<span class="track-num">${idx}</span><div class="track-meta"><div class="track-title">${t.name}</div><div class="track-artist">${artists}</div></div><span class="track-dur">${fmtMs(t.duration_ms)}</span>`;
    if (t.preview_url) {
      const numEl = row.querySelector('.track-num');
      row.addEventListener('click', () => playPreview(row, t.preview_url, numEl));
    }
    list.appendChild(row);
  });
}

/* ── Slide-in on load ── */
async function generatePKCE() {
  const arr = new Uint8Array(64);
  crypto.getRandomValues(arr);
  const verifier = btoa(String.fromCharCode(...arr)).replace(/\+/g,'-').replace(/\//g,'_').replace(/=/g,'');
  const data = new TextEncoder().encode(verifier);
  const digest = await crypto.subtle.digest('SHA-256', data);
  const challenge = btoa(String.fromCharCode(...new Uint8Array(digest))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=/g,'');
  return { verifier, challenge };
}

async function connectSpotify() {
  const { verifier, challenge } = await generatePKCE();
  const state = crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2);
  sessionStorage.setItem('pkce_verifier', verifier);
  sessionStorage.setItem('oauth_state', state);

  const params = new URLSearchParams({
    client_id: SPOTIFY_CLIENT_ID,
    response_type: 'code',
    redirect_uri: window.location.origin + window.location.pathname,
    code_challenge_method: 'S256',
    code_challenge: challenge,
    state,
    scope: 'playlist-read-private playlist-read-collaborative user-read-private',
  });
  window.location.href = `https://accounts.spotify.com/authorize?${params}`;
}

async function handleSpotifyCallback(code) {
  const verifier = sessionStorage.getItem('pkce_verifier');
  const state = new URLSearchParams(window.location.search).get('state');
  if (state !== sessionStorage.getItem('oauth_state')) return;
  
  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: SPOTIFY_CLIENT_ID,
      grant_type: 'authorization_code',
      code,
      redirect_uri: window.location.origin + window.location.pathname,
      code_verifier: verifier,
    }),
  });
  if (res.ok) {
    const data = await res.json();
    localStorage.setItem('spotify_token', data.access_token);
  }
  // Clean URL
  window.history.replaceState({}, '', window.location.pathname + '?slide=from-right');
}

document.addEventListener('DOMContentLoaded', async () => {
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');
  if (code) {
    await handleSpotifyCallback(code);
  }
  loadSpotifyPlaylist();
  const slide = code ? null : params.get('slide');
  const c = document.getElementById('pageContent');
  document.body.style.overflowX = 'hidden';

  if (slide === 'from-left') {
    c.style.transition = 'none'; c.style.transform = 'translateX(-120%)';
    requestAnimationFrame(() => requestAnimationFrame(() => {
      c.style.transition = 'transform 0.4s cubic-bezier(0.1,0.76,0.55,0.94)';
      c.style.transform = 'translateX(0)';
    }));
  } else if (slide === 'from-right') {
    c.style.transition = 'none'; c.style.transform = 'translateX(120%)';
    requestAnimationFrame(() => requestAnimationFrame(() => {
      c.style.transition = 'transform 0.4s cubic-bezier(0.1,0.76,0.55,0.94)';
      c.style.transform = 'translateX(0)';
    }));
  }
});
