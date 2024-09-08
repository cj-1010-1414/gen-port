import { customAlphabet } from 'nanoid'
import deteksi_port from 'detect-port'

// `cari_port` adalah sebuah fungsi
const cari_port = customAlphabet('123456789', 4)

/**  Class untuk mendeteksi port terpakai lalu membuat yang baru */
class Port {
  /**
   * Konstruksi port baru. Tidak memerlukan parameter apapun.
   */
  constructor() {
    this.percobaan = Number(cari_port())
    this.tersedia = null
    this.terpakai = null
  }

  /**
   * Mengecek jika port sudah terpakai.
   * Cari sampai ketemu port yang tidak terpakai.
   */
  async cek() {
    this.tersedia = await deteksi_port(this.percobaan)
    this.terpakai = this.percobaan != this.tersedia
  }
}

/**
 * Generator port, memberikan port yang bisa digunakan.
 * @returns {number} port yang tersedia
 */
export default async function gen_port() {
  const port = new Port()

  await port.cek()

  if (port.terpakai) {
    await gen_port()
  } else {
    return port.tersedia
  }
}