
interface Props {
  href: string;
  textContent?: string;
  className?: string;
}

export default function A({ href, textContent, className}: Props) {
  return (
    <a
      href={href}
      className={className}
    >
      {textContent}
    </a>
  );
}

