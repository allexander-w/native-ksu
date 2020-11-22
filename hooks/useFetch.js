import { useEffect, useState, useCallback } from 'react'

export default url => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [response, setResponse] = useState(null)
  const [options, setOptions] = useState(null)

  const doFetch = opt => {
    setOptions(opt);
    setIsLoading(true);
  }

  const asyncFetch = useCallback(async () => {
    const data = await (await fetch(url, options)).json();
    setResponse(data);
    setIsLoading(false);
  }, [setResponse, setIsLoading, options])

  useEffect(() => {
    if (!isLoading) {
      return;
    }

    asyncFetch()
  }, [asyncFetch, isLoading])

  return [{ isLoading, response, error, setResponse }, doFetch]
}