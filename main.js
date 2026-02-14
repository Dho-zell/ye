document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('searchForm')
  const results = document.getElementById('results')

  if (!form) return

  form.addEventListener('submit', e => {
    e.preventDefault()

    const dari = document.getElementById('from')?.value || 'Bandung'
    const ke = document.getElementById('to')?.value || 'Jakarta'
    const tanggal = document.getElementById('date')?.value
    const pax = document.getElementById('pax')?.value

    let extra = ''
    const kelasEl = document.getElementById('class')
    const tipeEl = document.getElementById('tipe')

    if (kelasEl) extra = `Kelas: ${kelasEl.value}`
    if (tipeEl) extra = `Tipe: ${tipeEl.value}`

    let title = document.querySelector('h1').textContent.toUpperCase()
    let harga = 'Rp 450rb - Rp 2jt'

    if (title.includes('PESAWAT')) harga = 'Rp 650rb - Rp 3jt'
    if (title.includes('BUS')) harga = 'Rp 180rb - Rp 800rb'
    if (title.includes('KERETA')) harga = 'Rp 250rb - Rp 1.2jt'
    if (title.includes('KAPAL')) harga = 'Rp 400rb - Rp 2.5jt'

    results.innerHTML = `
      <div class="result-card">
        <strong>${title} ${dari} → ${ke}</strong><br>
        Tanggal: ${tanggal || 'Hari ini'}<br>
        Penumpang: ${pax} orang<br>
        ${extra ? extra + '<br>' : ''}
        Harga mulai ${harga}
      </div>
    `
  })
})