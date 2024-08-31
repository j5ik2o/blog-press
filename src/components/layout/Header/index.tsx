import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-white shadow-md">
        <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
        BlogPress
        </Link>
        <ul className="flex space-x-4">
    <li>
        <Link href="/" className="hover:text-gray-600">
    ホーム
    </Link>
    </li>
    <li>
    <Link href="/blog" className="hover:text-gray-600">
        ブログ
        </Link>
        </li>
    {/* 他のナビゲーション項目を追加 */}
    </ul>
    </nav>
    </header>
    );
}