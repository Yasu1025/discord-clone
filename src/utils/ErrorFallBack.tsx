import { FallbackProps } from 'react-error-boundary'

export const ErrorFallBack = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div className='alert'>
      <p>Something went wrong</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}
