import { usePathname } from 'next/navigation';

export default function useTheme() {
  const pathname = usePathname();
  return pathname.match(/\/(.*)\/?/)?.[1];
}
