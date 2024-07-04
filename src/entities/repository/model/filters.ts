import { useCallback, useMemo, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import debounce from 'lodash.debounce'

export const useRepositoryFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const search = searchParams.get('search') || ''
  const page = Number(searchParams.get('page')) || 1

  const debouncedSearchUpdate = useRef(
    debounce(
      (value: string) =>
        setSearchParams((prev) => {
          if (!value) {
            prev.delete('search')

            return prev
          }
          prev.delete('page')
          prev.set('search', value)

          return prev
        }),
      500,
    ),
  ).current

  const handleChangePage = useCallback(
    (value: number) => {
      setSearchParams((prev) => {
        prev.set('page', value.toString())

        return prev
      })
    },
    [setSearchParams],
  )

  const handleChangeSearch = useCallback(
    (value: string) => {
      debouncedSearchUpdate(value)
    },
    [debouncedSearchUpdate],
  )

  const value = useMemo(
    () => ({
      search,
      page,
      handleChangePage,
      handleChangeSearch,
    }),
    [handleChangePage, handleChangeSearch, page, search],
  )

  return value
}
