import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <img src="/images/logo_book.png" alt="My Image" width={250} height={250} />

    </Link>
  )
}
