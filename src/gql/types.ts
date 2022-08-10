export type TShipMission = {
  flight: string
  name: string
}
type TShipLocation = {
  latitude: number
  longitude: number
}
export interface Ship {
  abs: number
  active: boolean
  attempted_landings: number
  class: number
  course_deg: number
  home_port: string
  id: string
  image: string | null
  imo: number
  missions: [TShipMission]
  mmsi: number
  model: string
  name: string
  position: TShipLocation
  roles: [string]
  speed_kn: number
  status: string
  successful_landings: number
  type: string
  url: string
  weight_kg: number
  weight_lbs: number
  year_built: number
}
