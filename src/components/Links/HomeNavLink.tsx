import A from "./abstract/A";

interface Props {
  href: string;
  textContent?: string;
}

export default function HomeNavLink({ href, textContent }: Props) {
  return (
    <A
      href={href}
      textContent={textContent}
      className="text-slate-100 text-2xl p-2"
     />
  );
}

