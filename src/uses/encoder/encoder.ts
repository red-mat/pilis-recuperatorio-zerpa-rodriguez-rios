import { AES, enc, SHA256 } from 'crypto-js'

// Función para cifrar datos
export function encoder(key: string, data: string): string {
  return AES.encrypt(data, key).toString()
}

// Función para descifrar datos
export function decoder(key: string, data: string): string {
  const bytes = AES.decrypt(data, key)
  return bytes.toString(enc.Utf8)
}

export function sha256(data: string): string {
  return SHA256(data).toString()
}
