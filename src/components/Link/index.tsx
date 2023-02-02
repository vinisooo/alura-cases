import Link from "next/link"

interface iLinkProps{
    href: string;
    name: string;
}

export default function LinkAnchor({href, name} : iLinkProps) {
    return <Link href={href}>{name}</Link>
}
