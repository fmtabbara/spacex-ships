import { useLazyQuery, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { GetShipDetail, GetShips } from "../gql/queries"
import { Ship } from "../gql/types"

const useGetShips = (dataLimit: number) => {
  const { loading, error, data, fetchMore } = useQuery<{
    ships: Ship[]
  }>(GetShips, {
    variables: {
      offset: 0,
      limit: dataLimit,
    },
  })

  const fetchMoreShips = async () => {
    fetchMore({
      variables: { offset: data?.ships.length },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prev
        }
        return {
          ships: [...prev.ships, ...fetchMoreResult.ships],
        }
      },
    })
  }

  return { data, loading, error, fetchMoreShips }
}

export const useGetShipDetail = (shipId?: Ship["id"]) => {
  const [getShipDetail, { loading, error, data }] = useLazyQuery<{
    ship: Ship
  }>(GetShipDetail)

  useEffect(() => {
    if (shipId) {
      getShipDetail({ variables: { shipId, fetchPolicy: "no-cache" } })
    }
  }, [shipId])

  return { data, loading, error }
}

export default useGetShips
