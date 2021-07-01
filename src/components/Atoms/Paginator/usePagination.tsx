interface usePaginationProps {
  currentPage: number
  pageSize: number
  totalItems: number
}

interface PaginationObject {
  hasPrev: boolean
  hasNext: boolean
  startOffset: number
  endOffset: number
  pageCount: number
}

const usePagination = ({
  currentPage,
  pageSize,
  totalItems,
}: usePaginationProps): PaginationObject => {
  const pageCount = Math.ceil(totalItems / pageSize)

  const hasPrev = currentPage > 1
  const hasNext = currentPage < pageCount

  const startOffset = (currentPage - 1) * pageSize + 1
  const endOffset = hasNext ? currentPage * pageSize : totalItems

  return {
    hasPrev,
    hasNext,
    startOffset,
    endOffset,
    pageCount,
  }
}

export default usePagination
