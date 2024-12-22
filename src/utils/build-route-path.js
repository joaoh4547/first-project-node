export function buildRoutePath(path) {
  const regex = /:([a-zA-Z]+)/g
  const pathWithParameters = path.replaceAll(regex, '(?<$1>[a-z0-9\-_]+)')
  return new RegExp(`^${pathWithParameters}`)
}