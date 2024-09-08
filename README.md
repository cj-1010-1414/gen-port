# Generator Port

Untuk memberikan port yang bisa digunakan untuk server web Node.js. Secara internal menggunakan `nanoid` untuk menghasilkan empat angka yang akan dijadikan port. Lalu mendeteksinya menggunaan package `detect-port`.

## Memasang

Untuk memasang, lakukan ini di terminal:

```
pnpm add gen-port
```

Atau gunakan _package manager_ yang lain seperti bun atau npm:

```
bun add gen-port

# atau

npm install gen-port
```

## Memulai

Untuk menggunakan di _script_ anda:

```
import gen_port from 'gen-port'

const port = await gen_port()

// ini akan memberikan port yang bisa digunakan
console.log(port)
```

## Menggunakan CLI

Bisa juga menggunakan CLI. Contoh:

```
pnpm exec gen-port
```

atau

```
bunx gen-port
```


## Test

Script tes belum dibuat

## Kesalahan atau _pull request_?

Laporkan jika kode jika terjadi _error_ atau nge-bug.

Juga menerima _pull request_ atau saran penambahan fitur.

## Lisensi

MIT