export interface Pet {
  id: number
  name: string
  type: string
}

export interface PetUpdate {
  id: number
  name?: string
  type?: string
}
