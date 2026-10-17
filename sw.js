// phyX Service Worker – automatisch erzeugt von scripts/make-sw.mjs, nicht von Hand ändern.
const VERSION = '167fd523d5c6'
const CACHE = 'phyx-' + VERSION
const VOICE = 'phyxvoice-v1' // Vorlese-MP3s: bei Bedarf geladen, bleiben über App-Versionen hinweg erhalten
const FILES = ["assets/AccessView-BKnEACnx.js","assets/AccessView-WjHOjPvG.css","assets/BlitzView-B6HWeYhi.js","assets/BlitzView-C-KNrjiE.css","assets/ChapterView-Clv-PZ1L.js","assets/ChapterView-D7hvWYyH.css","assets/ChessDailyView-CpC1kbSF.js","assets/ChessDailyView-D5Vwmgp0.css","assets/ChessPlayView-BHfVeuht.css","assets/ChessPlayView-CiP0Ixuy.js","assets/ChessStatsView-DvRfr0tD.js","assets/ChessStatsView-avTvDWk7.css","assets/ChessTrainingView-BtGco0uz.css","assets/ChessTrainingView-CZOyd3fx.js","assets/FlashcardsView-BfIZyhrF.css","assets/FlashcardsView-z_qBMGmN.js","assets/HomeView-DUh3fc4x.js","assets/HomeView-fgkmJ9wX.css","assets/IntroView-DItwo7re.js","assets/IntroView-DinKluFM.css","assets/KaTeX_AMS-Regular-BQhdFMY1.woff2","assets/KaTeX_AMS-Regular-DRggAlZN.ttf","assets/KaTeX_Caligraphic-Bold-ATXxdsX0.ttf","assets/KaTeX_Caligraphic-Bold-Dq_IR9rO.woff2","assets/KaTeX_Caligraphic-Regular-Di6jR-x-.woff2","assets/KaTeX_Caligraphic-Regular-wX97UBjC.ttf","assets/KaTeX_Fraktur-Bold-BdnERNNW.ttf","assets/KaTeX_Fraktur-Bold-CL6g_b3V.woff2","assets/KaTeX_Fraktur-Regular-CB_wures.ttf","assets/KaTeX_Fraktur-Regular-CTYiF6lA.woff2","assets/KaTeX_Main-Bold-Cx986IdX.woff2","assets/KaTeX_Main-Bold-waoOVXN0.ttf","assets/KaTeX_Main-BoldItalic-DxDJ3AOS.woff2","assets/KaTeX_Main-BoldItalic-DzxPMmG6.ttf","assets/KaTeX_Main-Italic-3WenGoN9.ttf","assets/KaTeX_Main-Italic-NWA7e6Wa.woff2","assets/KaTeX_Main-Regular-B22Nviop.woff2","assets/KaTeX_Main-Regular-ypZvNtVU.ttf","assets/KaTeX_Math-BoldItalic-B3XSjfu4.ttf","assets/KaTeX_Math-BoldItalic-CZnvNsCZ.woff2","assets/KaTeX_Math-Italic-flOr_0UB.ttf","assets/KaTeX_Math-Italic-t53AETM-.woff2","assets/KaTeX_SansSerif-Bold-CFMepnvq.ttf","assets/KaTeX_SansSerif-Bold-D1sUS0GD.woff2","assets/KaTeX_SansSerif-Italic-C3H0VqGB.woff2","assets/KaTeX_SansSerif-Italic-YYjJ1zSn.ttf","assets/KaTeX_SansSerif-Regular-BNo7hRIc.ttf","assets/KaTeX_SansSerif-Regular-DDBCnlJ7.woff2","assets/KaTeX_Script-Regular-C5JkGWo-.ttf","assets/KaTeX_Script-Regular-D3wIWfF6.woff2","assets/KaTeX_Size1-Regular-Dbsnue_I.ttf","assets/KaTeX_Size1-Regular-mCD8mA8B.woff2","assets/KaTeX_Size2-Regular-B7gKUWhC.ttf","assets/KaTeX_Size2-Regular-Dy4dx90m.woff2","assets/KaTeX_Size3-Regular-DgpXs0kz.ttf","assets/KaTeX_Size4-Regular-DWFBv043.ttf","assets/KaTeX_Size4-Regular-Dl5lxZxV.woff2","assets/KaTeX_Typewriter-Regular-CO6r4hn1.woff2","assets/KaTeX_Typewriter-Regular-D3Ib7_Hf.ttf","assets/KingView-CVuF4tCG.js","assets/KingView-kHcNGFiO.css","assets/LabView-DxroPfQQ.js","assets/LabView-MLGhV6EF.css","assets/LabsView-B9PNOXNK.css","assets/LabsView-D7n-covx.js","assets/LessonBlocks-DI9HH29L.css","assets/LessonBlocks-DXkjo0ZW.js","assets/LessonView-Be5yHzXI.css","assets/LessonView-NIi-e52a.js","assets/PracticeView-D7Di-j_4.js","assets/PracticeView-DIEaWzpp.css","assets/QuestionCard-BPUQuILd.css","assets/QuestionCard-BaWsvuK3.js","assets/ReaderBar-C-lPsWXD.css","assets/ReaderBar-DdqRPQtG.js","assets/RunnerView-CNrxsU4k.css","assets/RunnerView-DfG8mJES.js","assets/SheetView-60atBJxz.css","assets/SheetView-BAk5n45R.js","assets/ShopView-B7G0_6QC.css","assets/ShopView-DyWwJ1CJ.js","assets/Stage-3Wg1ed9n.js","assets/StoreView-Dyv4bXSZ.css","assets/StoreView-m1hFbuNb.js","assets/TestView-C9AQSnEJ.js","assets/TestView-pvzkLCAc.css","assets/TokenLock-B3hFlZXU.css","assets/TokenLock-DRDps69-.js","assets/TransferView-5qQjgbgL.css","assets/TransferView-DOzagGSG.js","assets/WerkstattView-DCi_V7qb.js","assets/WerkstattView-Q2yt73GJ.css","assets/ai.worker-C1J-S4uh.js","assets/env-8iSOIcX-.js","assets/index-Cnmpqjt5.css","assets/index-DUoXyY_U.js","assets/index-DvprF84E.js","assets/index-fcJlHOGm.css","assets/inter-cyrillic-ext-wght-normal-BOeWTOD4.woff2","assets/inter-cyrillic-wght-normal-DqGufNeO.woff2","assets/inter-greek-ext-wght-normal-DlzME5K_.woff2","assets/inter-greek-wght-normal-CkhJZR-_.woff2","assets/inter-latin-ext-wght-normal-DO1Apj_S.woff2","assets/inter-latin-wght-normal-Dx4kXJAl.woff2","assets/inter-vietnamese-wght-normal-CBcvBZtf.woff2","assets/jetbrains-mono-cyrillic-400-normal-BEIGL1Tu.woff2","assets/jetbrains-mono-cyrillic-600-normal-EVf6-Yzo.woff2","assets/jetbrains-mono-greek-400-normal-C190GLew.woff2","assets/jetbrains-mono-greek-600-normal-H7WoG9Et.woff2","assets/jetbrains-mono-latin-400-normal-V6pRDFza.woff2","assets/jetbrains-mono-latin-600-normal-C8RAYTDA.woff2","assets/jetbrains-mono-latin-ext-400-normal-Bc8Ftmh3.woff2","assets/jetbrains-mono-latin-ext-600-normal-BfB_LPfz.woff2","assets/jsQR-UMIdgYmG.js","assets/mathe-DQkL6w7f.js","assets/notation-CpWo_x-q.js","assets/notation-hWpaipot.css","assets/noto-sans-symbols-2-symbols-400-normal-Crk7i-NV.woff2","assets/quests-Deh5B7Uw.js","assets/space-grotesk-latin-ext-wght-normal-D9tNdqV9.woff2","assets/space-grotesk-latin-wght-normal-BhU9QXUp.woff2","assets/space-grotesk-vietnamese-wght-normal-D0rl6rjA.woff2","assets/srs-aAcaGpGW.js","engines/STOCKFISH-LICENSE.txt","engines/stockfish.js","engines/stockfish.wasm","favicon.svg","icons/icon-180.png","icons/icon-192.png","icons/icon-512.png","index.html","manifest.webmanifest","tts/index.json"]
// Dateien mit Inhalts-Hash im Namen ändern sich nie → aus einer älteren Version übernehmen statt neu laden
const IMMUTABLE = (f) => f.startsWith('assets/') || (f.startsWith('tts/') && f !== 'tts/index.json')

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE)
    const old = (await caches.keys()).filter((k) => k !== CACHE && k.startsWith('phyx-'))
    const pending = []
    for (const f of FILES) {
      if (await cache.match(f)) continue
      if (IMMUTABLE(f)) {
        let hit = null
        for (const k of old) if ((hit = await (await caches.open(k)).match(f))) break
        if (hit) { await cache.put(f, hit); continue }
      }
      pending.push(f)
    }
    // mit wenigen parallelen Downloads laden; ein Fehler bricht die Installation ab (nächster Versuch beim nächsten Öffnen)
    let i = 0
    const worker = async () => {
      while (i < pending.length) {
        const f = pending[i++]
        const res = await fetch(f, { cache: 'reload' })
        if (!res.ok) throw new Error(f + ': ' + res.status)
        await cache.put(f, res)
      }
    }
    await Promise.all([worker(), worker(), worker(), worker()])
    await self.skipWaiting()
  })())
})

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== CACHE && k.startsWith('phyx-')) await caches.delete(k)
    await self.clients.claim()
  })())
})

// Audio fragt oft nur Teilbereiche an (Range) – Safari spielt sonst aus dem Speicher nichts ab
async function ranged(request, response) {
  const m = /bytes=(\d*)-(\d*)/.exec(request.headers.get('range') || '')
  if (!m) return response
  const buf = await response.arrayBuffer()
  const start = m[1] ? +m[1] : Math.max(0, buf.byteLength - +m[2])
  const end = m[1] && m[2] ? Math.min(+m[2], buf.byteLength - 1) : buf.byteLength - 1
  return new Response(buf.slice(start, end + 1), {
    status: 206,
    headers: {
      'Content-Type': response.headers.get('Content-Type') || 'audio/mpeg',
      'Content-Range': 'bytes ' + start + '-' + end + '/' + buf.byteLength,
      'Content-Length': String(end - start + 1),
      'Accept-Ranges': 'bytes',
    },
  })
}

self.addEventListener('fetch', (event) => {
  const req = event.request
  if (req.method !== 'GET') return
  const url = new URL(req.url)
  if (url.origin !== location.origin) return
  event.respondWith((async () => {
    const cache = await caches.open(CACHE)
    if (req.mode === 'navigate') return (await cache.match('index.html')) || fetch(req)
    if (//tts/[^/]+.mp3$/.test(url.pathname)) {
      const voice = await caches.open(VOICE)
      let hit = await voice.match(url.pathname)
      if (!hit) {
        const res = await fetch(url.pathname)
        if (!res.ok) return res
        await voice.put(url.pathname, res.clone())
        hit = res
      }
      return req.headers.has('range') ? ranged(req, hit) : hit
    }
    const hit = await cache.match(req, { ignoreSearch: true })
    if (hit) return req.headers.has('range') ? ranged(req, hit) : hit
    return fetch(req)
  })())
})
