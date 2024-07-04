export const formatStarsCount = (count: number) => {
  if (count < 1000) return count

  return Math.ceil(count / 1000) + 'k'
}
