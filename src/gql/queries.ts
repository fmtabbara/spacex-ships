import { gql } from "@apollo/client"

export const GetShips = gql`
  query GetShips($limit: Int, $offset: Int) {
    ships(limit: $limit, offset: $offset) {
      id
      image
      name
      year_built
    }
  }
`

export const GetShipDetail = gql`
  query GetShipDetail($shipId: ID!) {
    ship(id: $shipId) {
      name
      roles
      type
      active
      year_built
      home_port
    }
  }
`
