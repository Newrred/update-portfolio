export function withBase(path: string) {
  if (!path.startsWith('/')) {
    return path;
  }

  const base = import.meta.env.BASE_URL;
  if (!base || base === '/') {
    return path;
  }

  return `${base.replace(/\/$/, '')}${path}`;
}

export function stripBase(path: string) {
  const base = import.meta.env.BASE_URL;
  if (!base || base === '/') {
    return path;
  }

  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  if (path === normalizedBase) {
    return '/';
  }

  if (path.startsWith(`${normalizedBase}/`)) {
    return path.slice(normalizedBase.length) || '/';
  }

  return path;
}
